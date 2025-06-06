document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let mouseX = 0;
    let mouseY = 0;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // 更新窗口尺寸
    window.addEventListener('resize', function() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    });

    // 监听鼠标移动
    document.addEventListener('mousemove', function(e) {
        // 计算鼠标位置相对于窗口中心的偏移
        mouseX = (e.clientX - windowWidth / 2) / 50;
        mouseY = (e.clientY - windowHeight / 2) / 50;

        // 应用视差效果
        body.style.backgroundPosition = `calc(50% + ${mouseX}px) calc(50% + ${mouseY}px)`;
    });
}); 