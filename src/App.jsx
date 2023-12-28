import { CartProvider } from "./components/CartContext";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <CartProvider>
      <main className="  w-full lg:w-full min-h-screen lg:flex lg:flex-col lg:m-auto lg:items-center relative ">
        <Header />
        <Main />
      </main>
    </CartProvider>
  )
}