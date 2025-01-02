import { FC } from "react";
import s from "./infoPanel.module.scss";

type Props = {
  show?: boolean;
  setShow?: (b: boolean) => void;
};

const InfoPanel: FC<Props> = ({ show, setShow }) => {
  return (
    <div className={s.panel} style={{ opacity: show ? 1 : 0 }}>
      <div className={s.header}>
        <strong>ENV Info</strong>
        <button onClick={() => setShow?.(false)} className={s.hideBtn}>
          Hide
        </button>
      </div>
      <div className={s.body}>Info not available!</div>
    </div>
  );
};

export default InfoPanel;
