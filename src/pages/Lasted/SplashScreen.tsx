import React from "react";
import "./a.scss";
import "./splash.scss";

import Giaolang2 from "./giaolang_version2.mp4";
import gsap from "gsap";

type Props = {};

export default function SplashScreen({}: Props) {
  const [showSplashScreen, setShowSplashScreen] = React.useState(true);

  React.useEffect(() => {
    // hide the splash screen after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowSplashScreen(false);
    }, 8000);

    return () => {
      // clear the timeout on unmount
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        background: "white",
        opacity: showSplashScreen ? 1 : 0,
        // transition: "all 1s ease-in-out",
        transitionTimingFunction: "cube-bezier(0.075, 0.82, 0.165, 1)",
        zIndex: showSplashScreen ? 9999 : 0,
      }}
      onClick={() => {
        setShowSplashScreen(false);
      }}
    >
      <div
        style={{
          //center screen
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //center content
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <Image src={logoFilled} alt="logo" width={50} height={50} /> */}
        {/* <div className="img-container">
			<img src={Giaolang} alt="" style={{ width: 300, height: 300 }} />
			<div className="overlay"></div>
		</div> */}

        <div className="img-container">
          <video width={550} height={550} autoPlay muted>
            <source src={Giaolang2} />
          </video>
          <div className="overlay"></div>
        </div>

        {/* <div className="lasted__slide" style={{ textAlign: "center" }}>
          <h2>Tầm nhìn</h2>
          <p>
            Dạy học là dạy - học. Dạy học không là kinh doanh, không là mua -
            bán.
          </p>
          <p>Chúng tôi đặt lợi ích của người học là trên hết.</p>
          <p>- Giá trị thực học: Kiến thức thật, giỏi thật.</p>
          <p>
            - Giá trị nhân bản: Bình đẳng, minh bạch, trung thực, tôn trọng.
          </p>
        </div> */}
      </div>
      {/* <div
        className="library__line"
        style={{
          //center screen
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //center content
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="library__inner"></div>
      </div> */}
    </div>
  );
}
