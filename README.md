# chat-space DB設計
## userテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text||
|image|string||
|user_id|integer| null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :messages


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
## Association
- has_many :groups_users
- has_many :messages
- has_many :user, through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user