import { useCallback, useEffect } from "react";
import { addTrailerVideo } from "../components/store/slices/moviesSlice";
import tmdbOptions, { videosUrl } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId: string) => {
  const dispatch = useDispatch();
  const getMovieVideos = useCallback(async () => {
    await fetch(videosUrl(movieId), tmdbOptions)
      .then((res) => res.json())
      .then((json) => {
        const trailer = json.results.find(
          (item: { type: string }) => item.type === "Trailer"
        );
        dispatch(addTrailerVideo(trailer));
      })
      .catch((err) => console.error(err));
  }, [movieId, dispatch]);

  useEffect(() => {
    getMovieVideos();
  }, [getMovieVideos]);
};

export default useTrailerVideo;
