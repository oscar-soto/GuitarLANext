import { useEffect, useState } from 'react';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const carritoLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) ?? []
      : [];

  const [cart, setCart] = useState(carritoLS);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addCart = (guitarra) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (cart.some((guitarraState) => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const cartActualizado = cart.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.qty = guitarra.qty;
        }
        return guitarraState;
      });

      // Se asigna al array
      setCart([...cartActualizado]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCart([...cart, guitarra]);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const deleteProduct = (id) => {
    const cartActualizado = cart.filter((producto) => producto.id != id);
    setCart(cartActualizado);
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };

  const updateQty = (guitarra) => {
    const cartActualizado = cart.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.qty = parseInt(guitarra.qty);
      }
      return guitarraState;
    });
    setCart(cartActualizado);
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };

  return pageReady ? (
    <Component
      {...pageProps}
      cart={cart}
      addCart={addCart}
      deleteProduct={deleteProduct}
      updateQty={updateQty}
    />
  ) : (
    ''
  );
}
