package com.loyal3.service.controller

import com.twitter.finatra.FinatraServer
import com.twitter.finatra.test.FlatSpecHelper
import com.loyal3.controller.HealthCheckController
import com.loyal3.service.{HealthCheckServiceImpl, HealthCheckService}

class HealthCheckControllerSpec extends FlatSpecHelper {

  val service = new HealthCheckServiceImpl

  val server = new FinatraServer
  server.register(new HealthApp(service))


  class HealthApp(service: HealthCheckService) extends HealthCheckController(service) {

  }

  "GET healthcheck" should "respond pong" in {
    get("/ping")
    response.code should equal (200)
    response.body should equal ("pong")
  }

}
