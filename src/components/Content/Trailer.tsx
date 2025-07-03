import { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootStateType } from "../store/appStore";
import useTrailerVideo from "../../hooks/useTrailerVideo";

type TrailerType = {
  movieId: number;
};

const StyledTrailerContainer = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  position: absolute;
  z-index: -1;
`;
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

const Trailer: FC<TrailerType> = ({ movieId }) => {
  const trailerVideo = useSelector(
    (state: RootStateType) => state.movies.trailerVideo
  );

  useTrailerVideo(String(movieId));

  return (
    <div>
      {trailerVideo ? (
        <StyledTrailerContainer>
          <StyledIframe
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&playlist=${trailerVideo.key}`}
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></StyledIframe>
        </StyledTrailerContainer>
      ) : (
        <>loading</>
      )}
    </div>
  );
};

export default Trailer;
