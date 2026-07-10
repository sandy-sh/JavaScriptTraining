const playlists = [
    [
        {
        trackId: "trk101",
        artist: "Velvet Comet",
        title: "Crimson Afterglow",
        votes: 5,
        bpm: 122
        },
        {
        trackId: "trk102",
        artist: "Neon Harbor",
        title: "Static Horizon",
        votes: 2,
        bpm: 108
        },
        {
        trackId: "trk103",
        artist: "Lunar Arcade",
        title: "Midnight Frequency",
        votes: 4,
        bpm: 128
        }
    ],
    [
        {
        trackId: "trk201",
        artist: "Solar Echo",
        title: "Glass Skyline",
        votes: 3,
        bpm: 115
        },
        {
        trackId: "trk202",
        artist: "Velvet Comet",
        title: "Satellite Hearts",
        votes: 6,
        bpm: 124
        }
    ]
];

function flattenPlaylists (playlists) {
    const flattenplaylists = [];
    
    if (!Array.isArray(playlists)) return [];

    for (let i = 0; i < playlists.length; i++) {
        for (let k = 0; k < playlists[i].length; k++) {
        flattenplaylists.push({
            ...playlists[i][k],
            source: [i, k]})
        }
    }

    return flattenplaylists
}

// console.log(flattenPlaylists(playlists)) // Clear

function scoreTracks (flattenPlaylists) {
    const scoredPlaylists = [];

    if (!Array.isArray(flattenPlaylists)) return [];

    for (let i = 0; i < flattenPlaylists.length; i++) {
        const track = flattenPlaylists[i];
        scoredPlaylists.push({
        ...track,
        score: track.votes * 10 - Math.abs(track.bpm - 120)
        });
    }

    return scoredPlaylists;
}

// console.log(scoreTracks(flattenPlaylists(playlists))) // Clear

function dedupeTracks (scoredPlayLists) {
    const seenTracks = new Set();
    const dedupeTracks = [];

    if (!Array.isArray(scoredPlayLists)) return [];

    for (const track of scoredPlayLists) {
        if (!seenTracks.has(track["trackId"])) {
        seenTracks.add(track["trackId"]);
        dedupeTracks.push(track)
        }
    }
    return dedupeTracks
}

// console.log(dedupeTracks(scoreTracks(flattenPlaylists(playlists)))) // Clear

function enforceArtistQuota (dedupeTracks, maxPerArtist) {
    const enforcePlaylists = [];
    const artist = {};

    if (!Array.isArray(dedupeTracks)) return [];

    for (const track of dedupeTracks) {
        const artistName = track.artist;

        if (!Object.hasOwn(artist, artistName)) {
        artist[artistName] = 1;
        enforcePlaylists.push(track);
        }
        else if (artist[artistName] < maxPerArtist) {
        artist[artistName] += 1;
        enforcePlaylists.push(track);
        }
    }

    return enforcePlaylists;
}

// console.log(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists))), 2)) // Clear

function buildSchedule (enforcePlaylists) {
    const schedule = [];
    let slot = 1;

    if (!Array.isArray(enforcePlaylists)) return [];

    for (const track of enforcePlaylists) {
        schedule.push({
        slot: slot,
        trackId: track.trackId})
        slot += 1;
    }

    return schedule;
}

// console.log(buildSchedule(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists))), 2))) // Clear

function remixPlaylist (playlists, maxPerArtist) {
    return buildSchedule(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists))), maxPerArtist))
}

console.log(remixPlaylist(playlists, 1)) // Clear