// ✏️ 비밀번호 여기서 변경
const ADMIN_PASSWORD = "sorogee";

let isAdmin = false;
let editingId = null;

// ── 로그인/로그아웃 ──
function toggleAdmin() {
  if (isAdmin) {
    isAdmin = false;
    document.getElementById("admin-toggle-btn").textContent = "🔒 admin";
    document.getElementById("admin-toggle-btn").classList.remove("logged-in");
    renderWorks();
  } else {
    document.getElementById("pw-input").value = "";
    document.getElementById("login-error").textContent = "";
    document.getElementById("login-overlay").classList.add("active");
    setTimeout(() => document.getElementById("pw-input").focus(), 100);
  }
}

function checkPassword() {
  const pw = document.getElementById("pw-input").value;
  if (pw === ADMIN_PASSWORD) {
    isAdmin = true;
    document.getElementById("login-overlay").classList.remove("active");
    document.getElementById("admin-toggle-btn").textContent = "🔓 admin";
    document.getElementById("admin-toggle-btn").classList.add("logged-in");
    renderWorks();
  } else {
    document.getElementById("login-error").textContent = "비밀번호가 틀렸어요";
    document.getElementById("pw-input").value = "";
    document.getElementById("pw-input").focus();
  }
}

// ── 추가 모달 ──
function openAddModal() {
  const yearInput = document.getElementById("input-year");
  const yearLabel = document.getElementById("year-label");
  yearLabel.textContent = activeCategory === "드라마" ? "Aired" : "Released";
  yearInput.placeholder = activeCategory === "드라마" ? "예: 2022.06 ~ 2022.08" : activeCategory === "책" ? "예: 2024.03.15" : "예: 2024";
  yearInput.value = "";
  document.getElementById("input-title").value = "";
  document.getElementById("input-note").value = "";
  document.getElementById("input-poster").value = "";
  document.getElementById("add-poster-preview").style.display = "none";
  selectedMoods.add = [];
  document.getElementById("add-mood-manage").classList.remove("open");
  renderMoodChips("add", []);
  document.getElementById("modal-overlay").classList.add("active");
}

function handleAdd() {
  const title = document.getElementById("input-title").value.trim();
  if (!title) return;
  works[activeSeason].push({
    id: Date.now(),
    title,
    type: activeCategory,
    year: document.getElementById("input-year").value.trim(),
    mood: [...selectedMoods.add],
    note: document.getElementById("input-note").value.trim(),
    poster: document.getElementById("input-poster").value.trim(),
  });
  document.getElementById("modal-overlay").classList.remove("active");
  renderWorks();
}

// ── 수정 모달 ──
function openEditModal(id) {
  const work = works[activeSeason].find(w => w.id === id);
  if (!work) return;
  editingId = id;
  const s = seasons[activeSeason];
  document.getElementById("edit-modal-title").textContent = "✏️ " + work.title + " 수정";
  document.getElementById("edit-modal-title").style.color = s.text;
  document.getElementById("edit-input-title").value = work.title;
  document.getElementById("edit-input-year").value = work.year;
  document.getElementById("edit-input-note").value = work.note || "";
  document.getElementById("edit-input-poster").value = work.poster || "";
  document.getElementById("edit-year-label").textContent = work.type === "드라마" ? "Aired" : "Released";
  document.getElementById("edit-submit-btn").style.background = s.gradient;
  document.getElementById("edit-submit-btn").style.color = s.text;
  const editPreview = document.getElementById("edit-poster-preview");
  if (work.poster) {
    document.getElementById("edit-poster-img").src = work.poster;
    editPreview.style.display = "block";
  } else {
    editPreview.style.display = "none";
  }
  selectedMoods.edit = Array.isArray(work.mood) ? [...work.mood] : [work.mood];
  document.getElementById("edit-mood-manage").classList.remove("open");
  renderMoodChips("edit", selectedMoods.edit);
  document.getElementById("edit-modal-overlay").classList.add("active");
}

function handleEdit() {
  const title = document.getElementById("edit-input-title").value.trim();
  if (!title || editingId === null) return;
  works[activeSeason] = works[activeSeason].map(w => {
    if (w.id !== editingId) return w;
    return {
      ...w,
      title,
      year: document.getElementById("edit-input-year").value.trim(),
      mood: [...selectedMoods.edit],
      note: document.getElementById("edit-input-note").value.trim(),
      poster: document.getElementById("edit-input-poster").value.trim(),
    };
  });
  editingId = null;
  document.getElementById("edit-modal-overlay").classList.remove("active");
  renderWorks();
}

// ── 삭제 ──
function deleteWork(id) {
  works[activeSeason] = works[activeSeason].filter(w => w.id !== id);
  renderWorks();
}
