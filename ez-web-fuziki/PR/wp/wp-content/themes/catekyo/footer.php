<?php
  $isWebView = false; 
  if((strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile/') !== false) && (strpos($_SERVER['HTTP_USER_AGENT'], 'Safari/') == false)) {
      $isWebView = true; 
  } else if(isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
      $isWebView = true; 
  }
?><footer class="footer">
<?php if(!$isWebView){ ?>
  <div class="footer-nav-01">
    <ul class="list col-1">
      <li><a href="/contact/">お問い合わせ</a></li>
      <li><a href="/news/">お知らせ</a></li>
      <li><a href="/aboutus/">運営会社</a></li>
      <li><a href="/media/">メディア掲載情報</a></li>
    </ul>
  </div>

  <div class="footer-nav-02">
    <ul class="list-small col-2">
      <li><small><a href="/termsofservice/">利用規約</a></small></li>
      <li><small><a href="/tokusho/">特定商取引法に基づく表記</a></small></li>
      <li><small><a href="/payact/">資金決済法に基づく表記</a></small></li>
      <?php //      <li><small><a href="/points/">有償ポイント関する特約</a></small></li> ?>
      <li><small><a href="/cancellation/">キャンセルポリシー</a></small></li>
      <li><small><a href="/privacy/">プライバシーポリシー</a></small></li>
    </ul>
  </div>
<?php } ?>
  <p class="copyright">© 2020 OSHIETE CaTekyo</p>
</footer>
</div>