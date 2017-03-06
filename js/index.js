$.ajax({
    url: "http://192.168.23.25:3000/api/getindexmenu",
    dataType: 'json',
    Type: 'get',
    data: {},
    success: function (data) {
        var tag = template('one',data);
        $('.menu .info').html(tag);


        $('.menu li').each(function(i, e){
            if( i > 7){
                $(e).addClass('hide');
            }
        })

        $('.menu li:nth-child(8)').on('click', function(){
            $('.menu li').each(function(i, e){
                if( i > 7 ){
                    $(e).toggleClass('hide');
                }
            })
        })
    }
});

$.ajax({
    url:'http://192.168.23.25:3000/api/getmoneyctrl',
    dataType:'json',
    Type:'get',
    data:{},
    success:function(data){
        var html = template('two',data)
        $('.good').html(html);
    }
})

