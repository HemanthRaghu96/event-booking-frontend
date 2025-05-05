import Banner from "@/component/Banner";
import Category from "@/component/Category";
import Navbar from "@/component/Navbar";
import SearchBar from "@/component/SearchBar";
import UpcomingEvents from "@/component/UpcomingEvents";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Banner />
      <Category />
      <UpcomingEvents />
    </div>
  );
}
