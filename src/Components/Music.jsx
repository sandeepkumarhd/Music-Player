import React from "react";
import { useState, useRef } from "react";
import "./Music.css";

const Music = () => {
  const [isLigth, setIsLight] = useState(true);
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: "Chasing",
    Songsrc: "./Assets/Songs/masti masti.mp3",
    songAvatar: "./Assets/Images/image1.jpg",
  });

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("00 : 38");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
  const [videoIndex, setVideoIndex] = useState(0);

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration/100);
  };

  //Change Avatar Class

  let avatarClass = ["objectFitCover", "objectFitContain", "none"];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  const handleAvatar = () => {
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0);
    } else {
      setAvatarClassIndex(avatarClassIndex + 1);
    }
  };

  //Play Audio Function
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const musicAPI = [
    {
      songName: "Chasing",
      Songsrc: "./Assets/Songs/Mahadev.mp3",
      songAvatar: "./Assets/Images/image1.jpg",
    },
    {
      songName: "AURORA - Runaway",
      Songsrc: "./Assets/Songs/new2.mp3",
      songAvatar: "./Assets/Images/image4.jpg",
    },
    {
      songName: "Catch Me If I Fall",
      Songsrc: "./Assets/Songs/new.mp3",
      songAvatar: "./Assets/Images/image2.jpg",
    },
    {
      songName: "Inspired (Clean)",
      Songsrc: "./Assets/Songs/kya.mp3",
      songAvatar: "./Assets/Images/image3.jpg",
    },
    {
      songName: "Baby doll [ slowed + reverb ]",
      Songsrc: "./Assets/Songs/New3.mp3",
      songAvatar: "./Assets/Images/image5.jpg",
    },
    {
      songName: "Soch (Slowed+Reverbed)",
      Songsrc: "./Assets/Songs/New4.mp3",
      songAvatar: "./Assets/Images/image6.jpg",
    },
    {
      songName: "Apna Bana Le",
      Songsrc: "./Assets/Songs/new5.mp3",
      songAvatar: "./Assets/Images/image7.jpg",
    },
    {
      songName: "dad Mummy",
      Songsrc: "./Assets/Songs/dad mummy.mp3",
      songAvatar: "./Assets/Images/image2.jpg",
    },
    {
      songName: "jhatka Mare",
      Songsrc: "./Assets/Songs/jhatka.mp3",
      songAvatar: "./Assets/Images/image7.jpg",
    },
    {
      songName: "mai nikla",
      Songsrc: "./Assets/Songs/mai nikla.mp3",
      songAvatar: "./Assets/Images/image7.jpg",
    },
    {
      songName: "O Sanam ",
      Songsrc: "./Assets/Songs/o sanam.mp3",
      songAvatar: "./Assets/Images/image1.jpg",
    },
    {
      songName: "Rab Kare",
      Songsrc: "./Assets/Songs/rab kare.mp3",
      songAvatar: "./Assets/Images/image2.jpg",
    },
    {
      songName: "Rab Ko Yaad",
      Songsrc: "./Assets/Songs/rab ko.mp3",
      songAvatar: "./Assets/Images/image4.jpg",
    },
    {
      songName: "Ratno Ko Uth",
      Songsrc: "./Assets/Songs/ranto ko.mp3",
      songAvatar: "./Assets/Images/image1.jpg",
    },
    {
      songName: "Sawan Aaya hai",
      Songsrc: "./Assets/Songs/sawan aaya hai.mp3",
      songAvatar: "./Assets/Images/image2.jpg",
    },
    {
      songName: "Sona Chandi",
      Songsrc: "./Assets/Songs/sona chandi.mp3",
      songAvatar: "./Assets/Images/image6.jpg",
    },
    {
      songName: "Tu Kal Chala",
      Songsrc: "./Assets/Songs/tuCalChala.mp3",
      songAvatar: "./Assets/Images/image4.jpg",
    },
  ];

  const handleNextSong = () => {
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.Songsrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      Songsrc: musicObject.Songsrc,
      songAvatar: musicObject.songAvatar,
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const vidArray = [
    "./Assets/Videos/video1.mp4",
    "./Assets/Videos/video2.mp4",
    "./Assets/Videos/video3.mp4",
    "./Assets/Videos/video4.mp4",
    "./Assets/Videos/video5.mp4",
    "./Assets/Videos/video6.mp4",
  ];
  const moonAndSun = () => {
    setIsLight((pre) => !pre);
  };

  return (
    <div>
      <div className="container">
        <audio
          src="./Assets/Songs/ringtone.mp3"
          ref={currentAudio}
          onEnded={handleNextSong}
          onTimeUpdate={handleAudioUpdate}
        ></audio>
        <video
          src={vidArray[videoIndex]}
          loop
          muted
          autoPlay
          className="backgroundVideo"
        ></video>
        <div className="blackScreen"></div>
        <div className={isLigth ? "music-Container" : "darKmode"}>
          {isLigth ? (
            <i class="fa-solid fa-cloud-moon" onClick={moonAndSun}></i>
          ) : (
            <i class="fa-solid fa-lightbulb" onClick={moonAndSun}></i>
          )}
          <p className="musicPlayer">Music Player</p>
          <p className="music-Head-Name">{currentMusicDetails.songName}</p>
          <img
            src={currentMusicDetails.songAvatar}
            className={avatarClass[avatarClassIndex]}
            onClick={handleAvatar}
            alt="song Avatar"
            id="songAvatar"
          />
          <div className="musicTimerDiv">
            <p className="musicCurrentTime">{musicCurrentTime}</p>
            <p className="musicTotalLenght">{musicTotalLength}</p>
          </div>
          <input
            type="range"
            name="musicProgressBar"
            className="musicProgressBar"
            value={audioProgress}
            onChange={handleMusicProgressBar}
          />
          <div className="musicControlers">
            <i
              className="fa-solid fa-backward musicControler"
              onClick={handlePrevSong}
            ></i>
            <i
              className={`fa-solid ${
                isAudioPlaying ? "fa-pause-circle" : "fa-circle-play"
              } playBtn`}
              onClick={handleAudioPlay}
            ></i>
            <i
              className="fa-solid fa-forward musicControler"
              onClick={handleNextSong}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
