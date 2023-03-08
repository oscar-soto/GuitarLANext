import { useEffect, useState } from 'react';
import Image from 'next/image';

import Layout from '@/components/layout';
import styles from '@/styles/carrito.module.css';

const Carrito = ({ cart, updateQty }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculateTotal = cart.reduce(
      (total, product) => total + product.qty * product.price,
      0
    );

    setTotal(calculateTotal)
  }, [cart]);

  return (
    <Layout title="Carrito de Compras">
      <main className="container">
        <h1 className="heading">Carrito</h1>

        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Artículos</h2>

            {cart.length === 0
              ? 'Carrito Vacio'
              : cart.map((product) => (
                  <div key={product.id} className={styles.product}>
                    <figure>
                      <Image
                        width={250}
                        height={480}
                        src={product.image}
                        alt={product.name}
                      />
                    </figure>

                    <div>
                      <p className={styles.name}>{product.name}</p>

                      <div className={styles.qty}>
                        <p>Cantidad:</p>

                        <select
                          className={styles.select}
                          onChange={(e) =>
                            updateQty({
                              id: product.id,
                              qty: e.target.value,
                            })
                          }
                          value={product.qty}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.price}>
                        $<span>{product.price}</span>
                      </p>

                      <p className={styles.subtotal}>
                        Subtotal: $<span>{product.qty * product.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
          </div>

          <aside className={styles.summary}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
