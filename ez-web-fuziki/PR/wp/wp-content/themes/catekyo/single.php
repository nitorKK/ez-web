<?php get_header(); ?>
<div class="wrapper">
<div class="wrap">
  <main class="main">
    <div class="main-content">
      <section class="l-page-multi-purpose">
    <?php
      if(have_posts()) {
        while(have_posts()){
          the_post();
          ?><h1><?php the_title(); ?></h1><?php 
          the_content();
        } 
      } else { ?>
      <p>表示できるコンテンツが見つかりません。</p><?php
      } ?>
      </section>
    </div>
    <!-- /.main-content -->
  </main>
</div>
<!-- /.wrap -->
<?php get_footer(); ?>
