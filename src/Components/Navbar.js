import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavWrapper>
      <div className="nav-center">
        <h3>
          <Link to="/">Home </Link>
        </h3>
        <h3>
          <Link to="/order">Order Products</Link>
        </h3>
        <h3>
          <Link to="/admin">Admin</Link>
        </h3>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  background-color: #f5f5f5;
  color: #6f6f6f;
  top: 0;
  z-index: 1;
  border-bottom: 2px solid #353535;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
