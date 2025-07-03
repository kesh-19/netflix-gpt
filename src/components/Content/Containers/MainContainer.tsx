import { useSelector } from "react-redux";
import { RootStateType } from "../../store/appStore";
import VideoTitle from "../VideoTitle";
import Trailer from "../Trailer";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  height: calc(100vh - 200px);
  width: 100%;
  margin-top: -100px;
  display: flex;
`;

const MainContainer = () => {
  const movies = useSelector(
    (state: RootStateType) => state.movies.nowPlayingMovies
  );

  const mainMovie = movies.length ? movies[0] : null;

  return (
    <>
      {mainMovie ? (
        <StyledMainContainer>
          <VideoTitle
            title={mainMovie.original_title}
            overview={mainMovie.overview}
          />
          <Trailer movieId={mainMovie.id} />
        </StyledMainContainer>
      ) : (
        <StyledMainContainer>loading</StyledMainContainer>
      )}
    </>
  );
};

export default MainContainer;
