import Footer from "@/Core/Footer/Footer";
import Header from "@/Core/Header/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
