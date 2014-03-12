package com.loyal3.web.controllers

import com.twitter.finatra.FinatraServer
import com.twitter.finatra.test.FlatSpecHelper

class HTMLControllerSpec extends FlatSpecHelper {

  val server = new FinatraServer
  server.register(new HTMLApp)

  //Configuring assets location
  System.setProperty("com.twitter.finatra.config.docRoot", "web-ui/src/main/resources")
  System.setProperty("com.twitter.finatra.config.assetPath", "app/")

  class HTMLApp extends HTMLController {

  }

  "GET root document directory" should "respond OK" in {
    get("/")
    response.code should equal (200)
  }


  "GET view" should "respond OK" in {
    get("/view/shell.html")
    response.code should equal (200)
  }


}
