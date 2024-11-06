import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booklist from "./components/Book/Booklist";
import Home from "./components/Home";
import Rentallist from "./components/Rental/Rentallist";
import Memberlist from "./components/Member/Memberlist";
import AddBook from "./components/Book/AddBook";
import AddRentals from "./components/Rental/AddRentals";
import AddMember from "./components/Member/AddMember";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Booklist />} />
        <Route path="/newbook" element={<AddBook />} />
        <Route path="/members" element={<Memberlist />} />
        <Route path="/newmember" element={<AddMember />} />
        <Route path="/rentals" element={<Rentallist />} />
        <Route path="/newrental" element={<AddRentals />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
