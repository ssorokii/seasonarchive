// 선택된 무드 상태 (add 모달 / edit 모달)
let selectedMoods = { add: [], edit: [] };

function renderMoodChips(context, selectedArr) {
  const container = document.getElementById(context + "-mood-chips");
  container.innerHTML = "";
  moodList.forEach(m => {
    const chip = document.createElement("div");
    chip.className = "mood-chip" + (selectedArr.includes(m) ? " selected" : "");
    chip.textContent = m;
    chip.onclick = () => toggleMoodChip(context, m);
    container.appendChild(chip);
  });
}

function toggleMoodChip(context, mood) {
  const arr = selectedMoods[context];
  const idx = arr.indexOf(mood);
  if (idx === -1) arr.push(mood);
  else arr.splice(idx, 1);
  renderMoodChips(context, arr);
}

function toggleMoodManage(context) {
  const area = document.getElementById(context + "-mood-manage");
  area.classList.toggle("open");
  if (area.classList.contains("open")) renderMoodManageList(context);
}

function renderMoodManageList(context) {
  const container = document.getElementById(context + "-mood-manage-list");
  container.innerHTML = "";
  moodList.forEach(m => {
    const chip = document.createElement("div");
    chip.className = "mood-manage-chip";
    chip.innerHTML = `<span>${m}</span><button class="mood-remove-btn" onclick="removeMood('${m}', '${context}')">✕</button>`;
    container.appendChild(chip);
  });
}

function removeMood(mood, context) {
  moodList = moodList.filter(m => m !== mood);
  selectedMoods.add = selectedMoods.add.filter(m => m !== mood);
  selectedMoods.edit = selectedMoods.edit.filter(m => m !== mood);
  renderMoodChips(context, selectedMoods[context]);
  renderMoodManageList(context);
  const other = context === "add" ? "edit" : "add";
  if (document.getElementById(other + "-mood-manage").classList.contains("open")) {
    renderMoodManageList(other);
  }
  renderMoodChips(other, selectedMoods[other]);
}

function addMood(context) {
  const input = document.getElementById(context + "-mood-input");
  const val = input.value.trim();
  if (!val || moodList.includes(val)) { input.value = ""; return; }
  moodList.push(val);
  input.value = "";
  renderMoodChips(context, selectedMoods[context]);
  renderMoodManageList(context);
  const other = context === "add" ? "edit" : "add";
  renderMoodChips(other, selectedMoods[other]);
}
