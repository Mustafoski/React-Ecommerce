import ProductCard from './ProductCard';

import { useProducts } from '../context/useProducts.jsx';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {loading && <div>Loading...</div>}
      {error && <div className='text-red-500'>Error: {error}</div>}

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
