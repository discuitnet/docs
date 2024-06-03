# /users/{username}/lists

## Overview

The `/users/{username}/lists` endpoint allows users to see their lists, and create new lists. Some of the functionality of this endpoint requires the user to be logged in.

## GET

Returns an array of the user's lists. If the user is the logged in user, all the user's lists, both private and public, are returned; if not, only the user's public lists are returned.

### HTTP Response Codes

| Status Code | Description | Details |
| --- | --- | --- |
| 200 | OK | Returns a [response](#json-response-type) with an array of the user's lists. |
| 429 | Too Many Requests | The user has sent too many requests in a given amount of time ("rate limiting"). |
| 500 | Internal Server Error | The server has encountered a situation it doesn't know how to handle. If this error occurs, please create an issue on [GitHub](https://github.com/discuitnet/discuit). |

### JSON Response Type

```ts
type Response = List[]
```

## POST

Creates a [List](/api/types#list) object and returns an array of the user's lists, including the newly created one. The user must be logged in to use this method.

### HTTP Response Codes

| Status Code | Description | Details |
| --- | --- | --- |
| 200 | OK | Returns a [response](#json-response-type-1) with an array of the user's lists, including the newly created one. |
| 400 | Bad Request | The request had errors, check the [request type](#json-request-type) to ensure your request was correct. |
| 401 | Unauthorized | Authentication is required and has failed or has not been provided. |
| 403 | Forbidden | The logged in user does not have access. |
| 429 | Too Many Requests | The user has sent too many requests in a given amount of time ("rate limiting"). |
| 500 | Internal Server Error | The server has encountered a situation it doesn't know how to handle. If this error occurs, please create an issue on [GitHub](https://github.com/discuitnet/discuit). |

### JSON Request Type

```ts
type Request = {
  name: string; // Required
  displayName: string;
  description: string | null;
  public: boolean;
};
```

### JSON Response Type

```ts
type Response = List[]
```
