import Header from "../components/Header";
import StayCard from "../components/StayCard";
import Button from "../ui/Button";
import { ListFilter, MapPin, SquareMenu, Star } from "lucide-react";
import SelectText from "../components/SelectText";
import Search from "../components/ui/Search";
import MapComponent from "../components/MapComponent";

function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-2 space-y-4 ">
        <div className="flex justify-between pb-5 border-b-1 border-[#E9EAEB]">
          <div>
            <p className="text-fg-primary font-semibold text-sm">
              232 stays in Melbourne
            </p>
            <p className="text-teritary font-[400] text-xs">
              Book your next stay at one of our properties.
            </p>
          </div>

          <div className="flex gap-3 ">
            <Button className="text-black border border-[#D5D7DA] text-xs min-w-14">
              Share
            </Button>
            <Button className="text-white bg-[#7F56D9]  text-xs flex gap-2 items-center ">
              {" "}
              <Star className="text-white h-4 w-4" /> Save Search
            </Button>
          </div>
        </div>
        {/* ==================================== */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <SelectText placeholder="Melbourne Au" />
            <SelectText placeholder="jan6-jan13" />
            <SelectText placeholder="Any Price" />
          </div>
          <div>
            <Button className="flex gap-2 items-center border border-bline  min-w-14">
              <ListFilter className="h-4 w-4" />
              <span className="text-sm text-secondary">More Filters</span>
            </Button>
          </div>
        </div>
        {/* ==================================== */}
        <div className="flex justify-between gap-2">
          <div className="flex-1">
            <Search />
          </div>

          <div className="flex gap-2">
            <Button className="text-black border border-[#D5D7DA] text-xs  min-w-16 font-semibold">
              Clear
            </Button>
            <Button className="text-white bg-[#7F56D9]  text-xs   min-w-20  flex items-center justify-center font-semibold">
              Search
            </Button>
          </div>
        </div>
        {/* ==================================== */}
        <div>
          <MapComponent />
        </div>

        {/* ==================================== */}
        <div className="flex justify-between">
          <div className="flex gap-0">
            <Button className="border border-[#D5D7DA] text-xs font-[600]  bg-[ #FAFAFA]">
              Sort by date
            </Button>
            <Button className="border border-[#D5D7DA] text-xs font-[500]">
              Sort by price
            </Button>
          </div>

          <div className="flex">
            <Button className="border border-[#D5D7DA]   p-1  bg-[ #FAFAFA] min-w-10 justify-center flex items-center">
              <SquareMenu className="text-brand-secondary h-4 w-4 " />
            </Button>
            <Button className="border border-[#D5D7DA]  p-1 w-2 min-w-10 flex justify-center items-center">
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* ==================================== */}
        <StayCard />
      </div>
    </div>
  );
}

export default Home;
