package com.loyal3.database.access

import com.loyal3.test.support.scopes.SelfAwareSpecification
import com.loyal3.config.DBProperties

/**
 * Repository manager tests
 */
class RepositoryManagerSpec extends SelfAwareSpecification {

  "connection factory" should {
    "be created successfully with the given database parameters" in {
      // Given
      val dbConfig = DBProperties("localhost", "test", "root", "password", 2, 11)
      val connectionFactory = new BoneCpConnectionFactory {
        override lazy val dbProperties = dbConfig
      }

      // When
      val result = connectionFactory.boneCp.getConfig

      // Then
      result.getJdbcUrl mustEqual dbConfig.url
      result.getUsername mustEqual dbConfig.username
      result.getPassword mustEqual dbConfig.password
      result.getPartitionCount mustEqual 4
      result.getMaxConnectionsPerPartition mustEqual dbConfig.maxConnections
      result.getMinConnectionsPerPartition mustEqual dbConfig.minConnections
    }
  }

  "jdbi instance" should {
    "be created successfully" in {
      // Given
      val repoManager = new RepositoryManager(new BoneCpConnectionFactory )

      // When
      val result = repoManager.dbi

      // Then
      result mustNotEqual null
    }
  }

}
