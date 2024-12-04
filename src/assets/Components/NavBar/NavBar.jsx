import { list } from "postcss";
import Link from "../Link/Link";
import { AiFillHdd,AiOutlineX } from "react-icons/ai";
import { useState } from "react";
const NavBar = () => {
    const [open,setOpen]=useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:userId", name: "Profile" },
  ];

  return (
    <nav>
        <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open===true? <AiOutlineX className="text-2xl"></AiOutlineX> : <AiFillHdd className="text-2xl"></AiFillHdd>
            }
        
        </div>
      <ul className="md:flex justify-center">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
