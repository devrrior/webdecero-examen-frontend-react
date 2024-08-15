import { ButtonCustom } from "./Button.styles";

export const Button = ({ text, onClick }) => {
  return (
    <ButtonCustom type="submit" onClick={onClick}>
      {text}
    </ButtonCustom>
  );
};
