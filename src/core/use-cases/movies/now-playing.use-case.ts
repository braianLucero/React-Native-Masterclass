import {httpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.response';
import {Movie} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: httpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    console.log({nowPlaying});

    return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - NowPlaying');
  }
};

clas 146 ; caso de uso nowPlaying , adaptador HTTP para obtener datos de películas que se están reproduciendo actualmente