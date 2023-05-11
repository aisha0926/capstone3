import React from "react";
import "./AppNavBar.css";
import { BsSearch } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";
import { MdOutlineDashboardCustomize } from "react-icons/md";

//import { IconContext } from "react-icons";

function AppNavBar() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="header Hresize">
      <Link as={Link} to="/">
        <img
          className="header__logo"
          src="https://i.imgur.com/oCxWsb8.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BsSearch className="header__searchIcon" />
      </div>

      <nav className="header__nav">
        {user.id !== null ? (
          user.isAdmin ? (
            <>
              <div className="header__optionBasket">
                <Link as={Link} to="/admin">
                  <MdOutlineDashboardCustomize size={35} />
                </Link>
                <span className="header__optionLineTwo header__basketCount"></span>
              </div>
              <div className="header__option">
                <Link as={Link} to="/logout">
                  <span className="header__optionLineTwo">Sign Out</span>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="header__optionBasket">
                <Link as={Link} to="/myorders">
                  <BsCart4 size={35} />
                </Link>
                <span className="header__optionLineTwo header__basketCount"></span>
              </div>
              <div className="header__option">
                {/* <span className="header__optionLineOne">Welcome! </span> */}
                <Link as={Link} to="/logout">
                  <span className="header__optionLineTwo">Sign Out</span>
                </Link>
              </div>
            </>
          )
        ) : (
          <>
            <div className="header__option">
              <Link as={Link} to="/login">
                <span className="header__optionLineTwo">Sign In</span>
              </Link>
            </div>

            <div className="header__option">
              {/* <span className="header__optionLineOne">New User?</span> */}
              <Link as={Link} to="/register">
                <span className="header__optionLineTwo">Register</span>
              </Link>
            </div>
          </>
        )}

        {/* <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div> */}
      </nav>
    </div>
  );
}

export default AppNavBar;
