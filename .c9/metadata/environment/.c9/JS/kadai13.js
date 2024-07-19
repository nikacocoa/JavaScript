{"filter":false,"title":"kadai13.js","tooltip":"/.c9/JS/kadai13.js","undoManager":{"mark":24,"position":24,"stack":[[{"start":{"row":0,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["// 商品データの定義","let products = [","    {","        category: \"調理器具\",","        subcategory: \"鍋\",","        items: [","            { name: \"フライパン\", price: 3000 },","            { name: \"鍋\", price: 4500 },","            { name: \"圧力鍋\", price: 5000 }","        ]","    },","    {","        category: \"調理器具\",","        subcategory: \"包丁\",","        items: [","            { name: \"三徳包丁\", price: 2500 },","            { name: \"ペティナイフ\", price: 1500 },","            { name: \"出刃包丁\", price: 3500 }","        ]","    }","];","","let displayDiv = document.getElementById('display');","","// 商品データの表示","products.forEach(productCategory => {","    let categoryTitle = document.createElement('h2');","    categoryTitle.textContent = productCategory.category;","    displayDiv.appendChild(categoryTitle);","","    let subcategoryTitle = document.createElement('h3');","    subcategoryTitle.textContent = productCategory.subcategory;","    displayDiv.appendChild(subcategoryTitle);","","    let itemList = document.createElement('ul');","","    productCategory.items.forEach(item => {","        let listItem = document.createElement('li');","        listItem.textContent = `${item.name} - ¥${item.price}`;","        itemList.appendChild(listItem);","    });","","    displayDiv.appendChild(itemList);","});",""],"id":1}],[{"start":{"row":24,"column":10},"end":{"row":24,"column":11},"action":"remove","lines":["示"],"id":2},{"start":{"row":24,"column":9},"end":{"row":24,"column":10},"action":"remove","lines":["表"]},{"start":{"row":24,"column":8},"end":{"row":24,"column":9},"action":"remove","lines":["の"]},{"start":{"row":24,"column":7},"end":{"row":24,"column":8},"action":"remove","lines":["タ"]},{"start":{"row":24,"column":6},"end":{"row":24,"column":7},"action":"remove","lines":["ー"]},{"start":{"row":24,"column":5},"end":{"row":24,"column":6},"action":"remove","lines":["デ"]},{"start":{"row":24,"column":4},"end":{"row":24,"column":5},"action":"remove","lines":["品"]},{"start":{"row":24,"column":3},"end":{"row":24,"column":4},"action":"remove","lines":["商"]},{"start":{"row":24,"column":2},"end":{"row":24,"column":3},"action":"remove","lines":[" "]},{"start":{"row":24,"column":1},"end":{"row":24,"column":2},"action":"remove","lines":["/"]},{"start":{"row":24,"column":0},"end":{"row":24,"column":1},"action":"remove","lines":["/"]},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"remove","lines":["義"],"id":3},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["定"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"remove","lines":["の"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":["タ"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["ー"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["デ"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["品"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["商"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":[" "]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["/"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"]},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":42,"column":0},"action":"remove","lines":["let products = [","    {","        category: \"調理器具\",","        subcategory: \"鍋\",","        items: [","            { name: \"フライパン\", price: 3000 },","            { name: \"鍋\", price: 4500 },","            { name: \"圧力鍋\", price: 5000 }","        ]","    },","    {","        category: \"調理器具\",","        subcategory: \"包丁\",","        items: [","            { name: \"三徳包丁\", price: 2500 },","            { name: \"ペティナイフ\", price: 1500 },","            { name: \"出刃包丁\", price: 3500 }","        ]","    }","];","","let displayDiv = document.getElementById('display');","","products.forEach(productCategory => {","    let categoryTitle = document.createElement('h2');","    categoryTitle.textContent = productCategory.category;","    displayDiv.appendChild(categoryTitle);","","    let subcategoryTitle = document.createElement('h3');","    subcategoryTitle.textContent = productCategory.subcategory;","    displayDiv.appendChild(subcategoryTitle);","","    let itemList = document.createElement('ul');","","    productCategory.items.forEach(item => {","        let listItem = document.createElement('li');","        listItem.textContent = `${item.name} - ¥${item.price}`;","        itemList.appendChild(listItem);","    });","","    displayDiv.appendChild(itemList);","});",""],"id":4},{"start":{"row":0,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["// 大分類、小分類、および商品を定義するデータ構造","let categories = {","    \"家電\": {","        \"冷蔵庫\": [],","        \"洗濯機\": []","    },","    \"家具\": {","        \"ソファ\": [],","        \"テーブル\": []","    },","    \"調理器具\": { // 新しい大分類を追加","        \"フライパン\": [],","        \"包丁\": [],","        \"まな板\": [] // 小分類を任意で追加","    }","};","","// 商品を追加（商品名、価格を含む）","categories[\"調理器具\"][\"フライパン\"].push({ name: \"テフロンフライパン\", price: 2500 });","categories[\"調理器具\"][\"包丁\"].push({ name: \"三徳包丁\", price: 3000 });","categories[\"調理器具\"][\"まな板\"].push({ name: \"抗菌まな板\", price: 1200 });","","// 商品の一覧を表示する関数","let displayProducts = function(categories) {","    Object.keys(categories).forEach(category => {","        console.log(`大分類: ${category}`);","        Object.keys(categories[category]).forEach(subCategory => {","            console.log(`  小分類: ${subCategory}`);","            categories[category][subCategory].forEach(product => {","                console.log(`    商品: ${product.name}, 価格: ¥${product.price}`);","            });","        });","    });","}","","// 商品を表示","displayProducts(categories);",""]}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":26},"action":"remove","lines":["/ 大分類、小分類、および商品を定義するデータ構造"],"id":5},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"]},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"remove","lines":["加"],"id":6},{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"remove","lines":["追"]},{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"remove","lines":["を"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"remove","lines":["類"]},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"remove","lines":["分"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"remove","lines":["大"]},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"remove","lines":["い"]},{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"remove","lines":["し"]},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"remove","lines":["新"]},{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"remove","lines":[" "]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"remove","lines":["/"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"remove","lines":["/"]}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"remove","lines":[" "],"id":7}],[{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"remove","lines":["加"],"id":8},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"remove","lines":["追"]},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"remove","lines":["で"]},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"remove","lines":["意"]},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"remove","lines":["任"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"remove","lines":["を"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"remove","lines":["類"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"remove","lines":["分"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"remove","lines":["小"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"remove","lines":[" "]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"remove","lines":["/"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"remove","lines":["/"]}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"remove","lines":[" "],"id":9}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":19},"action":"remove","lines":["// 商品を追加（商品名、価格を含む）"],"id":10},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":15},"action":"remove","lines":["// 商品の一覧を表示する関数"],"id":11},{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":8},"action":"remove","lines":["// 商品を表示"],"id":12},{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["let categories = {","    \"家電\": {","        \"冷蔵庫\": [],","        \"洗濯機\": []","    },","    \"家具\": {","        \"ソファ\": [],","        \"テーブル\": []","    },","    \"調理器具\": {","        \"フライパン\": [],","        \"包丁\": [],","        \"まな板\": []","    }","};","","categories[\"調理器具\"][\"フライパン\"].push({ name: \"テフロンフライパン\", price: 2500 });","categories[\"調理器具\"][\"包丁\"].push({ name: \"三徳包丁\", price: 3000 });","categories[\"調理器具\"][\"まな板\"].push({ name: \"抗菌まな板\", price: 1200 });","","let displayProducts = function(categories) {","    Object.keys(categories).forEach(category => {","        console.log(`大分類: ${category}`);","        Object.keys(categories[category]).forEach(subCategory => {","            console.log(`  小分類: ${subCategory}`);","            categories[category][subCategory].forEach(product => {","                console.log(`    商品: ${product.name}, 価格: ¥${product.price}`);","            });","        });","    });","}","","displayProducts(categories);",""],"id":13},{"start":{"row":0,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["// 大分類、小分類、および商品を定義するデータ構造","let categories = {","    \"家電\": {","        \"冷蔵庫\": [],","        \"洗濯機\": []","    },","    \"家具\": {","        \"ソファ\": [],","        \"テーブル\": []","    },","    \"調理器具\": { // 新しい大分類を追加","        \"フライパン\": [],","        \"包丁\": [],","        \"まな板\": [] // 小分類を任意で追加","    }","};","","// 商品を追加（商品名、価格を含む）","categories[\"調理器具\"][\"フライパン\"].push({ name: \"テフロンフライパン\", price: 2500 });","categories[\"調理器具\"][\"包丁\"].push({ name: \"三徳包丁\", price: 3000 });","categories[\"調理器具\"][\"まな板\"].push({ name: \"抗菌まな板\", price: 1200 });","","// 商品の一覧を表示する関数","let displayProducts = function(categories) {","    let productListDiv = document.getElementById(\"product-list\");","    let htmlContent = \"\";","","    Object.keys(categories).forEach(category => {","        htmlContent += `<h2>大分類: ${category}</h2>`;","        Object.keys(categories[category]).forEach(subCategory => {","            htmlContent += `<h3>  小分類: ${subCategory}</h3>`;","            categories[category][subCategory].forEach(product => {","                htmlContent += `<p>    商品: ${product.name}, 価格: ¥${product.price}</p>`;","            });","        });","    });","","    productListDiv.innerHTML = htmlContent;","}","","// DOMが完全に読み込まれてから関数を呼び出す","window.onload = function() {","    displayProducts(categories);","};",""]}],[{"start":{"row":40,"column":1},"end":{"row":40,"column":25},"action":"remove","lines":["/ DOMが完全に読み込まれてから関数を呼び出す"],"id":14},{"start":{"row":40,"column":0},"end":{"row":40,"column":1},"action":"remove","lines":["/"]},{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":22,"column":14},"end":{"row":22,"column":15},"action":"remove","lines":["数"],"id":15},{"start":{"row":22,"column":13},"end":{"row":22,"column":14},"action":"remove","lines":["関"]},{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"remove","lines":["る"]},{"start":{"row":22,"column":11},"end":{"row":22,"column":12},"action":"remove","lines":["す"]},{"start":{"row":22,"column":10},"end":{"row":22,"column":11},"action":"remove","lines":["示"]},{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"remove","lines":["表"]},{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"remove","lines":["を"]},{"start":{"row":22,"column":7},"end":{"row":22,"column":8},"action":"remove","lines":["覧"]},{"start":{"row":22,"column":6},"end":{"row":22,"column":7},"action":"remove","lines":["一"]},{"start":{"row":22,"column":5},"end":{"row":22,"column":6},"action":"remove","lines":["の"]},{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"remove","lines":["品"]},{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"remove","lines":["商"]},{"start":{"row":22,"column":2},"end":{"row":22,"column":3},"action":"remove","lines":[" "]},{"start":{"row":22,"column":1},"end":{"row":22,"column":2},"action":"remove","lines":["/"]},{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"remove","lines":["",""],"id":16}],[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"remove","lines":["）"],"id":17},{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"remove","lines":["む"]},{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"remove","lines":["含"]},{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"remove","lines":["を"]},{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"remove","lines":["格"]},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"remove","lines":["価"]},{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"remove","lines":["、"]},{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"remove","lines":["名"]},{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"remove","lines":["品"]},{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"remove","lines":["商"]},{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"remove","lines":["（"]},{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"remove","lines":["加"]},{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"remove","lines":["追"]},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"remove","lines":["を"]},{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"remove","lines":["品"]},{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"remove","lines":["商"]},{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"remove","lines":[" "]}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"remove","lines":["/"],"id":18},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"remove","lines":["/"]},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"remove","lines":["加"],"id":19},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"remove","lines":["追"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"remove","lines":["で"]},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"remove","lines":["意"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"remove","lines":["任"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"remove","lines":["を"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"remove","lines":["類"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"remove","lines":["分"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"remove","lines":["小"]},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"remove","lines":[" "]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"remove","lines":["/"]},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"remove","lines":["/"]}],[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"remove","lines":[" "],"id":20}],[{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"remove","lines":["加"],"id":21},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"remove","lines":["追"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"remove","lines":["を"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"remove","lines":["類"]},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"remove","lines":["分"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"remove","lines":["大"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"remove","lines":["い"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"remove","lines":["し"]},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"remove","lines":["新"]},{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"remove","lines":[" "]},{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"remove","lines":["/"]},{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"remove","lines":["/"]}],[{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"remove","lines":[" "],"id":22}],[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"remove","lines":["造"],"id":23},{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"remove","lines":["構"]},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"remove","lines":["タ"]},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"remove","lines":["ー"]},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"remove","lines":["デ"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"remove","lines":["る"]},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"remove","lines":["す"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"remove","lines":["義"]},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"remove","lines":["定"]},{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"remove","lines":["を"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"remove","lines":["品"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"remove","lines":["商"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":["び"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"remove","lines":["よ"]},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"remove","lines":["お"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"remove","lines":["、"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["類"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"remove","lines":["分"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":["小"]}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["、"],"id":24},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["類"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["分"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["大"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":[" "]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["/"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":25}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":17},"end":{"row":3,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1721393719462,"hash":"2daf24d47a5dc0f94066a1755bf71ecc96b8b3e9"}