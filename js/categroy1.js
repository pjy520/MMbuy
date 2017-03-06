

$.ajax({
    url:'http://192.168.23.72:3000/api/getcategorytitle',
    type:'get',
    data:{},
    dataType:'json',
    success:function(data){
        var html = template('one',data);
        $('.content').html(html);

        $('.panel-body').each(function(i, v){
            // var id = v.id - 0;
            // console.log(id);
            $.ajax({
                url:'http://192.168.23.72:3000/api/getcategory?titleid='+data.result[i].titleId,
                type:'get',
                // data:{titleid: data.result[i].titleId },
                dataType:'json',
                success:function(data){
                    var html = template('two',data);
                    $(v).html(html);
                }
            })
        })


    }
})

