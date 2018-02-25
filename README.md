# データベース設計

## users table (devise以外で追加するカラム)
|Column|Type|Option|
|:--|:--|:--|
|nickname|string|null: false, unique: true|
|profile|text||

### Association
has_many: notes
has_many: purchases

## notes table
|Column|Type|Option|
|:--|:--|:--|
|title|string|null: false|
|user_id|integer|null: false, foreign_key|
|body|text||
|title_image|string||
|value|string|null: false, default: 0|

### Association
belongs_to: user
has_many: purchases

## purchases table
|Column|Type|Option|
|:--|:--|:--|
|note_id|integer|null: false, foreign_key|
|user_id|integer|null: false, foreign_key|

### Association
belongs_to: user
belongs_to: note
