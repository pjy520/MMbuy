

$.ajax({
    url:'http://192.168.23.72:3000/api/getcategorytitle',
    type:'get',
    data:{},
    dataType:'json',
    success:function(data){
        var html = template('one',data);
        $('.content').html(html);

        $('.content .tv').each(function(i, v){
            $(v).on('click',function(){
                var id = this.id - 0;
                $.ajax({
                    url:'http://192.168.23.72:3000/api/getcategory',
                    type:'get',
                    data:{titleid:id},
                    dataType:'json',
                    success:function(data){
                        var html = template('two',data);
                        var ul = $('<ul class="ul clearfix"></ul>')
                        $(v).append(ul)
                        if( !$(v).find('li').hasClass('flag')){
                           $(v).find('.ul').html(html);
                        }else{
                           $(v).find('.ul').remove();
                        }
                    }
                })
            })
        })
    }
})