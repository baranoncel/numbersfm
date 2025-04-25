import * as React from 'react';
import {
    TimeRange, Artist, Track, Album, Genre, RankedItem,
    SpotifyPagingObject,
    SpotifyArtist,
    SpotifyTrack,
    SpotifyUser,
    SpotifyAlbum
} from '@/lib/types';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { NavigationTabs } from "@/components/navigation-tabs";
import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper';

// --- Server Side Imports ---
import { getSpotifyAccessToken } from '@/lib/supabase/server'; 
import { fetchSpotifyApi } from '@/lib/spotify'; 
import { redirect } from 'next/navigation';

// --- Main Page Component (Accept searchParams) ---
export default async function DashboardPage({ 
  searchParams,
}) {
  let topGenres: RankedItem<Genre>[] = [];
  const taste: TasteProfile | null = null;
  let totalMinutesStreamed = 0;

  try {
    // ... existing code ...
    });

    // --- Calculate Top Albums (Assign to outer variable) ---
    // ... existing code ...
    });

    // Fetch full details for unique albums
    const fullAlbumDetailsMap: { [id: string]: SpotifyAlbum } = {};
    if (albumIdsFromTracks.length > 0) {
      // ... existing code ...
    }

    totalArtistsCount = artistsResponse.total;
    totalTracksCount = tracksResponse.total;

  } catch (error: unknown) {
    console.error("Failed to fetch Spotify data:", error);
    const typedError = error instanceof Error ? error : new Error("An unknown error occurred");
    apiError = typedError.message || "Failed to load data from Spotify.";
  }

  // ... existing code ...
}
