import { Nav } from "react-bootstrap";
import {
  BuildingUp,
  CartCheck,
  HouseUp,
  PencilSquare,
  PlusCircle,
  CardChecklist,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="col-xxl-1 d-flex flex-column gap-4"
      style={{ paddingTop: "100px" }}
    >
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
  );
};

export default SideBar;
