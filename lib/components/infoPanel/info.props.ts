export type InfoPanelProps = {
  show?: boolean;
  setShow?: (b: boolean) => void;
  data: Record<string, string> | null;
};
