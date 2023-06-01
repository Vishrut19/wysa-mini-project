import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/username")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    axios.get("/logout");
    navigate.push("/");
  }

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <a className="text-xl normal-case btn btn-ghost btn-wide ">WYSA</a>
        </div>
        <div className="navbar-center">
          {user ? `Signed in as ${user.displayName}` : ""}
        </div>
        <div className="navbar-end">
          {!user ? (
            <a onClick={() => navigate("/")} className="mr-1 btn btn-wide">
              Sign In
            </a>
          ) : (
            <a></a>
          )}
          <a onClick={handleClick} className="btn btn-wide">
            Logout
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
