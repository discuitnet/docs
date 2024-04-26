# Authentication

The Discuit API uses [HTTP
Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) for
authentication.

The first call to any GET API endpoint (that does not require authentication) returns the cookies that are needed for authenticated API requests, namely, the session ID (`SID`) cookie and the `csrftoken` cookie. However, it is recommended to use the [`/_initial`](/endpoints/initial) endpoint for this.

For example, the command,

```bash
curl 'https://discuit.net/api/_initial' -XGET -I
```

would return these HTTP headers:

```
cache-control: no-store
content-type: application/json; charset=UTF-8
csrf-token: FcVgW9FZD8w3iptTeh-Nm3cWm4QjVXYulKjqMWjSJkg=
set-cookie: SID=GyzghHpzr3vOdUG2pOoEeqRBFKwbVWBw5Ovy; Path=/; Expires=Mon, 03 Mar 2025 17:48:50 GMT; HttpOnly; Secure; SameSite=Lax
set-cookie: csrftoken=FcVgW9FZD8w3iptTeh-Nm3cWm4QjVXYulKjqMWjSJkg=; Path=/
date: Fri, 08 Mar 2024 17:48:50 GMT
```

The value in the `csrftoken` cookie needs to be passed in an `X-Csrf-Token` HTTP header for all except GET requests to mitigate Cross Site Request Forgeries.

A login request, for example, would look like this:

```bash
curl 'https://discuit.net/api/_login' -XPOST \
-H 'Cookie: SID=GyzghHpzr3vOdUG2pOoEeqRBFKwbVWBw5Ovy' \
-H 'X-Csrf-Token: FcVgW9FZD8w3iptTeh-Nm3cWm4QjVXYulKjqMWjSJkg=' \
-d '{"username":"neo","password":"whatever"}'
```
