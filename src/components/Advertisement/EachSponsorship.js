import React from "react";

const EachSponsorship = ({ eachSponsorship }) => {
  const { firstBanner, secondBanner } = eachSponsorship;
  //   console.log("firstBanner", firstBanner, "\n seconsbanner", secondBanner);
  return (
    <div className="h-100 ">
      <section class="pt-2">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          {/* <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div> */}

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src={firstBanner} class="d-block w-100 h-50" alt="..." />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={secondBanner} class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          {/* <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default EachSponsorship;
