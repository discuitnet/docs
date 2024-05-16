# /\_initial

## Overview

The `/_initial` endpoint is the first endpoint you want to call when making an application on the Discuit API. You can use it to set the `csrftoken` and `SID` cookie from the headers. You can read more about the authentication instructions on the [Authentication](/api/authentication) page.

## GET

The `GET` method will return a basic set of data to set up your homepage in a single request.

### HTTP Response Codes

These are common HTTP status codes applicable to all requests made to this endpoint.

| Status Code | Description           | Details                                                                                                                                                                |
| ----------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200         | OK                    | Returns a [response](#json-response) with the values.                                                                                                                  |
| 429         | Too Many Requests     | The user has sent too many requests in a given amount of time ("rate limiting").                                                                                       |
| 500         | Internal Server Error | The server has encountered a situation it doesn't know how to handle. If this error occurs, please create an issue on [GitHub](https://github.com/discuitnet/discuit). |

### JSON Response Type

```ts
type Response = {
  // An array of reasons to report a post or a comment.
  reportReasons: ReportReason[];

  // If authenticated, the user object of the authenticated user, else null.
  user: User | null;

  // If authenticated, the list of communities that the user is subscribed to.
  // Otherwise, the list of default communities is returned.
  communities: Community[];

  // Discuit total user count.
  noUsers: number;

  // The list of communities that the authenticated user is banned from. If
  // not authenticated, this value is null.
  bannedFrom: string[] | null;
  vapidPublicKey: string;

  // List of users and communities that the authenticated user has muted. If
  // not authenticated, the lists are empty.
  mutes: {
    communityMutes: Mute[];
    userMutes: Mute[];
  };
};
```
