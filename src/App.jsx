import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/footer";
import Rates from "./pages/Rates";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CreatePackage from "./pages/CreatePackage";
import MemberTable from "./pages/MemberTable";
import UserProfile from "./pages/UpdateProfile";
import UpdateProfile from "./pages/UpdateProfile";


function App() {
  return (
    <div className="overflow-hidden ">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Home />} />

          <Route path="/admin" element={<AdminDashboard />} />
       
          <Route path="/about" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/login" element={<Login />} />

          <Route path="/user" element={<UserDashboard />} />
          <Route path="/addPackage" element={<CreatePackage />} />
          <Route path="/members" element={<MemberTable />} />
          <Route path="/profile" element={<UpdateProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
