package com.loyal3.controller

import com.twitter.finatra.Controller
import com.loyal3.core.util.Logging

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
  get("/api/v1/sampledata/:param") {
    request => {
      try {
        val param = request.routeParams.get("param")
        param match {
          case Some(p) => {
            val sampleDataResponse = getSampleData(p)
            sampleDataResponse match {
              case Some(s)  => render.json(s).ok.toFuture
              case _        => render.notFound.toFuture
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
}
