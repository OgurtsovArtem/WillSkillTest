import clsx from "clsx";
import { FC, MouseEventHandler } from "react";
import style from "./Burger.module.css";

interface IBurger {
  onClick: MouseEventHandler<HTMLDivElement>;
  active: boolean
}

const Burger: FC<IBurger> = ({
  onClick,
  active,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(style.burger, {
        [style.burgerActive]: active,
      })}
    ></div>
  );
};

export default Burger;