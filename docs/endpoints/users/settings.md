# /\_settings

## Overview

The `/_settings` endpoint allows users to update their profile settings and change their password. It is designed to offer users control over various aspects of their account settings through a single interface.

## POST

The `POST` method is used to update user settings and change passwords.

::: warning
You must pass the entire object when updating settings. If you only pass a single field, the other fields will be reset to their default values.
:::

### HTTP Response Codes

These are common HTTP status codes applicable to all requests made to this endpoint:

| Status Code | Description | Details |
| --- | --- | --- |
| 200 | OK | Returns the updated [User](/types#user) object. |
| 400 | Bad Request | The server cannot process the request due to a client error (e.g., malformed request syntax). |
| 401 | Unauthorized | Authentication is required and has failed or has not been provided. |
| 429 | Too Many Requests | The user has sent too many requests in a given amount of time ("rate limiting"). |
| 500 | Internal Server Error | The server has encountered a situation it doesn't know how to handle. If this error occurs, please create an issue on [GitHub](https://github.com/discuitnet/discuit). |

### Update Profile

Allows users to update various settings related to their profile. For this request you must set `?action=updateProfile` in the URL.

```ts
type Request = {
  aboutMe: string;
  upvoteNotificationsOff: boolean;
  replyNotificationsOff: boolean;
  homeFeed: "All" | "Subscriptions";
  rememberFeedSort: boolean;
  embedsOff: boolean;
  email: string;
  hideUserProfilePictures: boolean;
}
```

### Change Password

Enables users to change their account password.  For this request you must set `?action=changePassword` in the URL.

```ts
type Request = {
  password: string;
  newPassword: string;
  repeatPassword: string;
}
```
