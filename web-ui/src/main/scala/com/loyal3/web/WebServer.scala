package com.loyal3.web

import com.twitter.finatra._
import org.jboss.netty.handler.codec.http.HttpMethod

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/14/14
 * Time: 3:16 PM
 */

class HTMLController extends Controller {
  get("/") { request =>
    render.static("shell.html").toFuture
  }

  get("/view/*") { request =>
    render.static("shell.html").toFuture
  }
}

class HealthController extends Controller {
  get("/ping") { request =>
    render.plain("pong").toFuture
  }
}

/**
 * NOTE: COnfiguraitons will be pulled out and into a common config file on a per environment level
 */
object WebServer extends FinatraServer with Logging {
  //Configuring Port
  val PORT = "com.twitter.finatra.config.port"
  val ADMINPORT = "com.twitter.finatra.config.adminPort"
  System.setProperty(PORT, ":7072")
  System.setProperty(ADMINPORT, ":9992")

  //Configuring assets location
  val DOCROOT = "com.twitter.finatra.config.docRoot"
  val ASSETS  = "com.twitter.finatra.config.assetPath"
  System.setProperty(DOCROOT, "web-ui/src/main/resources")
  System.setProperty(ASSETS, "app/")

  register(new HTMLController())
  register(new HealthController())
}