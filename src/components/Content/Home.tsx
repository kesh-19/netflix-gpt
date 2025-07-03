import Header from "./Header";
import useGetNowPlayingMovies from "../../hooks/useGetNowPlayingMovies";
import MainContainer from "./Containers/MainContainer";
import SecondaryContainer from "./Containers/SecondaryContainer";

const Home = () => {
  useGetNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {Array(50)
        .fill(0)
        .map((i, index) => (
          <div key={index}>sadas</div>
        ))}
    </div>
  );
};

export default Home;
