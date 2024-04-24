import {httpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  MovieDBResponse,
  // NowPlayingResponse,
} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: httpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBResponse>('/upcoming');

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntiti);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - upcoming');
  }
};
