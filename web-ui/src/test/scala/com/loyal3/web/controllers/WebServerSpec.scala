package com.loyal3.web.controllers

import com.loyal3.test.support.scopes.SelfAwareSpecification
import com.loyal3.web.WebServer
import com.loyal3.config.Config

/**
 * Web UI finatra server tests
 */
class WebServerSpec extends SelfAwareSpecification {

  "finatra server" should {
    "be started with the registered controllers" in {

      val controllers = WebServer.controllers.controllers
      val result = controllers.map(_.getClass.getSimpleName match {
        case "HTMLController" | "RestController" | "HealthController" => true
        case _ => false
      }).foldLeft(true)(_ && _)

      result mustEqual (true)

      val isSystemPropertyOk = System.getProperty("com.twitter.finatra.config.port") == Config.WebServerPort &&
        System.getProperty("com.twitter.finatra.config.adminPort") == Config.AdminServerPort &&
        System.getProperty("com.twitter.finatra.config.docRoot") == Config.WebDocumentRoot &&
        System.getProperty("com.twitter.finatra.config.assetPath") == Config.WebAssetPath

      isSystemPropertyOk mustEqual (true)
    }
  }

}
