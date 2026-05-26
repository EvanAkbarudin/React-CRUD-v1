import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-4 leading-tight">
                Welcome to <span className="text-indigo-400">MyApp</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">Discover an amazing platform designed to make your life easier. Manage products, employees, and more with our intuitive interface.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Link to="/products" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors shadow-lg">
                Explore Products
              </Link>
              <Link to="/employees" className="px-8 py-3 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-lg font-semibold transition-colors">
                View Employees
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
              <div>
                <p className="text-3xl font-bold text-indigo-400">500+</p>
                <p className="text-gray-400 text-sm">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-400">1000+</p>
                <p className="text-gray-400 text-sm">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-400">50+</p>
                <p className="text-gray-400 text-sm">Employees</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors border border-gray-700">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-semibold mb-2">Product Management</h3>
              <p className="text-gray-400">Browse and manage our extensive catalog of high-quality products.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors border border-gray-700">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-semibold mb-2">Employee Directory</h3>
              <p className="text-gray-400">Connect with our talented team members and their profiles.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors border border-gray-700">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Form Management</h3>
              <p className="text-gray-400">Register and submit forms with our secure validation system.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
