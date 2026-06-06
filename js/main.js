// 전역 상태
let activeSeason = "spring";
let activeCategory = "영화";

// 모달 바깥 클릭 시 닫기
document.getElementById("detail-overlay").addEventListener("click", function(e) {
  if (e.target === this) this.classList.remove("active");
});

// 초기 렌더링
render();
