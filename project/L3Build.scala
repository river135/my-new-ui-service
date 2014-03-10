import sbt._

object L3Build extends Build {
  lazy val all = Project(
    id   = "all",
    base = file("."),
    settings = Defaults.defaultSettings ++ Seq(ScctPlugin.mergeReportSettings: _*)
  )
  .aggregate(config, util, webUi, webService, testTools)

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

  lazy val scctSettings = Defaults.defaultSettings ++ Seq(ScctPlugin.instrumentSettings: _*)
}



