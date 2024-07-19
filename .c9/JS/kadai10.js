const apple = {
  name: "りんご",
  color: "赤",
  size: "中",
  weight: 150 
};

const orange = {
  name: "みかん",
  color: "オレンジ",
  size: "小",
  weight: 100 
};

const grape = {
  name: "ぶどう",
  color: "紫",
  size: "小",
  weight: 5 
};

const fruits = [apple, orange, grape];

let totalWeight = 0;

for (let i = 0; i < fruits.length; i++) {
  totalWeight += fruits[i].weight;
}

console.log("総重量: " + totalWeight + " グラム");
