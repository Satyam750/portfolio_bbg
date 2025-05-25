import { cx } from "class-variance-authority";
import Link from "next/link";
import React from "react";

type LogoProps = {
  size?: "small" | "medium" | "large";
};

const Logo = (props: LogoProps) => {
  const { size = "medium" } = props;
  return (
    <Link href={"/"}>
      <figure>
        <p className={cx("glitch", sizes[size])} data-text="⏃⎑⎅▽">
          ⏃⎑⎅▽
        </p>
      </figure>
    </Link>
  );
};

const sizes = {
  small:
    "text-sm md:text-xl relative left-0.5 text-[#475460] glitch-small",
  medium: "text-xl md:text-[28px]",
  large: "text-6xl",
};

export default Logo;
