import { ButtonCustom } from "./Button.styles";

export const Button = ({ text, colorType, onClick }) => {
  return (
    <ButtonCustom type="submit" colorType={colorType} onClick={onClick}>
      {text}
    </ButtonCustom>
  );
};
