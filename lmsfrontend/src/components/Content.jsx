import Booklist from "./Book/Booklist";
import Home from "./Home";
import Memberlist from "./Member/Memberlist";
import Rentallist from "./Rental/Rentallist";

export default function Content({ tab }) {
  return (
    <div>
      {tab === "home" && <Home />}
      {tab === "books" && <Booklist />}
      {tab === "rentals" && <Rentallist />}
      {tab === "members" && <Memberlist />}
    </div>
  );
}
