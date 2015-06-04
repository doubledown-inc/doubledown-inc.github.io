var delay, fitHeader, handleSignup, lastId, menuItems, navigateTo,
  removeHoverOnTouch, scrollItems, sendEvent, setActiveMenuItem, stickyMenu;
delay = function(e, t) {
    return setTimeout(t, e)
  }, sendEvent = function(e, t, n, o) {
    return null == n && (n = ""), null == o && (o = void 0), ga("send", "event",
      e, t, n, o)
  }, fitHeader = function() {
    return $(".header-container.autoresize").css("height", $(window).height())
  }, stickyMenu = function() {
    var e, t;
    return e = $(".navigation"), t = $(".header-container").height() - e.height(),
      e.hasClass("topstick") && (t = 0), $(window).scrollTop() > t ? e.addClass(
        "sticky") : e.removeClass("sticky")
  }, navigateTo = function(e, t, n) {
    var o;
    return null == n && (n = void 0), e.preventDefault(), o = $(t).offset().top -
      $(".navigation").height(), $("html body").animate({
        scrollTop: o
      }, "slow", n)
  }, menuItems = $(".navigation .right a.scrollbased"), scrollItems = menuItems
  .map(function() {
    var e;
    return e = $($(this).attr("href")), e.length ? e : void 0
  }), lastId = null, menuItems.click(function(e) {
    var t, n;
    return e.preventDefault(), t = $(this).attr("href"), n = "#" === t ? 0 :
      $(t).offset().top, $("html body").stop().animate({
        scrollTop: n
      }, "slow")
  }), setActiveMenuItem = function() {
    var e, t, n, o;
    return e = $(window), n = e.scrollTop() + e.height() - 200, t = scrollItems
      .map(function() {
        return $(this).offset().top < n ? this : void 0
      }), t = t[t.length - 1], o = t && t.length ? t[0].id : "", lastId !== o ?
      (lastId = o, menuItems.removeClass("active"), $(
        ".navigation .right a[href=#" + o + "]").addClass("active")) : void 0
  }, removeHoverOnTouch = function() {
    return Modernizr.touch !== !1 ? $("body").removeClass("no-touch") : void 0
  }, $(window).resize(function() {
    return fitHeader()
  }), $(window).scroll(function() {
    return stickyMenu(), setActiveMenuItem()
  }), $(document).ready(function() {
    return fitHeader(), stickyMenu(), removeHoverOnTouch()
  });
