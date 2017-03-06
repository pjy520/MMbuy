$(function () {

    // var a = decodeURI(location.search); //解码   转码:encodeURI
    // a = a.slice(1);
    // $('.Save_title .headline span').html(a);
    //
    //
    // var id = this.id - 0;

    var id = location.search.slice(1);

    $.ajax({
        url: 'http://192.168.23.72:3000/api/getcouponproduct',
        type: 'get',
        data: {couponid: id},
        dataType: 'json',
        success: function (data) {
            var html = template('product', data);
            $('.product').html(html);

            $.ajax({
                url: 'http://192.168.23.72:3000/api/getcouponproduct',
                type: 'get',
                data: {couponid: id},
                dataType: 'json',
                success: function (data) {
                    var html = template('boxes', data);
                    $('.win .boxes .pic ul').html(html);


                    var index = 0;
                    var imgwidth = $('.boxes .pic ul li img').width();
                    var lis = $('.boxes .pic ul li').length;


                    $('.case').on('click', function(){

                        index = $(this).index();
                        console.log(index);
                        $('.boxes .pic ul').css({
                            transform: 'translateX(' +  -index*imgwidth + 'px)'
                        });
                    })

                    $('.win').on('click', function(){
                        $('.win').css('display', 'none');
                    })



                    $('.product .case .img img').on('click', function () {
                        $('.win').css('display', 'block');

                    })

                    $('.win .left').on('click', function () {
                        stopBubble($('.win .left'));
                        if(index == 0){
                            return;
                        }else {
                            index--;
                            $('.boxes .pic ul').css({
                                transform: 'translateX(' +  -index*imgwidth + 'px)'
                            });
                        }
                    })
                    $('.win .right').on('click', function () {
                        stopBubble($('.win .left'));
                        console.log(imgwidth);
                        if(index == lis){
                            return;
                        }else {
                            index++;
                            $('.boxes .pic ul').css({
                                transform: 'translateX(' +  -index*imgwidth + 'px)'
                            });
                        }
                    })
                }
            })




        }
    })

    function stopBubble(e) {
        if(e && e.stopPropagation){
            e.stopPropagation();
        }else{
            window.event.cancelBubble = true;
        }
    }


})


