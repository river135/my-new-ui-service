package com.loyal3.core.util

import org.slf4j.{LoggerFactory, Logger}

trait Logging {
  val logger: Logger = LoggerFactory.getLogger(getClass)
}
