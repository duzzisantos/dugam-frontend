import { Col, Container, Row } from "react-bootstrap";
import { optionsArray } from "../helpers/hardCodedData";
import SuggestionBoxes from "../reusable-comps/SuggestionBoxes";

const Categories = ({ user }) => {
  return (
    <Container
      fluid
      className="col-lg-12 px-5 col-sm-12 custom-pry-color"
      style={{ paddingTop: "160px" }}
    >
      <h1 className="fs-3 fw-bold">Categories Overview</h1>
      <p className="custom-pry-text">
        Explore different categories on marketplace
      </p>
      <Row className="justify-content-center bottom-0">
        <Col className="d-flex flex-wrap gap-3 text-center mt-3 pb-5">
          {optionsArray.map((el, i) => (
            <SuggestionBoxes key={i} title={el} user={user} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
