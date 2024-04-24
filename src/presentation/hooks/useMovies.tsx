import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity';
import {moviesNowPlayingUseCase} from '../../core/use-cases/movies/now-playing.use-case';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/MovieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
  };

  return {
    isLoading,
    nowPlaying,
  };
};
