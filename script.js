const songs = [
    {
      title: "THE DARK",
      artist: "TurtleBeats",
      src: "MP3/dark-synthwave-obilivion-echo-251687.mp3",
      cover: "image/DARK.png"
    },
    {
      title: "FADED",
      artist: "AloneInTheUniverse",
      src: "MP3/faded-247956.mp3",
      cover: "image/faded.jpg"
    },
    {
      title: "LOFI study music",
      artist: "FASSounds",
      src: "MP3/lofi.mp3",
      cover: "image/lofi.jpg"
    },
    {
      title: "Summer Rain",
      artist: "xethrocc",
      src: "MP3/rain.mp3",
      cover: "image/rain.webp"
    },
    {
      title: "Calm Night - Piano Music",
      artist: "CalvinClavier",
      src: "MP3/calm.mp3",
      cover: "image/calm.webp"
    }
  ];
  
  let currentSongIndex = 0;
  const audio = new Audio();
  const playButton = document.getElementById('play');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');
  const progressBar = document.getElementById('progress-bar');
  const songTitle = document.getElementById('song-title');
  const artistName = document.getElementById('artist-name');
  const coverImage = document.getElementById('cover-image');
  
  function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    coverImage.src = song.cover;
  }
  
  function playSong() {
    audio.play();
    playButton.textContent = '⏸️';
  }
  
  function pauseSong() {
    audio.pause();
    playButton.textContent = '▶️';
  }
  
  playButton.addEventListener('click', () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });
  
  nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });
  
  prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });
  
  audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  });
  
  progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });
  
  document.querySelectorAll('.playlist li').forEach((item) => {
    item.addEventListener('click', (e) => {
      currentSongIndex = e.target.dataset.index;
      loadSong(currentSongIndex);
      playSong();
    });
    const volumeUpButton = document.getElementById('volume-up');
const volumeDownButton = document.getElementById('volume-down');
const volumeBar = document.getElementById('volume-bar');

// Load song when the app starts
loadSong(currentSongIndex);

// Function to update the audio element's volume
function updateVolume(value) {
  audio.volume = value;
  volumeBar.value = value;
}

// Increase volume by 10%
volumeUpButton.addEventListener('click', () => {
  if (audio.volume < 1) {
    const newVolume = Math.min(audio.volume + 0.1, 1);
    updateVolume(newVolume);
  }
});

// Decrease volume by 10%
volumeDownButton.addEventListener('click', () => {
  if (audio.volume > 0) {
    const newVolume = Math.max(audio.volume - 0.1, 0);
    updateVolume(newVolume);
  }
});

// Sync volume with the range input
volumeBar.addEventListener('input', (e) => {
  updateVolume(e.target.value);
});

  });

  loadSong(currentSongIndex);
  