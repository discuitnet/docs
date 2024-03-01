---
title: Authentication
---

The Discuit API uses [HTTP
Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) for
authentication.

The first call to any GET API endpoint (that does not require authentication) returns the cookies that are needed for authenticated API requests. Namely, the `SID` (session ID) cookie and the `csrftoken` cookie. However, it is recommended to use the [`/api/_initial`](/endpoints/initial-get) endpoint for this.

For example, the command,

```bash
curl 'https://discuit.net/api/_initial' -XGET -I
```

would return these HTTP headers:

```
Set-Cookie: SID=aVVdZDQLCaDUFnMEwKwpbzwoNVnytESJNRVI; Path=/; Expires=Sat, 06 Jul 2024 18:57:05 GMT; HttpOnly; Secure; SameSite=Lax
Set-Cookie: csrftoken=ciSk6IDY7rQ1pHu9yueb2TXUjJQU8r1pKjisA3S7Px0=; Path=/
Date: Wed, 12 Jul 2023 18:57:05 GMT
Content-Type: text/html; charset=utf-8
```

The value in the `csrftoken` cookie needs to be passed in an `X-Csrf-Token` HTTP header for all except GET requests to mitigate Cross Site Request Forgeries.

A login request, for example, would look like this:

```bash
curl 'http://discuit.net/api/_login' -XPOST -H 'Cookie: SID=aVVdZDQLCaDUFnMEwKwpbzwoNVnytESJNRVI' -H 'X-Csrf-Token: ciSk6IDY7rQ1pHu9yueb2TXUjJQU8r1pKjisA3S7Px0=' -d '{"username":"neo","password":"whatever"}'
```
