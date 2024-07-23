import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/services.css";
import ServiceHeroImg from "../assets/serviceHeroImg.png";
import ServiceComponent from "../components/ServiceComponent";
import ServiceFeatureComponent from "../components/ServiceFeatureComponent";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import ServiceCard from "../components/Services/ServiceCard";
import AllServiceCard from "../components/Services/AllServiceCard";
import FeatureService from "../components/Services/FeatureService";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../redux/slice/serviceSlice";
import { Link } from "react-router-dom";
import LoadingStar from "../components/LoadingStar";

const services = [
  {
    feature: true,
    img: s1,
    serviceTitle: "Project Documentation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.",
  },
  {
    feature: false,
    img: s2,
    serviceTitle: "Machine Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.",
  },
  {
    feature: false,
    img: s3,
    serviceTitle: "Cad Modeling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.",
  },
  {
    feature: false,
    img: s4,
    serviceTitle: "3D Modeling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.",
  },
  {
    feature: false,
    img: s5,
    serviceTitle: "Ansys",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.",
  },
];

function ServicePage() {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const serviceData = useSelector((state) => state.service);
  useEffect(() => {
    dispatch(fetchServices());
    // setLoading(serviceData.isLoading);
  }, []);

  const servData = serviceData.data.serviceBasedPosition;
  // console.log(servData);
  // console.log(serviceData.isLoading);

  return (
    <>
      <NavBar />
      <SideBar />
      {serviceData.isLoading ? (
        <div>
          <LoadingStar />
        </div>
      ) : (
        <div>
          <div className="service-hero-container">
            <div className="service-hero-section">
              <div className="service-title">Our Services</div>
              <div className="service-section1-content-box">
                <div className="service-section-left">
                  <div className="service-overview-title">Overview</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Unde aspernatur omnis dolores. Laudantium quod ex veniam
                    magnam. Officiis quibusdam accusantium sit, dolorum,
                    sapiente dicta illo tempora veniam omnis magni ab? Expedita
                    laborum fugiat esse, ratione est ipsum tempore, repellat
                    minima a explicabo illo voluptate eius architecto odit.
                    Eligendi, nam ea vitae exercitationem, expedita ducimus
                    pariatur voluptatem, libero consequatur in nostrum!
                  </p>
                </div>
                <div className="service-section-right">
                  <div className="service-section-right-imgbox">
                    <img src={ServiceHeroImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="all-services">
            {servData.map(
              (data) =>
                data.position === 1 && (
                  <>
                    <div className="feature-service">
                      <div className="feature-service-img-box">
                        <img src={data.image} alt="" />
                      </div>

                      <div className="feature-content">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                          className="feature-first-title"
                        >
                          <div className="feature-title">{data.title}</div>
                          <Link
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                            to={`${data.title}/${data._id}`}
                            className="know-more"
                          >
                            Know more
                          </Link>
                        </div>
                        <div className="feature-para">
                          {data.des.split(/\s+/, 30).join(" ")}
                        </div>
                      </div>
                    </div>
                  </>
                )
            )}
            {/* <AllServiceCard data={servData} /> */}
            <div className="all-service-box">
              {servData.map(
                (data, i) =>
                  data.position !== 1 && (
                    <div className="service-card" key={i}>
                      <div className="service-card-img-box">
                        <img src={data.image} alt="" />
                      </div>
                      <div className="service-content-box">
                        <div className="feature-title">{data.title}</div>

                        <div className="feature-para" style={{ width: "100%" }}>
                          {data.des.split(/\s+/, 20).join(" ")}
                        </div>
                        <Link
                          to={`${data.title}/${data._id}`}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <div
                            className="know-more"
                            style={{ marginTop: "30px" }}
                          >
                            Know-more
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <MobileFooter />
    </>
  );
}

export default ServicePage;
