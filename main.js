function playClickEffect(e) {
    const container = document.getElementById('effect-container');
    const items = ['❤️', '✨', '💖', '⭐', '🍀'];
    
    // 한 번 클릭할 때 3개 정도 튀어나오게
    for(let i=0; i<3; i++) {
        const item = document.createElement('div');
        item.className = 'effect-item';
        item.innerText = items[Math.floor(Math.random() * items.length)];
        
        // 클릭한 위치 계산
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        item.style.left = x + (Math.random() * 40 - 20) + 'px';
        item.style.top = y + (Math.random() * 40 - 20) + 'px';
        
        container.appendChild(item);
        
        // 0.8초 후 삭제
        setTimeout(() => item.remove(), 800);
    }
}
