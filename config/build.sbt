name := "config"

version := "0.1"

organization := "com.loyal3"

scalaVersion := "2.10.2"

{
    libraryDependencies ++= Seq(
        "log4j" % "log4j" % "1.2.17",
        "org.slf4j" % "slf4j-log4j12" % "1.7.5",
        "com.fasterxml.jackson.module" %% "jackson-module-scala" % "2.2.3"
    )
}

// append several options to the list of options passed to the Java compiler
javacOptions ++= Seq("-source", "1.6", "-target", "1.6")

