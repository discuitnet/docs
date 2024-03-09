# Errors

Most API errors return a JSON object of the following type, along with the appropriate HTTP status code:

```ts
type APIError = {
  status: int; // HTTP status code
  code?: string; // Custom error code
  message: string; // Human readable error message (could be an empty string)
};
```

Some API endpoints return only a simple HTTP status code with an empty custom error code and message. This is only in case the error can be explained by the status code alone. All possible errors are documented in the sections listed below, and any other errors will only return the status code.

- [400 - Bad request](/errors/400-bad-request)
- [500 - Internal server error](/errors/500-internal-server-error)
