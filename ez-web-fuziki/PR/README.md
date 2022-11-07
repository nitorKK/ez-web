# PR_Site
A public relations website created with WordPress
WIP

## サイトの構造
- / (Site Root)
  - index.php (WordPress 呼び出し用)
  - .htaccess
  - .gitignore
  - README.md(本ファイル)
  - assets/
    - scss/
    - css/
    - js/
  - wp/
    - wp-admin/
    - wp-content/
    - wp-includes/
    - wp-config.php

### WordPress の Theme 設計
- ファイルの構成と

- ページ類
  - index.php
    - 汎用ページ（基本的に使用せず）
  - home.php
    - ホーム
  - page.php
    - 汎用個別ページ
  - category.php
    - お知らせ一覧など
  - single.php
    - お知らせ詳細ページ
  - 404.php

- パーツ類
  - header.php
  - footer.php

- 必要なら以下も作成
  - page-pagename.php
    - カスタム個別ページ
  - category-categoryname.php
    - お知らせ系以外に一覧ページをカスタムして出したい場合


### SCSS, JS などのアセットの構成と設計
- ディレクトリ構成
- Sass は SCSS記法
- Type Script 使わない

## サーバー構築
- sh書いたので、別ページで。

## WP-CLI の使い方
普通に管理画面を使っても良いですが、便利なコマンドをいくつか。
- こちらも別ページかな

## アップデート関連
- ダウンタイム0でアップデートするには
- VMごとバックアップとってやりましょう
- DNFパッケージのアップデート（OS）
- WordPressの本体とプラグインのアップデート

C:\Users\nitor\Downloads\Flat-UI-master\Flat-UI-master\README.md