mocha-tcov-reporter
========================

This reporter is a simple code coverage reporter.  
Will display the results in a list.

[![Build Status](https://drone.io/github.com/holyshared/mocha-tcov-reporter/status.png)](https://drone.io/github.com/holyshared/mocha-tcov-reporter/latest)
[![Coverage Status](https://coveralls.io/repos/holyshared/mocha-tcov-reporter/badge.svg?branch=master)](https://coveralls.io/r/holyshared/mocha-tcov-reporter?branch=master)
[![Code Climate](https://codeclimate.com/github/holyshared/mocha-tcov-reporter/badges/gpa.svg)](https://codeclimate.com/github/holyshared/mocha-tcov-reporter)

![mocha-tcov-reporter](https://raw.githubusercontent.com/holyshared/mocha-tcov-reporter/master/screen.png "mocha-tcov-reporter")

Installation
------------------------------------------

	npm install mocha-tcov-reporter --save-dev

Basic Usage
------------------------------------------

Add a set of [blanket](https://github.com/alex-seville/blanket) to package.json.

```json
"config": {
  "blanket": {
    "pattern": "/lib/",
    "data-cover-never": "/node_modules/"
  }
}
```

After that, You need to specify the reporter.  

	mocha -r blanket -R mocha-tcov-reporter test
