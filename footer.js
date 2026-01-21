const footerHTML = `
  <footer>
    <div class="footer-content">
      <p>Copyright © ${new Date().getFullYear()} Nathaniel Kessel</p>
      <p>This site works best in Firefox</p>
      <div class="social-links">
        <a href="https://github.com/njKessel" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/nathaniel-kessel-91447b296" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:kesselnj@mail.uc.edu"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
  </footer>
`;

document.getElementById("footer-placeholder").innerHTML = footerHTML;