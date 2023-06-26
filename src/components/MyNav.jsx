import { useState } from "react";
import { Nav } from "react-bootstrap";
import navlogo from "../assets/images/png/nav_logo.webp";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const MyNav = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <>
        <Nav className="py-3 my_nav position-relative z_5">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="fw-bold">
              <img src={navlogo} alt="logo" className="w-100 object-fit-cover c_pointer" />
            </div>
            <ul className="d-xl-flex gap-3 mb-0 d-none d-block align-items-center">
              <li>
                <a href="#Statistics">Statistics</a>
              </li>
              <li>
                <a href="#our_pumps">Our Pumps</a>
              </li>
              <li>
                <a href="#feedback">Feedbacks</a>
              </li>
              <li>
                <a href="#works">How It Works</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#faqe">FAQ</a>
              </li>
              <span className="ps-3">
                <button className="nav_btn custom-btn btn-9 hover_effect">
                <a href="https://web.telegram.org/a/" target="_blank" className="text-white">
                  Join Telegram For Free</a>
                </button>
              </span>
            </ul>
            <div
              className="d-flex justify-content-between flex-column d-xl-none menu_box z_index_100"
              onClick={showNav}
            >
              <h2 className="fs_xl position-relative text-white">
                {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
              </h2>
            </div>
            <ul
              className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-xl-none ${
                show ? "" : "start-0"
              }`}
            >
              <li>
                <a href="#Statistics" onClick={showNav}>Statistics</a>
              </li>
              <li>
                <a href="#our_pumps" onClick={showNav}>Our Pumps</a>
              </li>
              <li>
                <a href="#feedback" onClick={showNav}>Feedbacks</a>
              </li>
              <li>
                <a href="#works" onClick={showNav}>How It Works</a>
              </li>
              <li>
                <a href="#about" onClick={showNav}>About Us</a>
              </li>
              <li>
                <a href="#faqe" onClick={showNav}>FAQ</a>
              </li>
              <span className="ps-3">
                <button className="nav_btn hover_effect ">
                  Join Telegram For Free
                </button>
              </span>
            </ul>
          </div>
        </Nav>
      </>
    </>
  );
};

export default MyNav;
