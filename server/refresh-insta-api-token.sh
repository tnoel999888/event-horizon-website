#!/bin/bash

source ./.env
curl -i -X GET 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token='"$INSTAGRAM_ACCESS_TOKEN"