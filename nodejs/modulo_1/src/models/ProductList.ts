interface IProducts {
    product: string;
    price: number;
}

const products: IProducts[] = [
    {product: 'Produto X', price: 10},
    {product: 'Produto Y', price: 15},
    {product: 'Produto Z', price: 20},
    {product: 'Produto G', price: 12},
    {product: 'Produto A', price: 21},
    {product: 'Produto B', price: 8}
]

const ProductList = {
    allList(){
        return products
    },
    priceList(price: number){
        return products.filter(item => item.price >= price)
    }
}

export default ProductList