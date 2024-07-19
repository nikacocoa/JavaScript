let products = [
    {
        category: "調理器具",
        subcategory: "鍋",
        items: [
            { name: "フライパン", price: 3000 },
            { name: "鍋", price: 4500 },
            { name: "圧力鍋", price: 5000 }
        ]
    },
    {
        category: "調理器具",
        subcategory: "包丁",
        items: [
            { name: "三徳包丁", price: 2500 },
            { name: "ペティナイフ", price: 1500 },
            { name: "出刃包丁", price: 3500 }
        ]
    }
];

let displayDiv = document.getElementById('display');

products.forEach(productCategory => {
    let categoryTitle = document.createElement('h2');
    categoryTitle.textContent = productCategory.category;
    displayDiv.appendChild(categoryTitle);

    let subcategoryTitle = document.createElement('h3');
    subcategoryTitle.textContent = productCategory.subcategory;
    displayDiv.appendChild(subcategoryTitle);

    let itemList = document.createElement('ul');

    productCategory.items.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ¥${item.price}`;
        itemList.appendChild(listItem);
    });

    displayDiv.appendChild(itemList);
});
