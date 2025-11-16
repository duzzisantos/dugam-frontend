import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { db, auth, logout } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
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
      className="bg-white shadow-sm fixed-top col-xxl-12"
    >
      <div className="col-xxl-12 col-sm-12 px-5 d-flex h-stack gap-5 justify-content-between flex-sm-wrap mb-3">
        <Navbar.Brand
          as={Link}
          to="home"
          className="fw-bold mx-0 hstack gap-1"
          style={{ color: "#ff5a5f " }}
        >
          <BagFill focusable={false} /> dugam{"   "}
        </Navbar.Brand>
        <Navbar.Toggle className="text-light mx-2 border-0" id="hamburger" />
        <Navbar.Collapse>
          <Nav className="me-auto d-flex justify-content-between col-xxl-12">
            <div className="d-flex hstack px-1 flex-lg-row flex-md-column flex-sm-column">
              <Nav.Link
                as={Link}
                to="home"
                className="d-flex hstack gap-2 align-items-center"
              >
                <HouseUp /> <small>Home</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="register"
                className="d-flex hstack gap-2 align-items-center"
              >
                <PencilSquare /> <small>Add Business</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="vendors"
                className="d-flex hstack gap-2 align-items-center"
              >
                <CartCheck /> <small>Vendors</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="connect"
                className="d-flex hstack gap-2 align-items-center"
              >
                <PlusCircle /> <small>Connect</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="categories"
                className="d-flex hstack gap-2 align-items-center"
              >
                <CardChecklist /> <small>Categories</small>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="admin"
                className="d-flex hstack gap-2 align-items-center"
              >
                <BuildingUp /> <small>My Business</small>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex justify-content-end gap-2">
          <NavDropdown
            className="col-xxl-4 col-sm-4 border-0 col-lg-4 p-2 btn btn-light rounded-2 mt-2"
            title={<PersonFill className="fs-3 custom-pry-color" />}
            style={{ width: "fit-content" }}
          >
            <div className="p-2 border-0 smaller-text">
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
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
