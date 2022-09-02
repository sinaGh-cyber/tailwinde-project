import AppBar from './components/AppBar/AppBar';
import ProductsLayout from './components/ProductsLayout/ProductsLayout';

export default function App() {
  return (
    <div className="flex justify-center items-center w-full bg-stone-100">
      <div className="bg-stone-100 flex flex-col min-h-screen w-full 2xl:container">
        <AppBar />
        <ProductsLayout />
      </div>
    </div>
  );
}
