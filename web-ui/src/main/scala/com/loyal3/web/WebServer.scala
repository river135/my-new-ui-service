package com.loyal3.web

import com.twitter.finatra._
import controllers.{RestController, HealthController, HTMLController}
import com.loyal3.config.Config

object WebServer extends FinatraServer with Logging {
  //Configuring Port
  System.setProperty("com.twitter.finatra.config.port", Config.WebServerPort)
  System.setProperty("com.twitter.finatra.config.adminPort", Config.AdminServerPort)

  //Configuring assets location
  System.setProperty("com.twitter.finatra.config.docRoot", Config.WebDocumentRoot)
  System.setProperty("com.twitter.finatra.config.assetPath", Config.WebAssetPath)

  register(new HTMLController())
  register(new RestController())
  register(new HealthController())
}