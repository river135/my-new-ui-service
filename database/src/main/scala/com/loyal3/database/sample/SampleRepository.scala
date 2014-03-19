package com.loyal3.database.sample

import com.loyal3.database.access.RepositoryManager


/**
 * DAO class for Sample table. Well, the repository is not exactly DAO. The DAO provides access only to particular database
 * table but the repository can combine more than one database table. In this sample, the SampleSQLObject represents access
 * to Sample database table. And you can provide one more SQL object let's say UserSQLObject.
 */

class SampleRepository(sqlObject: SampleSQLObject) {

  def create(id: String) {
    sqlObject.create(id)
  }

  def find(id: String): Sample = sqlObject.find(id)
}

/**
 * Factory object to create instances of SampleRepository
 */
object SampleRepository  {

  lazy val jdbi = new RepositoryManager().dbi

  def create() : SampleRepository = new SampleRepository(jdbi.onDemand(classOf[SampleSQLObject]))
}


