// 나무 성장 로직 (예시)
let currentExp = 0;
let level = 1;

function updateTree() {
    const treeImg = document.getElementById('main-tree');
    const levelDisplay = document.getElementById('tree-level');
    
    // 레벨에 따라 이미지 변경 (준비된 나무 이미지 경로로 변경하세요)
    // treeImg.src = `assets/tree_lv${level}.png`;
    levelDisplay.innerText = level;
}

// 탭 전환 함수
function changeTab(tabName) {
    // 모든 탭 비활성화
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // 클릭한 탭 활성화
    event.currentTarget.classList.add('active');

    console.log(`${tabName} 탭으로 이동`);
    // 여기에 실제 화면 전환 로직을 추가할 수 있습니다.
}

// 초기화
window.onload = () => {
    updateTree();
};
