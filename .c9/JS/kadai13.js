let categories = {
    "家電": {
        "冷蔵庫": [],
        "洗濯機": []
    },
    "家具": {
        "ソファ": [],
        "テーブル": []
    },
    "調理器具": {
        "フライパン": [],
        "包丁": [],
        "まな板": []
    }
};

categories["調理器具"]["フライパン"].push({ name: "テフロンフライパン", price: 2500 });
categories["調理器具"]["包丁"].push({ name: "三徳包丁", price: 3000 });
categories["調理器具"]["まな板"].push({ name: "抗菌まな板", price: 1200 });

let displayProducts = function(categories) {
    let productListDiv = document.getElementById("product-list");
    let htmlContent = "";

    Object.keys(categories).forEach(category => {
        htmlContent += `<h2>大分類: ${category}</h2>`;
        Object.keys(categories[category]).forEach(subCategory => {
            htmlContent += `<h3>  小分類: ${subCategory}</h3>`;
            categories[category][subCategory].forEach(product => {
                htmlContent += `<p>    商品: ${product.name}, 価格: ¥${product.price}</p>`;
            });
        });
    });

    productListDiv.innerHTML = htmlContent;
}

window.onload = function() {
    displayProducts(categories);
};
