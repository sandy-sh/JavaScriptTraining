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

function dedupeTracks (scoredPlayLists) {
    const seenTracks = new Set();
    const dedupeTracks = [];

    if (!Array.isArray(scoredPlayLists)) return [];

    for (const track of scoredPlayLists) {
        if (!seenTracks.has(track.trackId)) {
        seenTracks.add(track.trackId);
        dedupeTracks.push(track)
        }
    }
    return dedupeTracks
}

// console.log(dedupeTracks(scoreTracks(flattenPlaylists(playlists))))

function enforceArtistQuota (dedupeTracks, num) {
    const enforcePlaylists = [];
    const artist = {};

    for (const track of dedupeTracks){
        if (!artist.hasOwnProperty(track.artist)) {
        
        }
    }
    return artist
}

console.log(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists)))))

function buildSchedule () {

}

function remixPlaylist () {

}
