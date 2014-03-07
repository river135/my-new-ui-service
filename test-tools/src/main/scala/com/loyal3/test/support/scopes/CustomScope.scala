package com.loyal3.test.support.scopes

import org.specs2.mock.Mockito
import org.specs2.specification.Scope
import org.specs2.matcher.ThrownExpectations

trait CustomScope extends Mockito with Scope with ThrownExpectations
