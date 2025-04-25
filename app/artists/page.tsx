import * as React from 'react';
import { SortOption } from '@/components/dashboard/sort-filter';
import {
    TimeRange, SpotifyUser, SpotifyPagingObject, SpotifyArtist, RankedItem, Artist,
} from '@/lib/types';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { getSpotifyAccessToken } from '@/lib/supabase/server';
import { fetchSpotifyApi } from '@/lib/spotify';
import { redirect } from 'next/navigation';
import { TimeRangeDropdown } from '@/components/dashboard/time-range-dropdown';
import { UserHeader } from '@/components/layout/user-header';
import { NavigationTabs } from "@/components/navigation-tabs";
import { ArtistListWrapper } from '@/components/artists/artist-list-wrapper';
import { TIME_RANGE_OPTIONS, isValidTimeRange } from '@/config/spotify';

const getValidatedTimeRange = (param: string | string[] | undefined): TimeRange => {
    const defaultRange: TimeRange = 'medium_term';
    if (!param) return defaultRange;
    const range = Array.isArray(param) ? param[0] : param;
    return isValidTimeRange(range) ? range : defaultRange;
};

function rankAndMapArtists(items: SpotifyArtist[]): RankedItem<Artist>[] {
  return items.map((item, index) => ({
    rank: index + 1,
    item: {
        id: item.id,
        name: item.name,
        imageUrl: item.images?.[0]?.url,
        genres: item.genres,
        popularity: item.popularity,
        type: item.type,
        uri: item.uri,
        href: item.href,
        external_urls: item.external_urls,
    }
  }));
}

const artistSortOptions: SortOption[] = ['spotify_rank', 'popularity', 'genre'];

export default async function ArtistsPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }}) {
  const cookieStore = await cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const tokenResult = await getSpotifyAccessToken();
  if (!tokenResult || (typeof tokenResult === 'object' && tokenResult.error === 'missing_token')) {
    redirect('/login?error=spotify_token_missing');
  }
  const accessToken = tokenResult as string;

  const timeRange = getValidatedTimeRange(searchParams?.time_range);

  let topArtistsData: SpotifyPagingObject<SpotifyArtist> | null = null;
  let userData: SpotifyUser | null = null;
  let fetchError: string | null = null;

  try {
    [topArtistsData, userData] = await Promise.all([
      fetchSpotifyApi<SpotifyPagingObject<SpotifyArtist>>(`/me/top/artists?time_range=${timeRange}&limit=50`, accessToken),
      fetchSpotifyApi<SpotifyUser>('/me', accessToken)
    ]);
  } catch (err: unknown) {
    console.error("Error fetching Spotify data:", err);
    fetchError = err instanceof Error ? err.message : "Failed to load Spotify data.";
  }

  if (fetchError || !topArtistsData) {
    return (
        <div className="space-y-6 pb-10">
            <UserHeader userData={null} />
             <div className="container mx-auto p-4 md:p-6 text-center text-red-500">
                <h2 className="text-xl font-semibold mb-2">Error Loading Artists</h2>
                <p>{fetchError || "Could not retrieve top artists from Spotify."}</p>
             </div>
         </div>
     );
  }

  const processedArtists = rankAndMapArtists(topArtistsData.items || []);
  const initialSortBy = 'spotify_rank';

  return (
    <div className="space-y-6 pb-10">
        <UserHeader userData={userData} />
        <NavigationTabs />
        <div className="container mx-auto px-4 md:px-6">
            <ArtistListWrapper
                topArtists={processedArtists}
                initialTimeRange={timeRange}
                initialSortBy={initialSortBy}
                userData={userData}
                availableSortOptions={artistSortOptions}
            />
        </div>
    </div>
  );
} 