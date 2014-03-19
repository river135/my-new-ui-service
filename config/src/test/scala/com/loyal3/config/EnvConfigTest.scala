package com.loyal3.config

import org.scalatest.FunSuite
import org.scalatest.matchers.ShouldMatchers
import java.util.Properties
import scala.collection.JavaConversions._


class EnvConfigTest
  extends FunSuite
  with ShouldMatchers {

  val EnvironmentSpecificConfigs: List[String] = List(
    "web.port",
    "web.documentRoot",
    "web.assetPath",
    "admin.port",
    "database.host",
    "database.name",
    "database.username",
    "database.password",
    "database.min.connection",
    "database.max.connection"
  ).sorted

  val Environments: List[String] = List("ci", "development", "staging", "production")

  test("there are no additional environment properties not passed through this test") {
    Environments.foreach {
      env =>
        val propertiesList: List[String] = loadPropertiesFor(env)
        val extraneousProperties: List[String] = propertiesList.filterNot(EnvironmentSpecificConfigs.contains)
        extraneousProperties should be(Nil)
    }
  }

  test("all environment properties files contain each of the properties") {
    Environments.foreach {
      env => {
        val propertiesList = loadPropertiesFor(env)
        val missingProperties: List[String] = propertiesList.filterNot(EnvironmentSpecificConfigs.contains)
        missingProperties should be(Nil)
      }
    }
  }

  private def loadPropertiesFor(env: String): List[String] = {
    val basePropFilename: String = Config.DefaultPropertiesName
    val propertyFile = s"$basePropFilename-$env.properties"

    val resourceStream = getClass.getClassLoader.getResourceAsStream(propertyFile)
    val properties = new Properties()
    properties.load(resourceStream)
    resourceStream.close()

    properties.keySet().toList.asInstanceOf[List[String]].sorted
  }
}
