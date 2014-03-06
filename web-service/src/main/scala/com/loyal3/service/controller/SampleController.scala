package com.loyal3.service.controller

import com.twitter.finatra.{Response, Controller}
import com.loyal3.core.util.{Logging, Json}
import com.twitter.util.Future
import com.twitter.finagle.http.filter.JsonpFilter

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/28/14
 * Time: 2:31 PM
 *
 * TBD: Logging trait needs work!
 *
 */
class SampleController extends Controller with SampleData with Logging {
  private def notFound(s: String):Future[Response] = {
    render.body(s)
      .header("Content-Length", s.length.toString)
      .notFound
      .toFuture
  }

  private def renderResponse(json: Object):Future[Response] = {
    val resp = Json.mapper.writeValueAsString(json)
    render.json(json)
     .header("Content-Length", resp.length.toString)
     .ok
     .toFuture
  }

  get("/api/v1/sampledata/:param") {
    request => {
      try {
        val param = request.routeParams.get("param")
        param match {
          case Some(p) => {
            val sampleDataResponse = getSampleData(p)
            sampleDataResponse match {
              case Some(s)  => renderResponse(s)
              case _        =>  notFound("Not Found!")
            }
          }

          case _ => notFound("Not Found!")
        }
      } catch {
        case e:Exception => {
          logger.error(e.toString)
          render.body("Error").status(500).toFuture
        }
      }
    }
  }
}
