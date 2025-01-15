import { FC, useMemo } from "react";
import s from "./_indicator.module.scss";
import { IndicatorProps } from "./indicator.props";
import UGIcon from "../icon/icon";

const Indicator: FC<
  IndicatorProps & {
    position: "bl" | "br";
    open?: boolean;
    darkMode?: boolean;
    onPositionChange?: () => void;
  }
> = (p) => {
  const mode = p.mode ?? import.meta.env.MODE ?? "unknown";

  const getBuildType = useMemo(() => {
    if (p.productionBuild !== undefined)
      return p.productionBuild ? (
        <UGIcon size={28} icon={p.darkMode ? "fastDark" : "fast"} />
      ) : (
        <UGIcon size={28} icon={p.darkMode ? "slowDark" : "slow"} />
      );
    else if (import.meta.env.PROD)
      return <UGIcon size={28} icon={p.darkMode ? "fast" : "fastDark"} />;
    return <UGIcon size={28} icon={p.darkMode ? "slow" : "slowDark"} />;
  }, [p.darkMode, p.productionBuild]);

  return (
    <div
      className={`${s.indicator} ${p.className ?? ""}`}
      style={{ ...(p.style ?? {}), opacity: p.open ? 0.8 : 0.2 }}
      onClick={() => p.onClick?.()}
    >
      <div style={{ display: "inline-flex" }} title="Hide this indicator">
        {/* <UGIcon size={28} icon="eye" /> */}
      </div>
      <strong title={`This app is in ${mode} mode. Click to expand.`}>
        {mode.toUpperCase()}
      </strong>
      <div style={{ display: "inline-flex" }} title="Indicates app build type">
        {getBuildType}
      </div>
      <div className={s.positionBtns}>
        {/* <button>L</button> */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            p.onPositionChange?.();
          }}
        >
          {p.position === "bl" ? "RIGHT" : "LEFT"}
        </button>
      </div>
    </div>
  );
};

export default Indicator;
