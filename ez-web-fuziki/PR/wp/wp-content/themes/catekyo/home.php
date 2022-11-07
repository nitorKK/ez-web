<?php get_header(); ?>
<?php
  // $page_obj = get_page_by_path('home');
  // $page = get_post( $page_obj );
  // echo $page->post_content;
?>
<div class="wrapper">
<?php
  if(false) { // ToDo: if 障害情報の記事がある時だけ表示 を実装する ?>
<section class="important-notice"> 
  <a href="/">
    <div class="important-notice-inner">
      <div class="important-notice--header">
        <h2 class="important-notice--title">
        障害情報</h2>
      </div>
      <div class="important-notice--body">
        <ul class="notice">
          <li class="notice-list">
            <p class="notice-list--text">
              <span>現在、レッスン機能の一部がご利用いただけなくなっております。</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </a>
</section>
<?php
  } ?>
<main class="main">
<section class="keyvisual">
    <div class="keyvisual-body">

      <picture>
        <source media="(min-width: 1101px)" srcset="/assets/img/home-keyvisual_pc-min.jpg">
        <source media="(min-width: 768px)" srcset="/assets/img/home-keyvisual_pc_1100-min.jpg">
        <source media="(min-width: 300px)" srcset="/assets/img/home-keyvisual_sp-min.jpg">
        <img src="/assets/img/home-keyvisual_pc-min.jpg" alt="憧れの先輩を、先生に">
      </picture>

      <div class="keyvisual-text sp-only">
      <div class="l-page-home text-center">
          <p><span class="span-block">CaTekyoとは、<span class="span-block">日本初の家庭教師スキルシェアサービス。</span></p>
          <p class="text-left">1つのアプリで講師検索、授業、決済、復習が完結し、東大早慶生を始めとした講師の授業が、スマホからも書き込めるホワイトボードを使って、オンラインでいつでも受けられます。</p>
  
          <p class="text-left">勉強の問題はもちろん、モチベーション維持や大学生活のことまで、歳が近い先輩にサクッと質問・相談ができます。</p>
  
          <p class="text-left">世界中のどこにいたって、憧れの先輩から教えてもらえる。私たちは、そんなチャンスをすべての学生にお届けします。</p>
  
          <p>家庭教師スキルシェアサービス<span class="big-text span-block">OSHIETE CaTekyo</span></p>
        </div>
    </div>
  </section>

  <div class="wrap">
    <div class="home-main--content l-wrap-inner">
      <div class="l-page-home">
        <div class="c-cv-button appdl-band">
          <div class="appdl-text"><span class="sp-text">アプリダウンロード</span><span class="pc-text">アプリのダウンロードはコチラ</span>
          </div>
          <div class="appdl-wrap">
          <div style="color: #fff; margin-right: 4px; font-size: 2rem;">
            <span style="font-size: 1.4rem;">正式リリース前</span><br>
            <span>ベータ版</span>
          </div>
          <div style="font-size: 4rem;color: #fff;transform: rotate(90deg);margin-right: 16px;">▲</div>
            <div class="appdl-appstore">
              <a href="https://apps.apple.com/jp/app/oshiete-catekyo/id1507731452">
                <img src="/assets/img/bn_app.png" srcset="/assets/img/bn_app.png 1x,
                  /assets/img/bn_app@2x.png 2x" alt="app">
              </a>
            </div>
            <div class="appdl-googleplay">
              <a href="/">
                <img src="/assets/img/bn_google.png" srcset="/assets/img/bn_google.png 1x,
              /assets/img/bn_google@2x.png 2x" alt="google">
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="movie-wrap">
        <video src="/assets/video/oshiete_catekyo-main.mp4" preload="auto" controls></video>
      </div>

      <section class="service-section">
        <div class="service-section-inner" data-bg="color-w">
          <div class="l-page-home col-2">
            <div class="right">
              <h2 class="h2-green--bigtitle">家庭教師を、ポケットに。</h2>
              <span>お気に入りの先生を探すのも、<br class="pc">スマホから書き込めるホワイトボードでの授業も<br class="pc">予約、授業、決済、復習まで<br
                  class="pc">全部が1つのアプリでできる。<span class="pc-layout">スマホアプリ1つで、全てが完結。<br
                    class="pc">あなたのポケットに、家庭教師を。</span>
              </span>
            </div><!-- right -->
            <div class="left">
              <picture>
                <source media="(min-width: 769px)" srcset="/assets/img/home-sub-key_wide_01_spmock_pc-min.png">
                <img class="service-img" src="/assets/img/home-sub-key_wide_01_spmock_sp-min.png" alt="家庭教師を、ポケットに。">
              </picture>
            </div><!-- left -->
          </div>
        </div>
      </section>

      <section class="CaTekyo-servicePoint">
        <div class="l-page-home">
          <div class="CaTekyo-servicePoint--header">
            <h2 class="h2-home--title"><span class="txt-block">OSHIETE CaTekyoの</span><span
                class="marker">4つのポイント</span></h2>
          </div>

          <div class="CaTekyo-servicePoint--body point-1" id="point-1">
            <div class="p-SVG">
              <span class="points points-svg">
                <svg>
                  <rect x="2" y="2" rx="25" fill="none" width=200 height="50"></rect>
                </svg>
                <span class="points-txt">Point 1</span>
              </span>
            </div><!-- p-SVG -->
            <h3 class="h3-home point-title">憧れの大学の<br class="sp">先輩から直接学べる</h3>

            <div class="point-img">
              <img src="/assets/img/point-01.svg">
            </div><!-- point-img -->

            <p class="point-txt  point-1">
            日本を代表する大学の、憧れの先輩から先生を選べます。自分自身の受験体験談を元に、将来後輩になるかもしれないあなたに、親身に教えてくれます。最新の受験テクニックも、先生から学ぶことができます。</p>
          </div><!-- CaTekyo-servicePoint--body -->

          <div class="CaTekyo-servicePoint--body" id="point-2">
            <div class="p-SVG">
              <span class="points points-svg">
                <svg>
                  <rect x="2" y="2" rx="25" fill="none" width=200 height="50"></rect>
                </svg>
                <span class="points-txt">Point 2</span>
              </span>
            </div><!-- p-SVG -->
            <h3 class="h3-home point-title">質の高い講師陣を<br class="sp">教科ごとに選べる</h3>


            <div class="point-img">
              <img src="/assets/img/point-02.svg">
            </div><!-- point-img -->

            <p class="point-txt  point-2">
              従来の家庭教師サービスは、先生を気軽に変更することができません。OSHIETE
              CaTekyoでは、教科ごとに自分にあった先生を選ぶことが可能です。また、講師は東大早慶医学部を中心に、独自の採用チェックリストで厳選しています。</p>
          </div><!-- CaTekyo-servicePoint--body point-2-->

          <div class="CaTekyo-servicePoint--body" id="point-3">
            <div class="p-SVG">
              <span class="points points-svg">
                <svg>
                  <rect x="2" y="2" rx="25" fill="none" width=200 height="50"></rect>
                </svg>
                <span class="points-txt">Point 3</span>
              </span> 
            </div>

            <h3 class="h3-home point-title">時間や場所の<br class="sp">制約がない</h3>

            <div class="point-img">
              <img class="points-img" height="300" src="/assets/img/point-03.svg">
            </div>

            <p class="point-txt  point-3">
              「朝方なので、朝学びたい」「通学中に学びたい」「部活動のあと、夜に学びたい」といった様々なニーズに対応できます。いつでも、どこでも、好きな場所で学ぶことができます。<br class="pc">OSHIETE
              CaTekyoは、予約から授業受講まで、スマホ1つで完結します。
            </p>
          </div><!-- CaTekyo-servicePoint--body point-3-->

          <div class="CaTekyo-servicePoint--body" id="point-4">
            <div class="p-SVG">
              <span class="points points-svg">
                <svg>
                  <rect x="2" y="2" rx="25" fill="none" width=200 height="50"></rect>
                </svg>
                <span class="points-txt">Point 4</span>
              </span>
            </div>

            <h3 class="h3-home point-title">ストレスフリーな<br class="sp">学習環境</h3>

            <div class="point-img">
              <img class="points-img" height="300" src="/assets/img/point-04.svg">
            </div>

            <p class="point-txt  point-4">
              OSHIETE
              CaTekyoは、受験生の学習環境を第一に考え、スマホ学習を専門に開発されたアプリです。講師登録している現役大学生もアプリ開発に参加しています。ホワイトボード機能やビデオ機能など、学ぶための機能が豊富。教わる側はもちろん、教える側にもストレスがないアプリです。
            </p>
          </div><!-- CaTekyo-servicePoint--body -->
        </div><!-- l-page-home -->
      </section>

      <div class="CaTekyo-service--img">
        <picture>
          <source media="(min-width: 769px)" srcset="/assets/img/online-square_pc.svg">
          <img src="/assets/img/online-square_sp-min.png" alt="憧れの先輩を、先生に">
        </picture>
      </div>

      <div class="teach-CaTekyo">
        <div class="teach-CaTekyo--header">
          <h2 class="h2-home--title"><span class="txt-block">OSHIETE CaTekyoは<span class="pc-only">、</span></span><span
              class="marker">こんな方におすすめ</span></h2>
        </div>

        <div class="teach-CaTekyo--container">
          <div class="teach-CaTekyo--body">
            <div class="contents card-recom">
              <div class="contents-inner left">
                <h3 class="h3-home">地方の学校に<br>通っている方</h3>
                <img class="teach-img teach-img--left" src="/assets/img/recome-01.svg">
              </div>
              <p class="txt">
              東京から離れた所に住んでいても、スマホで授業が受けられるから、憧れの大学の先輩から直接学ぶ事ができます。勉強だけでなく、大学生活の事など何でも聞く事が出来ます。
              </p>
            </div><!-- contents card-recom -->
          </div><!-- teach-CaTekyo--body -->

          <div class="teach-CaTekyo--body border1">
            <div class="contents card-recom">
              <div class="contents-inner right">
                <img class="teach-img teach-img--right" src="/assets/img/recome-02.svg">
                <h3 class="h3-home">全寮制の学校に<br>通っている方</h3>

              </div>
              <p class="txt">
              全寮制の学校で学校から出る事が出来なくても、授業はスマホさえあれば寮でも受ける事が出来ます。あなたの学校の先輩も、もしかしたら見つかるかも！
              </p>
            </div><!-- contents card-recom -->
          </div><!-- teach-CaTekyo--body border-->

          <div class="teach-CaTekyo--body border2">
            <div class="contents card-recom">
              <div class="contents-inner left">
                <h3 class="h3-home">海外に<br>お住まいの方</h3>
                <img class="teach-img teach-img--left" src="/assets/img/recome-03.svg">
              </div>
              <p class="txt">
              帰国子女で日本の大学に行っている先輩も沢山登録しているから、似た環境で育ってきた先輩から、多くの事を学べます。AO入試や推薦入試の事も沢山聞く事が出来ます。
              </p>
            </div><!-- contents card-recom -->
          </div><!-- teach-CaTekyo--body -->

          <div class="teach-CaTekyo--body border3">
            <div class="contents card-recom">
              <div class="contents-inner right">
                <h3 class="h3-home">部活動・習い事に<br>忙しい方</h3>
                <img class="teach-img teach-img--right" src="/assets/img/recome-04.svg">
              </div>
              <p class="txt">
              部活動・習い事に忙しいあなたも、自分の都合の良い隙間時間に授業を受けられます。文武両道の先生から、スポーツから勉強まで何でも質問しましょう！
              </p>
            </div><!-- contents card-recom -->
          </div><!-- teach-CaTekyo--body -->
        </div><!-- teach-CaTekyo--container -->
        <hr class="bar"><!-- 線 -->
      </div><!-- teach-CaTekyo -->


      <div class="examinee-CaTekyo">
        <div class="l-page-home">
          <div class="examinee-CaTekyo--header">
            <h2 class="h2-home--title"><span class="txt-block">OSHIETE CaTekyoは<span class="pc-only">、</span><br
                  class="pc"></span><span class="marker">受験生のこんな悩みを解決します！</span></h2>
          </div>

          <div class="examinee-CaTekyo--body">
            <div class="content">
              <div class="contents-inner">
                <p class="txt">
                <span class="text-green">「コロナの影響があるので、できる限り自宅で勉強したい」</span><br class="pc-only"><span class="text-orange">「塾も通っている、でも時々他の先生にも質問してみたい」</spam><br
                    class="pc-only"><span class="text-green">「科目ごとに先生を変えたい」</span><span class="text-orange">「自分の好きなタイミングで学びたい」</span><br class="pc-only"><span class="text-green">「フィーリングがあう先生から学びたい」</span><br
                    class="pc-only"><span class="text-orange">「自分が志望する大学・学部の先生から学びたい」</span><br class="pc-only"><span class="text-green">「自分が志望する大学・学部のことや、大学生活のことを聞いてみたい」</span><br
                    class="pc-only"><span class="text-orange">「学べる環境が限られているが、先生はどうやって合格したのか聞いてみたい」</span>
                </p>
              </div>
            </div>
          </div><!-- examinee-CaTekyo--body -->
        </div><!-- l-page-home -->
      </div><!-- examinee-CaTekyo -->

      <div class="l-page-home">
        <div class="c-cv-button appdl-band">
          <div class="appdl-text"><span class="sp-text">アプリダウンロード</span><span class="pc-text">アプリのダウンロードはコチラ</span>
          </div>
          <div class="appdl-wrap">
          <div style="color: #fff; margin-right: 4px; font-size: 2rem;">
            <span style="font-size: 1.4rem;">正式リリース前</span><br>
            <span>ベータ版</span>
          </div>
          <div style="font-size: 4rem;color: #fff;transform: rotate(90deg);margin-right: 16px;">▲</div>
            <div class="appdl-appstore">
              <a href="https://apps.apple.com/jp/app/oshiete-catekyo/id1507731452">
                <img src="/assets/img/bn_app.png" srcset="/assets/img/bn_app.png 1x,
              /assets/img/bn_app@2x.png 2x" alt="app">
              </a>
            </div>
            <div class="appdl-googleplay">
              <a href="/">
                <img src="/assets/img/bn_google.png" srcset="/assets/img/bn_google.png 1x,
          /assets/img/bn_google@2x.png 2x" alt="google">
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="parent-section">
        <div class="parent-section-inner" data-bg="color-w">
          <div class="l-page-home">
            <div class="parent-left">
              <h2 class="h2-green--title">保護者の皆さまへ</h2>
              <span>オンライン家庭教師サービス「OSHIETE CaTekyo」では、”学生に良い教育環境を提供する”をコンセプトに、アプリを開発しました。<br class="pc-only">
                お子さまが、”学びたい！”と思ったとき、それが1番学習意欲が高まるときです。”学びたい！”と思った時、応援してあげてください。<br class="pc-only">
                OSHIETE CaTekyoでは、単なる「教える」「教わる」の関係ではなく、お子さまの成長を助ける場にもなったら…と考えています。</span>
              <p><a class="parent-link" href="/forparent/">保護者の皆さまへ</a></p>
              <div class="parent-right">
              <img class="parent-img" src="/assets/img/to-parents.svg">
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="information">
        <h2 class="h2-green--title">お知らせ</h2>
        <div class="l-page-multi-purpose">
          <div class="c-news-list">
            <dl>
            <?php
            $news_query = new WP_Query(
              array(
                'post_type'      => 'post',
                'category_name' => 'news',
                'posts_per_page' => 3,
              )
            );
            if ( $news_query->have_posts() ){
              while ( $news_query->have_posts() ){
                $news_query->the_post(); ?>
                <dt class="linear"><?php the_date(); ?></dt>
                <dd><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></dd>
                <?php
              }
            }
            wp_reset_postdata();
            ?>
            </dl>
          </div>
        </div>
        <div class="more">
          <a class="link-more" href="/news/">もっとみる</a>
        </div>
      </section>

    </div><!-- home-main-content l-wrap-inner -->
  </div><!-- wrap -->
</main>






<?php get_footer(); ?>
