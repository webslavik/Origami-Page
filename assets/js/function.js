!(function() {

  parallaxJS();
  parallaxElement();
  navigationNodes();


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

    window.addEventListener('scroll', function () {
      var wScroll = window.pageYOffset;

      var headerTitle = document.querySelector('.header-title');
      headerTitle.style.transform = 'translateY(' + wScroll / 6 + '%)';
    });

    // with jQuery
    //-------------------------------------------
    // $(window).scroll(function () {
    //
    //   var wScroll = $(document).scrollTop();
    //
    //   $('.header-title').css({
    //     transform: 'translateY(' + wScroll / 6 + '%)'
    //   });
    //
    // });
  }


  // NAVIGATION NODES
  //------------------------------------
  function navigationNodes() {

    // var root = document.querySelector('body');
    var forEach = Array.prototype.forEach; // link on forEach function
    var nodes = document.querySelectorAll('#nav .node');
    var positions = getElementsHeight();

    // remove class
    function removeClassFromNodes() {
      forEach.call(nodes, function (elem) {
        elem.classList.remove('active');
      });
    }

    // change class 'active' on click
    forEach.call(nodes, function (elem, i) {
      elem.addEventListener('click', function() {

        removeClassFromNodes();

        this.classList.add('active');

        // How write this in Vanilla JS???
        //------------------------------------
        $('html, body').animate({
          scrollTop: positions[i]
        }, 600);

      });

    });

    // change class 'active' on scroll
    window.addEventListener('scroll', function() {
      var wScroll = window.pageYOffset;

      if(wScroll >= positions[3]) {
        removeClassFromNodes();
        nodes[3].classList.add('active');
      }
      else if(wScroll >= positions[2]) {
        removeClassFromNodes();
        nodes[2].classList.add('active');
      }
      else if(wScroll >= positions[1]) {
        removeClassFromNodes();
        nodes[1].classList.add('active');
      } else {
        removeClassFromNodes();
        nodes[0].classList.add('active');
      }

    });


  }


  // function navigationNodes() {
  //
  //   var $root = $('html, body');
  //   var positions = getElementsHeight();
  //
  //   $('#nav .node').click(function(e) {
  //     var $this = $(this),
  //         siblings = $this.parent().children(),
  //         elPosition = siblings.index($this);
  //
  //     siblings.removeClass('active')
  //             .eq(elPosition)
  //             .addClass('active');
  //
  //
  //     $root.animate({
  //       scrollTop: positions[elPosition]
  //     }, 600);
  //   });
  //
  //
  //   $(window).scroll(function () {
  //     var wScroll = $(document).scrollTop();
  //     var nodes = $('#nav').children();
  //
  //     // I can't optimize this code...
  //     if(wScroll >= positions[0]) {
  //       nodes.removeClass('active')
  //            .eq(0)
  //            .addClass('active');
  //     }
  //     if(wScroll >= positions[1]) {
  //       nodes.removeClass('active')
  //            .eq(1)
  //            .addClass('active');
  //     }
  //     if(wScroll >= positions[2]) {
  //       nodes.removeClass('active')
  //            .eq(2)
  //            .addClass('active');
  //     }
  //     if(wScroll >= positions[3]) {
  //       nodes.removeClass('active')
  //            .eq(3)
  //            .addClass('active');
  //     }
  //   });
  //
  // }


  // THE HEIGHT OF OUR ELEMENTS(#header, #create, #paint, #enjoy)
  //---------------------------------
  function getElementsHeight() {
    var arr = [];
    // var height = $('section').height();
    var height = document.querySelector('section').clientHeight;

    for(var i = 0; i < 4; i++) {
      arr.push(height * i);
    }

    return arr;
  }


  // SCROLL POSITION
  //---------------------------------
  function getCurrentPosition() {
    var position = getElementsHeight();
    // var scrollPosition = $(document).scrollTop();
    var scrollPosition = window.pageYOffset;

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
