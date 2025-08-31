import Forgot from "@/components/Forgot/Forgot";
import Home from "@/components/Home/Home";
import Login from "@/components/Login/Login";
import Signup from "@/components/Signup/Signup";
import MainLayout from "@/Layout/Main/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
