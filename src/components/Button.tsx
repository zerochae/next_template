import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";
import tw from "twin.macro";

// const MyButton = styled.button([
//   tw`
// bg-[red]`,
//   css`
//     font-size: 40px;
//     font-weight: bold;
//   `,
// ]);

const MyButton = styled.button`
  ${tw`
text-3xl
font-bold
underline
`}
  color: red;
`;

const Button = () => {
  return <MyButton>button</MyButton>;
};

export default Button;
