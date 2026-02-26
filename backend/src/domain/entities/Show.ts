/**
 * Represents a TV series.
 * This entity is the heart of the domain — it doesn't depend on database, HTTP, or framework.
 */
export interface Show {
  id: number;
  name: string;
  summary: string | null;
  genres: string[];
  premiered: string | null;
  image: string | null;
}