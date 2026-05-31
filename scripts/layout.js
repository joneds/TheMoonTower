/**
 * TMT Layout - Shared site structure for The Moon Tower
 * Injects header, footer, CSS, and scripts into each page.
 */
(function () {
  var base = window.TMT_BASE || '.';

  // --- Inject CSS into <head> ---
  var cssFiles = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
    base + '/style/critical.css',
    base + '/style/mobile-responsive.css',
    base + '/style/d-css-foundation.min.css',
    base + '/style/additional-fonts.css',
    base + '/style/css-font-package-v2.min.css',
    base + '/style/d-css-runtime-desktop-one-package-new.min.css',
    base + '/style/492640e06bddf8e4bb1584b3da8d2519.css',
    base + '/style/c4e46ce8_1.min.css'
  ];

  var head = document.head;
  cssFiles.forEach(function (href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    head.appendChild(link);
  });

  // Override WOW.js fade-in animations - force all elements visible immediately
  // Also reset default body margin to eliminate white border
  var wowFix = document.createElement('style');
  wowFix.textContent = '.wow { visibility: visible !important; animation-name: none !important; } body { margin: 0; padding: 0; } .dmDefaultMatrixContentRow { margin-bottom: 15px; }';
  head.appendChild(wowFix);

  // --- Build Header HTML ---
  function getHeaderHTML() {
    return '<div class="dmHeaderContainer fHeader d-header-wrapper">' +
      '<div id="hcontainer" class="u_hcontainer dmHeader p_hfcontainer" freeheader="true">' +
      '<div class="dmHeaderResp dmHeaderStack">' +
      '<div class="u_1403047746 dmRespRow" style="text-align:center;">' +
      '<div class="dmRespColsWrapper">' +
      '<div class="dmRespCol small-12 medium-12 large-12">' +
      '<div class="u_1597732955 imageWidget align-center">' +
      '<img src="' + base + '/pages/logo.jpg" alt="The Moon Tower Logo">' +
      '</div>' +
      '<div class="dmNewParagraph" data-uialign="center" style="transition:opacity 1s ease-in-out;">' +
      '<div style="text-align:center;">' +
      '<span style="font-weight:400;font-family:\'Alfa Slab One\';" class="m-font-size-36 lh-1 font-size-72">' +
      '<font style="color:rgb(255,255,255);">THE MOON TOWER</font>' +
      '</span></div></div>' +
      '</div></div></div>' +
      '<div class="dmRespRow dmHeaderContent freeHeaderRow2">' +
      '<div class="dmRespColsWrapper clearfix">' +
      '<div class="dmRespCol large-12 medium-12 small-12">' +
      '<nav class="u_1591568712 dmLinksMenuHeader effect-bottom2 main-navigation unifiednav dmLinksMenu" role="navigation" data-nav-structure="HORIZONTAL">' +
      '<ul class="unifiednav__container">' +
      navItem('HOME', base + '/index.html') +
      navItem('INTERVIEWS', base + '/interviews/interviews.html') +
      navItem('LIVE REVIEWS', base + '/live_reviews/live_reviews.html') +
      navItem('GALLERY', base + '/pages/gallery.html') +
      navItem('MORE', base + '/pages/other.html') +
      navItem('ABOUT US', base + '/pages/about_us.html') +
      navItem('CONTACT', base + '/pages/contact.html') +
      '</ul></nav>' +
      '</div></div></div>' +
      '</div></div></div>';
  }

  function navItem(text, href) {
    var current = isCurrentPage(href) ? ' currentPage dmNavItemSelected' : '';
    return '<li class="unifiednav__item-wrap">' +
      '<a href="' + href + '" class="unifiednav__item' + current + '">' +
      '<span class="nav-item-text">' + text + '</span></a></li>';
  }

  function isCurrentPage(href) {
    var path = window.location.pathname;
    // Normalize: strip trailing slashes
    var linkPath = href.replace(/^\.+/, '').replace(/\/index\.html$/, '/');
    if (path.endsWith('/index.html')) path = path.replace(/index\.html$/, '');
    if (path === '/' && (linkPath === '/index.html' || linkPath === '/')) return true;
    return path.indexOf(linkPath.replace(/^\//, '')) !== -1 && linkPath !== '/';
  }

  // --- Build Footer HTML ---
  function getFooterHTML() {
    return '<div class="dmFooterContainer">' +
      '<div id="fcontainer" class="f_hcontainer dmFooter p_hfcontainer">' +
      '<div class="dmFooterResp">' +
      '<div class="dmRespRow dmDividerRow">' +
      '<div class="dmRespColsWrapper"><div class="large-12 medium-12 small-12 dmRespCol">' +
      '<div class="dmDividerWrapper clearfix"><hr class="dmDivider defaultDivider"></div>' +
      '</div></div></div>' +
      '<div class="u_1445152907 dmRespRow" style="text-align:center;">' +
      '<div class="dmRespColsWrapper"><div class="dmRespCol small-12 medium-12 large-12">' +
      '<div class="u_1302341021 dmNewParagraph" data-uialign="center" style="display:block;">' +
      '<div style="text-align:center;"><span class="m-specific lh-1 m-font-size-14">' +
      '<span style="font-family:\'Alfa Slab One\';">' +
      '<font style="color:rgb(255,255,255);" class="font-size-22 lh-1 m-font-size-14">' +
      'Live Reviews : Interviews : Live Music Photography : and More</font></span></span></div>' +
      '<div><span style="font-weight:400;font-family:\'Alfa Slab One\';" class="m-specific lh-1 m-font-size-14">' +
      '<div style="text-align:center;"><font style="color:rgb(255,255,255);" class="font-size-22 lh-1 m-font-size-14">' +
      '&nbsp; &nbsp; &nbsp;Established July 2017</font></div></span></div>' +
      '</div></div></div></div>' +
      '<div class="dmRespRow dmFooterContent">' +
      '<div class="dmRespColsWrapper"><div class="u_1578758088 dmRespCol small-12 medium-12 large-12">' +
      '<div class="u_1742908814 align-center text-align-center dmSocialHub">' +
      '<div class="socialHubWrapper"><div class="socialHubInnerDiv">' +
      '<a href="http://instagram.com/themoontower_" target="_blank">' +
      '<span class="fa-brands fa-instagram" style="font-size:60px;color:white;"></span></a>' +
      '</div></div></div>' +
      '</div></div></div>' +
      '</div></div></div>';
  }

  // --- Build PhotoSwipe HTML ---
  function getPhotoSwipeHTML() {
    return '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">' +
      '<div class="pswp__bg"></div>' +
      '<div class="pswp__scroll-wrap">' +
      '<div class="pswp__container">' +
      '<div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div>' +
      '</div>' +
      '<div class="pswp__ui pswp__ui--hidden">' +
      '<div class="pswp__top-bar">' +
      '<div class="pswp__counter"></div>' +
      '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>' +
      '<button class="pswp__button pswp__button--share" title="Share"></button>' +
      '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>' +
      '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>' +
      '<div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div>' +
      '</div>' +
      '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">' +
      '<div class="pswp__share-tooltip"></div></div>' +
      '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>' +
      '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>' +
      '<div class="pswp__caption"><div class="pswp__caption__center"></div></div>' +
      '</div></div></div>';
  }

  // --- Assemble the page on DOM ready ---
  function initLayout() {
    var pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    var content = pageContent.innerHTML;

    // Set body attributes
    document.body.id = 'dmRoot';
    document.body.className = 'supportsFontIcons dmRoot dmDesktopBody fix-mobile-scrolling dmLargeBody dmBodyNoIscroll fullyLoaded';

    // Build full page structure
    document.body.innerHTML =
      '<div id="dm" class="dmwr">' +
      '<div class="dm_wrapper standard-var5 widgetStyle-3 standard">' +
      '<div class="dm-home-page">' +
      '<div class="standardHeaderLayout dm-bfs dm-layout-home dmPageBody dmFreeHeader d-page-1545507856 runtime-module-container" id="dm-outer-wrapper" data-buttonstyle="FLAT">' +
      '<div class="dmOuter">' +
      '<div class="dmInner" style="min-height:722px;">' +
      '<div class="dmLayoutWrapper standard-var dmStandardDesktop">' +
      '<div><div id="iscrollBody"><div id="site_content">' +
      getHeaderHTML() +
      '<div class="dmBody"><div id="dm_content" class="dmContent">' +
      content +
      '</div></div>' +
      getFooterHTML() +
      '</div></div></div>' +
      '</div></div></div></div></div></div></div>' +
      getPhotoSwipeHTML();

    // Load jQuery for basic interactions
    loadScripts([
      base + '/scripts/jquery.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/jquery.flexslider.min.js'
    ], function () {
      // Initialize flexslider if present
      if (window.jQuery) {
        jQuery(function() {
          var slider = jQuery('.flexslider');
          if (slider.length && jQuery.fn.flexslider) {
            slider.flexslider({ animation: 'fade', slideshowSpeed: 7000 });
          }
        });
      }
    });
  }

  function loadScripts(urls, callback) {
    var i = 0;
    function next() {
      if (i >= urls.length) {
        if (callback) callback();
        return;
      }
      var script = document.createElement('script');
      script.src = urls[i++];
      script.onload = next;
      script.onerror = next;
      document.body.appendChild(script);
    }
    next();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }
})();
