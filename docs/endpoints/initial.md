# /\_initial

## GET

JSON response:

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
  mutes: {
    communityMutes: Mute[];
    userMutes: Mute[];
  };
};
```
