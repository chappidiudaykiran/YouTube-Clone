import { toggleMenu } from "../utils/appSlice";
import SearchLogo from "../Assets/SearchLogo.jpg";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Youtube_Search_Api } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const getseatchsuggestions = useCallback(async () => {
    const data = await fetch(Youtube_Search_Api + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getseatchsuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [getseatchsuggestions, searchCache, searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 bg-white z-20">
      <div
        onClick={() => toggleMenuHandler()}
        className="flex items-center gap-4 w-1/4 ml-3 cursor-pointer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png"
          alt="hamburger"
          className="w-6 h-6 cursor-pointer"
        />
        <a href="/" className="hidden md:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="youtube logo"
            className="w-28 h-6 object-contain cursor-pointer"
          />
        </a>
      </div>
      <div className="flex justify-center w-2/4">
        <div 
          className="flex w-full max-w-2xl relative"
          onMouseEnter={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
        >
          <input
            type="text"
            value={searchQuery}
            placeholder="Search"
            className="w-full border border-gray-300 rounded-l-full py-2 px-4 pr-12 focus:outline-none focus:border-blue-500"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-24 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 font-bold text-lg z-10"
              type="button"
            >
              ✕
            </button>
          )}
          <button className="border border-l-0 border-gray-300 bg-gray-100 px-4 rounded-r-full hover:bg-gray-200 flex items-center justify-center">
            <img
              src={SearchLogo}
              alt="search"
              className="w-12 h-12 object-contain"
            />
          </button>
          {searchQuery && suggestions.length > 0 && isFocused && (
            <div className="absolute top-full left-0 right-12 bg-white shadow-xl rounded-xl mt-1 py-2 border border-gray-200 max-h-96 overflow-y-auto scrollbar-hide z-[100]"> 
              <ul className="list-none m-0 p-0">
                  {suggestions.map((suggestion) => (
                      <li key={suggestion} className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm text-gray-800 flex items-center gap-3">
                          <img src={SearchLogo} alt="search" className="w-6 h-6" />
                          {suggestion}
                        </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end w-1/4 mr-3">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className="w-8 h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;
