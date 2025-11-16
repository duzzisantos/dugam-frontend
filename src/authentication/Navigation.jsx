import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { db, auth, logout } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
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
        const data = doc.docs[0]?.data();
        if (data) setName(data.name);
      } catch (err) {
        console.log(err);
      }
    };

    if (!loading && user) {
      getUserName();
    } else if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;

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
        if (res.status === 200) {
          setCustomerData(res.data);
        }
      } catch (err) {
        console.warn(err.response);
      }
    };

    getCustomer();
  }, [user]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      className="shadow-sm fixed-top"
    >
      <Container fluid className="px-4">
        <Navbar.Brand
          as={Link}
          to="/home"
          className="fw-bold d-flex align-items-center gap-2"
          style={{ color: "#ff5a5f" }}
        >
          <BagFill /> dugam
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto d-flex align-items-start flex-column flex-lg-row gap-lg-3 gap-2 mt-3 mt-lg-0">
            <Nav.Link
              as={Link}
              to="/home"
              className="d-flex gap-2 align-items-center"
            >
              <HouseUp /> <small>Home</small>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/register"
              className="d-flex gap-2 align-items-center"
            >
              <PencilSquare /> <small>Add Business</small>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/vendors"
              className="d-flex gap-2 align-items-center"
            >
              <CartCheck /> <small>Vendors</small>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/connect"
              className="d-flex gap-2 align-items-center"
            >
              <PlusCircle /> <small>Connect</small>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories"
              className="d-flex gap-2 align-items-center"
            >
              <CardChecklist /> <small>Categories</small>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin"
              className="d-flex gap-2 align-items-center"
            >
              <BuildingUp /> <small>My Business</small>
            </Nav.Link>
          </Nav>

          <Nav className="ms-lg-auto mt-3 mt-lg-0">
            <NavDropdown
              align="end"
              title={<PersonFill className="fs-3 custom-pry-color" />}
              id="user-dropdown"
              className="p-0"
            >
              <div className="p-3">
                <p className="mb-1">
                  <PersonFill /> {customerData[0]?.userName ?? name}
                </p>
                <p className="mb-2">
                  <ClockFill /> Last login: {user?.metadata?.lastSignInTime}
                </p>
                <Button
                  size="sm"
                  className="custom-pry rounded-1 border-0 w-100"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  <Power /> Logout
                </Button>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
