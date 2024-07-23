const apiKey = 'DEMO_KEY';

$(function () {
    $('#update').click(function (event) {
        let param = {
            date: $('#image-date').val(),
            api_key: apiKey
        };
        console.log(param);
        // AjaxによりWeb APIを呼び出す処理
        $.ajax({
            type: 'GET',
            data: param,  
            url: 'https://api.nasa.gov/planetary/apod',
            dataType: 'json',                               
        })
        .done(function (res) {
            // 成功した場合
            console.log(res);  // レスポンスフィールドの内容
            $('#apod-image').attr('src', res.url);
            $('#apod-title').html(res.title);
            $('#apod-desc').html(res.explanation);
            $('#apod-copyright').html('© ' + (res.copyright || 'Public Domain'));
            $('#apod-date').html(res.date);
        })
        .fail(function (res) {
            // 失敗した場合
            $('#apod').html('対象外の日付を入力したか通信エラーです<br>ブラウザをリロードしてください');
        });
    });
});
