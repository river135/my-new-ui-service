package com.loyal3.service.controller

import com.loyal3.service.response.SampleResponse

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/28/14
 * Time: 2:55 PM
 */
trait SampleData {
  def getSampleData(param: String): Option[SampleResponse] = {
    val sr = SampleResponse(param, "some data 1", "some data 2")
    Some(sr)
  }

}
