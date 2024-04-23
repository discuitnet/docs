# Types

Time values are quoted strings in the RFC 3339 format with sub-second precision.

`undefined` means that the value is not included as part of the object. `null` means that it is included in the object, but does not have a value.

## Comment

```ts
type Comment = {
  id: string; // The ID of the comment.
  postId: string; // The ID of the post the comment belongs to.
  postPublicId: string; // The public ID of the post the comment belongs to.

  communityId: string; // The ID of the community in which this comment was made.
  communityName: string; // The name of the community in which this comment was made.

  userId: string | undefined; // The ID of the user that made the comment.
  username: string; // The username of the user that made the comment.
  userGhostId: string | undefined; // The ID of the Ghost user in case the author deleted their account, otherwise undefined.
  userGroup: "normal" | "admins" | "mods"; // The capacity in which the comment was created.
  userDeleted: boolean; // Indicates whether the author account is deleted

  // The comment ID of the parent comment if it exists, otherwise null if this is a top-level comment.
  parentId: string | null;
  depth: int; // How far deep into a comment chain this comment is. Top-level comments have a depth of 0.
  noReplies: int; // The total number of replies the comment has, including all deeper comments.
  // The number of direct replies the comment has. This does not include replies deeper than 1 more than the comment itself.
  noDirectReplies: int;
  ancestors: string[] | null; // The comment IDs of all ancestor comments starting from the top-most comment.

  body: string; // The body of the comment.
  upvotes: int; // The number of upvotes that the comment has.
  downvotes: int; // The number of downvotes that the comment has.
  createdAt: time; // The time at which the comment was created.
  editedAt: time | null; // If the comment was edited, the time at which it was last edited, otherwise null.

  contentStripped: boolean | undefined; // If the content of the comment was deleted, otherwise undefined.
  deleted: boolean; // If the comment was deleted.
  // If the comment was deleted, the time at which it was deleted, otherwise null.
  deletedAt: time | null;
  // If the comment was deleted, in what capacity it was deleted, otherwise undefined.
  deletedAs: "normal" | "admins" | "mods" | undefined;

  author: User; // The User object of the author of the comment.
  // Whether the author is muted by the authenticated user. If not authenticated, this is undefined.
  isAuthorMuted: boolean | undefined;

  // Indicated whether the authenticated user has voted. If not authenticated, this is null.
  userVoted: boolean | null;
  // Indicates whether the authenticated user's vote is an upvote. If not authenticated, this is null.
  userVotedUp: boolean | null;

  postTitle: string | undefined; // The title of the post the comment belongs to.
  postDeleted: boolean; // Indicates whether the post the comment belongs to is deleted.
  postDeletedAs: "normal" | "admins" | "mods" | undefined; // If the post is deleted, in what capacity, otherwise undefined.
};
```

## Community

```ts
type Community = {
  id: string;
  userId: string; // ID of the user who created the community
  name: string;
  nsfw: boolean; // Indicates whether the community hosts NSFW content
  about: string | null;
  noMembers: int; // Member count
  proPic: {};
  bannerImage: {};
  createdAt: time;
  deletedAt: time | null;

  isDefault?: boolean;

  userJoined: boolean; // Indicates whether the authenticated user is a member
  userMod: boolean; // Indicates whether the authenticated user is a moderator

  mods?: User[];

  rules?: CommunityRule[];

  reportDetails?: {
    noReports: int; // Total reports count
    noPostReports: int; // Reported posts count
    noCommentReports: int; // Reported comments count
  };
};
```

## CommunityRule

```ts
type CommunityRule = {
  id: int;
  rule: string;
  description: string | null;
  communityId: string;
  zIndex: int; // Determines rule ordering, with lower at top
  createdBy: string;
  createdAt: time;
};
```

## Image

```ts
type Image = {
  id: string; // The ID of the image.
  format: "jpeg" | "webp" | "png"; // The image format.
  mimetype: string; // The image MIME Type, eg. "image/jpeg".
  width: int; // The image width.
  height: int; // The image height.
  size: int; // The size of the image in bytes.
  averageColor: "rgb([r: int], [g: int], [b: int])"; // The average color of the image.
  url: string; // A link to the image. The path is not prefixed with /api.
  copies: ImageCopy[]; // A list of copies of the image in different sizes.
};

type ImageCopy = {
  name: string | undefined; // The name of the image copy, used to identify it.
  width: int; // The width of the image copy.
  height: int; // The height of the image copy.
  boxWidth: int; // The width of the box that the image fits into.
  boxHeight: int; // The height of the box that the image fits into.
  objectFit: "cover" | "contain"; // How the image should fit into a box. Corresponds to the CSS `object-fit` property.
  format: "jpeg" | "webp" | "png"; // The format of the image copy.
  url: string; // A link to the image copy. The path is not prefixed with /api.
};
```

## Mute

```ts
type Mute = {
  id: string;
  type: "user" | "community";
  mutedUserId?: int;
  mutedCommunityId?: int;
  createdAt: time;
  mutedUser?: User;
  mutedCommunity?: Community;
};
```

## Notification

```ts
type Notification = {
  id: int;

  // Type of notification.
  type:
    | "new_comment"
    | "comment_reply"
    | "new_votes"
    | "deleted_post"
    | "mod_add";

  notif: {}; // The actual notification

  seen: boolean;
  seenAt: time | null;
  createdAt: time;
};
```

## Post

```ts
type Post = {
  id: string; // The ID of the post
  type: "text" | "image" | "link"; // The type of post

  // The value in https://discuit.net/gaming/post/{publicId}
  publicId: string;

  userId: string; // ID of the author.
  username: string; // Username of the author.
  userGhostId: string | undefined; // The ID of the Ghost user in case the user deleted their account

  // In what capacity the post was created.
  // For "speaking officially" as a mod or an admin.
  userGroup: "normal" | "admins" | "mods";

  userDeleted: boolean; // Indicated whether the author's account is deleted

  isPinned: boolean; // If the post is pinned in the community
  isPinnedSite: boolean; // If the post is pinned site-wide

  communityId: string; // The ID of the community the post is posted in
  communityName: string; // The name of that community
  communityProPic: Image; // The profile picture of that community
  communityBannerImage: Image; // The banner image of that community

  title: string; // Greater than 3 characters
  body: string | null; // Body of the post (only valid for text posts, null otherwise)

  image: Image | null; // The posted image (only valid for image posts, null otherwise)

  link:
    | {
        url: string;
        hostname: string;
        image: Image;
      }
    | undefined; // The posted link (only valid for link posts, undefined otherwise)

  locked: boolean; // If the post was locked
  lockedBy: string | null; // Who locked the post.
  // In what capacity the post was locked, undefined if the post is not locked
  lockedByGroup: "owner" | "admins" | "mods" | undefined;
  lockedAt: time | null; // Time at which the post was locked, null if the post is not locked

  upvotes: int; // The number of upvotes the post has
  downvotes: int; // The number of downvotes the post has
  hotness: int; // For ordering posts by 'hot'

  createdAt: time; // The time when the post was created
  editedAt: time | null; // Last edited time.

  // Either the post created time or, if there are comments on the post, the time the most recent comment was created at.
  lastActivityAt: time;

  deleted: boolean; // If the post was deleted
  deletedAt: time | null; // Time at which the post was deleted, null if the post has not been deleted
  deletedBy: string | null; // ID of the user who deleted the post.
  deletedAs: "normal" | "admins" | "mods" | undefined;

  // If true, the body of the post and all associated links or images are deleted.
  deletedContent: boolean;
  // In what capacity the content was deleted, undefined if the content has not been deleted.
  deletedContentAs: "normal" | "admins" | "mods" | undefined;

  noComments: int; // Comment count.

  commments: Comment[] | undefined; // Comments of the post.
  commentsNext: string | null; // Pagination cursor for comments.

  // Indicated whether the authenticated user has voted. If not authenticated, the value is null.
  userVoted: boolean | null;
  userVotedUp: boolean | null; // Indicates whether the authenticated user's vote is an upvote.

  // Both of these are false if the user has not been logged in.
  isAuthorMuted: boolean; // If the author of the post has been muted by the logged in user.
  isCommunityMuted: boolean; // If the community that the post is in has been muted by the logged in user.

  community: Community | undefined; // The Community object of the community that the post is in.
  author: User | undefined; // The User object of the author of the post.
};
```

## Report

A report is a user submitted report of a post or a comment.

```ts
type Report = {
  id: int;
  communityId: string;
  postId: string;
  reason: string;
  description: string;
  reasonId: int;
  type: "post" | "comment";
  targetId: string; // ID of the post or the comment
  dealtAt: time | null;
  dealtby: string | null;
  createdAt: time;

  // The comment or the post the report is made against.
  target: Comment | Post;
};
```

## ReportReason

```ts
type ReportReason = {
  id: int;
  title: string;
  description: string | null;
};
```

## User

```ts
type User = {
  id: string;
  username: string;
  email: string | null;
  emailConfirmedAt: time | null;
  aboutMe: string | null;
  points: int;
  isAdmin: boolean;
  noPosts: int; // Post count of the user
  noComments: int; // Comment count of the user
  createdAt: time;
  deletedAt: time | null;
  isBanned: boolean;
  bannedAt: time | null;
  notificationsNewCount: int; // Number of new notifications the user has

  // The list of communities that the user moderates.
  moddingList?: string[] | null;
};
```
