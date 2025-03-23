import { Card, Button } from "react-bootstrap";

const AdvertBox = ({ title, content, image }) => {
  return (
    <Card style={{ width: "20rem" }} className="border-0 shadow-sm">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title as={"h6"} className="fw-semibold">
          {title}
        </Card.Title>
        <Card.Text>
          <small>{content}</small>
        </Card.Text>
        <Button size="sm" className="custom-pry border-0 rounded-1 text-light">
          Discover
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AdvertBox;
