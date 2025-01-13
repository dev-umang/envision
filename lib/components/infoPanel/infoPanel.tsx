import { FC } from "react";
import s from "./infoPanel.module.scss";
import { InfoPanelProps } from "./info.props";
import UGIcon from "../icon/icon";

const InfoPanel: FC<InfoPanelProps> = ({ show, setShow, data }) => {
  return (
    <div className={s.panel} style={{ opacity: show ? 1 : 0 }}>
      <div className={s.header}>
        <strong>Mode Info</strong>
        <div>
          <UGIcon icon="slow" />
          <button onClick={() => setShow?.(false)} className={s.hideBtn}>
            Hide
          </button>
        </div>
      </div>
      {!data && <div className={s.body}>Info not available!</div>}
      <div className={s.body}>
        {Object.entries(data ?? {}).map(([k, v]) => {
          return (
            <div key={k} className={s.info}>
              <label>{k}</label>
              <span>{v}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoPanel;
