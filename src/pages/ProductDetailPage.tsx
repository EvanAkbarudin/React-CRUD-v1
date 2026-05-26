import { useParams, Link } from "react-router-dom";
import mockData from "../../mock-db.json";

interface Product {
  id: number | string;
  name: string;
  price: number;
}

const ProductDetailPage = () => {
  const params = useParams<{ id: string }>();
  const productId = Number(params.id) || 0;
  const product: Product | undefined = mockData.products.find((p: Product) => Number(p.id) === productId);

  if (!product) {
    return (
      <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Produk Tidak Ditemukan</h1>
          <Link to="/products" className="text-indigo-400 hover:text-indigo-300">
            ← Kembali ke Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mb-8">
          ← Kembali ke Products
        </Link>

        {/* Product Detail Container */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Product Image Section */}
          <div className="bg-gray-800 rounded-lg p-8 flex items-center justify-center border border-gray-700 h-96">
            <div className="text-center">
              <div className="text-8xl mb-4">📦</div>
              <p className="text-gray-400">Product Image</p>
            </div>
          </div>

          {/* Product Information Section */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Product ID: {product.id}</div>
              <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-gray-400">(128 reviews)</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Harga</p>
              <h2 className="text-5xl font-bold text-indigo-400">${product.price.toFixed(2)}</h2>
              <p className="text-gray-500 text-sm mt-2">Harga termasuk pajak dan gratis ongkir</p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Deskripsi Produk</h3>
              <p className="text-gray-300 leading-relaxed">Produk berkualitas tinggi dengan spesifikasi terbaik di kelasnya. Dirancang dengan teknologi terkini untuk memberikan pengalaman terbaik kepada pelanggan kami.</p>
            </div>

            {/* Specifications */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Spesifikasi</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Kategori:</span>
                  <span>Electronics</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-3">
                  <span className="text-gray-400">Stock:</span>
                  <span className="text-green-400">Tersedia (45 unit)</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-3">
                  <span className="text-gray-400">Garansi:</span>
                  <span>1 Tahun</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-3">
                  <span className="text-gray-400">Rating:</span>
                  <span className="text-yellow-400">4.8/5</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors shadow-lg">🛒 Tambah ke Keranjang</button>
              <button className="flex-1 px-6 py-3 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900 rounded-lg font-semibold transition-colors">❤️ Wishlist</button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <h3 className="text-2xl font-bold mb-8">Produk Terkait</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {mockData.products
              .filter((p: Product) => Number(p.id) !== productId)
              .slice(0, 4)
              .map((relatedProduct: Product) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-indigo-500 transition-colors group">
                  <div className="bg-gray-700 rounded p-6 mb-4 flex items-center justify-center h-32 group-hover:bg-gray-650 transition-colors">
                    <div className="text-4xl">📦</div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{relatedProduct.name}</h4>
                  <p className="text-indigo-400 font-bold">${relatedProduct.price.toFixed(2)}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
