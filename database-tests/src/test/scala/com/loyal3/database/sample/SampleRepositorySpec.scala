package com.loyal3.database.sample

import com.loyal3.test.support.scopes.SelfAwareSpecification
import com.loyal3.database.manage.{Database, DatabaseManager}
import java.util.UUID

/**
 * This is a sample test that shows how to create the jdbi repository and access the database through that.
 */
class SampleRepositorySpec extends SelfAwareSpecification {
  sequential

  val sampleRepository = SampleRepository.create()

  trait CleanUp extends org.specs2.mutable.After {
    def after: Unit = {
      val handle = SampleRepository.jdbi.open()
      handle.execute("drop table sample")
      handle.close()
    }
  }

  "sample repository" should {
    "creates sample table and data" in new CleanUp {
      // 1. create the database
      val dbProperties = DatabaseManager.dbProperties
      val database = Database(
        DatabaseManager.systemUrl(dbProperties.url),
        dbProperties.url,
        dbProperties.username,
        dbProperties.password,
        dbProperties.database
      )

      database.create()

      // 2. create the table
      val handle = SampleRepository.jdbi.open()
      handle.execute("create table if not exists sample(id varchar(255) primary key)")

      // 3. insert the record
      val id = UUID.randomUUID().toString
      sampleRepository.create(id)

      // 4. check the record exists in the database
      sampleRepository.find(id).toString mustEqual (Sample(id).toString)
    }
  }


}
