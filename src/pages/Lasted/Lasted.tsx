import React, { useEffect, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lasted.scss";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import SplashScreen from "./SplashScreen";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  Icon,
} from "@tabler/icons-react";
import { BsFillPauseFill } from "react-icons/bs";
import gsap from "gsap";
import { Typewriter } from "./TypeWriterText";

type Props = {};

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="custom-prev-arrow"
    style={{ cursor: "pointer" }}
    onClick={onClick}
  >
    <i>
      <GrCaretPrevious />
    </i>
  </div>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="custom-next-arrow"
    style={{ cursor: "pointer" }}
    onClick={onClick}
  >
    <i>
      <GrCaretNext />
    </i>
  </div>
);

const MOCKDATA = [
  {
    icon: IconGauge,
    title: "1. Tiếng Anh cho trẻ em: ",
    description: "Lớp 1 - Lớp 5 (Starters - Movers - Flyers).",
  },
  {
    icon: IconUser,
    title: "2. Tiếng Anh cho thanh thiếu niên",
    description: "Lớp 6 - 12 (Giao tiếp - Ngữ pháp thực hành)",
  },
  {
    icon: IconCookie,
    title: "3. Tiếng Anh Ngữ pháp thực hành chuyên biệt (Lớp 6 - 12)",
    description: "",
  },
  {
    icon: IconLock,
    title: "4. Tiếng Anh cho trẻ xuất chúng (Thiết kế riêng).",
    description: "",
  },
  {
    icon: IconMessage2,
    title:
      "5. Tiếng Anh cho sinh viên, người đi làm (Giao tiếp - Ngữ pháp thực hành).",
    description: "",
  },
  {
    icon: IconMessage2,
    title: "6. Tiếng Anh học thuật (Ielts)",
    description: "",
  },
];

export default function Lasted({}: Props) {
  const [autoplay, setAutoplay] = React.useState(true);

  const settings: any = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: autoplay,
    autoplaySpeed: 1000,
  };

  const [timeOut, setIsTimeout] = useState(false);

  return (
    <div className="lasted">
      {autoplay ? "true" : "false "}
      <>
        <SplashScreen></SplashScreen>
      </>
      <>
        <Slider {...settings}>
          <div className="lasted__slide">
            <h2>Tầm nhìn</h2>
            {/* <p style={{fontWeight: "normal"}}> */}
            <Typewriter
              data={[
                "Dạy học là dạy - học. Dạy học không là kinh doanh, không là mua - bán.",
                "Chúng tôi đặt lợi ích của người học là trên hết.",
                "- Giá trị thực học: Kiến thức thật, giỏi thật.",
                "- Giá trị nhân bản: Bình đẳng, minh bạch, trung thực, tôn trọng.",
              ]}
            />
            {/* </p> */}
            {/* <p style={{fontWeight: "normal"}}>Chúng tôi đặt lợi ích của người học là trên hết.</p>
          <p style={{fontWeight: "normal"}}>- Giá trị thực học: Kiến thức thật, giỏi thật.</p>
          <p style={{fontWeight: "normal"}}>
            - Giá trị nhân bản: Bình đẳng, minh bạch, trung thực, tôn trọng.
          </p> */}
          </div>
          <div className="lasted__slide">
            <h2>Sứ mệnh</h2>
            <p style={{ fontWeight: "normal" }}>Giáo dục là tận hiến</p>
            <p style={{ fontWeight: "normal" }}>
              Chúng tôi hành động vì lợi ích cộng đồng bằng:
            </p>
            <p style={{ fontWeight: "normal" }}>
              Lòng vị tha: vì mọi người xung quanh, không vì lợi ích của bản
              thân
            </p>
            <p style={{ fontWeight: "normal" }}>
              Lòng trắc ẩn: yêu thương mọi học sinh, mọi học viên - yêu thương
              mọi người đã quen, chưa quen, sẽ quen
            </p>
          </div>
          <div className="lasted__slide">
            <h2 className="text-center">Khóa học</h2>
            <div className="lasted__rowcourse">
              {MOCKDATA.map((item, index) => {
                return (
                  <div className="lasted__colcourse" key={index}>
                    <div className="item">
                      <i>
                        {" "}
                        <item.icon />
                      </i>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lasted__slide">
            <h2>Học phí</h2>
            <p style={{ fontWeight: "normal" }}>
              Chúng tôi đảm bảo lợi ích của cộng đồng bằng cách:
            </p>
            <p style={{ fontWeight: "normal" }}>- Thu học phí theo tháng.</p>
            <p style={{ fontWeight: "normal" }}>
              - Minh bạch hóa nội quy học phí
            </p>
          </div>
          <div className="lasted__slide">
            <h2>Chân thật</h2>

            <div className="row__image">
              <div className="col__image">
                <img src="https://i.ibb.co/7QvzZWy/DSC-0706.jpg" alt="" />
              </div>
              <div className="col__image">
                <img src="https://i.ibb.co/4jXGqjb/DSC-0653.jpg" alt="" />
              </div>
              <div className="col__image">
                <img src="https://i.ibb.co/7QvzZWy/DSC-0651.jpg" alt="" />
              </div>
              <div className="col__image">
                <img src="https://i.ibb.co/7QvzZWy/DSC-0726.jpg" alt="" />
              </div>
              <div className="col__image">
                <img src="https://i.ibb.co/WFVRGkL/DSC08897.jpg" alt="" />
              </div>
              <div className="col__image">
                <img src="https://i.ibb.co/HHbGzGf/DSC08896.jpg" alt="" />
              </div>
              <div className="col__image">
                <img src="https://i.ibb.co/K0hv8cs/DSC-0406.jpg" alt="" />
              </div>
              <div className="col__image">
                <img src="https://i.ibb.co/2FfHhL3/DSC-0428.jpg" alt="" />
              </div>
              <div className="col__image">
                <img src="https://i.ibb.co/yBjs3CY/DSC-0601.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="lasted__slide">
            <h2>Liên hệ</h2>
            <p>
              Address: 2 Đường số 30, Phường Bình Trưng Tây, Quận 2, Thành phố
              Hồ Chí Minh
            </p>
            <p>Hours: Open ⋅ Closes 9 PM</p>
            <p>Phone: 091 962 94 46</p>
            <div className="lasted__contacticon"></div>
            <div>
              <img
                src="https://i.ibb.co/0hHz9mt/2023-02-16-0ru-Kleki.png"
                style={{ width: "150px" }}
                alt=""
              />
            </div>
          </div>
        </Slider>
      </>

      <div className="btnpauseplay">
        {autoplay ? (
          <button
            onClick={() => {
              setAutoplay(false);
            }}
          >
            <BsFillPauseFill /> Play
          </button>
        ) : (
          <button
            onClick={() => {
              setAutoplay(true);
            }}
          >
            <BsFillPauseFill /> Pause
          </button>
        )}
      </div>
    </div>
  );
}
