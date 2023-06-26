import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Faqs = () => {
  return (
    <section
      className="bg-black mt_-2 position-relative pb-lg-5 pb-3"
      id="faqe">
      <div className="container  py-5 position-relative z-4">
        <h2 className="ff_mukta fw-bolder fs_2xl pb-4 text-center faqs_h2 position-relative z_5">
          FAQs
        </h2>
        <div className="App mw_845 mx-auto">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" data-aos="fade-up">
              <Accordion.Header className="border_top">
                What is a pump & dump?
              </Accordion.Header>
              <Accordion.Body>
                Pump is a deliberate and drastic increase in the value of a coin
                with the help of a massive purchase by our entire team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" data-aos="fade-up">
              <Accordion.Header>How does the pump come about?</Accordion.Header>
              <Accordion.Body>
                Pump is a deliberate and drastic increase in the value of a coin
                with the help of a massive purchase by our entire team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" data-aos="fade-up">
              <Accordion.Header>Why is it profitable to me?</Accordion.Header>
              <Accordion.Body>
                Pump is a deliberate and drastic increase in the value of a coin
                with the help of a massive purchase by our entire team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" data-aos="fade-up">
              <Accordion.Header>
                Is it legal to participate in the pump?
              </Accordion.Header>
              <Accordion.Body>
                Pump is a deliberate and drastic increase in the value of a coin
                with the help of a massive purchase by our entire team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" data-aos="fade-up">
              <Accordion.Header>
                How to participate in the pump using Binance and TrustWallet?
              </Accordion.Header>
              <Accordion.Body>
                Pump is a deliberate and drastic increase in the value of a coin
                with the help of a massive purchase by our entire team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" data-aos="fade-up">
              <Accordion.Header>
                How to participate in the pump using Binance and TrustWallet?
              </Accordion.Header>
              <Accordion.Body>
                Pump is a deliberate and drastic increase in the value of a coin
                with the help of a massive purchase by our entire team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" data-aos="fade-up">
              <Accordion.Header>
                Video if you’ve been never used PancakeSwap.
              </Accordion.Header>
              <Accordion.Body>
                Pump is a deliberate and drastic increase in the value of a coin
                with the help of a massive purchase by our entire team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" data-aos="fade-up" className="border_b">
              <Accordion.Header >How to sell coins fast?</Accordion.Header>
              <Accordion.Body >
                Pump is a deliberate and drastic increase in the value of a coin
                with the help of a massive purchase by our entire team.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="position-absolute faqs_top_circle top-0 d-none d-sm-block">
        <div className="rgb_circle"></div>
      </div>
      <div className="position-absolute faqs_bottom_circle fqs_bottom_circle d-none d-sm-block">
        <div className="rgb_circle"></div>
      </div>
    </section>
  );
};

export default Faqs;
