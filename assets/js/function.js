!(function() {

  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene, {
    calibrateY: true,
    invertY: false,
    invertX: false,
    limitY: 40,
    scalarY: 50
  });


  // PARALLAX ON SCROLL
  //----------------------------------
  $(window).scroll(function () {

    var wScroll = $(document).scrollTop();

    $('.header-title').css({
      transform: 'translateY(' + wScroll / 6 + '%)'
    });

  });

})();
