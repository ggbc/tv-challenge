import { Show } from '../../domain/entities/Show';
import { Episode } from '../../domain/entities/Episode';

/**
 * Contract for any service that fetches TV show data externally.
 * Today it's TVMaze. Tomorrow it could be another provider — the Use Case wouldn't know the difference.
 */
export interface IShowService {
  /**
   * Search shows by name.
   */
  searchShows(query: string): Promise<Show[]>;

  /**
   * Fetch show details by ID.
   */
  getShowById(id: number): Promise<Show>;

  /**
   * Fetch all episodes of a show by ID.
   */
  getEpisodesByShowId(id: number): Promise<Episode[]>;
}