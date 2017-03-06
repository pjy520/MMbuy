$(function(){

    var internal ={
        result:[]
    };                  //内存

    $.ajax({
        url:'http://192.168.23.72:3000/api/getinlanddiscount',
        type:'get',
        dataType:'json',
        data:{},
        success:function(data){

            for( var i = 0; i < 4; i++) {
                internal.result.push(data.result[i]);
                var html = template('one', internal)
                $('.b_box').html(html);
            }

            var clientH = document.documentElement.clientHeight; //可视高度

            window.addEventListener('scroll',function(){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
                if( ( (clientH + scrollTop ) == $( document).height() ) && (internal.result.length < data.result.length)) {
                    for( var i = 0;  i < 4; i++) {
                        internal.result.push(data.result[ internal.result.length ]);
                    }
                    var html = template('one', internal);
                    $('.b_box').html(html);
                }
            })
        }
    })

})