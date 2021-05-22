import Banner from './Components/Banner/Banner';
import Categories from './Components/Categories/Categories/Categories';
import FilteringCategory from './Components/FilteringCategories/FilteringCategory/FilteringCategory';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <FilteringCategory />
    </>
  );
}

export default App;
