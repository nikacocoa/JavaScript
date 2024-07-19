{"filter":false,"title":"kadai13.js","tooltip":"/.c9/JS/kadai13.js","ace":{"folds":[],"scrolltop":251,"scrollleft":0,"selection":{"start":{"row":29,"column":54},"end":{"row":29,"column":54},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"033ea0b9a0991342b7eccd8bc375672c3924dd1d","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["// 商品データの定義","let products = [","    {","        category: \"調理器具\",","        subcategory: \"鍋\",","        items: [","            { name: \"フライパン\", price: 3000 },","            { name: \"鍋\", price: 4500 },","            { name: \"圧力鍋\", price: 5000 }","        ]","    },","    {","        category: \"調理器具\",","        subcategory: \"包丁\",","        items: [","            { name: \"三徳包丁\", price: 2500 },","            { name: \"ペティナイフ\", price: 1500 },","            { name: \"出刃包丁\", price: 3500 }","        ]","    }","];","","let displayDiv = document.getElementById('display');","","// 商品データの表示","products.forEach(productCategory => {","    let categoryTitle = document.createElement('h2');","    categoryTitle.textContent = productCategory.category;","    displayDiv.appendChild(categoryTitle);","","    let subcategoryTitle = document.createElement('h3');","    subcategoryTitle.textContent = productCategory.subcategory;","    displayDiv.appendChild(subcategoryTitle);","","    let itemList = document.createElement('ul');","","    productCategory.items.forEach(item => {","        let listItem = document.createElement('li');","        listItem.textContent = `${item.name} - ¥${item.price}`;","        itemList.appendChild(listItem);","    });","","    displayDiv.appendChild(itemList);","});",""],"id":1}],[{"start":{"row":24,"column":10},"end":{"row":24,"column":11},"action":"remove","lines":["示"],"id":2},{"start":{"row":24,"column":9},"end":{"row":24,"column":10},"action":"remove","lines":["表"]},{"start":{"row":24,"column":8},"end":{"row":24,"column":9},"action":"remove","lines":["の"]},{"start":{"row":24,"column":7},"end":{"row":24,"column":8},"action":"remove","lines":["タ"]},{"start":{"row":24,"column":6},"end":{"row":24,"column":7},"action":"remove","lines":["ー"]},{"start":{"row":24,"column":5},"end":{"row":24,"column":6},"action":"remove","lines":["デ"]},{"start":{"row":24,"column":4},"end":{"row":24,"column":5},"action":"remove","lines":["品"]},{"start":{"row":24,"column":3},"end":{"row":24,"column":4},"action":"remove","lines":["商"]},{"start":{"row":24,"column":2},"end":{"row":24,"column":3},"action":"remove","lines":[" "]},{"start":{"row":24,"column":1},"end":{"row":24,"column":2},"action":"remove","lines":["/"]},{"start":{"row":24,"column":0},"end":{"row":24,"column":1},"action":"remove","lines":["/"]},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"remove","lines":["義"],"id":3},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["定"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"remove","lines":["の"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":["タ"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["ー"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["デ"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["品"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["商"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":[" "]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["/"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"]},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]]},"timestamp":1721388092285}