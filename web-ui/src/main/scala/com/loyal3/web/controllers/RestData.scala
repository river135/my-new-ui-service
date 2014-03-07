package com.loyal3.web.controllers

import com.loyal3.web.response.SampleResponse

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 3/5/14
 * Time: 5:23 PM
 */
trait RestData {
  def getSampleData(param: String):Option[SampleResponse] = {
    val param2 = "param2"
    val param3 = "param3"

    Some(SampleResponse(param, param2, param3))
  }
}
