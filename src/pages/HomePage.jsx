import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Marquee from "react-fast-marquee";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";
import client8 from "../assets/client8.png";
import client9 from "../assets/client9.png";
import client10 from "../assets/client10.png";
import client11 from "../assets/client11.png";
import client12 from "../assets/client12.png";
import client13 from "../assets/client13.png";
import client14 from "../assets/client14.png";
import client15 from "../assets/client15.png";
import client16 from "../assets/client16.png";
import client17 from "../assets/client17.png";
import client18 from "../assets/client18.png";
import client19 from "../assets/client19.png";
import client20 from "../assets/client20.png";
import reverse from "../assets/reverse.png";
import HomeCaseStudy from "../components/Home/HomeCaseStudy";
import Four from "../components/Home/Four";
import Testimonials from "../components/Home/Testimonials";
import ServiceDisplay from "../components/Home/ServiceDisplay";
import { graphcms, QUERY_SLUG_CATEGORIES } from "../Graphql/Queries";
import StackScroll from "./StackScroll";
import MobileStackScroll from "../components/Home/MobileStackScroll";
import MobileFooter from "../components/MobileFooter";
import EventsHosted from "../components/Home/EventsHosted";
import OurProjects from "../components/Home/OurProjects";
import Articles from "../components/Home/Articles";
import SideBar from "../components/SideBar";
import Contact from "../components/Contact";

const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
];

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <SideBar />
      {/* <Contact /> */}
      {/* home */}

      <div className="home">
        <div className="homeSection">
          <div className="texts">
            <div className="heroText">Stacia Corp Partners For</div>
            <div className="changingText">Focused</div>
          </div>
        </div>
      </div>

      {/* product */}

      <div className="stack-scroll-container">
        <StackScroll />
      </div>

      <MobileStackScroll />

      {/* client */}

      <div className="clientWrapper">
        <div className="clients">
          <div className="clientText">Our Clients</div>

          <div className="one">
            <div className="line">
              <div className="line1"></div>
            </div>
            <Marquee style={{ overflow: "hidden" }} gradient={true}>
              {clients.map((img, index) => (
                <div
                  className="marquee-margin"
                  style={{ height: "60px", marginLeft: "50px" }}
                  key={index}
                >
                  <img src={img} alt="" className="client-marquee" />
                </div>
              ))}
            </Marquee>
            <div className="line">
              <div className="line1"></div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <p className="clientPara">
              We are honored to collaborate with a diverse range of clients,
              from startups to established enterprises across industries like
              agriculture, manufacturing, technology, and more. Our clients rely
              on us for cutting-edge solutions that enhance efficiency, drive
              innovation, and deliver measurable results. We value these
              partnerships and are committed to exceeding expectations by
              transforming ideas into impactful, real-world solutions. Together,
              we empower businesses to reach new heights and achieve sustainable
              growth through tailored technology and strategic insights.
            </p>
          </div>
        </div>
      </div>

      {/* our services */}

      <div>
        <ServiceDisplay />
      </div>

      {/* <div className="ourServices">
        <div style={{width: '90%', height: '100%', display: 'flex', margin: '0 auto', alignItems: 'center', }}>
        <div className="ourServicesLeft">
          <h1>Our Services</h1>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima fugit sint obcaecati porro nostrum. Numquam, molestias aliquid expedita minus laudantium corporis ducimus architecto tempora libero molestiae neque, praesentium quasi dolore.</h1>
        </div>
        <div className="ourServicesRight">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reprehenderit magnam, natus labore quaerat, dolores doloribus iste unde rem tempora odit maiores quibusdam obcaecati, voluptatem quos! Nesciunt blanditiis aliquid consequuntur!</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reprehenderit magnam, natus labore quaerat, dolores doloribus iste unde rem tempora odit maiores quibusdam obcaecati, voluptatem quos! Nesciunt blanditiis aliquid consequuntur!</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reprehenderit magnam, natus labore quaerat, dolores doloribus iste unde rem tempora odit maiores quibusdam obcaecati, voluptatem quos! Nesciunt blanditiis aliquid consequuntur!</h1>
        </div>
        </div>
      </div> */}

      {/* Events */}

      {/* <EventsHosted /> */}

      {/* case study */}

      {/* <HomeCaseStudy /> */}

      {/* Home Projects */}

      {/* <OurProjects /> */}

      {/* Home Articles  */}

      <Articles />
      {/* foundation four */}
      <Four />

      {/* testimonials */}

      <Testimonials />

      <Footer />

      <MobileFooter />
    </>
  );
}

export default HomePage;
