LOYAL3 Starter Project
=============================================
This is a thin-ish starter for a Finatra/Angular project service at LOYAL3. Clone this project and make any changes
necessary. If any changes are made that would be valuable to pull back to this starter project, please checkout the main
starter app and make changes there.

Stack
-----
- [Finatra](http://finatra.info/) on [Finagle](http://twitter.github.io/finagle/)
- [AngularJS](http://angularjs.org/)
- [Angular Bootstrap UI](http://angular-ui.github.io/bootstrap/) (Native Angular for Twitter Bootstrap)
- [Vault](https://github.com/loyal3/vault)
- [BoneCP](http://jolbox.com/)
- [Jdbi](http://jdbi.org/)
- [Liquibase](http://www.liquibase.org/)

Other Helpful Commands
----------------------

### Install/Initialize Project
```
./install.sh
```

### Startup the UI Server (port 7072)
```
sbt 'project web-ui' run
```

### Startup the Web Service Server (port 7071)
```
sbt 'project web-service' run
```

### Run UI Tests
```
cd web-ui/src/main/resources/config
karma start karma.config.js
```

UI Test Locations
--------------
UI tests are located in the following directories:

- resources/test/e2e
- resources/test/unit
