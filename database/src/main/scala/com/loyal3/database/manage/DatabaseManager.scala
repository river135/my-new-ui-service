package com.loyal3.database.manage

import java.sql.{Statement, Connection, DriverManager}
import com.mysql.jdbc.Driver
import liquibase.integration.commandline.Main
import com.loyal3.config.{Config, DBProperties}

/**
 * Database refactorings like creation, migration etc.,
 */

final case class Database(systemUrl:String,     // => example: jdbc:mysql://localhost:3306/mysql
                     dbUrl: String,             // => example: jdbc:mysql://localhost:3306/loyal3_service
                     username: String,
                     password: String,
                     database: String) {
  DriverManager.registerDriver(new Driver)

  def migrate() {
    val args = Array(
      "--driver", classOf[Driver].getName,
      "--changeLogFile", "db/db.changelog.xml",
      "--url", dbUrl + "?characterEncoding=utf8",
      "--username", username,
      "--password", password,
      "update"
    )
    Main.main(args)
  }

  /**
   * creates the database with the given name
   */
  def create() {
    withDbConnection { statement =>
      statement.execute("create database if not exists %s DEFAULT CHARACTER SET utf8" format database)
    }
  }

  /**
   * Deletes the given database and all it's tables
   */
  def remove() {
    withDbConnection { statement =>
      statement.execute("drop database if exists %s DEFAULT CHARACTER SET utf8" format database)
    }
  }

  private def withDbConnection(f: (Statement) => Unit) {
    val connection: Connection = DriverManager.getConnection(systemUrl, username, password)
    val statement = connection.createStatement()
    try {
      f(statement)
    } catch {
      case e:Exception => e.printStackTrace() // TODO: add logging
    } finally {
      statement.close()
      connection.close()
    }
  }
}


object DatabaseManager {

  lazy val dbProperties: DBProperties = Config.DbProperties

  val systemUrl = (url: String) => (url.split("/").reverse.tail.reverse :+ "mysql").mkString("/")

  private[manage] def createDb(args: Array[String]) = if (args.isEmpty) {
    Database(systemUrl(dbProperties.url),
      dbProperties.url,
      dbProperties.username,
      dbProperties.password,
      dbProperties.database)
  } else {
    require(args.length == 4, "Some parameters are missing!")
    Database(systemUrl(args(0)), args(0), args(1), args(2), args(3))
  }

  def main(args: Array[String]) {
    val database = createDb(args)
    database.create()
    database.migrate()
  }

}
