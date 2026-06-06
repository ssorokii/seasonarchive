// 전역 상태
let activeSeason = "spring";
let activeCategory = "영화";

// ── 이벤트 리스너 ──
document.getElementById("pw-input").addEventListener("keydown", e => {
  if (e.key === "Enter") checkPassword();
});

document.getElementById("input-title").addEventListener("keydown", e => {
  if (e.key === "Enter") handleAdd();
});

// 포스터 URL 미리보기 (추가 모달)
document.getElementById("input-poster").addEventListener("input", function () {
  const preview = document.getElementById("add-poster-preview");
  const img = document.getElementById("add-poster-img");
  if (this.value.trim()) {
    img.src = this.value.trim();
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }
});

// 포스터 URL 미리보기 (수정 모달)
document.getElementById("edit-input-poster").addEventListener("input", function () {
  const preview = document.getElementById("edit-poster-preview");
  const img = document.getElementById("edit-poster-img");
  if (this.value.trim()) {
    img.src = this.value.trim();
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }
});

// 모달 바깥 클릭 시 닫기
["modal-overlay", "edit-modal-overlay", "login-overlay"].forEach(id => {
  document.getElementById(id).addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("active");
  });
});

// ── 초기 렌더링 ──
render();
