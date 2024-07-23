let itemList = [];      // 商品一覧
let categories = [];    // 大分類と小分類のデータ

//--- 共通で使用する要素を取得 ---
let cate1Element = document.getElementById('mainMenu');
let cate2Element = document.getElementById('subMenu');
let itemListElement = document.getElementById('itemList');

//--- 定義した関数 ---
// 大分類のoptionを追加する関数
function setMainMenu() {
    cate1Element.innerHTML = "";
    for (let i = 0; i < categories.length; i++) {
        let option = document.createElement('option');
        option.value = categories[i].main;
        option.text = categories[i].main;
        cate1Element.appendChild(option);
    }
}

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    cate2Element.innerHTML = "";
    if (categories[idx]) {
        for (let i = 0; i < categories[idx].sub.length; i++) {
            let option = document.createElement('option');
            option.value = categories[idx].sub[i];
            option.text = categories[idx].sub[i];
            cate2Element.appendChild(option);
        }
    }
}

// 商品一覧をtableとして表示
function viewItemList(tag) {
    let target = document.getElementById('itemList');
    target.innerHTML = "";

    if (tag !== undefined) {
        let html = "<table>";
        let count = 0;
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].tags.some(t => t === tag)) {
                if (count === 0) {
                    html += "<tr>";
                }
                html += "<td>";
                html += '<img src="img/item-sample.jpg" alt="商品の名前" width="180" height="123" />';
                html += '<p>商品名：&nbsp;' + itemList[i].name + '</p>';
                html += '<p>価格：&nbsp;&yen;' + itemList[i].price + '</p>';
                html += '<span><i class="fas fa-shopping-cart">ショッピングカート</i></span>';
                html += "</td>";
                if (count == 5) {
                    html += "</tr>";
                    count = 0;
                } else {
                    count++;
                }
            }
        }
        if (count > 0) html += "</tr>"; // 最後に閉じる
        html += "</table>";
        target.innerHTML = html;
    }
}

//--- イベントリスナーの定義 ---
cate1Element.addEventListener('change', function(){
    let idx = cate1Element.selectedIndex;
    setSubMenu(idx);
    viewItemList(categories[idx].sub[0]);
});

cate2Element.addEventListener('change', function(){
    let val = cate2Element.value;
    viewItemList(val);
});

// JSONファイルからデータを読み込む
$(function () {
    // 商品一覧の読み込み
    $.ajax({
        url: 'json/item.json',
        dataType: 'json'
    })
    .done(function (data) {
        itemList = data;
    })
    .fail(function () {
        alert("商品一覧のファイルが読み込めませんでした");
    });

    // 大分類と小分類のデータを読み込み
    $.ajax({
        url: 'json/categories.json',
        dataType: 'json'
    })
    .done(function (data) {
        categories = data.categories;
        setMainMenu();
    })
    .fail(function () {
        alert("カテゴリーデータのファイルが読み込めませんでした");
    });
});
