package com.loyal3.config

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.scala.DefaultScalaModule
import java.net.URL

case class Config(database: DatabaseConfig)

object Config {
  val mapper = {
    val m: ObjectMapper = new ObjectMapper
    m.registerModule(DefaultScalaModule)
    m
  }

  lazy val current: Config = {
    val env: String = System.getProperty("loyal3.env", "default")
    val resource: URL = getClass.getClassLoader.getResource("config/%s.json" format env)
    val value: Config = mapper.readValue(resource, classOf[Config])
    if (value == null) {
      throw new RuntimeException("no configuration found for environment, %s" format env)
    }
    value
  }
}

case class DatabaseConfig(url: String,
                          username: String,
                          password: String,
                          maxConnections: Int = 4,
                          minConnections: Int = 2)
