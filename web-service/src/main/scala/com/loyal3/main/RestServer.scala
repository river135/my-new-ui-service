package com.loyal3.main

import com.twitter.finatra._
import com.loyal3.service.HealthCheckServiceImpl
import com.loyal3.controller.{HealthCheckController, SampleController}

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
  System.setProperty("com.twitter.finatra.config.port", ":7071")
  System.setProperty("com.twitter.finatra.config.adminPort", ":9991")

  register(new SampleController())

  val healthService = new HealthCheckServiceImpl
  register(new HealthCheckController(healthService))
}
