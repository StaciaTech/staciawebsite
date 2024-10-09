import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/DestopStacking.css";
gsap.registerPlugin(ScrollTrigger);

const DestopStacking = () => {
  const cardData = [
    { header: "Header 3", backgroundColor: "#FC88C6" },
    { header: "Header 2", backgroundColor: "#BF72FD" },
    { header: "Header 1", backgroundColor: "#8314F9" },
    { header: "Header 4", backgroundColor: "red" },
    { header: "Header 5", backgroundColor: "green" },
  ];

  useEffect(() => {
    let cards = gsap.utils.toArray(".stackCard");
    let stickDistance = 0;

    let firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    let lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "center center",
    });

    cards.forEach((card, index) => {
      let scale = 1 - (cards.length - index) * 0.025;
      let scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: `50% ${lastCardST.start + stickDistance}`,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  }, []);

  return (
    <>
      <section className="spacer"></section>

      <section className="cardStacking">
        <div className="container">
          <div className="cardStacking__cards">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="stackCard d-flex align-items-center justify-content-between"
                style={{ backgroundColor: card.backgroundColor }}
              >
                <div className="stackCard__body w-100 d-flex align-items-center justify-content-between">
                  <span className="stackCard__body-content-header d-block">
                    {card.header}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="spacer"></section>
    </>
  );
};

export default DestopStacking;
