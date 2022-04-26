import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";
import tw from "twin.macro";

const MyButton = styled.button([
  tw`
bg-[red]`,
  css`
    font-size: 40px;
    font-weight: bold;
  `,
]);

const Button = () => {
  return <MyButton>button</MyButton>;
};

export default Button;
