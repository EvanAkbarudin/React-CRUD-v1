import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Error Code */}
        <div>
          <h1 className="text-9xl font-bold text-indigo-500 mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-2">Halaman Tidak Ditemukan</h2>
          <p className="text-xl text-gray-400">Maaf, halaman yang Anda cari tidak ditemukan atau sudah dihapus.</p>
        </div>

        {/* Illustration Area */}
        <div className="py-8">
          <div className="text-6xl">🔍</div>
        </div>

        {/* Description */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <p className="text-gray-300 mb-2">Mungkin Anda salah ketik URL atau halaman telah dipindahkan.</p>
          <p className="text-gray-400 text-sm">Kembali ke halaman utama dan jelajahi fitur-fitur kami yang lainnya.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/home" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors shadow-lg">
            ← Kembali ke Home
          </Link>
          <Link to="/products" className="px-8 py-3 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900 rounded-lg font-semibold transition-colors">
            Lihat Products
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm mb-4">Navigasi Cepat:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Home
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/products" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Products
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/employees" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Employees
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/form" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
