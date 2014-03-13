package com.loyal3.service.controller

import com.twitter.finatra.test.FlatSpecHelper
import com.twitter.finatra._
import com.loyal3.controller.SampleController

class SampleControllerSpec extends FlatSpecHelper {
  val server = new FinatraServer
  server.register(new SampleApp)

  class SampleApp extends SampleController {

  }

  "GET sample data with no parameter" should "respond 404" in {
    get("/api/v1/sampledata/")
    response.code should equal (404)
  }

  "GET sample data" should "response OK" in {
    get("/api/v1/sampledata/test_data")
    response.code should equal (200)
    response.body should equal ("""{"param":"test_data","data1":"This is the first line of the Sample Data","data2":"Some more stuff down here"}""")
  }

}
