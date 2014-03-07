import sbt._

object L3Build extends Build {
  lazy val all = Project(
    id   = "all",
    base = file(".")
  )
  .aggregate(config, core, webUi)

  lazy val config = Project(
    id   = "config",
    base = file("config")
  )
  .dependsOn(testTools % "test->compile;")

  lazy val core = Project(
    id   = "core",
    base = file("core")
  )
  .dependsOn(testTools % "test->compile;", config)

  lazy val webUi = Project(
    id   = "web-ui",
    base = file("web-ui")
  )
  .dependsOn("core")

  lazy val webService = Project(
    id   = "web-service",
    base = file("web-service")
  )
  .dependsOn("core")

  lazy val testTools = Project(
    id   = "test-tools",
    base = file("test-tools")
  )
}



