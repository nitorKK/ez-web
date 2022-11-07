<?php
  // セキュリティホールになりかねないxmlrpc を無効化（無理っぽい、chmod かな）
  // add_filter(‘xmlrpc_enabled’, ‘__return_false’);

  // http のレスポンスヘッダーになんか余計な Link が入るのを消す
  remove_action('template_redirect', 'rest_output_link_header', 11, 0);

    // category.php に /category/ と入らないように変更
  function remcat_function($link) {
    return str_replace("/category/", "/", $link);
  }
  add_filter('user_trailingslashit', 'remcat_function');

  function remcat_flush_rules() {
    global $wp_rewrite;
    $wp_rewrite->flush_rules();
  }
  add_action('init', 'remcat_flush_rules');

  function remcat_rewrite($wp_rewrite) {
    $new_rules = array('(.+)/page/(.+)/?' => 'index.php?category_name='.$wp_rewrite->preg_index(1).'&paged='.$wp_rewrite->preg_index(2));
    $wp_rewrite->rules = $new_rules + $wp_rewrite->rules;
  }
  add_filter('generate_rewrite_rules', 'remcat_rewrite');

  // Gutenberg （ブロックエディタ） にフロント側の汎用 CSS を読ませる
  function mytheme_enqueue_block_editor() {
    wp_enqueue_style( 'mytheme-block-editor-style', esc_url( home_url() ) . '/assets/css/editor.css' );
  }
  add_action( 'enqueue_block_editor_assets', 'mytheme_enqueue_block_editor' );

  // 管理画面にページ追加
  function custom_menu_page() {
    add_menu_page('デプロイ関連', 'デプロイ処理', 'manage_options', 'custom_menu_page', 'add_custom_menu_page', 'dashicons-admin-generic', 4);
  }
  function add_custom_menu_page() {
    '<div class="wrap"><h2>デプロイ</h2></div>';
  }
  add_action('admin_menu', 'custom_menu_page');