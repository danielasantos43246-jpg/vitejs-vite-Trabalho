import ProductCard from "./ProductCard";
function ProductList({products}) {
    return (
        <div className="Product-grid">
            {products.map((product) =>(
                <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                />
            ))}
        </div>
    );
}
export default ProductList;