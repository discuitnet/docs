# Endpoints

- [`/_initial`](/api/endpoints/initial)
- [`/push_subscriptions`](/api/endpoints/pushSubscriptions)

## Authentication

- [`/_login`](/api/endpoints/authentication/login)
- [`/_signup`](/api/endpoints/authentication/signup)

## Communities

- [`/_joinCommunity`](/api/endpoints/communities/joinCommunity)
- [`/communities`](/api/endpoints/communities/communities)
- [`/communities/{communityId}`](/api/endpoints/communities/communities-communityId)

### Mods

- [`/communities/{communityId}/mods`](/api/endpoints/communities/mods/mods)
- [`/communities/{communityId}/mods/{mod}`](/api/endpoints/communities/mods/mods-mod)

### Rules

- [`/communities/{communityId}/rules`](/api/endpoints/communities/rules/rules)
- [`/communities/{communityId}/rules/{ruleId}`](/api/endpoints/communities/rules/rules-ruleId)

## Notifications

- [`/notifications`](/api/endpoints/notifications/notifications)
- [`/notifications/{notificationId}`](/api/endpoints/notifications/notifications-notificationId)

## Posts

- [`/_postVote`](/api/endpoints/posts/postVote)
- [`/posts`](/api/endpoints/posts/posts)
- [`/posts/{postId}`](/api/endpoints/posts/posts-postId)

### Comments

- [`/_commentVote`](/api/endpoints/posts/comments/commentVote)
- [`/posts/{postId}/comments`](/api/endpoints/posts/comments/comments)
- [`/posts/{postId}/comments/{commentId}`](/api/endpoints/posts/comments/comments-commentId)

## Users

- [`/_settings`](/api/endpoints/users/settings)
- [`/_user`](/api/endpoints/users/user)
- [`/users/{username}`](/api/endpoints/users/users-username)
- [`/users/{username}/feed`](/api/endpoints/users/users-username-feed)

### Lists

- [`/users/{username}/lists`](/api/endpoints/users/lists/lists)
- [`/users/{username}/lists/{listname}`](/api/endpoints/users/lists/lists-listname)
- [`/users/{username}/lists/{listname}/items`](/api/endpoints/users/lists/lists-listname-items)
- [`/lists/{listId}/items/{itemId}`](/api/endpoints/users/lists/lists-listId-items-itemId)
- [`/users/lists/_saved_to`](/api/endpoints/users/lists/lists-saved-to)
