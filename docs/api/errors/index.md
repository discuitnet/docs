# Errors

Most API errors return a JSON object of the following type, along with the appropriate HTTP status code:

```ts
type APIError = {
  status: int; // HTTP status code
  code?: string; // Custom error code
  message: string; // Human readable error message (could be an empty string)
};
```

Some API endpoints return only a simple HTTP status code with no custom error code and an empty message. This is only in case the error can be explained by the status code alone.

- [400 - Bad request](/api/errors/400-bad-request)
- [404 - Not found](/api/errors/404-not-found)
- [429 - Too many requests](/api/errors/429-too-many-requests)
- [500 - Internal server error](/api/errors/500-internal-server-error)
