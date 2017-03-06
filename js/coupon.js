$(function(){

    $.ajax({
        url:'http://192.168.23.72:3000/api/getcoupon',
        type:'get',
        dateType:'json',
        data:{},
        success:function(data){
            var html = template('product', data);
            $('.product').html(html)
        }

    })


})