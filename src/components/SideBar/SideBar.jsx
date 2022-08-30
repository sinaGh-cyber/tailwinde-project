import CategoryList from './Category/CategoryList';
import Filter from './Filter/Filter';


const SideBar = () => {
  return (
    <div className=" rounded-xl bg-slate-50 mr-4 py-7 px-5 pb-11">
      <CategoryList />
      <Filter/>
    </div>
  );
};

export default SideBar;
