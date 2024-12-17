import stayImage1 from "../assets/stayimage-1.jpeg";
import stayImage2 from "../assets/stayimage-2.jpeg";
import stayImage3 from "../assets/stayimage-3.jpeg";
import stayImage4 from "../assets/stayimage-4.jpeg";
import Home from "../assets/home.png";
import Marker from "../assets/marker.png";
import Wifi from "../assets/wifi.png";

import StarRating from "./StarRating";
import { ArrowUp } from "lucide-react";

const stayCardDetails = [
  {
    id: 1,
    image: stayImage1,
    subHeading: "Entire apartment rental in Collingwood",
    heading: "A Stylish Apt, 5 min walk to Queen Victoria Market",
    rating: 4.9,
    reviews: 202,
    city: "Collingwood Vic",
    price: "$540",
    israre: true,
  },
  {
    id: 2,
    image: stayImage2,
    subHeading: "Entire loft in central business district",
    heading: "Designer NY style loft",
    rating: 4.8,
    reviews: 44,
    city: "Melbourne Vic",
    price: "$620",
  },
  {
    id: 3,
    image: stayImage3,
    subHeading: "Entire rental unit in Carlton",
    heading: "5 minute walk from University of Melbourne",
    rating: 4.7,
    reviews: 82,
    city: "Carlton Vic",
    price: "$490",
  },
  {
    id: 4,
    image: stayImage4,
    subHeading: "Entire apartment rental in Collingwood",
    heading: "Magnificent apartment next to public transport",
    rating: 4.8,
    reviews: 12,
    city: "Carlton Vic",
    price: "$600",
  },
];

function StayCard() {
  return stayCardDetails.map(
    ({
      id,
      heading,
      subHeading,
      image,
      rating,
      reviews,
      city,
      price,
      israre,
    }) => (
      <div
        key={id}
        className="shadow-custom-shadow rounded-xl border border-solid border-border-secondary mb-4 p-4"
      >
        <div className="flex gap-2 ">
          <div className="relative ">
            <img
              src={image}
              alt="image-1"
              className="h-28 w-36 object-cover rounded-md"
            />
            {israre && (
              <div className="rounded-md bg-[#E9D7FE] w-[60%] absolute top-16 left-4">
                <p className="flex gap-2 p-1 ">
                  <ArrowUp className="text-[#6941C6] h-4 w-4" />
                  <span className="text-[#6941C6] text-xs">Rare find</span>
                </p>
              </div>
            )}
          </div>
          <div className="space-y-3">
            <p className="text-xs font-[600] text-brand-secondary">
              {subHeading}
            </p>
            <p className="text-fg-primary text-xs">{heading}</p>
            <div className="flex gap-2 items-center">
              <StarRating rating={rating} />
              <p className="text-fg-primary">{rating}</p>
              <p className="text-teritary flex gap-1 text-sm">
                {reviews}
                <span>reviews</span>
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2">
                <img src={Marker} />
                <span className="text-teritary text-sm font-[500]">{city}</span>
              </div>
              <div className="flex  gap-2">
                <img src={Home} />
                <span className="text-teritary text-sm  font-[500]">1 bed</span>
              </div>
              <div className="flex  gap-2">
                <img src={Wifi} />
                <span className="text-teritary text-sm  font-[500]">
                  1 Wifi
                </span>
              </div>
            </div>
          </div>

          <div className="ml-auto flex flex-col justify-between items-center">
            <div className="shadow-sm h-7 w-7 rounded-md border border-[##6941C6] p-2 flex items-center justify-center">
              <div className="border-[#6941C6] border  h-3 w-3 rounded-full"></div>
            </div>

            <div>
              <p className="flex gap-2">
                <span className="text-fg-primary text-sm font-semibold">
                  {price}
                </span>
                <span className="text-teritary text-sm font-[400]">
                  AUD total
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default StayCard;
