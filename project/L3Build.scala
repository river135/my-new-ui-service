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
    testTools,
    database,
    databaseTests,
    webUi,
    webUIIntegrationTests,
    webUIFunctionalTests,
    webService,
    webServiceIntegrationTests,
    webServiceFunctionalTests
    )

  lazy val config = Project(
    id   = "config",
    base = file("config"),
    settings = scctSettings
  )
  .dependsOn(testTools % "test->compile;")

  lazy val util = Project(
    id   = "util",
    base = file("util"),
    settings = scctSettings
  )
  .dependsOn(testTools % "test->compile;", config)

  lazy val testTools = Project(
    id   = "test-tools",
    base = file("test-tools")
  )

  lazy val database = Project(
    id = "database",
    base = file("database"),
    settings = scctSettings
  )
  .dependsOn(config, testTools)

  lazy val databaseTests = Project(
    id = "database-tests",
    base = file("database-tests"),
    settings = scctSettings
  )
  .dependsOn(database)

  /************************ UI *****************************************/

  lazy val webUi = Project(
    id   = "web-ui",
    base = file("web-ui"),
    settings = scctSettings
  )
  .dependsOn("util")

  lazy val webUIIntegrationTests = Project(
    id = "web-ui-integration-tests",
    base = file("web-ui-integration-tests")
  )

  lazy val webUIFunctionalTests = Project(
    id = "web-ui-functional-tests",
    base = file("web-ui-functional-tests")
  )

  /************************ SERVICE *****************************************/

  lazy val webService = Project(
    id   = "web-service",
    base = file("web-service"),
    settings = scctSettings
  )
  .dependsOn("util")

  lazy val webServiceIntegrationTests = Project(
    id = "web-service-integration-tests",
    base = file("web-service-integration-tests")
  )

  lazy val webServiceFunctionalTests = Project(
    id = "web-service-functional-tests",
    base = file("web-service-functional-tests")
  )


  /************************ Code Coverage *********************************************/
  lazy val scctSettings = Defaults.defaultSettings ++ Seq(ScctPlugin.instrumentSettings: _*)
}



