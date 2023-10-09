const products = [
    { id: 1, name: 'NVA', price: 100, comb: 2 },
    { id: 2, name: 'NVB', price: 200, comb: 3 },
    { id: 3, name: 'NVC', price: 550, comb: 4 },
    { id: 4, name: 'NVD', price: 350, comb: 1 },
];
console.log(products);
const newProducts = products.map((product) => {
    const { id, name, price, comb } = product;
    const referencedProduct = products.find((p) => p.id === comb);
    const newPrice = price + referencedProduct.price;
    return { id, name, price: newPrice, comb };
});
products[0].price = 300;
console.log(newProducts);