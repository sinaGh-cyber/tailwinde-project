import AppBar from './components/AppBar/AppBar';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';

export default function App() {
  return (
    <div className="bg-stone-100 flex flex-col">
      <AppBar />
      <SortAndFilter />
    </div>
  );
}
