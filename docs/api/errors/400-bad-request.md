# 400 - Bad Request

- deletedContent must be a bool.

  The `deleteContent` query parameter was not a boolean value.

- `already-admin`

  The user is already an admin.

- `already-not-admin`

  The user is already not an admin.

- `already_logged_in`

  The user is already logged in. You do not need to send another login request.

- `already-voted`

  The user has already voted on this post/comment. You do not need to send another vote request.

- `bad_badge_id`

  The badge ID being requested is incorrect.

- `bad_event`

  The event being sent is incorrect.

- `comment-max-depth-reached`

  You are attempting to reply past the maximum comment depth.

- `comment-reply-to-deleted`

  You are attempting to send a reply to a deleted comment.

- `empty_username`

  The username being sent is empty.

- `file_size_exceeded`

  The file being uploaded is bigger than the maximum file size accepted by the server.

- `invalid_action`

  The user action being sent is incorrect.

- `invalid-community-name`

  The community name being sent is incorrect. Check the [Community type](/api/types#community) to ensure you have the correct name.

- `invalid_cursor`

  The feed pagination cursor being sent is incorrect.

- `invalid_expires`

  The expiration date for the ban being send is incorrect.

- `invalid_filter`

  The feed filter being sent is incorrect.

- `invalid_http_method`

  The HTTP method by which the request was sent is incorrect. Check the documentation for the [endpoint](/api/endpoints/) to ensure that you have the correct HTTP method.

- `invalid_id`

  The ID being sent is incorrect.

- `invalid_image_id`

  The image ID being sent is incorrect.

- `invalid_json`

  The JSON body being sent is incorrect. Check the documentation for the [endpoint](/api/endpoints/) you're sending to, as well as the [type](/api/types) for the data you're sending.

- `invalid_mute_type`

  The mute type being sent is incorrect. Check the [Mute type](/api/types#mute) to ensure that you have the correct type.

- `invalid_page`

  The page request being sent is incorrect.

- `invalid-password`

  The password being sent is empty/too short.

- `invalid_post_type`

  The post type being sent is incorrect. Check the [Post type](/api/types#post) to ensure that you have the correct type.

- `invalid_report_type`

  The report type being sent is incorrect. Check the [Report type](/api/types#report) to ensure that you have the correct type.

- `invalid-set`

  The community set option being sent is incorrect.

- `invalid-sort`

  The community/feed sort option being sent is incorrect.

- `invalid-url`

  The URL request is incorrect.

- `invalid-username`

  The username being sent is not correct.

- `no_username`

  The username was not sent in the request.

- `password_not_match`

  The password being sent does not match the one in the database.

- `post/title-too-short`

  The title of the post is too short. Check the [Post type](/api/types#post) to ensure that you have the correct title length.

- `post-type/unsupported`

  The post type being sent is not supported. Check the [Post type](/api/types#post) to ensure that you have the correct type.

- `unsupported_action`

  The admin/user action being sent is not supported.

- `user/invalid-group`

  The user group being sent is incorrect. Check the [types](/api/types) to ensure that you have the correct user group for the data you're sending.
