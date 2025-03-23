import { Card, CardBody, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const SuggestionBoxes = ({ title, user }) => {
  const navigate = useNavigate();

  const handleVisit = () => {
    navigate(`/view-categories`, { state: title });
  };

  return (
    <Card className="col-lg-3 col-md-4 col-sm-4 shadow-sm border-0 rounded-0 d-flex justify-content-center p-3 suggestion-boxes">
      <h3 className="fs-6 fw-semibold custom-pry-color text-capitalize">
        {title}
      </h3>
      <CardBody className="suggestion-explore-text">
        {user === null || user === undefined ? (
          <a href="/login" className="text-decoration-none text-secondary">
            <small>
              {" "}
              Explore <ArrowRightCircle />
            </small>
          </a>
        ) : user ? (
          <Button
            size="sm"
            variant="transparent"
            className="border-0 text-secondary"
            onClick={handleVisit}
          >
            Explore <ArrowRightCircle />
          </Button>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default SuggestionBoxes;
