---
layout: post
title: Deployment Notes
type: tangibles
courses: {csp: {week: 25}}
comments: true
---

#### URI
While testing we use localhost, but after deployment we use deployed url, therefore we need to store URI variable in other config.js file and import for easy changing
- Override URI and Options using `...options` in a new variable, create new url, create authOptions with options and fetch using authOptions and url
- After login user needs to be redirected to page

#### NGINX and CORS
Cors policies need to be configured in NGINX or else CORS errors will occur as Acces-Control-Authorized-Header is not present

#### Python CORS
- Moved from main.py to __init__.py
- Tells python which frontend servers are allowed to access backend and fetch

#### Python Authorization
- Only logged in users with a token should be allowed to use certain function
- Token code defined iin auth_middleware.py file defines @token_required
- Returns token, can view user from token that is sent back to backend, like a global storage for UID
- Cookie is unwrappable and can be stored in function
- User is returned from token_required to function, replace underbar with user will get user

#### Python CSRF
- Generic key in code, in __init__.py can be modified to protect against CSRF attacks

#### HTTP Requests in token and authorization
- Unguarded requests
    - POST to initiate user, needs this to do anything else
- Guarded requests
    - GET, PUT, DELETE request, needs to be logged in to fetch from these functions

## Deployment
#### Docker
- Change ports, python version
- Dockerfile builds the application
- docker_compose.yml specified information about computer and server
    - changing image allows image name to be identifiable
- NGINX config, add proper methods, change origin that is allowed to access resource and server name
- If docker is shut down and there is no outside volume, then database is wiped every time you restart server, hence why instance is mounted

