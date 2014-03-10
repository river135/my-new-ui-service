resolvers += "sbt-idea-repo" at "http://mpeltonen.github.com/maven/"

addSbtPlugin("com.github.mpeltonen" % "sbt-idea" % "1.6.0")

addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.9.2")

// SCCT
addSbtPlugin("com.sqality.scct" % "sbt-scct" % "0.2.2")

