package com.loyal3.web.controllers

import com.twitter.finatra.Controller

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 3/5/14
 * Time: 5:09 PM
 */
class HTMLController extends Controller {
  get("/") { request =>
    render.static("shell.html").toFuture
  }

  get("/view/*") { request =>
    render.static("shell.html").toFuture
  }
}
