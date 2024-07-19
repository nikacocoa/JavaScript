var a = [1, 2, 3];

try {
    console.log(a[1]);
} catch (error) {
    console.error("例外が発生しました: " + error.message);
}
