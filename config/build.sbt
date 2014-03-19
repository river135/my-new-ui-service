name := "config"

version := "0.1"

libraryDependencies ++= Seq(
  "com.netflix.archaius" % "archaius-core" % "0.6.0",
  "com.netflix.archaius" % "archaius-scala" % "0.6.0",
  "log4j" % "log4j" % "1.2.17",
  "org.slf4j" % "slf4j-log4j12" % "1.7.6",
  "com.twitter" %% "finatra" % "1.5.2",
  "org.scalatest" % "scalatest_2.10" % "2.1.0" % "test"
)

// append several options to the list of options passed to the Java compiler
javacOptions ++= Seq("-source", "1.6", "-target", "1.6")
