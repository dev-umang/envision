import { FC, useMemo } from "react";
import s from "./_indicator.module.scss";
import { IndicatorProps } from "./indicator.props";
import UGIcon from "../icon/icon";

const Indicator: FC<IndicatorProps> = (p) => {
  const mode = p.mode ?? import.meta.env.MODE ?? "unknown";

  const getBuildType = useMemo(() => {
    if (p.productionBuild !== undefined)
      return p.productionBuild ? (
        <UGIcon icon={p.darkMode ? "fastDark" : "fast"} />
      ) : (
        <UGIcon icon={p.darkMode ? "slowDark" : "slow"} />
      );
    else if (import.meta.env.PROD)
      return <UGIcon icon={p.darkMode ? "fastDark" : "fast"} />;
    return <UGIcon icon={p.darkMode ? "slowDark" : "slow"} />;
  }, [p.darkMode, p.productionBuild]);

  return (
    <div
      className={`${s.indicator} ${p.className ?? ""}`}
      style={p.style ?? {}}
      onClick={() => p.onClick?.()}
    >
      <strong>{mode.toUpperCase()}</strong>
      <div>{getBuildType}</div>
    </div>
  );
};

export default Indicator;
