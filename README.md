# Angular  JWT Authentication & Authorization example


Providing security to the web application using jwt(Json Web Token).


User can sign up by a role for example(user-Role or admin-Role).



His credentails are sent to the backend (spring boot) which stored them and associates a jwt for this username sendig it back as a response to the front-end


Where jwt is stored in browser local storage so that when user came back again the spring boot check his jwt and its validity.


Then he can sign in with his credentials stored in the backend database.


Users with privilleges can access specific routes for this we use [AuthGuard] for preventing them access routes with no authorization.


User can log out and then session is invalidated .
