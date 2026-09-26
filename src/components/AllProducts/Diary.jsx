
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Diary.css";

// =====================================================
// 40 DIARY IMAGES
// =====================================================

import diary01 from "../../assets/images/stationary/calendar-1.jpg"; // TOP 4 - SAME NEW IMAGE

import diary02 from "../../assets/images/stationary/pen-1.jpg"; // TOP 4 - SAME NEW IMAGE

import diary03 from "../../assets/images/stationary/pen-3.jpg"; // TOP 4 - SAME NEW IMAGE

import diary04 from "../../assets/images/stationary/diary-01.jpg"; // TOP 4 - SAME NEW IMAGE

import diary05 from "../../assets/images/stationary/diary-02.jpg"; // YOUR IMAGE 05


import diary06 from "../../assets/images/stationary/diary-03.jpg"; // YOUR IMAGE 06

import diary07 from "../../assets/images/stationary/diary-04.jpg"; // YOUR IMAGE 07

import diary08 from "../../assets/images/stationary/diary-05.jpg"; // YOUR IMAGE 08

import diary09 from "../../assets/images/stationary/diary-06.jpg"; // YOUR IMAGE 09

import diary10 from "../../assets/images/stationary/diary-07.jpg"; // YOUR IMAGE 10


import diary11 from "../../assets/images/stationary/diary-08.jpg"; // YOUR IMAGE 11

import diary12 from "../../assets/images/stationary/diary-09.jpg"; // YOUR IMAGE 12

import diary13 from "../../assets/images/stationary/diary-10.jpg"; // YOUR IMAGE 13

import diary14 from "../../assets/images/stationary/diary-11.jpg"; // YOUR IMAGE 14

import diary15 from "../../assets/images/stationary/diary-12.jpg"; // YOUR IMAGE 15


import diary16 from "../../assets/images/stationary/diary-13.jpg"; // YOUR IMAGE 16

import diary17 from "../../assets/images/stationary/diary-14.jpg"; // YOUR IMAGE 17

import diary18 from "../../assets/images/stationary/diary-15.jpg"; // YOUR IMAGE 18

import diary19 from "../../assets/images/stationary/diary-16.jpg"; // YOUR IMAGE 19

import diary20 from "../../assets/images/stationary/diary-17.jpg"; // YOUR IMAGE 20


import diary21 from "../../assets/images/stationary/diary-18.jpg"; // YOUR IMAGE 21

import diary22 from "../../assets/images/stationary/diary-19.jpg"; // YOUR IMAGE 22

import diary23 from "../../assets/images/stationary/diary-20.jpg"; // YOUR IMAGE 23

import diary24 from "../../assets/images/stationary/diary-21.jpg"; // YOUR IMAGE 24

import diary25 from "../../assets/images/stationary/diary-22.jpg"; // YOUR IMAGE 25


import diary26 from "../../assets/images/stationary/diary-23.jpg"; // YOUR IMAGE 26

import diary27 from "../../assets/images/stationary/diary-24.jpg"; // YOUR IMAGE 27

import diary28 from "../../assets/images/stationary/diary-25.jpg"; // YOUR IMAGE 28

import diary29 from "../../assets/images/stationary/diary-26.jpg"; // YOUR IMAGE 29

import diary30 from "../../assets/images/stationary/diary-27.jpg"; // YOUR IMAGE 30


import diary31 from "../../assets/images/stationary/diary-28.jpg"; // YOUR IMAGE 31

import diary32 from "../../assets/images/stationary/diary-29.jpg"; // YOUR IMAGE 32

import diary33 from "../../assets/images/stationary/diary-30.jpg"; // YOUR IMAGE 33

import diary34 from "../../assets/images/stationary/diary-31.jpg"; // YOUR IMAGE 34

import diary35 from "../../assets/images/stationary/diary-32.jpg"; // YOUR IMAGE 35

import diary36 from "../../assets/images/stationary/diary-33.jpg"; // YOUR IMAGE 36

import diary37 from "../../assets/images/stationary/diary-34.jpg"; // YOUR IMAGE 37

import diary38 from "../../assets/images/stationary/diary-35.jpg"; // YOUR IMAGE 38

import diary39 from "../../assets/images/stationary/diary-36.jpg"; // YOUR IMAGE 39

import diary40 from "../../assets/images/stationary/diary-37.jpg"; // YOUR IMAGE 40

gsap.registerPlugin(ScrollTrigger);

// PRODUCT DATA - EXACTLY 

const products = [
{
  id: 1,
  category: "TABLE CALENDAR",
  title: "EXECUTIVE TABLE CALENDAR 01",
  size: 'Standard Table Calendar Size',
  paper: "Premium Quality Paper",
  binding: "Wire-O Bound",
  planner: "Monthly Calendar",
  finish: "UV Varnished",
  box: "Matching Box",
  image: diary01, // YOUR IMAGE 01
},

{
  id: 2,
  category: "PREMIUM PEN",
  title: "PREMIUM EXECUTIVE PEN 02",
  finish: "Premium Finish",
  packaging: "Matching Box",
  image: diary02, // YOUR IMAGE 02
},

{
  id: 3,
  category: "CORPORATE COLLECTION",
  title: "CLASSIC OFFICE PEN 03",
  size: '7" x 9.5" (apx.)',
  paper: "",
  binding: "",
  planner: "",
  finish: "Matt Lamination",
  box: "Matching Box",
  image: diary03, // YOUR IMAGE 03
},


{
  id: 4,
  category: "NESCAFE DIARY",
  title: "NESCAFE DIARY (1 DATE MONTH CUT)04",
  size: '7.25" x 9.5" (apx.)',
  paper: "70 GSM Natural Shade Graining Paper",
  binding: "Hard Bound",
  planner: "Monthly Planner",
  finish: "UV Varnished",
  box: "Matching Box",
  image: diary07, // YOUR IMAGE 07
},

{
  id: 5,
  category: "NESCAFE DIARY",
  title: "SUNDAY SEPARATE NESCAFE DIARY (1 DATE MONTH CUT)05",
  size: '7.25" x 9.5" (apx.)',
  paper: "64 GSM White Paper",
  binding: "Hard Bound",
  planner: "Monthly Planner",
  finish: "UV Varnished",
  box: "",
  image: diary05, // YOUR IMAGE 05
},

{
  id: 6,
  category: "NESCAFE MAPLITHO DIARY",
  title: "NESCAFE MAPLITHO DIARY (1 DATE MONTH CUT)06",
  size: '7" x 9.25" (apx.)',
  paper: "60 GSM White Paper",
  binding: "Hard Bound",
  planner: "",
  finish: "UV Varnished",
  box: "",
  image: diary10, // YOUR IMAGE 10
},

{
  id: 7,
  category: "NESCAFE ECO DIARY",
  title: "NESCAFE ECO DIARY (1 DATE)07",
  size: '7" x 9" (apx.)',
  paper: "58 GSM White Paper",
  binding: "Hard Bound",
  planner: "",
  finish: "UV Varnished",
  box: "",
  image: diary04, // YOUR IMAGE 04
},


{
  id: 8,
  category: "NESCAFE ECO DIARY",
  title: "NESCAFE ECO DIARY (1 DATE NATURAL)08",
  size: '7" x 9" (apx.)',
  paper: "60 GSM Natural Shade",
  binding: "Hard Bound",
  planner: "",
  finish: "UV Varnished",
  box: "",
  image: diary08, // YOUR IMAGE 08
},


{
  id: 9,
  category: "NESCAFE 2 DATE DIARY",
  title: "NESCAFE 2 DATE DIARY 09",
  size: '7.25" x 9.5" (apx.)',
  paper: "64 GSM White Paper",
  binding: "Hard Bound",
  planner: "",
  finish: "Double Colour UV Varnished",
  box: "",
  image: diary11, // YOUR IMAGE 11
},

{
  id: 10,
  category: "NESCAFE PP DIARY",
  title: "NESCAFE PP DIARY 10",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary13, // YOUR IMAGE 13
},


 {
  id: 11,
  category: "NESCAFE PU DIARY",
  title: "NESCAFE PU DIARY 11",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary12, // YOUR IMAGE 12
},


{
  id: 12,
  category: "NESCAFE PU DIARY",
  title: "NESCAFE PU DIARY 12",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary06, // YOUR IMAGE 06
}, 

{
  id: 13,
  category: "NESCAFE PU DIARY",
  title: "NESCAFE PU DIARY 13",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary18, // YOUR IMAGE 18
},

 
{
  id: 14,
  category: "",
  title: "14",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary09, // YOUR IMAGE 09
},
 




{
  id: 15,
  category: "WIRO NOTEBOOK",
  title: "WIRO NOTEBOOK 15",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary14, // YOUR IMAGE 14
},

{
  id: 16,
  category: "WRITING PAD",
  title: "WRITING PAD 16",
  size: '3.25" X 5"',
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary15, // YOUR IMAGE 15
},
{
  id: 17,
  category: "CUBIC PAD",
  title: "CUBIC PAD 17",
  size: '4.25" X 4.25"',
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary17, // YOUR IMAGE 17
},

{
  id: 18,
  category: "EXCLUSIVE NOTEBOOK",
  title: "EXCLUSIVE NOTEBOOK 18",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary20, // YOUR IMAGE 20
},



  {
  id: 19,
  category: "EXCLUSIVE NOTEBOOK",
  title: "EXCLUSIVE NOTEBOOK 19",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
    image: diary21, // YOUR IMAGE 21
  },

 {
  id: 20,
  category: "EXCLUSIVE NOTEBOOK",
  title: "EXCLUSIVE NOTEBOOK 20",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary22, // YOUR IMAGE 22
},

{
  id: 21,
  category: "EXCLUSIVE NOTEBOOK",
  title: "EXCLUSIVE NOTEBOOK 21",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary32, // YOUR IMAGE 32
},

{
  id: 22,
  category: "EXCLUSIVE NOTEBOOK",
  title: "EXCLUSIVE NOTEBOOK 22",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary33, // YOUR IMAGE 33
},



{
  id: 23,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 23",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary23, // YOUR IMAGE 23
},




{
  id: 24,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 24",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary16, // YOUR IMAGE 16
},


{
  id: 25,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 25",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary19, // YOUR IMAGE 19
},

{
  id: 26,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 26",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary24, // YOUR IMAGE 24
},

{
  id: 27,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 27",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary25, // YOUR IMAGE 25
},


{
  id: 28,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 28",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary26, // YOUR IMAGE 26
},

 {
  id: 29,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 29",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary27, // YOUR IMAGE 27
},

{
  id: 30,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 30",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary28, // YOUR IMAGE 28
},



{
  id: 31,
  category: "",
  title: "EXCLUSIVE SET 31",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary35, // YOUR IMAGE 35
},
  {
  id: 32,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 32",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary36,
},

{
  id: 33,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 33",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary37,
},


 {
  id: 34,
  category: "EXCLUSIVE SET",
  title: "EXCLUSIVE SET 34",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary29, // YOUR IMAGE 29
},

{
  id: 35,
  category: "WRITING PAD",
  title: "WRITING PAD 35",
  size: '5.5" X 8.5"',
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary30, // YOUR IMAGE 30
},
 {
  id: 36,
category: "WRITING PAD",
  title: "WRITING PAD 36",
  size: '5.5" X 8.5"',
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary31, // YOUR IMAGE 31
},

{
  id: 37,
  category: "WRITING PAD",
  title: "WRITING PAD 37",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary34, // YOUR IMAGE 34
},




{
  id: 38,
  category: "",
  title: "38",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary38,
},

{
  id: 39,
  category: "",
  title: "39",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary39,
},
 {
  id: 40,
  category: "",
  title: "40",
  size: "",
  paper: "",
  binding: "",
  planner: "",
  finish: "",
  box: "",
  image: diary40,
},
];

// =====================================================
// PAGINATION
// =====================================================

const PRODUCTS_PER_PAGE = 20;

// =====================================================
// COMPONENT
// =====================================================

function Diary() {
  const diaryRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  // ===================================================
  // PAGINATION DATA
  // ===================================================

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  // ===================================================
  // CHANGE PAGE
  // ===================================================

  const changePage = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
    setSelectedProduct(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ===================================================
  // GSAP SCROLL ANIMATION
  // ===================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards =
        gsap.utils.toArray(".diary-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
            x: index % 2 === 0 ? -30 : 30,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions:
                "play none none none",
            },
          }
        );
      });
    }, diaryRef);

    return () => ctx.revert();
  }, [currentPage]);

  // ===================================================
  // ESCAPE KEY
  // ===================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  // ===================================================
  // BODY SCROLL LOCK
  // ===================================================

  useEffect(() => {
    document.body.style.overflow =
      selectedProduct ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  // ===================================================
  // RETURN
  // ===================================================

  return (
    <>
      <section
        className="diary-section"
        ref={diaryRef}
      >
        <div className="diary-container">

          {/* PAGE HEADER */}

          <div className="diary-page-heading">
            <span>
              Products {startIndex + 1} –{" "}
              {Math.min(
                startIndex + PRODUCTS_PER_PAGE,
                products.length
              )}
            </span>

            <span>
              Page {currentPage} / {totalPages}
            </span>
          </div>

          {/* PRODUCT GRID */}

          <div className="diary-grid">
            {currentProducts.map((product) => (
              <article
                className="diary-card"
                key={product.id}
              >

                {/* PRODUCT IMAGE */}

                <div className="diary-image-box">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="diary-image"
                    loading="lazy"
                  />

                  <span className="diary-product-number">
                    {String(product.id).padStart(2, "0")}
                  </span>
                </div>

                {/* PRODUCT CONTENT */}

                <div className="diary-content">
                  <div className="diary-bottom-row">

                    <h3 className="diary-title">
                      {product.title}
                    </h3>

                    <button
                      type="button"
                      className="diary-details-button"
                      onClick={() =>
                        setSelectedProduct(product)
                      }
                    >
                      <span>
                        View Details
                      </span>

                      <span className="diary-button-arrow">
                        ↗
                      </span>
                    </button>

                  </div>
                </div>

              </article>
            ))}
          </div>

          {/* PAGINATION */}

          <div className="diary-pagination">

            <button
              type="button"
              className="diary-page-arrow"
              disabled={currentPage === 1}
              onClick={() =>
                changePage(currentPage - 1)
              }
            >
              <span>←</span>
              <span>Previous</span>
            </button>

            <div className="diary-page-info">

              <button
                type="button"
                className={
                  currentPage === 1
                    ? "active"
                    : ""
                }
                onClick={() =>
                  changePage(1)
                }
              >
                01
              </button>

              <span>/</span>

              <button
                type="button"
                className={
                  currentPage === 2
                    ? "active"
                    : ""
                }
                onClick={() =>
                  changePage(2)
                }
              >
                02
              </button>

            </div>

            <button
              type="button"
              className="diary-page-arrow"
              disabled={
                currentPage === totalPages
              }
              onClick={() =>
                changePage(currentPage + 1)
              }
            >
              <span>Next</span>
              <span>→</span>
            </button>

          </div>

        </div>
      </section>

      {/* =================================================
          DETAILS MODAL
      ================================================= */}

      {selectedProduct && (
        <div
          className="diary-lightbox"
          onClick={() =>
            setSelectedProduct(null)
          }
        >

          <div
            className="diary-lightbox-inner"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="diary-lightbox-close"
              onClick={() =>
                setSelectedProduct(null)
              }
              aria-label="Close details"
            >
              ×
            </button>

            {/* MODAL IMAGE */}

            <div className="diary-lightbox-image-wrap">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="diary-lightbox-image"
              />
            </div>

            {/* MODAL DETAILS */}

            <div className="diary-lightbox-info">

              <div className="diary-modal-top">

                <span className="diary-lightbox-category">
                  {selectedProduct.category}
                </span>

                <span className="diary-modal-number">
                  #
                  {String(
                    selectedProduct.id
                  ).padStart(2, "0")}
                </span>

              </div>

              <h2>
                {selectedProduct.title}
              </h2>

              <div className="diary-detail-grid">

                <div className="diary-detail-item">
                  <span>Size</span>
                  <strong>
                    {selectedProduct.size}
                  </strong>
                </div>

                <div className="diary-detail-item">
                  <span>Paper</span>
                  <strong>
                    {selectedProduct.paper}
                  </strong>
                </div>

                <div className="diary-detail-item">
                  <span>Binding</span>
                  <strong>
                    {selectedProduct.binding}
                  </strong>
                </div>

                <div className="diary-detail-item">
                  <span>Planner</span>
                  <strong>
                    {selectedProduct.planner}
                  </strong>
                </div>

                <div className="diary-detail-item">
                  <span>Finish</span>
                  <strong>
                    {selectedProduct.finish}
                  </strong>
                </div>

                <div className="diary-detail-item">
                  <span>Packaging</span>
                  <strong>
                    {selectedProduct.box}
                  </strong>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Diary;

