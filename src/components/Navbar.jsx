import { memo } from "react";
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";

const Navbar = memo(() => {
  return (
    <>
      <nav className="my-5 mx-4 md:mx-8 transition-all flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="h-10"
            src="https://meta.wikimedia.org/static/images/icons/metawiki.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="w-30 hidden md:block"
            alt="Wikimedia Meta-Wiki"
            src="https://meta.wikimedia.org/static/images/mobile/copyright/metawiki-wordmark.svg"
          />
        </div>

        <div className=" text-sm flex-1 md:max-w-140 max-w-80 mx-8">
          <div className="search-container text-center md:block relative">
            <label className="">
              <input
                className=" w-full border-1 border-x-red-700 border-y-blue-800 rounded-2xl py-1 pl-4 pr-8"
                type="text"
                placeholder="Search"
                name="search"
              />
              <SearchIcon
                className={
                  "absolute right-2 top-[23%] bottom-0 mx-1 cursor-pointer"
                }
              />
            </label>
          </div>
        </div>

        <div>
          <div className="hidden md:block  transition-all">
            <ul className="flex gap-3 text-sm ">
              <li className="cursor-pointer">Donate</li>
              <li className="cursor-pointer">Signup</li>
              <li className="cursor-pointer">Login</li>
            </ul>
          </div>
          <div className="block md:hidden transition-all">
            <MenuIcon />
          </div>
        </div>
      </nav>
    </>
  );
});

export default Navbar;
