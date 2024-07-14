function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

let base = 5;
let height = 10;
console.log("三角形の面積（関数名がある場合）:", calculateTriangleArea(base, height));


let calculateTriangleAreaAnonymous = function(base, height) {
    return (base * height) / 2;
};

console.log("三角形の面積（関数名がない場合）:", calculateTriangleAreaAnonymous(base, height));
