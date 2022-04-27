import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import React from "react";

interface ButtonProps {
  pageName: string;
  setPageName: (diff: string) => void;
  changeName: (diff: string) => void;
  setNameAtom: (diff: string) => void;
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

const Button = ({
  pageName,
  setPageName,
  changeName,
  setNameAtom,
}: ButtonProps): JSX.Element => {
  return (
    <MyButton
      onClick={() => {
        setPageName(pageName);
        changeName(pageName);
        setNameAtom(pageName);
      }}
    >
      button
    </MyButton>
  );
};

export default Button;
