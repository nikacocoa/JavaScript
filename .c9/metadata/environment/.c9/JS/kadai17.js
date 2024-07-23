{"filter":false,"title":"kadai17.js","tooltip":"/.c9/JS/kadai17.js","undoManager":{"mark":7,"position":7,"stack":[[{"start":{"row":0,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["const apiKey = 'DEMO_KEY';","","$(function () {","    $('#update').click(function (event) {","        let param = {","            date: $('#image-date').val(),","            api_key: apiKey","        };","        console.log(param);","        // AjaxによりWeb APIを呼び出す処理","        $.ajax({","            type: 'GET',                                    // GETで送信","            data: param,                                    // リクエストパラメーター","            url: 'https://api.nasa.gov/planetary/apod',     // URL","            dataType: 'json',                               // データ型 JSON","        })","        .done(function (res) {","            // 成功した場合","            console.log(res);  // レスポンスフィールドの内容","            $('#apod-image').attr('src', res.url);","            $('#apod-title').html(res.title);","            $('#apod-desc').html(res.explanation);","            $('#apod-copyright').html('© ' + (res.copyright || 'Public Domain'));","            $('#apod-date').html(res.date);","        })","        .fail(function (res) {","            // 失敗した場合","            $('#apod').html('対象外の日付を入力したか通信エラーです<br>ブラウザをリロードしてください');","        });","    });","});",""],"id":1}],[{"start":{"row":11,"column":68},"end":{"row":11,"column":69},"action":"remove","lines":["信"],"id":2},{"start":{"row":11,"column":67},"end":{"row":11,"column":68},"action":"remove","lines":["送"]},{"start":{"row":11,"column":66},"end":{"row":11,"column":67},"action":"remove","lines":["で"]},{"start":{"row":11,"column":65},"end":{"row":11,"column":66},"action":"remove","lines":["T"]},{"start":{"row":11,"column":64},"end":{"row":11,"column":65},"action":"remove","lines":["E"]},{"start":{"row":11,"column":63},"end":{"row":11,"column":64},"action":"remove","lines":["G"]},{"start":{"row":11,"column":62},"end":{"row":11,"column":63},"action":"remove","lines":[" "]},{"start":{"row":11,"column":61},"end":{"row":11,"column":62},"action":"remove","lines":["/"]},{"start":{"row":11,"column":60},"end":{"row":11,"column":61},"action":"remove","lines":["/"]}],[{"start":{"row":12,"column":73},"end":{"row":12,"column":74},"action":"remove","lines":["ー"],"id":3},{"start":{"row":12,"column":72},"end":{"row":12,"column":73},"action":"remove","lines":["タ"]},{"start":{"row":12,"column":71},"end":{"row":12,"column":72},"action":"remove","lines":["ー"]},{"start":{"row":12,"column":70},"end":{"row":12,"column":71},"action":"remove","lines":["メ"]},{"start":{"row":12,"column":69},"end":{"row":12,"column":70},"action":"remove","lines":["ラ"]},{"start":{"row":12,"column":68},"end":{"row":12,"column":69},"action":"remove","lines":["パ"]},{"start":{"row":12,"column":67},"end":{"row":12,"column":68},"action":"remove","lines":["ト"]},{"start":{"row":12,"column":66},"end":{"row":12,"column":67},"action":"remove","lines":["ス"]},{"start":{"row":12,"column":65},"end":{"row":12,"column":66},"action":"remove","lines":["エ"]},{"start":{"row":12,"column":64},"end":{"row":12,"column":65},"action":"remove","lines":["ク"]},{"start":{"row":12,"column":63},"end":{"row":12,"column":64},"action":"remove","lines":["リ"]},{"start":{"row":12,"column":62},"end":{"row":12,"column":63},"action":"remove","lines":[" "]},{"start":{"row":12,"column":61},"end":{"row":12,"column":62},"action":"remove","lines":["/"]},{"start":{"row":12,"column":60},"end":{"row":12,"column":61},"action":"remove","lines":["/"]}],[{"start":{"row":14,"column":71},"end":{"row":14,"column":72},"action":"remove","lines":["N"],"id":4},{"start":{"row":14,"column":70},"end":{"row":14,"column":71},"action":"remove","lines":["O"]},{"start":{"row":14,"column":69},"end":{"row":14,"column":70},"action":"remove","lines":["S"]},{"start":{"row":14,"column":68},"end":{"row":14,"column":69},"action":"remove","lines":["J"]},{"start":{"row":14,"column":67},"end":{"row":14,"column":68},"action":"remove","lines":[" "]},{"start":{"row":14,"column":66},"end":{"row":14,"column":67},"action":"remove","lines":["型"]},{"start":{"row":14,"column":65},"end":{"row":14,"column":66},"action":"remove","lines":["タ"]},{"start":{"row":14,"column":64},"end":{"row":14,"column":65},"action":"remove","lines":["ー"]},{"start":{"row":14,"column":63},"end":{"row":14,"column":64},"action":"remove","lines":["デ"]},{"start":{"row":14,"column":62},"end":{"row":14,"column":63},"action":"remove","lines":[" "]},{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"remove","lines":["/"]},{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"remove","lines":["/"]}],[{"start":{"row":13,"column":65},"end":{"row":13,"column":66},"action":"remove","lines":["L"],"id":5},{"start":{"row":13,"column":64},"end":{"row":13,"column":65},"action":"remove","lines":["R"]},{"start":{"row":13,"column":63},"end":{"row":13,"column":64},"action":"remove","lines":["U"]},{"start":{"row":13,"column":62},"end":{"row":13,"column":63},"action":"remove","lines":[" "]},{"start":{"row":13,"column":61},"end":{"row":13,"column":62},"action":"remove","lines":["/"]},{"start":{"row":13,"column":60},"end":{"row":13,"column":61},"action":"remove","lines":["/"]},{"start":{"row":13,"column":56},"end":{"row":13,"column":60},"action":"remove","lines":["    "]},{"start":{"row":13,"column":55},"end":{"row":13,"column":56},"action":"remove","lines":[" "]}],[{"start":{"row":11,"column":56},"end":{"row":11,"column":60},"action":"remove","lines":["    "],"id":6},{"start":{"row":11,"column":52},"end":{"row":11,"column":56},"action":"remove","lines":["    "]},{"start":{"row":11,"column":48},"end":{"row":11,"column":52},"action":"remove","lines":["    "]},{"start":{"row":11,"column":44},"end":{"row":11,"column":48},"action":"remove","lines":["    "]},{"start":{"row":11,"column":40},"end":{"row":11,"column":44},"action":"remove","lines":["    "]},{"start":{"row":11,"column":36},"end":{"row":11,"column":40},"action":"remove","lines":["    "]},{"start":{"row":11,"column":32},"end":{"row":11,"column":36},"action":"remove","lines":["    "]},{"start":{"row":11,"column":28},"end":{"row":11,"column":32},"action":"remove","lines":["    "]},{"start":{"row":11,"column":24},"end":{"row":11,"column":28},"action":"remove","lines":["    "]}],[{"start":{"row":12,"column":57},"end":{"row":12,"column":58},"action":"remove","lines":[" "],"id":7},{"start":{"row":12,"column":56},"end":{"row":12,"column":57},"action":"remove","lines":[" "]},{"start":{"row":12,"column":52},"end":{"row":12,"column":56},"action":"remove","lines":["    "]},{"start":{"row":12,"column":48},"end":{"row":12,"column":52},"action":"remove","lines":["    "]},{"start":{"row":12,"column":44},"end":{"row":12,"column":48},"action":"remove","lines":["    "]},{"start":{"row":12,"column":40},"end":{"row":12,"column":44},"action":"remove","lines":["    "]},{"start":{"row":12,"column":36},"end":{"row":12,"column":40},"action":"remove","lines":["    "]},{"start":{"row":12,"column":32},"end":{"row":12,"column":36},"action":"remove","lines":["    "]},{"start":{"row":12,"column":28},"end":{"row":12,"column":32},"action":"remove","lines":["    "]}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":28},"action":"remove","lines":["    "],"id":8}],[{"start":{"row":0,"column":0},"end":{"row":31,"column":0},"action":"remove","lines":["const apiKey = 'DEMO_KEY';","","$(function () {","    $('#update').click(function (event) {","        let param = {","            date: $('#image-date').val(),","            api_key: apiKey","        };","        console.log(param);","        // AjaxによりWeb APIを呼び出す処理","        $.ajax({","            type: 'GET',","            data: param,  ","            url: 'https://api.nasa.gov/planetary/apod',","            dataType: 'json',                               ","        })","        .done(function (res) {","            // 成功した場合","            console.log(res);  // レスポンスフィールドの内容","            $('#apod-image').attr('src', res.url);","            $('#apod-title').html(res.title);","            $('#apod-desc').html(res.explanation);","            $('#apod-copyright').html('© ' + (res.copyright || 'Public Domain'));","            $('#apod-date').html(res.date);","        })","        .fail(function (res) {","            // 失敗した場合","            $('#apod').html('対象外の日付を入力したか通信エラーです<br>ブラウザをリロードしてください');","        });","    });","});",""],"id":9},{"start":{"row":0,"column":0},"end":{"row":27,"column":0},"action":"insert","lines":["const apiKey = 'DEMO_KEY';","","document.addEventListener('DOMContentLoaded', function () {","    document.getElementById('update').addEventListener('click', function () {","        let param = {","            date: document.getElementById('image-date').value,","            api_key: apiKey","        };","        console.log(param);","        // AjaxによりWeb APIを呼び出す処理","        fetch(`https://api.nasa.gov/planetary/apod?date=${param.date}&api_key=${param.api_key}`)","            .then(response => response.json())","            .then(res => {","                // 成功した場合","                console.log(res);","                document.getElementById('apod-image').src = res.url;","                document.getElementById('apod-title').textContent = res.title;","                document.getElementById('apod-desc').textContent = res.explanation;","                document.getElementById('apod-copyright').textContent = '© ' + (res.copyright || 'Public Domain');","                document.getElementById('apod-date').textContent = res.date;","            })","            .catch(error => {","                // 失敗した場合","                document.getElementById('apod').innerHTML = '対象外の日付を入力したか通信エラーです<br>ブラウザをリロードしてください';","            });","    });","});",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":31,"column":0},"end":{"row":31,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":15,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1721722799210,"hash":"ca88296e576485d03458f97c7364c2048bca22c4"}