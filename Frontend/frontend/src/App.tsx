import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FirstPage from '../src/pages/FirstPage';
import Navbar from '../src/components/Navbar';
import Category from "pages/Category";
import CategoryRegister from "./pages/CategoryRegister";
import CategorySearch from "./pages/CategorySearch";
import Register from "./pages/Register";
import ProviderRegister from "./pages/ProviderRegister";
import ProviderShowPage from "./pages/ProviderShowPage";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<FirstPage />} />

            <Route path="/category" element={<Category />} />

            <Route path="/category/register" element={<Register />} />

            <Route path="/category/register/categoryregister" element={<CategoryRegister />} />

            <Route path="/category/register/providerregister" element={<ProviderRegister />} />

            <Route path="/category/search" element={<CategorySearch />} />

            <Route path="/findByCategory/:categoryId" element={<ProviderShowPage />}>

            </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;