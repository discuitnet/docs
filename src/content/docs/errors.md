---
title: Errors
---

Most API errors return a JSON object of the following type, along with the appropriate HTTP status code:

```ts
type APIError = {
  status: string; // HTTP status code
  code: string; // Custom error code
};
```

Some API endpoints return only a simple HTTP status code with an empty HTTP body.

A 500 HTTP status may be returned by any endpoint, if anything goes wrong on the server.

For any request that requires a JSON HTTP body, if the JSON object does not match the expected object, a 400 APIError with `"invalid_json"` code will be returned.

If any endpoint has any rate-limiting, and if rate-limits are exceeded, a 429 HTTP status code is returned.

And these general errors are not mentioned again in the tables of errors on the rest of this page.
