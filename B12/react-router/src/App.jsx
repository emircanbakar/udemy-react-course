import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "", element: <HomePage /> },
//       { path: "products", element: <ProductsPage /> },
//       { path: "products/:productId", element: <ProductDetailPage /> },
//     ],
//   },
// ]);

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinition);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<ProductDetailPage />} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
