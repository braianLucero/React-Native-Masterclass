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

//En este código, has creado un hook personalizado (useMovies) en React que utiliza varios casos de uso (moviesNowPlayingUseCase, moviesPopularUseCase, moviesTopRatedUseCase y moviesUpcomingUseCase) para obtener información sobre películas desde una API de MovieDB. Aquí tienes un resumen básico de lo que hace el código:

// Importación de módulos: Se importan los módulos necesarios, incluyendo React (useEffect, useState) y los casos de uso relacionados con las películas.
// Inicialización del estado: Se inicializan los estados isLoading, nowPlaying, popular, topRated y upcoming utilizando el hook useState.
// Efecto secundario con useEffect: Se utiliza useEffect para ejecutar la función initialLoad una vez, cuando el componente se monta por primera vez.
// Función initialLoad: Se define una función asíncrona initialLoad que utiliza los casos de uso para obtener información sobre las películas en cartelera, populares, mejor valoradas y próximas a estrenarse. Se espera a que todas las promesas se resuelvan utilizando Promise.all y luego se actualizan los estados correspondientes con los datos obtenidos.
// Retorno del hook: Se retorna un objeto con los estados isLoading, nowPlaying, popular, topRated y upcoming, que pueden ser utilizados en el componente que llama a este hook para renderizar la información en la interfaz de usuario.
// En resumen, este hook personalizado permite cargar información sobre películas desde la API de MovieDB y gestionar el estado de carga (isLoading) junto con las listas de películas en diferentes categorías.
