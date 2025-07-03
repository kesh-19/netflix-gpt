import { FC } from "react";
import styled from "styled-components";

const StyledVideoTitleContainer = styled.div`
  position: absolute;
  height: calc(100vh - 200px);
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled.button`
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
`;
const StyledPlay = styled(StyledButton)`
  background-color: wheat;
  color: black;
`;

const StyledMoreInfo = styled(StyledButton)`
  background-color: grey;
  color: white;
`;

const VideoTitle: FC<{
  title: string;
  overview: string;
}> = ({ title, overview }) => {
  return (
    <StyledVideoTitleContainer className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <StyledPlay>▶️Play</StyledPlay>
        <StyledMoreInfo>ℹ️More Info</StyledMoreInfo>
      </div>
    </StyledVideoTitleContainer>
  );
};

export default VideoTitle;
