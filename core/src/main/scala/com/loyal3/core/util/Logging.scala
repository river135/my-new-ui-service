package com.loyal3.core.util

import org.slf4j.{LoggerFactory, Logger}

/**
 * Created by IntelliJ IDEA.
 * User: chrisg
 * Date: 2/14/14
 * Time: 4:10 PM
 */
trait Logging {
  val logger: Logger = LoggerFactory.getLogger(getClass)
}
