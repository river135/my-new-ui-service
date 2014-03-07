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
    val param2 = "%s: param2".format(param)
    val param3 = "%s: param3".format(param)

    Some(SampleResponse(param, param2, param3))
  }
}
