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

// 日期信息显示
function updateDateInfo() {
  const now = new Date();
  const newYear2026 = new Date('2026-01-01');
  const daysLeft = Math.ceil((newYear2026 - now) / (1000 * 60 * 60 * 24));
  
  const month = now.getMonth() + 1;
  const date = now.getDate();
  
  const dateInfo = document.getElementById('dateInfo');
  dateInfo.textContent = `你好，今天是${month}月${date}日，距2026年元旦还有${daysLeft}天`;
}

// 初始化时更新日期信息
updateDateInfo();
// 每天更新一次日期信息
setInterval(updateDateInfo, 24 * 60 * 60 * 1000);

// 模态窗口功能
const modal = document.getElementById('modal');
const navItems = document.querySelectorAll('.nav-item');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.querySelector('.confirm-btn');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });
});

// 关闭按钮事件
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 确认按钮事件
confirmBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 点击模态窗口外部关闭
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// 反馈功能
function handleFeedback(type) {
  const btn = type === 'like' ? document.querySelector('.like-btn') : document.querySelector('.dislike-btn');
  
  // 添加点击动画
  btn.classList.add('clicked');
  setTimeout(() => btn.classList.remove('clicked'), 600);
  
  // 记录反馈历史
  const now = new Date();
  const timeString = `${now.getMonth() + 1}月${now.getDate()}日${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const feedbackType = type === 'like' ? '赞' : '踩';
  
  const record = document.createElement('div');
  record.className = 'feedback-record';
  record.textContent = `游客在${timeString}留下了一个${feedbackType}`;
  
  const historyContainer = document.getElementById('feedbackHistory');
  historyContainer.insertBefore(record, historyContainer.firstChild);
}
