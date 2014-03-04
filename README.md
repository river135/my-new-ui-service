LOYAL3 Starter Project
=============================================
This is a basic starter kit project for Loyal3 UI components. Fork This project and make any changes necessary. If changes are made to the core that should be reused, please create a pull request.

Stack
-----
- AngularJS
- Neat (for grid)
- Bourbon
- Bootstrap SASS
- Angular Bootstrap UI (Native Angular JS for Bootstrap Components)
- Finatra on Finagle


Other Helpful Commands
----------------------

### Install/Initialize Project
```
./install.sh
```

### Startup the server
```
sbt 'project web-ui' run
```

### Run Tests
```
cd web-ui/src/main/resources/config
karma start karma.config.js
```

Test Locations
--------------
Tests are located in the following directories:
- resources/test/e2e
- resources/test/unit



