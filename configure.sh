#!/bin/bash

ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$ROOT"

APP_NAME=${1:my_app_name}

sed -i '' "s/APP_NAME_STR/$APP_NAME/g" README.md
sed -i '' "s/APP_NAME_STR/$APP_NAME/g" public/manifest.json
sed -i '' "s/APP_NAME_STR/$APP_NAME/g" package.json
