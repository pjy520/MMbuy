

$(function(){

    var a = location.search;
    var pid = a.slice(1) - 0;

    // console.log(pid)
    $.ajax({

        url:'http://192.168.23.72:3000/api/getproduct',
        dataType:'json',
        data:{productid:pid},
        type:'get',
        success:function(data) {
            var html = template('product', data)
            $('.box1').html(html);
        }
    });

    $.ajax({
        url:'http://192.168.23.72:3000/api/getproduct',
        dataType:'json',
        data:{productid:pid},
        type:'get',
        success:function(data) {
            var html = template('jd', data)
            $('.jd').html(html);
        }
    })

    $.ajax({
        url:'http://192.168.23.72:3000/api/getproductcom',
        dataType:'json',
        data:{productid:pid},
        type:'get',
        success:function(data) {
            var html = template('wypj', data)
            $('.big-content').html(html);
        }
    })

    $.ajax({
        url:'http://192.168.23.72:3000/api/getproduct',
        dataType:'json',
        data:{productid:pid},
        type:'get',
        success:function(data) {
            var html = template('catalog', data)
            $('.catalogue .home .down').html(html);

            var categoryid = data.result[0].categoryId
            $.ajax({
                url:'http://192.168.23.72:3000/api/getcategorybyid',
                dataType:'json',
                data:{categoryid:categoryid},
                type:'get',
                success:function(data) {
                    var html = template('cd', data)
                    $('.catalogue .home .top').html(html);
                }
            })
        }
    })










})


