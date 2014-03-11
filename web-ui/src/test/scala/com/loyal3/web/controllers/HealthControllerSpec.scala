package com.loyal3.web.controllers

import com.twitter.finatra.FinatraServer
import com.twitter.finatra.test.FlatSpecHelper

class HealthControllerSpec extends FlatSpecHelper {

  val server = new FinatraServer
  server.register(new HealthApp)

  class HealthApp extends HealthController {

  }

  "GET healthcheck" should "respond pong" in {
    get("/ping")
    response.code should equal (200)
    response.body should equal ("pong")
  }

}
