#!/usr/bin/sh

export DRONE_REPO_SLUG=$DRONE_REPO_SLUG
export DRONE_BUILD_URL=$DRONE_BUILD_URL
export DRONE_BUILD_DIR=$DRONE_BUILD_DIR
export DRONE_BUILD_NUMBER=$DRONE_BUILD_NUMBER
export DRONE_COMMIT=$DRONE_COMMIT
export DRONE_BRANCH=$DRONE_BRANCH

npm -d install
npm run build
mkdir coverage
npm test
npm run coveralls
