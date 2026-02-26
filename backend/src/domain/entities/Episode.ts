/**
 * Represents an episode of a TV series.
 * The "watched" field is local — saved in our database, not from the TVMaze API.
 */
export interface Episode {
  id: number;
  showId: number;
  name: string;
  season: number;
  number: number;
  summary: string | null;
  watched: boolean;
}