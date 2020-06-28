import React from "react";
import styles from "./Button.module.css";

interface IProps {
  btnType: string;
  clicked: () => void;
  value: string;
}

const Button: React.FC<IProps> = (props: IProps) => {
  let btnStyle = [styles.Button];
  let style = styles.Button;
  if (props.btnType === "succes") {
    btnStyle.push(styles.Succes);
  } else if (props.btnType === "danger") {
    btnStyle.push(styles.Danger);
  }
  style = btnStyle.join(" ");

  return (
    <button onClick={props.clicked} className={style}>
      {props.value}
    </button>
  );
};

export default Button;
