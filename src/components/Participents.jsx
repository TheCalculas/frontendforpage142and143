import React from "react";
import SelectWinner from "./SelectWinner";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PartTable from "./PartTable";
import { useState } from "react";

function Participents() {
  const [state, setstate] = useState(0);

  const navLinkStyles = ({ isActive }) => ({
    textDecoration: "none",
    color: "Black",
    backgroundColor: isActive ? "white" : "RGB(255, 237, 199)",
    height: "30px",
    padding: "6px 62px",
    borderRadius: "0.5rem",
    // margin: "0px 0px 0px px",
  });

  return (
    <Router>
      <div
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgb(0 0 0 / 20%)",
          // padding: "7px 15px 7px 15px",
          width: "35rem",
          padding: "15px",
          minHeight: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "RGB(255, 237, 199)",
            display: "block",
            height: "40px",
            width: "95%",
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <NavLink to="/" style={navLinkStyles}>
              Registered Students
            </NavLink>
          </div>
          <div>
            <NavLink to="/selWin" style={navLinkStyles}>
              Select Winner
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<PartTable />} />
          <Route path="/selWin" element={<SelectWinner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Participents;
