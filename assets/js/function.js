!(function() {

  parallaxJS();
  parallaxElement();
  navigationNodes();


  // HIDE SCROLL
  //-----------------------------------------
  function hideScroll() {
    var parent = $('.page-wrap'),
        child = $('.sections');

    child.style.paddingRight = child.offsetWidth - child.clientWidth + 'px';
  }


  // PARALLAX.JS
  //-----------------------------------------
  function parallaxJS() {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene, {
      calibrateY: true,
      invertY: false,
      invertX: false,
      limitY: 40,
      scalarY: 50
    });
  }


  // PARALLAX ON SCROLL
  //----------------------------------
  function parallaxElement() {
    $(window).scroll(function () {

      var wScroll = $(document).scrollTop();

      $('.header-title').css({
        transform: 'translateY(' + wScroll / 6 + '%)'
      });

    });
  }


  // NAVIGATION NODES
  //------------------------------------
  function navigationNodes() {

    var $root = $('html, body');
    var positions = getElementsHeight();

    $('#nav .node').click(function(e) {
      var $this = $(this),
          siblings = $this.parent().children(),
          elPosition = siblings.index($this);

      siblings.removeClass('active')
              .eq(elPosition)
              .addClass('active');


      $root.animate({
        scrollTop: positions[elPosition]
      }, 600);
    });


    $(window).scroll(function () {
      var wScroll = $(document).scrollTop();
      var nodes = $('#nav').children();

      // I can't optimize this code...
      if(wScroll >= positions[0]) {
        nodes.removeClass('active')
             .eq(0)
             .addClass('active');
      }
      if(wScroll >= positions[1]) {
        nodes.removeClass('active')
             .eq(1)
             .addClass('active');
      }
      if(wScroll >= positions[2]) {
        nodes.removeClass('active')
             .eq(2)
             .addClass('active');
      }
      if(wScroll >= positions[3]) {
        nodes.removeClass('active')
             .eq(3)
             .addClass('active');
      }
    });

  }


  // NAVIGATION old
  //----------------------------------
  function navigationPage() {
    var $root = $('html, body');
    var positions = getElementsHeight();
    // var positions = [0, 955, 1910, 2865];
    var currentPosition = getCurrentPosition();

    $(window).scroll(function () {
      currentPosition = getCurrentPosition();
    });

    $('.button-down').click(function () {

      if(currentPosition < positions.length - 1) {
        currentPosition++;

        $root.animate({
          scrollTop: positions[currentPosition]
        });
      }

    });

    $('.button-up').click(function () {

      if(currentPosition > 0) {
        currentPosition--;

        $root.animate({
          scrollTop: positions[currentPosition]
        });
      }

    });

  }


  // THE HEIGHT OF OUR ELEMENTS(#header, #create, #paint, #enjoy)
  //---------------------------------
  function getElementsHeight() {
    var arr = [];
    var height = $('section').height();

    for(var i = 0; i < 4; i++) {
      arr.push(height * i);
    }

    return arr;
  }


  // SCROLL POSITION
  //---------------------------------
  function getCurrentPosition() {
    var position = getElementsHeight();
    var scrollPosition = $(document).scrollTop();

    if(scrollPosition >= position[3]) {
      position = 3;
    } else if(scrollPosition >= position[2]) {
      position = 2;
    } else if(scrollPosition >= position[1]) {
      position = 1;
    } else  {
      position = 0;
    }

    return position;
  }



})();
