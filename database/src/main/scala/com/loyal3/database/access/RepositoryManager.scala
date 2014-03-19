package com.loyal3.database.access

import org.skife.jdbi.v2.tweak.ConnectionFactory
import org.skife.jdbi.v2.DBI
import com.loyal3.database.manage.DatabaseManager
import com.jolbox.bonecp.{BoneCP, BoneCPConfig}

/**
 * Repository manager - create the instances of your service repositories here.
 * For example,
 * val userRepository = new UserRepository(dbi.onDemand[UserSQLObject])
 * val offerRepository = new OfferRepository(dbi.onDemand[OfferSqlObject])
 *
 */


class RepositoryManager(connectionFactory: ConnectionFactory = new BoneCpConnectionFactory) {

  val dbi: DBI = new DBI(connectionFactory)
}

/**
 * BoneCP used to create the database connection. Alternatively, one can have different connection pool to create
 * RepoManager instance with different connection pool.
 *
 */
class BoneCpConnectionFactory extends ConnectionFactory {

  lazy val dbProperties = DatabaseManager.dbProperties

  lazy val boneCp = {
    val boneCpConfig = new BoneCPConfig()
    boneCpConfig.setJdbcUrl(dbProperties.url)
    boneCpConfig.setUsername(dbProperties.username)
    boneCpConfig.setPassword(dbProperties.password)

    boneCpConfig.setPartitionCount(4)  // TODO: why this should be 4?
    boneCpConfig.setMaxConnectionsPerPartition(dbProperties.maxConnections)
    boneCpConfig.setMinConnectionsPerPartition(dbProperties.minConnections)
    new BoneCP(boneCpConfig)
  }

  override def openConnection() = boneCp.getConnection

}


