# データベース設計

## users table
|Column|Type|Option|
|:--|:--|:--|
|nickname|string|null: false, unique: true|
|profile|text||

### Association
has_many: notes

## notes table
|Column|Type|Option|
|:--|:--|:--|
|title|string|null: false|
|user_id|integer|null: false, foreign_key|
|body|text||

### Association
belongs_to: user
