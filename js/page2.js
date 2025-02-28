const audio = document.getElementById('myAudio');
const audioBtn = document.querySelector('.audio-btn');

function playAudio() {
  if (audio.paused) {
    audio.play();
    audioBtn.classList.add('playing');
  } else {
    audio.pause();
    audioBtn.classList.remove('playing');
  }
}

// 音频播放结束时重置按钮状态
audio.addEventListener('ended', () => {
  audioBtn.classList.remove('playing');
});
