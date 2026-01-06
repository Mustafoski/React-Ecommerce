import { useCard } from '../context/CardContext';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { cards, removeFromCart, clearCart } = useCard();
  const itemsCount = cards.reduce((total, item) => total + item.quantity, 0);
  const total = cards
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <header className='bg-white shadow-md p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-blue-600'>ShopMate</h1>
      <div className='relative'>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className='cursor-pointer relative'
        >
          <FaShoppingCart size={24} className='text-gray-700' />
          {itemsCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
              {itemsCount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div className='absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-50'>
            <div className='p-4'>
              <h2 className='font-semibold mb-2'>Cart Summary</h2>
              {cards.length === 0 ? (
                <p className='text-gray-500 text-sm'>Your cart is empty.</p>
              ) : (
                <>
                  <ul className='max-h-60 overflow-y-auto divide-y divide-gray-200'>
                    {cards.map((item) => (
                      <li
                        key={item.id}
                        className='flex justify-between mb-2 items-center'
                      >
                        <div>
                          <p className='font-semibold'>{item.name}</p>
                          <p className='text-sm text-gray-500'>
                            {item.quantity} x ${item.price.toFixed(2)}
                          </p>
                          <span>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <button
                          className='text-red-600 text-sm hover:underline'
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className='border-t pt-2 mt-4 flex justify-between font-semibold'>
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                  <button
                    className='mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600 '
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
