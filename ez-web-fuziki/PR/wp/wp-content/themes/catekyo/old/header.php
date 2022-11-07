<?php
  $isWebView = false; 
  if((strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile/') !== false) && (strpos($_SERVER['HTTP_USER_AGENT'], 'Safari/') == false)) {
      $isWebView = true; 
  } else if(isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
      $isWebView = true; 
  }
?><!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OSHIETE Catekyo</title>
<link rel="stylesheet" href="/assets/css/common.css?<?php echo( date( 'Ymd_His', filemtime( "{$_SERVER['DOCUMENT_ROOT']}/assets/css/common.css" ) ) ) ?>">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Cabin&family=Montserrat&family=Open+Sans:wght@300&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="/favicon.ico">
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js'></script>
<script src="/assets/js/nav.js"></script>

<body class="<?php
  if(is_home()){
    echo('home');
  } elseif(is_page()) {
    $page = get_post( get_the_ID() );
    echo($classes[] = $page->post_name);
  }
?>">

<?php if(!$isWebView){ ?>
<header class="header">
  <div class="logo-wrap">
    <!-- <a href="/"><img src="/assets/img/logo.svg" alt=""></a> -->
    <a href="/"><img src="/assets/img/logo.png" alt=""></a>
    <a class="nav-button" href="#">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
  <nav class="nav-wrap">
    <ul class="nav">
      <li class="nav-item"><a class="navbar-link" href="/fanc/"><span class="linear">アプリの機能</span></a></li>
      <li class="nav-item"><a class="navbar-link" href="/teacher/"><span class="linear">講師について</span></a></li>
      <li class="nav-item"><a class="navbar-link" href="/howtouse/"><span class="linear">使い方と料金</span></a></li>
      <li class="nav-item"><a class="navbar-link" href="/forparent/"><span class="linear">保護者の方へ</span></a></li>
      <li class="nav-item"><a class="navbar-link" href="/forteacher/"><span class="linear">講師の方へ</span></a></li>
      <li class="nav-item"><a class="navbar-link" href="/faq/"><span class="linear">よくある質問</span></a></li>
    </ul>
  </nav>
</header>
<?php } ?>