package com.loyal3.config

import com.twitter.finatra.{config => twitterConfig}
import com.netflix.config.scala._
import com.netflix.config.{SimpleDeploymentContext, ConfigurationManager, DynamicPropertyFactory}

object Config {
  val DefaultPropertiesName: String = "starter" // base name for properties files
  loadCascadedPropertiesFor(DefaultPropertiesName)

  val Properties = DynamicPropertyFactory.getInstance()

  /**
   * Finatra Web Server Properties
   */
  val WebServerPort   = Properties.getStringProperty("web.port", ":7070").get
  val WebDocumentRoot = Properties.getStringProperty("web.documentRoot", "web-ui/src/main/resources").get
  val WebAssetPath    = Properties.getStringProperty("web.assetPath", "app/").get

  /**
   * Finatra/Twitter-Server Admin Properties
   */
  val AdminServerPort = DynamicProperties.dynamicStringProperty("admin.port", ":9090").get

  // do the Archaius Stuff based on our environment
  private def loadCascadedPropertiesFor(propertiesBaseName: String) {
    val environment: String = twitterConfig.env() // finatra environment property

    val deploymentContext = new SimpleDeploymentContext
    deploymentContext.setDeploymentEnvironment(environment)

    ConfigurationManager.setDeploymentContext(deploymentContext)
    ConfigurationManager.loadCascadedPropertiesFromResources(propertiesBaseName)
  }
}
