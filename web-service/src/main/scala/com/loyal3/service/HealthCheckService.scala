package com.loyal3.service

/**
 * Health check service
 */
trait HealthCheckService {

  val APP_HEALTH_STATUS_APP_UP = "appUp"
  val APP_HEALTH_STATUS_APP_MAINTAIN = "appMaint"

  def status: String

  def ping: String

}
