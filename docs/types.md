# Types

Time values are quoted strings in the RFC 3339 format with sub-second precision.

## Comment

```ts
type Comment = {
  id: string;
  postId: string;
  postPublicId: string;
  communityId: string;
  communityName: string;
  userId: string;
  username: string;

  // The capacity in which the comment was created.
  userGroup: "normal" | "admins" | "mods";
  userDeleted: boolean; // Indicates whether the author account is deleted
  parentId: string | null; // Parent comment ID.
  depth: int; // Top-most comments have a depth of 0
  noReplies: int; // Total number of replies
  noDirectReplies: int; // Number of direct replies

  // Comment IDs of all ancestor comments starting from the top-most comment.
  ancestors: string[] | null;

  body: string; // Comment body
  upvotes: int;
  downvotes: int;
  createdAt: time;
  editedAt: time | null; // Last edit time.

  deletedAt: time | null; // Comment deleted time.

  // User ID of the person who deleted the comment.

  // In what capacity the comment was deleted.
  deletedAs: "normal" | "admins" | "mods" | null;

  // Indicated whether the authenticated user has voted. If not authenticated, the value is null.
  userVoted: boolean | null;
  userVotedUp: boolean; // Indicates whether the authenticated user's vote is an upvote

  postDeleted: boolean; // Indicates whether the post the comment belongs to is deleted

  // If the post is deleted, in what capacity.
  postDeletedAs: "normal" | "admins" | "mods";
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
  id: string;
  publicId: string; // The value in https://discuit.net/gaming/post/{publicId}/
  type: "text" | "image" | "link";

  userId: string; // ID of the author.
  username: string; // Username of the author.

  // In what capacity the post was created.
  // For "speaking officially" as a mod or an admin.
  userGroup: "normal" | "admins" | "mods";

  userDeleted: boolean; // Indicated whether the author's account is deleted
  isPinned: boolean;
  communityId: string; // The ID of the community the post is posted in
  communityName: string; // The name of that community

  title: string; // Greater than 3 characters
  body: string; // Body of the post (only valid for text-posts)

  // Only valid for link-posts. Could be null.
  link: {} | null;

  communityProPic: {};
  communityBannerImage: {};

  locked: boolean;
  lockedBy: string | null; // Who locked the post.
  lockedByGroup: "admins" | "mods" | null;
  lockedAt: time; // Could be null

  upvotes: int;
  downvotes: int;
  hotness: int; // For ordering posts by 'hot'

  createdAt: time;
  editedAt: time | null; // Last edited time.

  // Either the post created time or, if there are comments on the post, the time the most recent comment was created at.
  lastActivityAt: time;

  deleted: boolean;
  deletedAt: time | null; // Could be null
  deletedBy: string | null; // ID of the user who deleted the post.
  deletedAs: "normal" | "admins" | "mods" | null;

  // If true, the body of the post and all associated links or images are deleted.
  deletedContent: boolean;

  deletedContentAs: "normal" | "admins" | "mods" | null;

  noComments: int; // Comment count

  commments?: Comment[]; // Comments of the post.
  commentsNext: string | null; // Pagination cursor.

  // Indicated whether the authenticated user has voted. If not authenticated, the value is null.
  userVoted: boolean | null;
  userVotedUp: boolean; // Indicates whether the authenticated user's vote is an upvote.

  community?: {}; // The community object of the post.
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
