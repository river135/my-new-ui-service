package com.loyal3.controller

import com.twitter.finatra.Controller
import com.loyal3.core.util.Logging
import com.loyal3.service.HealthCheckService

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/28/14
 * Time: 2:28 PM
 */
class HealthCheckController(service: HealthCheckService) extends Controller with Logging {
  get("/ping") { request =>
    render.plain(service.ping).toFuture
  }
}
