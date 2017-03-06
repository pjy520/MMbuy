$(function(){

    var pageid = 0;

    $.ajax({
        url:'http://192.168.23.72:3000/api/getmoneyctrl',
        dataType:'json',
        type:'get',
        data:{pageid:pageid},
        success:function(data){
            var html = template('two',data)
            $('.good').html(html);
            console.log(data);


            /*下拉框*/
            var pageSize = data.pagesize
            var totalCount = data.totalCount;
            var opt = '';
            var list = Math.ceil( totalCount / pageSize ); //15
            for(var i = 1; i <= list; i++) {
                opt += '<option value=' + i + '>' + ( i ) + '/' +  list  + '</option>'
            }
            $('#sel').append(opt);


            /*下一页*/
            $('.select .down button').on('click', function () {

                // console.log($('option')[pageid]);

                if (pageid < list -1) { //15
                    pageid++   //15  14
                    $('option')[pageid].selected = true;
                    $.ajax({
                        url: "http://192.168.23.72:3000/api/getmoneyctrl",
                        type: 'get',
                        dataType: 'json',
                        data: {pageid: pageid},  //14
                        success: function (data) {
                            var html = template('two', data);
                            $('.good').html(html);

                        }
                    })
                }

            });

            /*上一页*/
            $('.select .up button').on('click', function () {
                if (pageid >= 1) {  //1
                    pageid--; //0
                    $('option')[pageid].selected = true;
                    $.ajax({
                        url: "http://192.168.23.72:3000/api/getmoneyctrl",
                        type: 'get',
                        dataType: 'json',
                        data: { pageid: pageid}, //0
                        success: function (data) {
                            var html = template('two', data);
                            $('.good').html(html);
                        }
                    });
                }


            });

            /*下拉*/
            $('#sel')[0].onchange = function () {
                var id = $('#sel option:selected').val() - 0; //3
                $.ajax({
                    url: "http://192.168.23.72:3000/api/getmoneyctrl",
                    type: 'get',
                    dataType: 'json',
                    data: {pageid: id - 1 },
                    success: function (data) {
                        var html = template('two', data);
                        $('.good').html(html);
                        pageid = id - 1;
                    }
                })
            }

        }
    })














})