package com.loyal3.config

import com.loyal3.test.support.scopes.SelfAwareSpecification

class ConfigSpec extends SelfAwareSpecification {
  "#current" should {
    "return the current config" in {
      Config.current mustNotEqual null
    }
  }
}
