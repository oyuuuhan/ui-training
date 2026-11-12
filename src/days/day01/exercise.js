// 商品のリスト
const products = [
    { name: "ノート", price: 1000, inStock: true },
    { name: "ボールペン", price: 150, inStock: true },
    { name: "付箋", price: 300, inStock: false },
  ];
  
  // 商品を1つ受け取って、「名前 価格円」の文字列を返す関数
  const formatProduct = (product) => `${product.name} ${product.price}円`;
  
  // 3つの商品で試す
  console.log(formatProduct(products[0]));
  console.log(formatProduct(products[1]));
  console.log(formatProduct(products[2]));