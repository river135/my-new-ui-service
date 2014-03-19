package com.loyal3.service.controller

import com.loyal3.test.support.scopes.SelfAwareSpecification
import com.loyal3.main.RestServer
import com.loyal3.config.Config

/**
 * Finatra server tests
 */
class RestServerSpec extends SelfAwareSpecification {

  "finatra server" should {
    "be started with the registered controllers" in {

      val controllers = RestServer.controllers.controllers
      val isControllersOk = controllers.map(_.getClass.getSimpleName match {
        case "HealthCheckController" | "SampleController" => true
        case _ => false
      }).foldLeft(true)(_ && _)


      isControllersOk mustEqual (true)

      val isSystemPropertyOk = System.getProperty("com.twitter.finatra.config.port") == Config.WebServerPort &&
        System.getProperty("com.twitter.finatra.config.adminPort") == Config.AdminServerPort

      isSystemPropertyOk mustEqual (true)
    }
  }
}
