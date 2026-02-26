/**
 * Represents a comment made by the user.
 * Can be about the show (episodeId = null) or about a specific episode.
 */
export interface Comment {
  id: number;
  showId: number;
  episodeId: number | null; // null = comment on the show, not on a specific episode
  text: string;
  createdAt: Date;
}