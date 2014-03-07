package com.loyal3.web.response

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 3/5/14
 * Time: 5:13 PM
 */
case class SampleResponse(paramDynamic: String, param2:String, param3:String) {
  override def toString: String = "Dynamic Param: %s, param2: %s, param3: %s".format(paramDynamic, param2, param3)
}
