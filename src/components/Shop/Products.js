import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyData = [
  { id: "p1", name: "utopia", price: 30, description: "arabic great book" },
  {
    id: "p2",
    name: "the great gatspy",
    price: 40,
    description: "british great book",
  },
  {
    id: "p3",
    name: "the shining",
    price: 30,
    description: "american great book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
