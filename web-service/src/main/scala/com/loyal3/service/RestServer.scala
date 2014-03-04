package com.loyal3.service

import com.twitter.finatra._
import controller.{HealthController, SampleController}

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/28/14
 * Time: 2:27 PM
 */
/**
 * NOTE: Configurations will be pulled out and into a common config file on a per environment level
 */
object RestServer extends FinatraServer with Logging {
  val PORT = "com.twitter.finatra.config.port"
  val ADMINPORT = "com.twitter.finatra.config.adminPort"
  System.setProperty(PORT, ":7071")
  System.setProperty(ADMINPORT, ":9991")

  register(new SampleController())
  register(new HealthController())
}
