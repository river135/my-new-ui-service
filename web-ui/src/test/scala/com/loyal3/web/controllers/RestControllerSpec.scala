package com.loyal3.web.controllers

import com.twitter.finatra.FinatraServer
import com.twitter.finatra.test.FlatSpecHelper

class RestControllerSpec extends FlatSpecHelper {

  val server = new FinatraServer
  server.register(new RestApp)

  class RestApp extends RestController {

  }

  "GET sample api without test param" should "respond 404" in {
    get("/api/sample/")
    response.code should equal (404)
  }

  "GET sample api with test param" should "respond OK" in {
    get("/api/sample/test_param")
    response.code should equal (200)
    response.body should equal ("""{"paramDynamic":"test_param","param2":"param2","param3":"param3"}""")
  }


}
