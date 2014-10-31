function loadImg (imgArr, callback, current) {
  var total=imgArr.length;
  var c=0;
  for (var i = total - 1; i >= 0; i--) {
  var imgObj=new Image;
  var load = function(){
      c++;
      var percent=c/total;
      current(percent);
      if(c == total) { callback() }
  }
      imgObj.onload=load;
      imgObj.onerror=load;
      imgObj.src=imgArr[i]
  };




} 

var KKslider={};
var SwiperConfig={
  bgSound:'bgsound.mp3',
  
}

KKslider.sliderData=[

{
bg:'img/bg2.jpg',
text:[
        {
          textValue:'亲爱我的宝贝 ',
          animateType:'bounceIn',
          delay:0,
          position:['5%','5%'],
          style:'font-size:32px'
        },

        {
          textValue:'你在想什么？',
          animateType:'bounceIn',
          position:['15%','12%'],
          delay:1000,
          style:''
        },

        {
          textValue:'我饿了',
          animateType:'bounceInLeft',
          position:['15%','30%'],
          delay:2000,
          style:'color:#f00;font-size:50px'
        },

        {
          textValue:'吃吧',
          animateType:'bounceIn',
          position:['35%','45%'],
          delay:4000,
          style:''
        }
    ],
photo:[
      {
        src:'img/icon.png',
        animateType:'bounceInUp',
        delay:3000,
        position:['30%','55%'],
        style:'width:20%'
      }
    ]
   },

{
bg:'img/bg3.jpg',
text:[
        {
          textValue:'我不吃奶！ ',
          animateType:'rotateIn',
          delay:0,
          position:['5%','5%'],
          style:'font-size:32px'
        },

        {
          textValue:'我要吃饼干！！',
          animateType:'rotateIn',
          position:['15%','12%'],
          delay:1000,
          style:''
        },

        {
          textValue:'我要饼干！！！',
          animateType:'bounceInLeft',
          position:['15%','30%'],
          delay:2000,
          style:''
        },
         {
          textValue:'我要饼干！！！',
          animateType:'bounceInRight',
          position:['40%','40%'],
          delay:2500,
          style:''
        },
        {
          textValue:'我要饼干！！！',
          animateType:'bounceLeft',
          position:['12%','50%'],
          delay:3000,
          style:''
        },
        {
          textValue:'我要饼干！！',
          animateType:'bounceInRight',
          position:['40%','50%'],
          delay:3500,
          style:'font-size:40px'
        },
        {
          textValue:'我要饼干！！',
          animateType:'bounceInLeft',
          position:['15%','60%'],
          delay:4000,
          style:'font-size:44px'
        },
          {
          textValue:'吃吧',
          animateType:'bounceInUp',
          position:['45%','70%'],
          delay:7000,
          style:'font-size:44px;color:#f84506'
        }


       
    ],
photo:[
      {
        src:'img/icon3.png',
        animateType:'bounceInUp',
        delay:6000,
        position:['5%','85%'],
        style:'width:20%'
      },
      {
        src:'img/icon3.png',
        animateType:'bounceInUp',
        delay:6200,
        position:['25%','85%'],
        style:'width:20%'
      },
      {
        src:'img/icon3.png',
        animateType:'bounceInUp',
        delay:6400,
        position:['50%','85%'],
        style:'width:20%'
      },
      {
        src:'img/icon3.png',
        animateType:'bounceInUp',
        delay:6500,
        position:['75%','85%'],
        style:'width:20%'
      }
     
    ]
   },

   {
bg:'img/bg4.jpg',
text:[
        {
          textValue:'自定义文字 ',
          animateType:'rotateIn',
          delay:0,
          position:['5%','5%'],
          style:'font-size:32px'
        }
       
    ],
photo:[
      {
        src:'img/icon3.png',
        animateType:'bounceInUp',
        delay:2000,
        position:['15%','25%'],
        style:'width:20%'
      }
     
    ]
   },

      {
bg:'img/bg5.jpg',
text:[
        {
          textValue:'自定义文字 ',
          animateType:'rotateIn',
          delay:0,
          position:['5%','5%'],
          style:'font-size:32px'
        }
       
    ],
photo:[
      {
        src:'img/icon3.png',
        animateType:'bounceInLeft',
        delay:1000,
        position:['15%','25%'],
        style:'width:20%'
      }
     
    ]
   },

      {
bg:'img/bg6.jpg',
text:[
        {
          textValue:'33333 ',
          animateType:'rotateIn',
          delay:0,
          position:['25%','45%'],
          style:'font-size:32px'
        }
       
    ],
photo:[
      {
        src:'img/icon3.png',
        animateType:'bounceInUp',
        delay:500,
        position:['15%','25%'],
        style:'width:20%'
      }
     
    ]
   }
,

      {
bg:'img/bg7.jpg',
text:[
        {
          textValue:'自定义文字 ',
          animateType:'rotateIn',
          delay:0,
          position:['25%','35%'],
          style:'font-size:32px'
        }
       
    ],
photo:[
      {
        src:'img/icon3.png',
        animateType:'bounceInLeft',
        delay:1000,
        position:['25%','25%'],
        style:'width:20%'
      }
     
    ]
   }


]

  //解析配置文件

  KKslider.init = function(){

    loadImg(['img/gua-font.jpg','img/gua-bg.jpg','img/gua-font2232323.jpg'],
      function(){
       $('#loading').hide();
       KKslider.setScrach();
    }
    ,function(percent){
      var percent=percent*100+'%';
      $('#loading').find('span').css({
        width:percent
      })

    })






  }

  //创建涂抹

   KKslider.setScrach = function(){
    //创建刮刮卡dom
     $('<div class="swiper-slide"><div id="scrach"></div></div>').prependTo('.swiper-wrapper');
     $('#scrach').Scratch({
                    fontImg:'img/gua-font.jpg',
                    bgImg :'img/gua-bg.jpg',
                    percent:0.1,
                    callback:function(){
                       $('canvas').animate({
                        backgroundSize:'120%',
                        backgroundPosition:'center center'
                      },30000)
                      KKslider.setSwiper();
                      $('.page').fadeIn();
                      KKslider.playMusic()

                     
                    }
                  })
   }


   KKslider.playMusic=function(){

     var isplay;
    var audio = document.createElement("audio");
        audio.src = "http://cc.stream.qqmusic.qq.com/C200004KpBC94f3TeM.m4a?vkey=66E5307DCB770572DD35B93411EDD25BC78D22BAF3E5A0FDC9F7F5FBDA016093&guid=2394075745&fromtag=0";
        audio.addEventListener("canplaythrough", function () {
           $('#music').fadeIn().addClass('on').on('touchstart',function(){
                       if(isplay){ 
                      //audio.currentTime = 0;
                      $(this).removeClass('on').addClass('off');
                      isplay=false;
                      audio.pause();
                      }
                       else{
                      $(this).removeClass('off').addClass('on');
                      audio.play();
                       isplay=true
                      }

           });
            audio.play();
            isplay=true;
        }, false); 
        audio.addEventListener('ended', function () {
        setTimeout(function () { audio.play(); }, 500);
        }, false);

  

   }

  

        
  
  KKslider.setSwiper = function(){
       var $swiperWrapper=$('.swiper-wrapper');
       $.each(KKslider.sliderData,function(k,v){
       var $swiperSlide=$('<div class="swiper-slide"></div>');
            //写入文字
            $(v.text).each(function(k,text){
                $('<h1 rel="anim" delay="'+text.delay+'" animateType="'+text.animateType+'" style="'+text.style+'">')
                .css({
                  left:text.position[0],
                  top :text.position[1]
                })
                .html(text.textValue)
                .appendTo($swiperSlide)
                  
            })
             //写入图片
            $(v.photo).each(function(k,photo){
                $('<img rel="anim" delay="'+photo.delay+'" animateType="'+photo.animateType+'" style="'+photo.style+'">')
                .css({
                  left:photo.position[0],
                  top :photo.position[1]
                })
                .attr('src',photo.src)
                .appendTo($swiperSlide)
                  
            })

       $swiperSlide.css({
         background:'url('+v.bg+')',
         backgroundSize:'cover',
         backgroundRepeat:'no-repeat',
         backgroundPosition:'center center',
       }).appendTo($swiperWrapper);
       })

      $swiperWrapper.appendTo($('.swiper-container'));
        (function(){
         if($('.swiper-wrapper').size()>0){
          var swiperEg= $('.swiper-container').swiper({
                mode: 'vertical',
                onSlideChangeEnd:function(){
                  //删除所有class
                  $('.swiper-slide').find('[rel="anim"]').each(function(){
                    $(this).removeClass();
                  })
                  var cIndex=swiperEg.activeIndex;
                  console.log('当前是第几个silder:'+cIndex);
                  $('.swiper-slide').eq(cIndex).find('[rel="anim"]').each(function(){
                    var _$this=$(this);
                    var className=$(this).attr('animateType');
                    var delay=$(this).attr('delay') || 0;

                    setTimeout(function(){
                      _$this.addClass(className);
                    },delay)

                    
                  }) 
                  
                }
              })
          }
          else{
            window.setTimeout(aguments.callee,10)
          }
        })()


  }      

 
  
    



