import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
//import Notification from "../../pages/Notification";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-2 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>EventPod</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter any event..."
          className="bg-white/75 p-3 px-8 rounded-l-full lg:w-56 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter any location..."
          className="bg-white/75 p-3 px-8 rounded-r-full outline-none lg:w-56 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
        <button className="bg-black text-white font-bold py-3 px-4 rounded-full">
          Search      </button>
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink to={"/"} className="text-black hover:text-grey-700">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink>College Community</NavLink>
        </li>
        <li>
          <NavLink>Messages</NavLink>
        </li>
        <li>
          <NavLink
            to={"/Notification"}
            className="text-black hover:text-grey-700"
          >
            Notification
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
