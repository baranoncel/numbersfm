// --- Spotify Specific Types ---

export type SpotifyExternalUrls = {
  spotify: string;
};

export type SpotifyImageObject = {
  url: string;
  height: number | null;
  width: number | null;
};

export type SpotifySimplifiedArtist = {
  id: string;
  name: string;
  type: 'artist';
  uri: string;
  href: string;
  external_urls: SpotifyExternalUrls;
};

export type SpotifyAlbum = {
  id: string;
  name: string;
  artists: SpotifySimplifiedArtist[];
  images: SpotifyImageObject[];
  type: 'album';
  uri: string;
  href: string;
  external_urls: SpotifyExternalUrls;
  album_type: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
};

export type SpotifyPagingObject<T> = {
  items: T[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string | null;
  previous: string | null;
};

export type SpotifyTrack = {
  id: string;
  name: string;
  artists: SpotifySimplifiedArtist[];
  album: SpotifyAlbum;
  duration_ms: number;
  type: 'track';
  uri: string;
  href: string;
  external_urls: SpotifyExternalUrls;
  popularity: number; // 0-100
  preview_url: string | null;
  explicit: boolean;
};

export type SpotifyTopTracksResponse = SpotifyPagingObject<SpotifyTrack>;

export interface Track {
  id: string;
  name: string;
  artistName: string; 
  albumName?: string;
  imageUrl?: string;
  durationMs: number;
  type: 'track';
  uri: string;
  href: string;
  external_urls: SpotifyExternalUrls;
  popularity?: number;
  preview_url?: string | null;
  explicit?: boolean;
} 