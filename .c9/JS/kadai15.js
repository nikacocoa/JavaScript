class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `商品名: ${this.name}, 価格: ¥${this.price}`;
    }
}

class Chair extends Item {
    constructor(name, price, isUsed) {
        super(name, price);
        this.isUsed = isUsed;
    }

    getInfo() {
        let usedStatus = this.isUsed ? '中古' : '新品';
        return `商品名: ${this.name}, 価格: ¥${this.price}, 状態: ${usedStatus}`;
    }
}

let chair1 = new Chair('オフィスチェア', 10000, false);
console.log(chair1.getInfo());

let chair2 = new Chair('ダイニングチェア', 5000, true);
console.log(chair2.getInfo());

let chair3 = new Chair('ゲーミングチェア', 15000, false);
console.log(chair3.getInfo());

document.addEventListener('DOMContentLoaded', () => {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>${chair1.getInfo()}</p>
        <p>${chair2.getInfo()}</p>
        <p>${chair3.getInfo()}</p>
    `;
});
