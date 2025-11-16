import { Card, Row, Col } from "react-bootstrap";

export default function InforCards() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Smart Shopping Experience",
      text: "Empower shoppers with a seamless browsing journey, personalized recommendations, and access to trusted vendors in a vibrant digital marketplace.",
    },
    {
      img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
      title: "Vendors Growing Faster",
      text: "Our platform helps vendors reach more customers, manage inventory effortlessly, and boost sales through powerful business tools.",
    },
    {
      img: "https://images.unsplash.com/photo-1688149013444-da644d290749?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Secure Payments & Trust",
      text: "Buyers and sellers transact with confidence thanks to secure payments, transparent reviews, and a verified vendor ecosystem.",
    },
    {
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Marketplace Advantage",
      text: "Unlock the power of a modern marketplace: fast deliveries, competitive pricing, and a community-driven environment that benefits everyone.",
    },
  ];

  return (
    <div className="px-4 mt-4">
      <Row className="g-4">
        {cards.map((c, i) => (
          <Col key={i} xs={12} lg={3} sm={6} md={4} style={{ height: "380px" }}>
            <Card
              className="h-100 shadow-sm border-0 rounded-2"
              style={{ overflow: "hidden" }}
            >
              <Card.Img
                variant="top"
                src={c.img}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <Card.Body className="p-3">
                <Card.Title className="fw-bold mb-2">{c.title}</Card.Title>
                <Card.Text className="text-muted">{c.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
