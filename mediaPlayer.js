(function () {
    // Inject the Google Fonts link dynamically for Material Symbols
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Inject the CSS styles dynamically
    const style = document.createElement('style');
    style.textContent = `
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
    `;
    document.head.appendChild(style);

    // Inject the HTML structure of the music player into a target span
    const musicPlayerHTML = `
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
            <center><span class="material-symbols-outlined" style="font-size:17px;">skip_previous</span></center>
        </span>
    </div>
</td>-->


                                    <td width="14px;">
                                        <div class="button1">
                                            <span id="play-btn" class="control-btn">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="font-size:17px;">play_arrow</span></center>
                                                </span>
                                            </span>
                                            <span id="pause-btn" class="control-btn" style="display: none;font-size:19px;">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="font-size:17px;">pause</span></center>
                                                </span>
                                            </span>
                                        </div>
                                    </td>
                                    <td width="14px;">
                                        <div class="button2">
                                            <span id="skip-btn" class="control-btn">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="font-size:17px;">skip_next</span></center>
                                                </span>
                                            </span>
                                        </div>
                                    </td>

   <td width="14px;">
    <div class="button5">
        <!-- "Loop Off" is visible by default -->
        <span id="loop-off-btn" class="control-btn">
            <center><span class="material-symbols-outlined" style="font-size:17px;">repeat</span></center>
        </span>
        <!-- "Loop On" is hidden by default -->
        <span id="loop-on-btn" class="control-btn" style="display: none;">
            <center><span class="material-symbols-outlined" style="font-size:17px;">repeat_on</span></center>
        </span>
    </div>
</td>

                                    <td width="14px;">
                                        <div class="button3">
                                            <span id="volume-down-btn" class="control-btn">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="font-size:17px;">volume_down</span></center>
                                                </span>
                                            </span>
                                        </div>
                                    </td>
                                    <td width="14px;">
                                        <div class="button4">
                                            <span id="volume-up-btn" class="control-btn">
                                                <span class="hover-color">
                                                    <center><span class="material-symbols-outlined"
                                                            style="font-size:17px;">volume_up</span></center>
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
    </div>`;

    // Find a span with a specific id to inject the player
    const targetSpan = document.getElementById('music-player-target');
    if (targetSpan) {
        targetSpan.innerHTML = musicPlayerHTML;
    }

    // Full list of songs
    const songs = [
        { name: 'No Stranger', artist: 'Mieke', artwork: 'https://i.scdn.co/image/ab67616d00001e02af279134565560324c07ba63', url: 'music/Mieke - No Stranger.mp3' },
        { name: 'A Better Feeling', artist: 'Grouper', artwork: 'https://i.scdn.co/image/ab67616d00001e02e4c086c18fafbafa7500858a', url: 'music/Grouper - A Better Feeling.mp3' },
        { name: 'a mother\'s daughter', artist: 'Mieke', artwork: 'https://i.scdn.co/image/ab67616d00001e02aea36c7106e8ae3be1d7a3eb', url: 'music/Mieke - a mother\'s daughter.mp3' },
        { name: 'Circles of Hell', artist: 'Greet Death', artwork: 'https://i.scdn.co/image/ab67616d00001e02dede910a781c289112a32085', url: 'music/Greet Death - Circles of Hell.mp3' },
        { name: 'Wyoming', artist: 'Heather Woods Broderick', artwork: 'https://i.scdn.co/image/ab67616d00001e02353d9c91ed141f57f0f1b66f', url: 'music/Heather Woods Broderick - Wyoming.mp3' },
        { name: 'Live Forever', artist: 'Imagine Drowning', artwork: 'https://i.scdn.co/image/ab67616d00001e02ca442f756e879949838cb173', url: 'music/Imagine Drowning - Live Forever.mp3' },
        { name: 'Cotton (2)', artist: 'BONES', artwork: 'https://i.scdn.co/image/ab67616d00001e02141543af3b22ac0c71878fd2', url: 'music/BONES - Cotton (2).mp3' },
        { name: 'Oh My God', artist: 'Fog Lake', artwork: 'https://i.scdn.co/image/ab67616d00001e027dbfefbbccb53b9c4176e130', url: 'music/Fog Lake - Oh My God.mp3' },
        { name: 'Shadows of Birds', artist: 'Mystery Choir', artwork: 'https://i.scdn.co/image/ab67616d00001e02c42a2f75617c3278294cf6d4', url: 'music/Mystery Choir - Shadows of Birds.mp3' },
        { name: 'Untitled (On Seeing)', artist: 'Yuko Imada', artwork: 'https://i.scdn.co/image/ab67616d00001e0215e7cc5b052700be739f2c40', url: 'music/Yuko Imada - Untitled (On Seeing).mp3' },
        { name: 'Ghostlore', artist: 'Violet A. Foster', artwork: 'https://i.scdn.co/image/ab67616d00001e023ca62990094d3b74031ee694', url: 'music/Violet A. Foster - Ghostlore.mp3' },
        { name: 'Kittenmother', artist: 'Lovesliescrushing', artwork: 'https://i.scdn.co/image/ab67616d00001e0270636fb55e902c2ebc50c3f9', url: 'music/Lovesliescrushing - Kittenmother.mp3' },
        { name: 'November', artist: 'Scoutmaster', artwork: 'https://i.scdn.co/image/ab67616d00001e02cb7be5f1908ea857111eaa1b', url: 'music/Scoutmaster - November.mp3' },
        { name: 'SWIMS', artist: 'Ivy Kashmir', artwork: 'https://i.scdn.co/image/ab67616d00001e023580ae1f55f974c4ead424a9', url: 'music/Ivy Kashmir - SWIMS.mp3' },
        { name: 'Blaster', artist: 'Pinkshinyultrablast', artwork: 'https://i.scdn.co/image/ab67616d00001e02388f7c6057d943d75f0cb80d', url: 'music/Pinkshinyultrablast - Blaster.mp3' },
        { name: 'Bioweapon', artist: 'Composer 4', artwork: 'https://i.scdn.co/image/ab67616d00001e0243c6b51e77ee9d98dc82ef41', url: 'music/Composer 4 - Bioweapon.mp3' },
        { name: 'WEArgue.', artist: 'Alvedon', artwork: 'https://i.scdn.co/image/ab67616d00001e024cf54aa40315e7e35f132910', url: 'music/Alvedon - WEArgue..mp3' },
        { name: 'Peroxide', artist: 'Imagine Drowning', artwork: 'https://i.scdn.co/image/ab67616d00001e022f74d88ace2206a146f7ba42', url: 'music/Imagine Drowning - Peroxide.mp3' },
        { name: 'Moodswing', artist: 'Glixen', artwork: 'https://i.scdn.co/image/ab67616d00001e0234f57868b9a29e18b72de058', url: 'music/Glixen - Moodswing.mp3' },
        { name: 'Ritual Awakening', artist: 'Jenny Hval', artwork: 'https://i.scdn.co/image/ab67616d00001e024b205777f0a2175bead3dd44', url: 'music/Jenny Hval - Ritual Awakening.mp3' },
        { name: 'Detritus', artist: 'Disasterpeace', artwork: 'https://i.scdn.co/image/ab67616d00001e02ea92e53913f8b4d9544bcf79', url: 'music/Disasterpeace - Detritus.mp3' },
        { name: 'Frosti', artist: 'Björk', artwork: 'https://i.scdn.co/image/ab67616d00001e023d15323e148511fc307d95bd', url: 'music/Björk - Frosti.mp3' },
        { name: 'If I Were Neil Armstrong', artist: 'Window Seat', artwork: 'https://i.scdn.co/image/ab67616d00001e029cdee3a72daf7c0bb77edb78', url: 'music/Window Seat - If I Were Neil Armstrong I Would Have Planted a Flower on the Moon Instead.mp3' },
        { name: 'Mirrors', artist: 'she\'s green', artwork: 'https://i.scdn.co/image/ab67616d00001e0211b82735b4715593d5d20334', url: 'music/she\'s green - Mirrors.mp3' },
        { name: 'Sleet', artist: 'Chihei Hatakeyama', artwork: 'https://i.scdn.co/image/ab67616d00001e0238ccc4bf92399776dff587bf', url: 'music/Chihei Hatakeyama - Sleet.mp3' },
        { name: 'Con', artist: 'Imagine Drowning', artwork: 'https://i.scdn.co/image/ab67616d00001e022f74d88ace2206a146f7ba42', url: 'music/Imagine Drowning - Con.mp3' },
        { name: 'feel', artist: 'Squeak', artwork: 'https://i.scdn.co/image/ab67616d00001e023038651c2e0e13325157c97e', url: 'music/Squeak - feel.mp3' },
        { name: 'T6', artist: 'Marlon DuBois', artwork: 'https://i.scdn.co/image/ab67616d00001e02d651b94db5aa6787de77b8ca', url: 'music/Marlon DuBois - T6.mp3' },
        { name: 'thief', artist: 'dottie', artwork: 'https://i.scdn.co/image/ab67616d00001e02c92563faae1d298cca8a2e48', url: 'music/dottie - thief.mp3' },
        { name: 'Dormir avec l\'océan', artist: 'Ensemble de Musique Zen Relaxante', artwork: 'https://i.scdn.co/image/ab67616d00001e02516b80d0ac81284d7d65b02d', url: 'music/Ensemble de Musique Zen Relaxante - Dormir avec l\'océan.mp3' },
        { name: 'For Sure', artist: 'Ethel Cain', artwork: 'https://i.scdn.co/image/ab67616d00001e0224eaa84e8d2b7c146d6a9317', url: 'music/Ethel Cain - For Sure.mp3' },
        { name: 'White Dress', artist: 'Drop Nineteens', artwork: 'https://i.scdn.co/image/ab67616d00001e02778b1399185ea649d7e6ab10', url: 'music/Drop Nineteens - White Dress.mp3' },
        { name: 'Fear', artist: 'Magdalena Bay', artwork: 'https://i.scdn.co/image/ab67616d00001e025a2ff617de4e51a9a214b56a', url: 'music/Magdalena Bay - Fear, Sex.mp3' },
        { name: 'Idioteque', artist: 'Radiohead', artwork: 'https://i.scdn.co/image/ab67616d00001e026c7112082b63beefffe40151', url: 'music/Radiohead - Idioteque.mp3' },
        { name: 'wait4help', artist: 'Yandere', artwork: 'https://i.scdn.co/image/ab67616d00001e026323cb36a8de5ee8f9e8686c', url: 'music/Yandere - wait4help.mp3' },
        { name: '*·˚✩*ೃ.⋆੭* ⋆.‧°◞♡⋆.*ೃ✧*๑♡՞༉‧₊˚✧˚｡⋆˚‧⁺ ･ ˖ ·', artist: 'weirdo girl', artwork: 'https://i.scdn.co/image/ab67616d00001e02e03ebd8932ffdaa218fb5282', url: 'music/weirdo girl - _·˚✩_ೃ.⋆੭_ ⋆.‧°◞♡⋆._ೃ✧_๑♡՞༉‧₊˚✧˚｡⋆˚‧⁺ ･ ˖ ·.mp3' },
        { name: '__(a)', artist: 'Kathryn Mohr', artwork: 'https://i.scdn.co/image/ab67616d00001e0250bb5ae8da0e9e948315eb3e', url: 'music/Kathryn Mohr - ___(a).mp3' },
        { name: 'Clementine II', artist: 'Hana Bryanne', artwork: 'https://i.scdn.co/image/ab67616d00001e02e4ea6fb8f5d363903cc8baae', url: 'music/Hana Bryanne - Clementine II.mp3' },
        { name: 'Aubergine', artist: 'Nectarine Girl', artwork: 'https://i.scdn.co/image/ab67616d00001e02df1d33035ff3a457bdc1e91f', url: 'music/Nectarine Girl - Aubergine.mp3' },
        { name: 'Anthems For A Seventeen Year-Old Girl', artist: 'yeule', artwork: 'https://i.scdn.co/image/ab67616d00001e02636a3c1d528b8038eba6b289', url: 'music/yeule - Anthems For A Seventeen Year-Old Girl.mp3' },
        { name: 'Moon, I Already Know', artist: 'Mount Eerie', artwork: 'https://i.scdn.co/image/ab67616d00001e02b06101fce8315a1ac46105d3', url: 'music/Mount Eerie - Moon, I Already Know.mp3' }
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
