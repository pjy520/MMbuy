$(function(){


    var productid = location.search;
    var id = productid.slice(1) - 0
    console.log(id)
    $.ajax({
        url:'http://192.168.23.72:3000/api/getmoneyctrlproduct',
        type:'get',
        dataType:'json',
        data:{productid:id},
        success:function(data){
            var html = template('one',data)
            $('.d_header').html(html)
        }
    })


    $.ajax({
        url:'http://192.168.23.72:3000/api/getmoneyctrlproduct',
        type:'get',
        dataType:'json',
        data:{productid:id},
        success:function(data){
            var html = template('two',data)
            $('.content').html(html)
        }
    })


    $.ajax({
        url:'http://192.168.23.72:3000/api/getmoneyctrlproduct',
        type:'get',
        dataType:'json',
        data:{productid:id},
        success:function(data){
            var html = template('three',data)
            $('.big_img').html(html)
        }
    })

    $.ajax({
        url:'http://192.168.23.72:3000/api/getmoneyctrlproduct',
        type:'get',
        dataType:'json',
        data:{productid:id},
        success:function(data){
            var html = template('four',data)
            $('.city').html(html)
        }
    })

    function ajax( className, Vid){
        $.ajax({
            url:'http://192.168.23.72:3000/api/getmoneyctrlproduct',
            type:'get',
            dataType:'json',
            data:{productid:id},
            success:function(data){
                var html = template( Vid, data)
                $(className).html(html)
            }
        })
    }

    ajax('.comment', 'five');
    // ajax('.city', 'four');








})






