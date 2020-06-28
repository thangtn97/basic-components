import React from "react";
import styles from "./Input.module.css";

interface IProps {
  inputType: string;
  label: string;
}

const Input: React.FC<IProps> = (props: IProps) => {
  let elementInput = null;

  switch (props.inputType) {
    case "input":
      elementInput = <input className={styles.InputElement} {...props} />;
      break;
    case "textarea":
      elementInput = <textarea className={styles.ElementInput} {...props} />;
      break;
    default:
      elementInput = <input className={styles.ElementInput} {...props} />;
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {elementInput}
    </div>
  );
};

export default Input;
