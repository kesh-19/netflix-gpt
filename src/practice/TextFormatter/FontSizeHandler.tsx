import { FC } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 10px;
`;

const FontSizeHandler: FC<{
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setFontSize }) => {
  return (
    <StyledDiv>
      <button onClick={() => setFontSize((prev) => prev + 5)}>A+</button>
      <button onClick={() => setFontSize((prev) => prev - 5)}>A-</button>
    </StyledDiv>
  );
};

export default FontSizeHandler;
