import { CSSProperties } from "react";

export type IndicatorProps = Partial<{
  
  mode: string;
  productionBuild?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick: () => void;
  open?: boolean;
}>;
