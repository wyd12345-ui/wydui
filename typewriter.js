document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        '你是一名"历史考古者"',
        '任务：追溯地球旧文明中的一起重大事件 —— "地震救援神话"',
        '目标：挖掘碎片之中被遗忘的真实情绪与个体命运',
        '请谨慎甄别：你看到的，不一定是真相'
    ];
    
    const missionText = document.querySelector('.mission-text');
    const startBtn = document.getElementById('start-btn');
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let typingSpeed = 50; // 打字速度调整为50ms
    
    // 清空mission-text的内容
    missionText.innerHTML = '';
    
    // 创建所有文本段落
    texts.forEach((text, index) => {
        const p = document.createElement('p');
        if (index === texts.length - 1) {
            p.className = 'warning';
        }
        missionText.appendChild(p);
    });
    
    // 隐藏开始按钮，直到所有文字打完
    startBtn.style.display = 'none';
    
    function typeWriter() {
        const currentP = missionText.children[currentTextIndex];
        const currentText = texts[currentTextIndex];
        
        // 添加文字
        currentP.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        // 播放打字音效
        const typeSound = document.getElementById('type-sound');
        if (typeSound) {
            typeSound.currentTime = 0;
            typeSound.play().catch(() => {}); // 忽略可能的自动播放限制错误
        }
        
        // 判断是否需要切换到下一段文字
        if (currentCharIndex === currentText.length) {
            // 当前文字显示完毕，准备显示下一段
            currentTextIndex++;
            currentCharIndex = 0;
            
            // 如果所有文字都显示完毕，显示开始按钮
            if (currentTextIndex === texts.length) {
                startBtn.style.display = 'block';
                return; // 结束打字效果
            }
            
            // 在开始新文字前短暂暂停
            setTimeout(typeWriter, 500);
        } else {
            // 继续显示当前文字
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // 开始打字效果
    setTimeout(typeWriter, 1000);
}); 