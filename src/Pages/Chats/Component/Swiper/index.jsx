import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import user from "../../../../assets/user.jpg";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Swiperr() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
      >
        <SwiperSlide>
          <div className="col-12 py-3">
            <div className={styles.slide}>
              <img src={user} alt="" />
              <h6>7mada</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="col-12 py-3">
            <div className={styles.slide}>
              <img src={user} alt="" />
              <h6>7mada</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="col-12 py-3">
            <div className={styles.slide}>
              <img src={user} alt="" />
              <h6>7mada</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="col-12 py-3">
            <div className={styles.slide}>
              <img src={user} alt="" />
              <h6>7mada</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="col-12 py-3">
            <div className={styles.slide}>
              <img src={user} alt="" />
              <h6>7mada</h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
