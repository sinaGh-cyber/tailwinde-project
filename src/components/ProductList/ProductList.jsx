import Product from './Product';
import productsData from './productsData';

const ProductList = () => {
  return (
    <ul className=" grid  xsm:grid-cols-2  gap-y-9 gap-x-2 md:gap-x-5 md:gap-y-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-9 lg:mb-11">
      {' '}
      {productsData.map(({ id, ...rest }) => (
        <Product {...rest} key={id} />
      ))}
    </ul>
  );
};

export default ProductList;
