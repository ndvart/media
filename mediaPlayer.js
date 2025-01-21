(function () {
    // Inject the Google Fonts link dynamically for Material Symbols
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Inject the CSS styles dynamically
    const style = document.createElement('style');
    style.textContent = 
        .xmusicplayer {
            font: 12px/18px;
            margin-bottom:-10px;
            font-family: "DOS";
        }
        
        .xmusicplayer body,
        .xmusicplayer p,
        .xmusicplayer video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }

        .xmaterial-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 200, 'opsz' 48;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .xmaterial-symbols-outlined:hover {
            cursor: pointer;
        }

        ximg {
            qfilter: grayscale(100%) contrast(251%) brightness(1.5) invert(00%);
        }

        .xmusicplayer {
            height: 60px;
        }

        .xmusicplayer td,
        .xmusicplayer th,
        .xmusicplayer table {
            width: 67% !important;
        }

        #xsong-name {
            font-weight: bolder;
            color: #dbd9d8;
        }

        #xartist-name {
            font-size: 11px;
            padding-bottom: 1px;
        }

        .xmusicplayer img {
            margin-left: -2px;
            padding: 0px;
            filter: contrast(3) grayscale(1) invert(2);
            border-radius: 4px;
        }

        .xmusicplayer p,
        .xmusicplayer .material-symbols-outlined {
            color: #c5c5c4;
            white-space: nowrap;
        }
    ;
    document.head.appendChild(style);

    // Inject the HTML structure of the music player into a target span
    const musicPlayerHTML = 
    <div class="musicplayer">
        <table>
            <tbody>
                <tr>
                    <td style="width:53px !important;">
                        <img id="artwork-image" src="https://i.scdn.co/image/ab67616d00001e023ca62990094d3b74031ee694"
                            alt="" width="53px;" draggable="false?">
                    </td>
                    <td>
                        <table id="musicControls">
                            <tbody>
                                <tr style="line-height: 0px;">
                                    <div class="songtitle">
                                        <p id="song-name" style="">Wyoming</p>
                                    </div>
                                    <div class="songartist">
                                        <p id="artist-name" style="">Heather Woods Broderick</p>
                                    </div>
                                    
<!--<td width="14px;">
    <div class="button6">
        <span id="go-back-btn" class="control-btn">
            <center><span class="material-symbols-outlined" style="xfont-size:17px;">skip_previous</span></center>
        </span>
    </div>
</td>-->


                                    <td width="14px;">
                                        <div class="button1">
                                            <span id="play-btn" class="control-btn">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="xfont-size:17px;">play_arrow</span></center>
                                                </span>
                                            </span>
                                            <span id="pause-btn" class="control-btn" style="display: none;xfont-size:19px;">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="xfont-size:17px;">pause</span></center>
                                                </span>
                                            </span>
                                        </div>
                                    </td>
                                    <td width="14px;">
                                        <div class="button2">
                                            <span id="skip-btn" class="control-btn">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="xfont-size:17px;">skip_next</span></center>
                                                </span>
                                            </span>
                                        </div>
                                    </td>

   <td width="14px;">
    <div class="button5">
        <!-- "Loop Off" is visible by default -->
        <span id="loop-off-btn" class="control-btn">
            <center><span class="material-symbols-outlined" style="xfont-size:17px;">repeat</span></center>
        </span>
        <!-- "Loop On" is hidden by default -->
        <span id="loop-on-btn" class="control-btn" style="display: none;">
            <center><span class="material-symbols-outlined" style="xfont-size:17px;">repeat_on</span></center>
        </span>
    </div>
</td>

                                    <td width="14px;">
                                        <div class="button3">
                                            <span id="volume-down-btn" class="control-btn">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="xfont-size:17px;">volume_down</span></center>
                                                </span>
                                            </span>
                                        </div>
                                    </td>
                                    <td width="14px;">
                                        <div class="button4">
                                            <span id="volume-up-btn" class="control-btn">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="xfont-size:17px;">volume_up</span></center>
                                                </span>
                                            </span>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </td> 
                </tr>
            </tbody>
        </table>
    </div>;

    // Find a span with a specific id to inject the player
    const targetSpan = document.getElementById('music-player-target');
    if (targetSpan) {
        targetSpan.innerHTML = musicPlayerHTML;
    }

    // Full list of songs
    const songs = [
        { name: 'We Knew No Kindness', artist: 'Tek lintowe', artwork: 'https://i.scdn.co/image/ab67616d0000b2738bd87a2edf4a9ab7a7b42a8e', url: 'music/Tek lintowe - We Knew No Kindness.mp3' },
        { name: 'Inhalants Say Fuck The World', artist: 'Tek lintowe', artwork: 'https://i.scdn.co/image/ab67616d0000b2738bd87a2edf4a9ab7a7b42a8e', url: 'music/Tek lintowe - Inhalants Say Fuck The World.mp3' },
        { name: 'For Sure', artist: 'Ethel Cain', artwork: 'https://i.scdn.co/image/ab67616d00001e0224eaa84e8d2b7c146d6a9317', url: 'music/Ethel Cain - For Sure.mp3' },
        { name: 'Cotton (2)', artist: 'BONES', artwork: 'https://i.scdn.co/image/ab67616d00001e02141543af3b22ac0c71878fd2', url: 'music/BONES - Cotton (2).mp3' },        
        { name: 'Live Forever', artist: 'Imagine Drowning', artwork: 'https://i.scdn.co/image/ab67616d00001e02ca442f756e879949838cb173', url: 'music/Imagine Drowning - Live Forever.mp3' },
        { name: 'Peroxide', artist: 'Imagine Drowning', artwork: 'https://i.scdn.co/image/ab67616d00001e022f74d88ace2206a146f7ba42', url: 'music/Imagine Drowning - Peroxide.mp3' },        
        { name: 'feel', artist: 'Squeak', artwork: 'https://i.scdn.co/image/ab67616d00001e023038651c2e0e13325157c97e', url: 'music/Squeak - feel.mp3' },
        { name: 'deaf', artist: 'TAKA', artwork: 'https://i.scdn.co/image/ab67616d0000b2731e3e2f116fcc4de4e273ae16', url: 'music/TAKA - deaf.mp3' },
        { name: 'Dormir avec l\'ocÃ©an', artist: 'Ensemble de Musique Zen Relaxante', artwork: 'https://i.scdn.co/image/ab67616d00001e02516b80d0ac81284d7d65b02d', url: 'music/Ensemble de Musique Zen Relaxante - Dormir avec l\'ocÃ©an.mp3' },        
        { name: 'Ghostlore', artist: 'Violet A. Foster', artwork: 'https://i.scdn.co/image/ab67616d00001e023ca62990094d3b74031ee694', url: 'music/Violet A. Foster - Ghostlore.mp3' },
        { name: 'Jetsun Mila Pt. 2', artist: 'Eliane Radigue', artwork: 'https://i.scdn.co/image/ab67616d0000b2735fc993734dc881e3de9fd7ba', url: 'music/Eliane Radigue - Jetsun Mila Pt 2.mp3' },
        { name: 'Mono No Aware 1.1', artist: 'William Basinski', artwork: 'https://i.scdn.co/image/ab67616d0000b273ccdde3bd433bc43f850e0bfb', url: 'music/William Basinski - Mono No Aware 1 1.mp3' },
        { name: 'Thatorchia', artist: 'Ethel Cain', artwork: 'https://i.scdn.co/image/ab67616d0000b273c6d1d934d100fa2167c71b5d', url: 'music/Ethel Cain - Thatorchia.mp3' },
        { name: 'Etienne', artist: 'Ethel Cain', artwork: 'https://i.scdn.co/image/ab67616d0000b273c6d1d934d100fa2167c71b5d', url: 'music/Ethel Cain - Etienne.mp3' },
        { name: 'No Stranger', artist: 'Mieke', artwork: 'https://i.scdn.co/image/ab67616d0000b273af279134565560324c07ba63', url: 'music/No Stranger - Mieke.mp3' },
    ];

    // Variables and functionality (play, pause, skip, volume control)
    let currentSongIndex = getRandomSongIndex();
    let isPlaying = false;
    let playbackPosition = 0;
    let volumeLevel = 0.10;
    let playedSongs = [];

    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const skipBtn = document.getElementById('skip-btn');
    const volumeDownBtn = document.getElementById('volume-down-btn');
    const volumeUpBtn = document.getElementById('volume-up-btn');
    const songNameSpan = document.getElementById('song-name');
    const artistNameSpan = document.getElementById('artist-name');
    const artworkImage = document.getElementById('artwork-image');
    const audio = new Audio();
    audio.volume = volumeLevel;

    /*ENTIRE LOOP BUTTON PART START   LOOK HERE*/

    // Variable to track loop status and set initial loop state to 'off'
    let isLooping = false;
    audio.loop = false; // Ensure the audio object is initialized before setting this

    // Function to enable loop
    function enableLoop() {
        isLooping = true;
        audio.loop = true; // Enable looping on the audio element
        document.getElementById('loop-on-btn').style.display = 'inline'; // Show "Loop On" button
        document.getElementById('loop-off-btn').style.display = 'none';  // Hide "Loop Off" button
    }

    // Function to disable loop
    function disableLoop() {
        isLooping = false;
        audio.loop = false; // Disable looping on the audio element
        document.getElementById('loop-on-btn').style.display = 'none';  // Hide "Loop On" button
        document.getElementById('loop-off-btn').style.display = 'inline'; // Show "Loop Off" button
    }

    // Add event listeners for loop buttons
    document.getElementById('loop-on-btn').addEventListener('click', disableLoop);
    document.getElementById('loop-off-btn').addEventListener('click', enableLoop);


    /*ENTIRE LOOP BUTTON PART END    LOOK HERE*/

    function getRandomSongIndex() {
        return Math.floor(Math.random() * songs.length);
    }

    function updatePlayerUI() {
        const currentSong = songs[currentSongIndex];
        songNameSpan.textContent = currentSong.name;
        artistNameSpan.textContent = currentSong.artist;
        artworkImage.src = currentSong.artwork;

        /*BACK BUTTON STUFF*/
        let lastGoBackPressTime = 0; // Tracks the last time the button was pressed

        // Function to handle the "Go Back" action
        // Unified "Go Back" function for both the button and API
        function goBackHandler() {
            const currentTime = Date.now();

            if (currentTime - lastGoBackPressTime < 2000) {
                playPreviousSong(); // Double press within 2 seconds
            } else {
                restartCurrentSong(); // Single press
            }

            lastGoBackPressTime = currentTime;
        }
        /*END BACK BUTTON STUFF*/

        // Function to restart the current song
        function restartCurrentSong() {
            audio.currentTime = 0;
            if (isPlaying) {
                playSong(); // Only start playing if the player was already playing
            }
        }

        // Function to play the previous song
        function playPreviousSong() {
            // Move to the previous song in the list
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            playbackPosition = 0;

            if (isPlaying) {
                playSong(); // Only start playing if the player was already playing
            } else {
                updatePlayerUI(); // Update the UI without starting playback if paused
            }
        }

        // Add event listener for the "Go Back" button
        document.getElementById('go-back-btn').addEventListener('click', goBackHandler);

        // Media Session API support
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: songs[currentSongIndex].name,
                artist: songs[currentSongIndex].artist,
                artwork: [{ src: songs[currentSongIndex].artwork, sizes: '128x128', type: 'image/png' }]
            });


            // Add media session action handlers for keyboard control
            navigator.mediaSession.setActionHandler('play', playSong);
            navigator.mediaSession.setActionHandler('pause', pauseSong);
            navigator.mediaSession.setActionHandler('previoustrack', goBackHandler); // Use "Go Back" for previous track
            navigator.mediaSession.setActionHandler('nexttrack', skipSong);

        }
    }

    /*BACK BUTTON STUFF*/

    function playSong() {
        audio.src = songs[currentSongIndex].url;
        audio.currentTime = playbackPosition;
        audio.play();
        isPlaying = true;
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
        updatePlayerUI();
    }

    function pauseSong() {
        audio.pause();
        isPlaying = false;
        playbackPosition = audio.currentTime;
        playBtn.style.display = 'inline';
        pauseBtn.style.display = 'none';
    }

    function skipSong() {
        let newIndex;
        const uniqueSongs = songs.filter((song, index) => !playedSongs.includes(index));
        if (uniqueSongs.length === 0) playedSongs = [];
        do {
            newIndex = getRandomSongIndex();
        } while (playedSongs.includes(newIndex));
        playedSongs.push(newIndex);
        currentSongIndex = newIndex;
        playbackPosition = 0;
        if (isPlaying) playSong();
        else updatePlayerUI();
    }

    function decreaseVolume() {
        volumeLevel = Math.max(volumeLevel - 0.05, 0);
        audio.volume = volumeLevel;
    }

    function increaseVolume() {
        volumeLevel = Math.min(volumeLevel + 0.05, 1);
        audio.volume = volumeLevel;
    }

    // Event listeners
    playBtn.addEventListener('click', playSong);
    pauseBtn.addEventListener('click', pauseSong);
    skipBtn.addEventListener('click', skipSong);
    volumeDownBtn.addEventListener('click', decreaseVolume);
    volumeUpBtn.addEventListener('click', increaseVolume);

    audio.addEventListener('ended', skipSong);
    updatePlayerUI();
})();
