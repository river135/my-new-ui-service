package com.loyal3.service.response

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/28/14
 * Time: 2:42 PM
 */
case class SampleResponse(param: String, data1:String, data2:String) {
  override def toString: String = "param: %s, data1: %s, data2: %s".format(param, data1, data2)
}
