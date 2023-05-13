import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
// import img5 from '../../assets/images/banner/5.jpg'
// import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1} className="w-full rounded-lg" />
          <div className="absolute text-white h-full flex items-center w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
            <div className="text-white space-y-7 pl-12 w-1/3 top-1/4">
              <h1 className="text-6xl font-bold">
                Affordable Price for Car Servicing
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis libero praesentium totam beatae temporibus qui fugiat
                aliquam, eius, laboriosam, earum iste vitae aut nostrum ea
                quaerat placeat dolore! Molestias, ullam.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-primary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img src={img2} className="w-full rounded-lg" />
          <div className="absolute text-white h-full flex items-center w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
            <div className="text-white space-y-7 pl-12 w-1/3 top-1/4">
              <h1 className="text-6xl font-bold">
                Affordable Price for Car Servicing
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis libero praesentium totam beatae temporibus qui fugiat
                aliquam, eius, laboriosam, earum iste vitae aut nostrum ea
                quaerat placeat dolore! Molestias, ullam.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-primary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img src={img3} className="w-full rounded-lg" />
          <div className="absolute text-white h-full flex items-center w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
            <div className="text-white space-y-7 pl-12 w-1/3 top-1/4">
              <h1 className="text-6xl font-bold">
                Affordable Price for Car Servicing
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis libero praesentium totam beatae temporibus qui fugiat
                aliquam, eius, laboriosam, earum iste vitae aut nostrum ea
                quaerat placeat dolore! Molestias, ullam.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-primary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full ">
          <img src={img4} className="w-full rounded-lg" />
          <div className="absolute text-white h-full flex items-center w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
            <div className="text-white space-y-7 pl-12 w-1/3 top-1/4">
              <h1 className="text-6xl font-bold">
                Affordable Price for Car Servicing
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis libero praesentium totam beatae temporibus qui fugiat
                aliquam, eius, laboriosam, earum iste vitae aut nostrum ea
                quaerat placeat dolore! Molestias, ullam.
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-primary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
