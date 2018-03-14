json.review @review.review
json.user_thumbnail @review.user.thumbnail.url
json.user_name @review.user.nickname
json.created_at @review.created_at.in_time_zone("Tokyo").to_s
