$(function(){
        // 系统时间
        function systemTime() {
            $('.time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
            $('.usa-time').text(moment().utcOffset("-08:00").format('YYYY-MM-DD HH:mm:ss'));
            setTimeout(systemTime, 500);
        }
        systemTime();

        function firstAnimateStart(){
          $('.city_bar').each(function(index){
            $(this).find('.bar').stop().animate({
              height:92,
              opacity:1
            },
            Math.random()*2500,
            firstAnimateEnd
            );
            $('.huaian .bar,.xiamen .bar,.guangzhou .bar').stop().animate({
              height:65,
              opacity:1
            },
            Math.random()*2500);
            $('.xianggang .bar').stop().animate({
              height:55,
              opacity:1
            },Math.random()*2500);
          })
        }
        function firstAnimateEnd(){
          setTimeout(function(){
            $('.bar').stop().animate({
              opacity:0
            },
            1000,
            function(){
              $('.bar').css({
                height:40,
              })
            })
          },5000);
          secondAnimateStart();
        }
        function secondAnimateStart(){
          setTimeout(function(){
            $('.ani').stop().animate({
              opacity:1
            },
            1000,
            secondAnimateEnd
            )
          },5300)
        }
        function secondAnimateEnd(){
          setTimeout(function(){
            $('.ani').stop().animate({
              opacity:0
            },1000)
          },3000)
          thirdAnimateStart()
        }
        function thirdAnimateStart(){
          setTimeout(function(){
            $('.city_bar3 .item').addClass('on');
          },3300)
          setTimeout(function(){
            $('.city_bar3 .item').removeClass('on');
            fourAnimateStart();
          },10000)
        }
        function fourAnimateStart(){
          setTimeout(function(){
            $('.city_bar4 .item').addClass('on');
          },2000)
          setTimeout(function(){
            $('.city_bar4 .item').removeClass('on');
            setTimeout(function(){
              firstAnimateStart()
            },1000)
          },10000)
        }
        firstAnimateStart();
    });    