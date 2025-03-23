import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { db, auth, logout } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BuildingUp,
  CartCheck,
  ClockFill,
  HouseUp,
  PencilSquare,
  PersonFill,
  PlusCircle,
  CardChecklist,
  Search,
  BagFill,
  Power,
} from "react-bootstrap-icons";
import { getHost } from "../helpers/getHost";

const Navigation = () => {
  const [user, loading] = useAuthState(auth);
  const [customerData, setCustomerData] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.log(err);
      }
    };

    if (loading) {
      return;
    } else if (!user) {
      getUserName();
      return navigate("/login");
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const res = await axios.get(
          `${getHost()}/api/signup?userEmail=${user.email}`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        if (res.status !== 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        } else {
          setCustomerData(res.data);
        }
      } catch (err) {
        console.warn(err.response);
      }
    };
    getCustomer();
  }, [user.email, user.accessToken]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-white shadow-sm py-2 d-block fixed-top"
    >
      <Container className="col-lg-9 col-sm-12 pe-0 d-flex justify-content-between mb-3">
        <Navbar.Brand
          as={Link}
          to="home"
          className="fw-bold mx-0 hstack gap-1"
          style={{ color: "#ff5a5f " }}
        >
          <BagFill focusable={false} /> dugam{"   "}
        </Navbar.Brand>

        <div className="hstack col-xxl-4 justify-content-end me-2">
          <FormControl
            type="search"
            placeholder="Global Search"
            size="sm"
            className="mt-3 me-2"
            style={{ width: "70%", height: "fit-content" }}
          />
          <Button
            size="sm"
            variant="secondary"
            className="mt-3 rounded-5 border-0"
          >
            <Search />
          </Button>
        </div>
        <NavDropdown
          className="col-xxl-2 col-sm-2 border-0 col-md-2 p-2 btn btn-light rounded-5 mt-2"
          title={<PersonFill className="fs-4 text-secondary" />}
          style={{ width: "fit-content" }}
        >
          <div className="p-2 border-0 smaller-text mx-1">
            <p>
              <PersonFill /> {customerData[0]?.userName ?? name}
            </p>
            <p>
              <ClockFill /> Last login: {user.metadata.lastSignInTime}
            </p>
            <Button
              size="sm"
              className="custom-pry rounded-1 border-0"
              onClick={() => {
                logout();
                navigate("/");
              }}
              title="Logout"
            >
              <Power /> Logout
            </Button>
          </div>
        </NavDropdown>
      </Container>
      <Container
        fluid
        className="col-lg-9 fw-semibold col-sm-12 p-0 d-flex mb-1"
      >
        <Navbar.Toggle className="text-light mx-2 border-0" id="hamburger" />
        <Navbar.Collapse>
          <Nav className="me-auto d-flex justify-content-between col-xxl-12">
            <div className="d-flex hstack px-1 flex-lg-row flex-md-column flex-sm-column">
              <Nav.Link
                as={Link}
                to="home"
                className="d-flex flex-column align-items-center"
              >
                <HouseUp /> <small>Home</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="register"
                className="d-flex flex-column align-items-center"
              >
                <PencilSquare /> <small>Add Business</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="vendors"
                className="d-flex flex-column align-items-center"
              >
                <CartCheck /> <small>Vendors</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="connect"
                className="d-flex flex-column align-items-center"
              >
                <PlusCircle /> <small>Connect</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="categories"
                className="d-flex flex-column align-items-center"
              >
                <CardChecklist /> <small>Categories</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="admin"
                className="d-flex flex-column align-items-center"
              >
                <BuildingUp /> <small>My Business</small>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
