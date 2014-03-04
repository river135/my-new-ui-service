package com.loyal3.service.controller

import org.jboss.netty.handler.codec.http.HttpMethod
import com.twitter.finatra.Controller
import com.loyal3.core.util.Logging

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/28/14
 * Time: 2:28 PM
 */
class HealthController extends Controller with Logging {
  get("/ping") { request =>
    render.plain("pong").toFuture
  }
}
