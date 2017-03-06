/**
 *
 * Created by Administrator on 2017/2/24.
 */
$(function () {

    var a = location.search; // ?hww(value.categoryid)
    var id1 = a.slice(4) - 0;

    // var x = /([\u4e00-\u9f5a]+)/g
    // a = decodeURI(a);
    // var b = x.exec(a)[0]
    // localStorage.setItem("y",b);



    $.ajax({
        url: "http://192.168.23.72:3000/api/getcategorybyid",
        type: 'get',
        dataType: 'json',
        data: {categoryid:id1}, //0 1 2 3 4 5
        success: function (data) {
            var html = template('pro',data);
            $('.catalogue .home').html(html);

        }
    })



    var pageid = 1;
    $.ajax({
        url: "http://192.168.23.72:3000/api/getproductlist",
        type: 'get',
        dataType: 'json',
        data: {categoryid:id1, pageid: pageid},
        success: function (data) {
            var html = template('tv', data);
            $('.product').html(html);

            /*option*/
            var pageSize = data.pagesize
            var totalCount = data.totalCount;
            var opt = '';
            var list = Math.ceil(totalCount/pageSize);
            for(var i = 1; i <= list; i++) {
                opt += '<option value=' + i + '>' + i + '/' + list + '</option>'
            }
            $('#sel').append(opt);



            /*下一页*/
            $('.select .down button').on('click', function () {

                // console.log($('option')[pageid]);

                if (pageid < list) {
                    pageid++
                    $('option')[pageid - 1].selected = true;
                    $.ajax({
                        url: "http://192.168.23.72:3000/api/getproductlist",
                        type: 'get',
                        dataType: 'json',
                        data: {categoryid: id1, pageid: pageid},
                        success: function (data) {
                            var html = template('tv', data);
                            $('.product').html(html);

                        }
                    })
                }

            });

            /*上一页*/
            $('.select .up button').on('click', function () {
                if (pageid > 1) {  //3
                    pageid--;
                    $('option')[pageid - 1].selected = true;
                    $.ajax({
                        url: "http://192.168.23.72:3000/api/getproductlist",
                        type: 'get',
                        dataType: 'json',
                        data: {categoryid: id1, pageid: pageid}, //2
                        success: function (data) {
                            var html = template('tv', data);
                            $('.product').html(html);
                        }
                    });
                }


            });

            /*下拉*/
            $('#sel')[0].onchange = function () {
                var id = $('#sel option:selected').val() - 0;
                $.ajax({
                    url: "http://192.168.23.72:3000/api/getproductlist",
                    type: 'get',
                    dataType: 'json',
                    data: {categoryid: id1, pageid: id},
                    success: function (data) {
                        var html = template('tv', data);
                        $('.product').html(html);
                        pageid = id;
                    }
                })
            }
        }
    })


    // $.ajax({
    //     url: "http://192.168.23.28:3000/api/getproductlist",
    //     type: 'get',
    //     dataType: 'json',
    //     data: {categoryid: id1, pageid: pageid}, //2
    //     success: function (data) {
    //         // var html = template('tv', data);
    //
    //
    //     }
    // });






})






