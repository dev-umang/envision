import { FC, useCallback, useEffect, useState } from "react";
import { IndicatorProps } from "./indicator/indicator.props";
import Indicator from "./indicator/indicator";
import InfoPanel from "./infoPanel/infoPanel";
import "./envision.scss";
import { InfoPanelProps } from "./infoPanel/info.props";
import { mask, maskableKey } from "../utils/common.utils";
type Props = {
  position?: "br" | "bl";
  mode?: string;
  indicator?: IndicatorProps;
  envObject?: object;
  keysToMask?: string[] /** List of strings will be masked with 50% of their values if value is > 5, else all value is masked */;
  lightMode?: boolean;
};

const defaultExclude = ["PROD", "DEV", "BASE_URL", "SSR", "MODE"];

const ENVision: FC<Props> = (p) => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState<InfoPanelProps["data"]>(null);

  const getFromVite = useCallback(() => {
    console.log(`Vite env =>`, import.meta.env);
    const _info: InfoPanelProps["data"] = {};
    for (const actualKey in import.meta.env) {
      const newKey = actualKey.toUpperCase();
      if (defaultExclude.includes(newKey)) continue;
      const value = import.meta.env[actualKey];

      _info[newKey] = maskableKey(newKey, p.keysToMask ?? [])
        ? mask(value)
        : value;
    }
    const isValue = Object.keys(_info).length > 0;
    setInfo(isValue ? _info : null);
  }, [p.keysToMask]);

  const getFromEnv = useCallback((env: object) => {
    console.log({ env });
  }, []);

  useEffect(() => {
    if (!p.envObject) getFromVite();
    else getFromEnv(p.envObject);
  }, [getFromEnv, getFromVite, p.envObject]);

  return (
    <div
      className={`${p.lightMode ? "light" : "dark"} envision-container ${
        show ? "show" : ""
      }`}
    >
      {show && <InfoPanel {...{ show, setShow, data: info }} />}
      <Indicator
        {...p.indicator}
        open={show}
        onClick={() => setShow(!show)}
        darkMode={true}
      />
    </div>
  );
};

export default ENVision;
