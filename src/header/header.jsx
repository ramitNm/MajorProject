import React, { useState } from "react";
import { Dropdown } from "rsuite";
import './header.css';
import { Outlet, Link } from "react-router-dom";
import { Burger_2 } from "../Burger_2/burger_2";
import { Properties } from "../Properties/Properties";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

export const Header = () => {
    return (
        <header>
            <div className="H">
                <div className="container_Header h1">
                    <div className="row L-0">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-3 p1">
                            <img src="\src\KeeProp Icons\image-removebg-preview (4).png" alt="KeeProp" className="img-responsive img-1" />
                        </div>
                        <div className="col-8">
                            <div className="marq" title="Click to view other languages" id="searchLang">
                                <marquee className="alignTextMarq">Welcome to <b>KeeProp</b> your one stop destination for all the rental properties as we cut the brokrage to 20-30% of your agreed rent!!
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container_Header h2">
                <div className="row" style={{ width: "100.9%" }}>
                    <Navbar expand="lg" style={{ marginLeft: "0px", width: "100%" }}>
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" style={{ marginLeft: "50px" }}>
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="#">About&nbsp;Us</Nav.Link>
                                    <Nav.Link href="#link">Contact&nbsp;Us</Nav.Link>
                                    <NavDropdown title="Properties" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/Properties">All Properties</NavDropdown.Item>
                                        <NavDropdown title="&nbsp;&nbsp;Appartments" id="nested-dropdown">
                                            <NavDropdown.Item href="#">RK</NavDropdown.Item>
                                            <NavDropdown.Item href="#">1 BHK</NavDropdown.Item>
                                            <NavDropdown.Item href="#">2 BHK</NavDropdown.Item>
                                            <NavDropdown.Item href="#">3 BHK</NavDropdown.Item>
                                            <NavDropdown.Item href="#">4 BHK</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown.Item href="#action/3.3">Duplex</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Bunglows</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown title="&nbsp;&nbsp;Cities" id="nested-dropdown">
                                            <NavDropdown.Item href="#">Mumbai</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Pune</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Delhi</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Kolkata</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Hyderabad</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Bangluru</NavDropdown.Item>
                                        </NavDropdown>
                                    </NavDropdown>
                                    <div className="col-2" style={{ marginLeft: "467px" }}>
                                        <Link to="/Login">
                                            <button className="login_button_home">
                                                Login
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="col-2" style={{ marginLeft: "20px" }}>
                                        <Link to="/Register">
                                            <button className="register_button_home">
                                                Register
                                            </button>
                                        </Link>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div >
        </header >
    )
}
