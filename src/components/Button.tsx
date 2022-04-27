import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import React from "react";

interface ButtonProps {
  pageName: string;
  setPageName: (diff: string) => void;
}

const MyButton = styled.button`
  ${tw`
text-3xl
font-bold
underline
`}
  color: red;
  display: block;
`;

const Button = ({ pageName, setPageName }: ButtonProps): JSX.Element => {
  return (
    <MyButton
      onClick={() => {
        setPageName(pageName);
      }}
    >
      button
    </MyButton>
  );
};

export default Button;
