const body_footer = document.getElementById('body-footer')
body_footer.insertAdjacentHTML('afterbegin', `
    <div class="footer-body">
        <ul class="left-panel list-inline mb-0 p-0">
          <li class="list-inline-item">
            <img src="../assets/logo altie putih.png" height="20px" alt="" />
            <a href="https://hidayah.sambong.web.id/">HIDAYAH</a>
          </li>
        </ul>
        <div class="right-panel">
          Copyright ©
          ${new Date().getFullYear()}
          . by <a href="./dashboard.html">sambong.web.id</a>.
        </div>
      </div>
    `);
