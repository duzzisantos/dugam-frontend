import { Button, Col, Form, Modal } from "react-bootstrap";
import { Send, XLg } from "react-bootstrap-icons";

const TextComponent = ({
  handleClose,
  handleSave,
  content,
  setContent,
  title,
  showModal,
}) => {
  return (
    <Modal show={showModal} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6 fw-semibold custom-pry-color text-dark">
          Commenting on post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className=" rounded-1 d-flex flex-column gap-2 p-2">
          <Form.Label
            className="text-secondary smaller-text mb-0 fw-bold"
            htmlFor={title}
          >
            {title}
          </Form.Label>
          <Form.Control
            as={"textarea"}
            className="rounded-0"
            rows={2}
            autoCorrect="true"
            id={title}
            name={title}
            title={title}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Col className="d-flex justify-content-end hastack gap-2 mt-3">
            <Button
              type="button"
              size="sm"
              className="border bg-transparent custom-pry-color rounded-1"
              onClick={handleClose}
            >
              <XLg />
            </Button>
            <Button
              size="sm"
              className="custom-pry custom-pry-border text-light rounded-1"
              type="button"
              disabled={content === ""}
              onClick={() => {
                handleSave();
              }}
            >
              <Send /> Reply
            </Button>
          </Col>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TextComponent;
