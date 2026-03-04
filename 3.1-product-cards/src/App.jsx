import Product from "./Products"


function App() {

  return (
    <>
      <div className="products-grid">
        <Product
          name="Mechanical Keyboard"
          price={89.99}
          category="Electronics"
          rating={4.7}
          inStock={true}
          discount={10} />

        <Product
          name="Gaming Mouse"
          price={49.99}
          category="Electronics"
          rating={4.5}
          inStock={true}
          discount={0} />

        <Product
          name="Laptop Stand"
          price={29.99}
          category="Accessories"
          rating={4.3}
          inStock={false}
          discount={15} />

        <Product
          name="Noise Cancelling Headphones"
          price={199.99}
          category="Electronics"
          rating={4.8}
          inStock={true}
          discount={20} />

        <Product
          name="USB-C Hub"
          price={39.99}
          category="Accessories"
          rating={4.2}
          inStock={true}
          discount={5} />


        <Product
          name="4k Monitor"
          price={349.99}
          category="Electronics"
          rating={4.6}
          inStock={false}
          discount={12} />

        <Product
          name="4k Monitor"
          price={349.99}
        />

      </div>


    </>

  )
}

export default App


