import { Bell } from "lucide-react";
import Logo from "../assets/Logomark.svg";
import UserIcon from "../assets/Avatar.png";
const Header = () => {
  return (
    <header className=" border-b border-border-secondary bg-white shadow-sm mb-4 ">
      <div className="container mx-auto flex justify-between px-2 py-1 ">
        <div className="flex items-center gap-2 ">
          <img src={Logo} alt="image" className="h-10 w-10" />
          <p className="text-fg-primary font-semibold text-xl">Untitled</p>
          <nav className="space-x-6 ml-2">
            {[
              "Home",
              "Bookings",
              "Projects",
              "Tasks",
              "Reporting",
              "Users",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className=" hover:text-secondary-hover transition text-base text-secondary  font-semibold"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex space-x-4 items-center">
          <Bell className="w-6 h-6 text-gray-600" />
          <img src={UserIcon} alt="image" className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
