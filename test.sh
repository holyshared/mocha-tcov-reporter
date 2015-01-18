#!/usr/bin/sh

npm -d install
npm run build
mkdir coverage
npm test
npm run coveralls
