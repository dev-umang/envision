import { FC, useState } from "react";
import { IndicatorProps } from "./indicator/indicator.props";
import Indicator from "./indicator/indicator";
import InfoPanel from "./infoPanel/infoPanel";
import "./envision.scss";

type Props = {
  position?: "br" | "bl";
  mode?: string;
  indicator?: IndicatorProps;
};

const ENVision: FC<Props> = (p) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`dark envision-container ${show ? "show" : ""}`}>
      {show && <InfoPanel {...{ show, setShow }} />}
      <Indicator {...p.indicator} onClick={() => setShow(!show)} />
    </div>
  );
};

export default ENVision;
