<?php get_header();
  $category = get_the_category();
  if($category){
    $cat_name = $category[0]->cat_name;
  }
?>
<div class="wrapper">
<div class="wrap">
  <main class="main">
    <div class="main-content">
      <article class="l-page-multi-purpose">
    <?php
      if(have_posts()) {
        ?>
        <h1><?php echo $cat_name; ?></h1>
        <ul><?php
        while(have_posts()){
          the_post();
          ?><li><?php the_date(); ?> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li><?php
        }
        ?></ul><?php
      } else { ?>
      <p>表示できるコンテンツが見つかりません。</p><?php
      } ?>
      </article>
    </div>
    <!-- /.main-content -->
  </main>
</div>
<!-- /.wrap -->
<?php get_footer(); ?>