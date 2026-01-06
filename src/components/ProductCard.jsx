import { useCard } from '../context/CardContext';

const ProductCard = ({ product }) => {
  const { addToCard } = useCard();
  return (
    <div
      key={product.id}
      className='bg-white p-4 rounded-lg shadow-md flex-col'
    >
      <img
        src={product.image}
        alt={product.name}
        className=' h-40 object-cover mb-4 rounded'
      />
      <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
      <p className='text-gray-500 text-sm  mb-2'>{product.description}</p>
      <p className='font-bold text-lg'>${product.price.toFixed(2)}</p>
      <button
        className='bg-blue-600 text-white mt-3 px-4 py-2 rounded hover:bg-blue-700'
        onClick={() => addToCard(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
