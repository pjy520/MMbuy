
$(function(){

    $.ajax({
        url:'http://192.168.23.25:3000/api/getbaicaijiatitle',
        data:{},
        dataType:'json',
        type:'get',
        success:function(data){
            var html = template('title',data)
            $('.title ul').html(html);

            var width = 0;

            $('#ul>li').each(function(i, v){
                width += ( $(v).width());
            })

            $('.title ul').css('width', width + 25);

            function titleSwipe(){
                var maxX = 0;
                var minX = $('.title').width() - $('.title ul').width();
                var childBox = $('.title ul')[0];

                var maxSwipe = maxX + 100;
                var minSwipe = minX - 100;

                /*滑动起来*/
                var startX = 0;
                var moveX = 0;
                var distanceX = 0;
                var currX = 0;

                var setTranslateX = function(x){
                    childBox.style.transform = "translateX(" + x + ")"
                    childBox.style.webkitTransform = "translateX(" + x + "px)"
                }

                childBox.addEventListener('touchstart', function(e){
                    startX = e.touches[0].clientX;
                });

                childBox.addEventListener('touchmove', function(e){
                    moveX = e.touches[0].clientX;
                    distanceX = moveX - startX;
                    if( distanceX + currX < maxSwipe && distanceX + currX > minSwipe) {
                        setTranslateX(distanceX + currX);
                    }
                })
                window.addEventListener('touchend', function(){
                    if(currX + distanceX > maxX) {
                        currX = maxX
                        setTranslateX(currX);
                    } else if(currX + distanceX < minX) {
                        currX = minX;
                        setTranslateX(currX);
                    } else{
                        currX = currX + distanceX;
                    }
                })

                $.ajax({
                    url:'http://192.168.23.25:3000/api/getbaicaijiaproduct',
                    data:{titleid:0},
                    dataType:'json',
                    type:'get',
                    success:function(data){
                        var html = template('product',data);
                        $('.product').html(html);
                    }
                })

                var lis = childBox.querySelectorAll('li');
                lis[0].className = "now";
                itcast.tap(childBox,function(e){

                    var li = e.target.parentNode;

                    for(var i = 0 ; i < lis.length ; i ++){
                        lis[i].className = " ";

                        lis[i].index = i;
                    }
                    li.className = "now";

                    var translateX = -li.index * 50;

                    if(translateX > minX){
                        currY = translateX;
                        setTranslateX(currX);
                    }
                    else{
                        currX = minX;
                        setTranslateX(currX);
                    }

                    var id = $('.title ul .now a').attr('id');

                    $.ajax({
                        url:'http://192.168.23.25:3000/api/getbaicaijiaproduct',
                        data:{titleid:id},
                        dataType:'json',
                        type:'get',
                        success:function(data){
                            var html = template('product',data);
                            $('.product').html(html);
                        }
                    })


                });

            }
                titleSwipe();
        }
    })










})


