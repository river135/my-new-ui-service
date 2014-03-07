package com.loyal3.web.controllers

import com.twitter.finatra.Controller
import com.loyal3.core.util.{Logging, Json}

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 3/5/14
 * Time: 5:11 PM
 */
class RestController extends Controller with RestData with Logging {
  private def renderJsonResponse(json: Object) = {
    val resp = Json.mapper.writeValueAsString(json)
    render.json(json)
      .header("Content-Length", resp.length.toString)
      .ok
      .toFuture
  }

  get ("/api/sample/:param") { request =>
    try {
      val param = request.routeParams.get("param")
      param match {
        case Some(p) => {
          val sampleDataResponse = getSampleData(p)
          sampleDataResponse match {
            case Some(s)  => renderJsonResponse(s)
            case _        =>  render.notFound.toFuture
          }
        }

        case _ => render.notFound.toFuture
      }
    } catch {
      case e:Exception => {
        logger.error(e.toString)
        render.body("Error").status(500).toFuture
      }
    }

  }
}
