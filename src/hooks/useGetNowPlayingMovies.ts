import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../components/store/slices/moviesSlice";
import tmdbOptions, { tmdbUrl } from "../utils/constants";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = useCallback(async () => {
    await fetch(tmdbUrl, tmdbOptions)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addNowPlayingMovies(json.results));
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);
};

export default useGetNowPlayingMovies;
