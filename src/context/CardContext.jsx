import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const CardContext = createContext();

// Provider component
export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cards));
  }, [cards]);

  const addToCard = (product) => {
    setCards((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        // Increase quantity if already in cart
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new product
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCards((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCards([]);
  };

  return (
    <CardContext.Provider
      value={{ cards, addToCard, removeFromCart, clearCart }}
    >
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to use the card context
// eslint-disable-next-line react-refresh/only-export-components
export function useCard() {
  return useContext(CardContext);
}
