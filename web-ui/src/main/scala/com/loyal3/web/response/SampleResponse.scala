package com.loyal3.web.response

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 3/5/14
 * Time: 5:13 PM
 */
case class SampleResponse(param: String, data1:String, data2:String) {
  override def toString: String = "param: %s, data1: %s, data2: %s".format(param, data1, data2)
}
