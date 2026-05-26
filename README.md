# MyApp - React TypeScript Project

Aplikasi web modern yang dibangun dengan React, TypeScript, dan Tailwind CSS. Menampilkan berbagai fitur seperti manajemen produk, manajemen karyawan, dan form handling dengan React Hook Form.

## 🚀 Fitur Utama

- **📱 Responsive Design** - Desain yang bekerja sempurna di semua perangkat (mobile, tablet, desktop)
- **🎨 Dark Theme** - UI modern dengan dark theme menggunakan Tailwind CSS
- **📊 Product Management** - Daftar produk dengan search dan sort functionality
- **👥 Employee Directory** - Manajemen data karyawan dengan table yang elegan
- **📝 Form Management** - Form validation menggunakan React Hook Form dan Zod
- **🔗 Routing** - Navigation yang smooth menggunakan React Router
- **📦 Mock Database** - Data lokal menggunakan mock-db.json
- **🎯 Error Handling** - Halaman 404 yang user-friendly

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Server**: JSON Server (untuk mock API)

## 📋 Persyaratan

- Node.js >= 14.0.0
- npm atau yarn

## 📦 Instalasi

1. **Clone atau download project**

```bash
cd react-project-ts
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup JSON Server (Optional)**
   Jika ingin menggunakan JSON Server untuk API mock:

```bash
npm install -g json-server
```

## 🚀 Menjalankan Project

### Development Mode

```bash
# Terminal 1 - Jalankan Vite dev server
npm run dev

# Terminal 2 - Jalankan JSON Server (optional)
json-server mock-db.json -p 2000
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📁 Struktur Project

```
react-project-ts/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Counter.tsx
│   │   ├── HeaderCustom.tsx
│   │   ├── ProfileCard.tsx
│   │   └── Welcome.tsx
│   ├── hooks/               # Custom hooks
│   │   └── useCounter.ts
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx
│   │   ├── EmployeesPage.tsx
│   │   ├── ProductListPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── ReactHookFormPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── TermsPage.tsx
│   ├── style/               # Global styles
│   │   └── style.css
│   ├── App.tsx              # Main App component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── mock-db.json             # Mock database
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 📄 Deskripsi Pages

### 🏠 Home Page (`/`)

Halaman utama dengan hero section, feature cards, dan statistics display. Navigation point untuk semua fitur aplikasi.

**Fitur:**

- Hero section dengan CTA buttons
- Feature cards showcasing fitur utama
- Statistics display
- Navigation links ke products dan employees

### 📦 Product List (`/products`)

Daftar semua produk dengan fitur search dan sorting.

**Fitur:**

- Search produk by name
- Multiple sort options (price, name)
- Product grid dengan card design
- Filter active display
- Results counter

### 📋 Product Detail (`/product/:id`)

Detail page untuk setiap produk dengan informasi lengkap.

**Fitur:**

- Product image placeholder
- Product information dan specifications
- Price display
- Related products suggestion
- Add to cart & wishlist buttons

### 👥 Employees (`/employees`)

Daftar semua karyawan dalam format table yang elegan.

**Fitur:**

- Employee table dengan columns: ID, Nama, Posisi, Email, Gaji
- Data dari mock-db.json
- Load from server button
- Hover effects dan responsive design
- Clean table styling dengan Tailwind

### 📝 React Hook Form (`/form`)

Form registration dengan validation menggunakan React Hook Form dan Zod.

**Fitur:**

- Username validation (min 3, max 20 chars)
- Password validation (min 6, max 20 chars)
- Show/hide password toggle
- Error messages display
- Form submission handling

### ❌ Not Found (`/404`)

Halaman 404 untuk route yang tidak ditemukan.

**Fitur:**

- Error message yang user-friendly
- Quick navigation links
- Call-to-action buttons

## 🎨 Styling

Project menggunakan **Tailwind CSS** dengan color scheme:

- **Primary**: Indigo (`indigo-400`, `indigo-500`, `indigo-600`)
- **Background**: Dark gray (`gray-900`, `gray-800`, `gray-700`)
- **Text**: White dan light gray

### Warna Utama

```css
bg-gray-900     /* Main background */
bg-gray-800     /* Secondary background/cards */
bg-indigo-600   /* Primary button/accent */
bg-indigo-500   /* Hover states */
text-white      /* Main text */
text-gray-400   /* Secondary text */
```

## 🔄 API Integration

Project menggunakan JSON Server untuk mock API. Endpoints yang tersedia:

```
GET http://localhost:2000/employees
GET http://localhost:2000/products
GET http://localhost:2000/todos
```

Untuk mengubah data, edit file `mock-db.json`.

## 📝 Data Structure

### Employees

```json
{
  "id": 1,
  "name": "John Doe",
  "position": "Frontend Developer",
  "email": "john@example.com",
  "salary": "$5,000"
}
```

### Products

```json
{
  "id": 1,
  "name": "Product A",
  "price": 10.99
}
```

### Todos

```json
{
  "id": 1,
  "task": "Buy groceries",
  "completed": false
}
```

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📚 Komponen Utama

### Counter Component

Komponen sederhana untuk menunjukkan increment/decrement functionality.

### ProfileCard Component

Card component untuk menampilkan profile dengan styling yang menarik.

### Welcome Component

Komponen landing yang welcome di halaman home.

### HeaderCustom Component

Custom header dengan navigation dan branding.

## 🎯 Best Practices

- ✅ TypeScript untuk type safety
- ✅ Component-based architecture
- ✅ Responsive design dengan Tailwind
- ✅ Error handling & validation
- ✅ Clean code structure
- ✅ Reusable components
- ✅ Custom hooks untuk logic sharing

## 🚦 Development Workflow

1. **Branch Strategy**

   ```bash
   git checkout -b feature/nama-fitur
   ```

2. **Code Style**
   - Gunakan TypeScript strict mode
   - Follow ESLint rules
   - Format dengan Prettier

3. **Component Guidelines**
   - Functional components dengan hooks
   - Props type definition
   - Meaningful component names

## 🐛 Troubleshooting

### Port 2000 sudah terpakai

```bash
json-server mock-db.json -p 3000
```

Kemudian update API endpoint di code dari `:2000` ke `:3000`

### Module not found errors

```bash
npm install
rm -rf node_modules
npm install
```

### Styling tidak muncul

- Pastikan Tailwind CSS sudah diinstall
- Clear browser cache
- Restart dev server

## 📖 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod Validation](https://zod.dev)
- [Vite](https://vitejs.dev)

## 👤 Author

Dibuat sebagai demo project untuk pembelajaran React, TypeScript, dan modern web development.

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🎉**

Jika ada pertanyaan atau masalah, silakan buat issue atau hubungi developer.
