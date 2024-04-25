import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity';
import {moviesNowPlayingUseCase} from '../../core/use-cases/movies/now-playing.use-case';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/MovieDB.adapter';
import {
  moviesNowPlayingUseCase,
  moviesPopularUseCase,
} from '../../core/use-cases/movies/popularuse.case';
import {moviesUpcomingUseCase} from '../../core/use-cases/movies/upcoming.use.case';
import {moviesTopRatedUseCase} from '../../core/use-cases/movies/top-rated.use.case';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);
    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    nowPlaying,
    popular,
    topRated,
    upcoming,
  };
};
