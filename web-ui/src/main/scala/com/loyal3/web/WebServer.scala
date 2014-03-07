package com.loyal3.web

import com.twitter.finatra._
import controllers.{RestController, HealthController, HTMLController}

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/14/14
 * Time: 3:16 PM
 */

/**
 * NOTE: Configuraitons will be pulled out and into a common config file on a per environment level
 */
object WebServer extends FinatraServer with Logging {
  //Configuring Port
  System.setProperty("com.twitter.finatra.config.port", ":7072")
  System.setProperty("com.twitter.finatra.config.adminPort", ":9992")

  //Configuring assets location
  System.setProperty("com.twitter.finatra.config.docRoot", "web-ui/src/main/resources")
  System.setProperty("com.twitter.finatra.config.assetPath", "app/")

  register(new HTMLController())
  register(new HealthController())
}