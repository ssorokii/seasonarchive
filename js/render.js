function applySeasonTheme() {
  const s = seasons[activeSeason];
  document.body.style.background = s.gradient;
  document.getElementById("header-title").style.color = s.text;
  document.getElementById("season-desc").textContent = s.emoji + " " + s.desc;
  document.getElementById("count-badge").style.color = s.accent;
}

function renderTabs() {
  const container = document.getElementById("season-tabs");
  container.innerHTML = "";
  Object.entries(seasons).forEach(([key, s]) => {
    const btn = document.createElement("button");
    btn.className = "season-btn" + (activeSeason === key ? " active" : "");
    btn.textContent = s.emoji + " " + s.en;
    btn.style.color = activeSeason === key ? s.text : "rgba(0,0,0,0.55)";
    btn.onclick = () => { activeSeason = key; render(); };
    container.appendChild(btn);
  });
}

function renderCategoryTabs() {
  const container = document.getElementById("cat-tabs-container");
  const tabBar = document.createElement("div");
  tabBar.className = "cat-tabs";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (activeCategory === cat.key ? " active" : "");
    btn.textContent = cat.emoji + " " + cat.key;
    btn.onclick = () => { activeCategory = cat.key; renderCategoryTabs(); renderWorks(); };
    tabBar.appendChild(btn);
  });
  container.innerHTML = "";
  container.appendChild(tabBar);
}

function renderWorks() {
  const s = seasons[activeSeason];
  const list = works[activeSeason].filter(w => w.type === activeCategory);
  const container = document.getElementById("works-list");

  document.getElementById("count-badge").textContent = list.length + " works";
  container.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "아직 등록된 작품이 없어요";
    container.appendChild(empty);
    return;
  }

  list.forEach((work, i) => {
    const card = document.createElement("div");
    card.className = "work-card";
    const moods = Array.isArray(work.mood) ? work.mood : [work.mood];
    const moodTags = moods.map(m =>
      `<span class="tag-chip" style="background:${s.tag}; color:${s.tagText};">${m}</span>`
    ).join("");
    const posterEmoji = work.type === "영화" ? "🎬" : work.type === "드라마" ? "📺" : "📚";
    const posterHTML = work.poster
      ? `<div class="poster-wrap"><img src="${work.poster}" alt="${work.title}" onerror="this.parentElement.innerHTML='<span class=\\'poster-placeholder\\'>🎞️</span>'" /></div>`
      : `<div class="poster-wrap"><span class="poster-placeholder">${posterEmoji}</span></div>`;

    card.innerHTML = `
      <div style="display:flex; align-items:flex-start; gap:14px;">
        <div class="work-index" style="color:${s.accent};">${String(i + 1).padStart(2, "0")}</div>
        ${posterHTML}
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
            <span class="work-title" style="color:${s.text};">${work.title}</span>
            <span style="font-size:12px; color:rgba(0,0,0,0.35); font-family:Georgia,serif;">${work.year}</span>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:${work.note ? "8px" : "0"};">
            ${moodTags}
          </div>
          ${work.note ? `<div class="work-note">"${work.note}"</div>` : ""}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function render() {
  applySeasonTheme();
  renderTabs();
  renderCategoryTabs();
  renderWorks();
}
