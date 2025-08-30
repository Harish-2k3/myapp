import Home from "@/components/Home/Home";
import MainLayout from "@/Layout/Main/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
