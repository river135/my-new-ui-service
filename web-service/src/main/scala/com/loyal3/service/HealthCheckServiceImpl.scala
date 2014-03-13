package com.loyal3.service

/**
 * Health Check Service implementation
 */
class HealthCheckServiceImpl extends HealthCheckService {

  def status = APP_HEALTH_STATUS_APP_UP

  def ping = "pong"

}
