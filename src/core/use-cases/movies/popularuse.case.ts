import {httpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  MovieDBResponse,
  // NowPlayingResponse,
} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: httpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBResponse>('/popular');

    return popular.results.map(MovieMapper.fromMovieDBResultToEntiti);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - popularuseCase');
  }
};
