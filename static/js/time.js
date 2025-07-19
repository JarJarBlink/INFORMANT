

function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("zh-TW", {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.textContent = "TIME：" + formatted;
  }
}

updateTime();
setInterval(updateTime, 1000); // 每秒更新一次
