package com.loyal3.web.controllers

import com.twitter.finatra.Controller

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 3/5/14
 * Time: 5:10 PM
 */
class HealthController extends Controller {
  get("/ping") { request =>
    render.plain("pong").toFuture
  }
}

