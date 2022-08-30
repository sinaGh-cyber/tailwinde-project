import ProductList from '../ProductList/ProductList';
import SideBar from '../SideBar/SideBar';
import SortAndFilter from '../SortAndFilter/SortAndFilter';

const ProductsLayout = () => {
  return (
    <div className=" grid grid-cols-12 md:grid-rows-[55px,minmax(500px,_1fr)] gap-y-8 md:gap-y-5 ">
      {' '}
      <div className=" col-span-full  md:col-span-8 lg:col-span-9 md:px-4">
        <SortAndFilter />
      </div>
      <div className=" hidden md:block col-span-4 lg:col-span-3 row-span-2 ">
        <SideBar />
      </div>{' '}
      <div className=" col-span-full md:col-span-8 lg:col-span-9">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsLayout;
