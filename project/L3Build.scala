import sbt._

object L3Build extends Build {
  lazy val all: Project = Project(
    id   = "all",
    base = file("."),
    settings = Defaults.defaultSettings ++
      Seq(ScctPlugin.mergeReportSettings: _*)
  )
  .aggregate(config,
    util,
    webUi,
    webService,
    testTools,
    webUIIntegrationTests,
    webUIFunctionalTests,
    webServiceIntegrationTests,
    webServiceFunctionalTests)

  lazy val config = Project(
    id   = "config",
    base = file("config")
  )
  .dependsOn(testTools % "test->compile;")

  lazy val util = Project(
    id   = "util",
    base = file("util"),
    settings = scctSettings
  )
  .dependsOn(testTools % "test->compile;", config)

  lazy val webUi = Project(
    id   = "web-ui",
    base = file("web-ui"),
    settings = scctSettings
  )
  .dependsOn("util")

  lazy val webService = Project(
    id   = "web-service",
    base = file("web-service"),
    settings = scctSettings
  )
  .dependsOn("util")

  lazy val testTools = Project(
    id   = "test-tools",
    base = file("test-tools")
  )

  /************************ Integration Tests *****************************************/
  lazy val webServiceIntegrationTests = Project(id = "web-service-integration-tests",
    base = file("web-service-integration-tests"))

  lazy val webUIIntegrationTests = Project(id = "web-ui-integration-tests",
    base = file("web-ui-integration-tests"))


  /************************ End-End Tests *****************************************/
  lazy val webServiceFunctionalTests = Project(id = "web-service-functional-tests",
    base = file("web-service-functional-tests"))

  lazy val webUIFunctionalTests = Project(id = "web-ui-functional-tests",
    base = file("web-ui-functional-tests"))


  /************************ Code Coverage *********************************************/
  lazy val scctSettings = Defaults.defaultSettings ++ Seq(ScctPlugin.instrumentSettings: _*)
}



