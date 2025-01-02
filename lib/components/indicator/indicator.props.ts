import { CSSProperties } from "react";

export type IndicatorProps = Partial<{
  position: "bl" | "br";
  mode: string;
  productionBuild?: boolean;
  darkMode?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick: () => void;
}>;
