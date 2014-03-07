package com.loyal3.test.support.scopes

trait SelfAware {
  def I = getClass.getSimpleName
    .replace("AcceptanceSpec", "")
    .replace("DatabaseSpec", "")
    .replace("GatewaySpec", "")
    .replace("Spec", "")
}
