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

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user|references| null: false, foreign_key: true|
|group|references| null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
## Association
- has_many :groups_users
- has_many :messages
- has_many :users, through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user