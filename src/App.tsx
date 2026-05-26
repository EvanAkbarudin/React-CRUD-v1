import { Routes, Route } from "react-router";
import "./style/style.css";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ReactHookFormPage from "./pages/ReactHookFormPage";
import EmployeesPage from "./pages/EmployeesPage";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">MyApp</h1>
          <div className="flex gap-6">
            <Link to="/home" className="text-white hover:text-indigo-400 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-indigo-400 transition-colors">
              Products
            </Link>
            <Link to="/employees" className="text-white hover:text-indigo-400 transition-colors">
              Employees
            </Link>
            <Link to="/form" className="text-white hover:text-indigo-400 transition-colors">
              Register
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        {/* Dynamic route */}
        <Route path="/products/:id" element={<ProductDetailPage />} />
        {/* contoh nya product/kaos dan kaos ini berdasarkan id */}
        <Route path="/form" element={<ReactHookFormPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer className="bg-gray-800  py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2026 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
