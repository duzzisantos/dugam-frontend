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

const MobileBar = () => {
  return (
    <div className="col-xxl-12 custom-pry text-light fw-bold show-mobile-bar fixed-bottom d-xxl-none d-md-none justify-content-between  p-3">
      <Nav.Link
        as={Link}
        to="home"
        className="d-flex flex-column align-items-center"
      >
        <HouseUp />
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="register"
        className="d-flex flex-column align-items-center"
      >
        <PencilSquare />
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="vendors"
        className="d-flex flex-column align-items-center"
      >
        <CartCheck />
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="connect"
        className="d-flex flex-column align-items-center"
      >
        <PlusCircle />
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="categories"
        className="d-flex flex-column align-items-center"
      >
        <CardChecklist />
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="admin"
        className="d-flex flex-column align-items-center"
      >
        <BuildingUp />
      </Nav.Link>
    </div>
  );
};

export default MobileBar;
