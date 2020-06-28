import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form: React.FC = () => {
  return (
    <form className={styles.Form}>
      <Input inputType="input" label="email" />
      <Input placeholder="Password" inputType="input" label="password" />
      <Button
        clicked={() => console.log("clicked")}
        btnType="succes"
        value="Confirm"
      />
      <Button
        clicked={() => console.log("clicked")}
        btnType="danger"
        value="Cancel"
      />
    </form>
  );
};

export default Form;
