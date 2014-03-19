package com.loyal3.database.sample

import org.skife.jdbi.v2.sqlobject.{SqlUpdate, SqlQuery, Bind}
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper
import org.skife.jdbi.v2.tweak.ResultSetMapper
import java.sql.ResultSet
import org.skife.jdbi.v2.StatementContext

/**
 * SQL queries for Sample table
 */
@RegisterMapper(Array(classOf[SampleRecord]))
trait SampleSQLObject {

  @SqlUpdate("INSERT INTO sample(id) values (:id) ")
  def create(@Bind("id") id: String)

  @SqlQuery("SELECT * FROM sample WHERE id = :id")
  def find(@Bind("id") id: String): Sample
}

/**
 * Sample database record maps to the case class
 */
final class SampleRecord extends ResultSetMapper[Sample] {

  def map(index: Int, resultSet: ResultSet, context: StatementContext): Sample = Sample(resultSet.getString("id"))

}
