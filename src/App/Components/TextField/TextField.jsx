import { Container, Error, Input } from "./TextField.styles";

export const TextField = ({
  type,
  placeholder,
  name,
  value,
  error,
  width,
  touched,
  onChange,
  onBlur,
}) => {
  return (
    <Container width={width}>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && <Error>{error}</Error>}
    </Container>
  );
};
