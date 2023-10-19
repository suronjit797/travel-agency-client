import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FcMoneyTransfer, FcCustomerSupport, FcCalendar } from "react-icons/fc";

const bannerService = [
  {
    icon: <GiAirplaneDeparture />,
    title: "500+ DESTINATIONS",
    text: "Visit world wide",
  },
  {
    icon: <FcMoneyTransfer />,
    title: "BEST PRICE GUARANTEE",
    text: "Lowest Pricew",
  },
  {
    icon: <FcCustomerSupport />,
    title: "GREAT CUSTOMER",
    text: "24/7 Customer care",
  },
  {
    icon: <FcCalendar />,
    title: "SUPER FAST BOOKING",
    text: "Visit when you want",
  },
];

const HomeBanner = () => {
  return (
    <section className="py-5 text-white bg_primary">
      <Container>
        <Row className="gy-4">
          {bannerService.map((banner, ind) => (
            <Col md={6} xl={3} key={ind}>
              <div className="d-flex align-items-center justify-content-md-center">
                <div className="icon me-3 fs-1">{banner.icon}</div>
                <div>
                  <h6 className="mb-0 fw-bold"> {banner.title} </h6>
                  <p className="mb-0"> {banner.text} </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeBanner;
