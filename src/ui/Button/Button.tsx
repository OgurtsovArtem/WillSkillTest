import clsx from "clsx";
import React from "react";
import { FC } from "react";
import style from "./Button.module.css";

interface IButtonType {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button: FC<IButtonType> = React.memo(
  ({ children, onClick, className, type, disabled = false }) => {
    const buttonClass = clsx(style.button, className);
    return (
      <button
        className={buttonClass}
        type={type ? type : "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export default Button;