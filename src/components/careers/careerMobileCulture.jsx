import { React, useState, useEffect } from "react";
import "../../styles/career.css";
import arrow from "../../assets/arrowDown.svg";

function CareerMobileCulture() {
  const [office, setOffice] = useState(false);
  const [work, setWork] = useState(false);
  const [coWorker, setCoWorker] = useState(false);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    setOffice(false);
    setWork(false);
    setCoWorker(false);
    setYearly(false);
  }, []);

  const officeShowHandler = () => {
    setOffice(!office);
    setWork(false);
    setCoWorker(false);
    setYearly(false);
  };
  const workHandler = () => {
    setOffice(false);
    setWork(!work);
    setCoWorker(false);
    setYearly(false);
  };
  const coWorkerHandler = () => {
    setOffice(false);
    setWork(false);
    setCoWorker(!coWorker);
    setYearly(false);
  };
  const yearlyHandler = () => {
    setOffice(false);
    setWork(false);
    setCoWorker(false);
    setYearly(!yearly);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="our-cultures-mobile">
        <div
          className="career-headings"
          //   style={{ textAlign: "center", width: "100%", fontSize: "24px" }}
        >
          Our Culture
        </div>

        <div>
          <div className="mobile-culture-titles">
            <div>Office Environment</div>
            <div>
              <img src={arrow} alt="" onClick={officeShowHandler} />
            </div>
          </div>
          <p
            className="mobile-culture-contents"
            style={office ? { display: "block" } : { display: "none" }}
          >
            Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
            tempor nunc nec habitant. Dolor vulputate tempor sagittis et
            maecenas praesent congue ac. Blandit in sagittis sem quis lectus
            aliquam. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <hr />
        <div>
          <div className="mobile-culture-titles">
            <div>Working Model</div>
            <div>
              <img src={arrow} alt="" onClick={workHandler} />
            </div>
          </div>
          <p
            className="mobile-culture-contents"
            style={work ? { display: "block" } : { display: "none" }}
          >
            Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
            tempor nunc nec habitant. Dolor vulputate tempor sagittis et
            maecenas praesent congue ac. Blandit in sagittis sem quis lectus
            aliquam. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <hr />
        <div>
          <div className="mobile-culture-titles">
            <div>Co-workers Environment</div>
            <div>
              <img src={arrow} alt="" onClick={coWorkerHandler} />
            </div>
          </div>
          <p
            className="mobile-culture-contents"
            style={coWorker ? { display: "block" } : { display: "none" }}
          >
            Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
            tempor nunc nec habitant. Dolor vulputate tempor sagittis et
            maecenas praesent congue ac. Blandit in sagittis sem quis lectus
            aliquam. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <hr />
        <div>
          <div className="mobile-culture-titles">
            <div>Yearly Trips</div>
            <div>
              <img src={arrow} alt="" onClick={yearlyHandler} />
            </div>
          </div>
          <p
            className="mobile-culture-contents"
            style={yearly ? { display: "block" } : { display: "none" }}
          >
            Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
            tempor nunc nec habitant. Dolor vulputate tempor sagittis et
            maecenas praesent congue ac. Blandit in sagittis sem quis lectus
            aliquam. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerMobileCulture;
