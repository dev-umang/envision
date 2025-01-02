import { CSSProperties } from "react";

export type IndicatorProps = Partial<{
  position: "bl" | "br";
  mode: string;
  productionBuild?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick: () => void;
  open?: boolean;
}>;
