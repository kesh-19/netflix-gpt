import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  /* min-width: 100px; */
  max-width: 500px;
  min-height: 50px;
  border: 1px solid;
  border-radius: 5px;
`;
const StyledProgressBar = styled.div<{ $progress: number }>`
  border-radius: 5px;
  min-height: 50px;
  width: ${(props) => props.$progress}%;
  background-color: cyan;
  transition: 500ms;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<any>(null);
  const addProgress = () => {
    intervalRef.current = setInterval(
      () => setProgress((prev) => prev + 10),
      1000
    );
  };

  useEffect(() => {
    addProgress();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) clearInterval(intervalRef.current);
  }, [progress]);

  return (
    <div>
      <StyledContainer>
        <StyledProgressBar $progress={progress}>
          <div>{progress > 10 && `${progress}%`}</div>
        </StyledProgressBar>
      </StyledContainer>
    </div>
  );
};

export default ProgressBar;
