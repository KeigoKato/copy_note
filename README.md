# データベース設計  
  
## 各テーブルの仕様  
- usersテーブル
  - 本アプリに会員登録している全てのユーザー情報を記録する。
- notesテーブル
  - 投稿された全ての記事の情報を記録している。
- dealsテーブル
  - usersテーブルとnotesテーブルを結合するための中間テーブル。
  - このテーブルを経由することで、以下の情報を取得できる。
  - 売買の取引が行われた記事について、
    - --> 誰がどの記事を書いたのか
    - --> 誰がどの記事を購入したのか
    - --> ある記事は誰が書いたのか
    - --> ある記事は誰が購入したのか

## 各オブジェクトの取得方法  
user.notes_of_author ... あるユーザーが書いた記事  
user.notes_of_subscriber ... あるユーザーが買った記事  
user.deals_of_author ... あるユーザーが著者として参加した取引の簡易リスト  
user.deals_of_subscriber ... あるユーザーが買手として参加した取引の簡易リスト  
note.authors ... ある記事を書いたユーザー  
note.subscribers ... ある記事を買ったユーザー  
note.deals ... ある記事が売買された取引  
  
## users table (devise以外で追加するカラム)  
|Column|Type|  
|:--|:--|  
|nickname|string|  
|profile|text|  
  
### Association  
has_many :notes
has_many :deals_of_author, class_name: "Deal", foreign_key: "author_id"  
has_many :deals_of_subscriber, class_name: "Deal, foreign_key: "subscriber_id"  
has_many :notes_of_author, through: :deals_of_author, source: "note"  
has_many :notes_of_subscriber, through: :deals_of_subscriber, source: "note"  
  
## notes table  
|Column|Type|  
|:--|:--|  
|title|string|  
|user_id|integer|  
|body|text|  
|title_image|string|  
|value|string|  
  
### Association  
belongs_to :user
belongs_to :author, class_name: "User"  
belongs_to :subscriber, class_name: "User"  
belongs_to :note  
  
## deals table  
|Column|Type|  
|:--|:--|  
|author_id|integer|  
|subscriber_id|integer|  
|note_id|integer|  
  
### Association  
has_many :deals  
has_many :authors, through: :deals  
has_many :subscribers, through: :deals  
