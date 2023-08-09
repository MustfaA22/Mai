import { useNav } from "../../hooks/useNav";
import classes from "../../styles/sectionStyles/Sponsors.module.css";
import logo from "../../assets/images/mai-sticker.svg";
import iotKidsLogo from "../../assets/images/iot-kids-logo.svg";

function Sponsors() {
  const sponsorsRef = useNav();

  return (
    <section ref={sponsorsRef} id="sponsors">
      <h1 style={{padding: "16px 0 0", fontSize: "4rem"}}>الرعاة</h1>
      <div className={classes.container}>
        <div className={classes.sponsors}>
          <div className={classes.sponsor}>
            <img src={iotKidsLogo} alt="IoT kids" />
            <p>
              ﻳﺘﻢ ﺗﻨﻔﻴﺬ اﻟﺒﺮﻧﺎﻣﺞ ﻣﻦ ﻗﺒﻞ ﻣﺮﻛﺰ  IoT KIDS وﻫﻮ ﻣﺮﻛﺰ ﻣﺘﺨﺼﺺ ﻓﻲ ﺗﻘﺪﻳﻢ ﺑﺮاﻣﺞ ﺗﻌﻠﻴﻤﻴﺔ وﺗﺪرﻳﺒﻴﺔ ﻓﻲ ﻣﺠﺎﻻت اﻟﺘﻜﻨﻮﻟﻮﺟﻴﺎ واﻻﺑﺘﻜﺎر
            </p>
          </div>
          <div className={classes.sponsor}>
            <img src={logo} alt="Mai" />
            <p>
              ﻳﺘﻢ ﺗﻤﻮﻳﻞ ﺑﺮﻧﺎﻣﺞ &quot;ﻣﻲ اﻟﺸﻮاف&quot; ﻣﻦ اﻟﺴﻴﺪ ﺧﺎﻟﺪ اﻟﺨﺎﻟﺪي ﺗﻜﺮﻳﻤﺎ ﻟﺮوح ﻣﻲ اﻟﺸﻮاف واﻟﺬي ﻳﺆﻣﻦ ﺑﺄﻫﻤﻴﺔ دﻋﻢ ﺗﻌﻠﻴﻢ اﻟﺘﻜﻨﻮﻟﻮﺟﻴﺎ ﻟﻠﻔﺘﻴﺎت وﺗﻤﻜﻴﻨﻬﻦ ﻓﻲ ﻣﺠﺎﻻت اﻟﻌﻠﻮم واﻟﺘﻜﻨﻮﻟﻮﺟﻴﺎ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors;