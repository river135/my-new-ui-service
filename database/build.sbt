name := "database"

version := "0.1"

organization := "com.loyal3"

scalaVersion := "2.10.2"

{
    libraryDependencies ++= Seq(
        "com.jolbox" % "bonecp" % "0.7.1.RELEASE" withSources(),
        "mysql" % "mysql-connector-java" % "5.1.27",
        "org.jdbi" % "jdbi" % "2.51"
    )
}

{
    libraryDependencies += "org.liquibase" % "liquibase-core" % "3.0.7"
}

// append several options to the list of options passed to the Java compiler
javacOptions ++= Seq("-source", "1.6", "-target", "1.6")

