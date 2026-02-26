import { Comment } from '../entities/Comment';

/**
 * Contract that any comment repository must fulfill.
 */
export interface ICommentRepository {
  /**
   * Fetches all comments of a show.
   */
  findByShowId(showId: number): Promise<Comment[]>;

  /**
   * Fetches comments of a specific episode.
   */
  findByEpisodeId(episodeId: number): Promise<Comment[]>;

  /**
   * Saves a new comment.
   */
  save(comment: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment>;
}