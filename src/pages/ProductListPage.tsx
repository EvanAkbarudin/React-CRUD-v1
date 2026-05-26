import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import mockData from "../../mock-db.json";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("name") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "default");

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
    searchParams.set("sort", sortValue);
    setSearchParams(searchParams);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      searchParams.set("name", value);
    } else {
      searchParams.delete("name");
    }
    setSearchParams(searchParams);
  };

  // Filter and sort products
  const filteredProducts = mockData.products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name-asc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3">Product Catalog</h1>
          <p className="text-xl text-gray-400">Jelajahi koleksi produk kami yang berkualitas</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">Cari Produk</label>
              <input
                type="text"
                placeholder="Cari nama produk..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
              />
            </div>

            {/* Sort Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Urutkan</label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-asc">Harga: Rendah ke Tinggi</option>
                <option value="price-desc">Harga: Tinggi ke Rendah</option>
                <option value="name-asc">Nama: A ke Z</option>
                <option value="name-desc">Nama: Z ke A</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || sortBy !== "default") && (
            <div className="mt-4 pt-4 border-t border-gray-600">
              <p className="text-sm text-gray-400 mb-3">Filter Aktif:</p>
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <div className="inline-flex items-center gap-2 bg-indigo-600 px-3 py-1 rounded-full text-sm">
                    <span>🔍 {searchTerm}</span>
                    <button onClick={() => handleSearchChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)} className="hover:text-indigo-200">
                      ✕
                    </button>
                  </div>
                )}
                {sortBy !== "default" && (
                  <div className="inline-flex items-center gap-2 bg-indigo-600 px-3 py-1 rounded-full text-sm">
                    <span>📊 {sortBy.replace("-", " ").toUpperCase()}</span>
                    <button onClick={() => handleSortChange("default")} className="hover:text-indigo-200">
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-400">
            Menampilkan <span className="font-semibold text-white">{filteredProducts.length}</span> produk
            {searchTerm && ` untuk "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                {/* Product Image */}
                <div className="bg-linear-to-br from-gray-700 to-gray-800 h-40 flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-700 transition-colors">
                  <div className="text-5xl">📦</div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-indigo-400 transition-colors line-clamp-2">{product.name}</h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">(24)</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-400">${product.price.toFixed(2)}</span>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded text-sm font-semibold transition-colors">→</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">Produk Tidak Ditemukan</h3>
            <p className="text-gray-400 mb-6">Maaf, kami tidak menemukan produk yang sesuai dengan pencarian Anda.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSortBy("default");
                setSearchParams({});
              }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors"
            >
              Bersihkan Filter
            </button>
          </div>
        )}

        {/* Pagination or Stats */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
          <p className="text-gray-400">
            Total produk tersedia: <span className="font-semibold text-white">{mockData.products.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
