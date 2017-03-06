$(function(){

    var shopId = 0 ;
    var areaId = 0 ;
    $.ajax({
        url:'http://192.168.23.72:3000/api/getgsproduct',
        data:{shopid:shopId,areaid:areaId},
        type:'get',
        dataType:'json',
        success:function(data){
            var html = template('product', data);
            $('.product').html(html);

        }
    })

    $('.title .box .store').on('click',function(){
        $.ajax({
            url:'http://192.168.23.72:3000/api/getgsshop',
            data:{},
            type:'get',
            dataType:'json',
            success:function(data){
                var html = template('one', data);
                $('.one ul').html(html);
                    $('.title ul li').on('click', function(){
                        $('.title .one ul').toggleClass('dis');
                        shopId = $(this).index();
                        $.ajax({
                            url:'http://192.168.23.72:3000/api/getgsproduct',
                            data:{shopid:shopId,areaid:areaId},
                            type:'get',
                            dataType:'json',
                            success:function(data){
                                var html = template('product', data);
                                $('.product').html(html);

                            }
                        })
                    })
            }
        })
    })


    $('.title .box .store').on('click',function(){
        $('.title .one ul').toggleClass('dis');
    })




    $('.title .box .district').on('click',function(){
        $.ajax({
            url:'http://192.168.23.72:3000/api/getgsshoparea',
            data:{},
            type:'get',
            dataType:'json',
            success:function(data){
                var html = template('two', data);
                $('.one ul').html(html);
                    $('.title ul li').on('click', function(){
                        $('.title .one ul').toggleClass('dis');
                        areaId = $(this).index();
                        $.ajax({
                            url:'http://192.168.23.72:3000/api/getgsproduct',
                            data:{shopid:shopId,areaid:areaId},
                            type:'get',
                            dataType:'json',
                            success:function(data){
                                var html = template('product', data);
                                $('.product').html(html);

                            }
                        })
                    })
            }
        })
    })


    $('.title .box .district').on('click',function(){
        $('.title .one ul').toggleClass('dis');
    })












})