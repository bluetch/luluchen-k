import Link from "next/link";
import styles from "./Button.module.scss";

export const Button = ({ varient, href = "#", children, ...rest }) => {
  let buttonStyles;
  if(varient === "black"){
    buttonStyles = styles.btnBlack;
  }else{
    buttonStyles = styles.btn;
  }
  return (
    <Link href={href} className={buttonStyles} {...rest}>{children}</Link>
  )
}