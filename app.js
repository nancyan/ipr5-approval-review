const symbols = ["dragon", "panda", "lantern", "fan", "pagoda"];
const celebrationThemes = [
  { motion: "fall", glyphs: ["", "", "✦"], colors: ["#edc66e", "#b51f2b", "#fff0bd", "#7cba82"] },
  { motion: "rise", glyphs: ["♥", "♡"], colors: ["#ff6577", "#ffb0bb", "#fff0bd"] },
  { motion: "flutter", glyphs: ["🏮"], colors: ["#e33b32", "#ffb83e", "#fff0bd"] },
  { motion: "burst", glyphs: ["★", "✦", "✧"], colors: ["#ffe07a", "#fff4bd", "#df9d36"] },
  { motion: "flutter", glyphs: ["🌸", "❀"], colors: ["#ffb0c8", "#ffd4df", "#fff0bd"] },
  { motion: "burst", glyphs: ["✹", "✦", "•"], colors: ["#ff7c41", "#ffd15c", "#e94235"] },
  { motion: "fall", glyphs: ["●", "◉"], colors: ["#ffd45e", "#f2a72f", "#fff0bd"] },
  { motion: "burst", glyphs: ["✺", "✷", "✦"], colors: ["#ef4b3e", "#edc66e", "#f9f0bd"] },
  { motion: "flutter", glyphs: ["◒", "◓"], colors: ["#f6c65d", "#d74d43", "#fff0bd"] },
  { motion: "rise", glyphs: ["☁", "☾"], colors: ["#dceaff", "#fff2a8", "#b8cee8"] },
  { motion: "flutter", glyphs: ["❧", "⌁"], colors: ["#70b779", "#a8d59d", "#edc66e"] },
  { motion: "burst", glyphs: ["◆", "◇"], colors: ["#69c6a5", "#b6f0d7", "#edc66e"] },
  { motion: "rise", glyphs: ["⌂", "▰"], colors: ["#e25749", "#edc66e", "#fff0bd"] },
  { motion: "burst", glyphs: ["☀", "✦"], colors: ["#ffcf4c", "#ff8d35", "#fff0bd"] },
  { motion: "fall", glyphs: ["✓", "✔"], colors: ["#7fd39a", "#d6f3dd", "#edc66e"] },
  { motion: "flutter", glyphs: ["❯", "⌇"], colors: ["#75bfe8", "#fff0bd", "#d87d65"] },
  { motion: "rise", glyphs: ["●", "⌖"], colors: ["#ef6155", "#edc66e", "#fff0bd"] },
  { motion: "flutter", glyphs: ["▤", "▱"], colors: ["#e8c17a", "#f7e7b5", "#a64a3f"] },
  { motion: "rise", glyphs: ["❁", "✿"], colors: ["#ff9ab0", "#ffd2db", "#edc66e"] },
  { motion: "flutter", glyphs: ["◇", "◈"], colors: ["#68c5dd", "#f6cf63", "#e35b4e"] },
  { motion: "burst", glyphs: ["◷", "◴"], colors: ["#edc66e", "#fff0bd", "#c66b52"] },
  { motion: "burst", glyphs: ["ϟ", "✦"], colors: ["#f8dc59", "#fff5ae", "#e45d42"] },
  { motion: "rise", glyphs: ["▥", "▦", "▰"], colors: ["#ef6b4f", "#edc66e", "#fff0bd"] },
  { motion: "flutter", glyphs: ["💧", "≈"], colors: ["#57b8e8", "#a8ddf3", "#e8f8ff"] },
];
const rows = [
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(а), 1-й модуль — интеграция с программно-аппаратной средой", "модуль интеграции с программно-аппаратной средой пилотирования и прототипирования МАС БФМ", "В сервисе доступна и работает интеграция с программно-аппаратной средой пилотирования и прототипирования МАС БФМ.", "Экран или результат работы интеграции"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(а), 2-й модуль — база градостроительных требований", "модуль извлечения и построения базы градостроительных требований из нормативных документов", "Сервис извлекает градостроительные требования из нормативных документов и формирует из них базу требований.", "Извлечённые требования и сформированная база"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(а), 3-й модуль — ограничения территории", "модуль извлечения градостроительных ограничений, действующих на территории, из базы градостроительных требований", "Сервис определяет действующие на выбранной территории градостроительные ограничения на основании базы требований.", "Перечень ограничений для выбранной территории"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(а), 4-й модуль — геоинформационные слои ограничений", "модуль генерации геоинформационных слоев, определяющих совокупность градостроительных ограничений, применяемых к территории", "Сервис формирует геоинформационный слой с совокупностью ограничений, применимых к территории.", "Карта с геоинформационным слоем ограничений"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(а), 5-й модуль — оценка проектов и интерпретация нарушений", "модуль оценки проектов развития территорий и интерпретации нарушений градостроительных ограничений", "Сервис оценивает проект развития территории и показывает интерпретацию выявленных нарушений градостроительных ограничений.", "Результат оценки проекта и пояснения нарушений"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(а), 6-й модуль — чат-бот", "модуль, реализующий функции чат-бота человеко-машинного взаимодействия", "В сервисе доступен чат-бот, через который пользователь взаимодействует с системой.", "Диалог пользователя с чат-ботом"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(б), 1-й способ вывода — интеллектуальный ассистент", "взаимодействие с пользователем в формате интеллектуального ассистента посредством чата", "Пользователь получает результат работы интеллектуального ассистента непосредственно в чате.", "Вопрос пользователя и полный ответ ассистента"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(б), 2-й способ вывода — программный интерфейс", "возможность обмена данными посредством программного интерфейса, обеспечивающего представление геоинформационных слоев", "Сервис передаёт данные через программный интерфейс и предоставляет сформированные геоинформационные слои.", "Ответ программного интерфейса и открытый геоинформационный слой"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(в), 1-я функция — формирование ограничений", "формирование градостроительных ограничений, действующих на территории для представления в виде геоинформационных слоев", "Сервис формирует действующие на территории ограничения и представляет их в виде геоинформационных слоёв.", "Слой ограничений для выбранной территории"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(в), 2-я функция — градостроительный контекст", "определения сведений градостроительного контекста проектов развития территорий для представления справок посредством чата", "Сервис определяет сведения градостроительного контекста проекта и предоставляет по ним справку в чате.", "Справка по градостроительному контексту в чате"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(в), 3-я функция — нарушения градостроительных ограничений", "определения сведений о фактах нарушений градостроительных ограничений проектами развития территорий в виде геоинформационных слоев и справок", "Сервис выявляет факты нарушений градостроительных ограничений и предоставляет результат одновременно в виде слоя и справки.", "Геоинформационный слой нарушений и справка"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(в), 4-я функция — нарушения ПЗЗ", "определения сведений о фактах нарушений местных (региональных) правил землепользования и застройки проектами развития территорий в виде геоинформационных слоев и справок", "Сервис выявляет нарушения местных или региональных правил землепользования и застройки и предоставляет слой и справку.", "Слой нарушений ПЗЗ и справка"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(в), 5-я функция — социальное обслуживание", "определения сведений о проектах развития территорий в части баланса обеспеченности и доступности объектов социального обслуживания", "Сервис предоставляет результат оценки баланса обеспеченности и доступности объектов социального обслуживания для проекта.", "Результат оценки обеспеченности и доступности"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(г) — документы трёх регионов", "оперирование нормативными документами по территориям не менее чем по трем регионам Российской Федерации для учета региональных и местных различий", "Сервис работает с нормативными документами не менее чем по трём регионам и учитывает региональные и местные различия.", "Примеры результатов по трём регионам"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(д) — не менее десяти нормативных документов", "интеграцию базы нормативных документов в количестве не менее десяти документов, определяющих ограничения градостроительной деятельности, учитываемые в планировании развития территорий", "В сервис интегрирована база не менее чем из десяти документов, определяющих ограничения градостроительной деятельности.", "Состав базы из десяти или более документов"],
  ["ТЗ М2–М3, вер. 3, п. 3.1.5(е) — апробация на трёх проектах", "экспериментальные исследования производятся не менее чем на трех проектах развития территории, расположенных в разных регионах Российской Федерации", "Работоспособность функций сервиса подтверждена не менее чем на трёх проектах из разных регионов России.", "Результаты апробации по трём проектам"],
  ["Программа ИЦ СИИП, вер. 3, разд. 6, ИПР ИИ-5, стр. 26 — данные территории и конфликты", "систематизацию и восполнение данных о состоянии территории, наложенных ограничений градостроительной деятельности, а также нормативных требований и выявления потенциальных конфликтов для автоматизации отдельных этапов организационно-технических процессов в градостроительстве", "Сервис предоставляет систематизированные и восполненные данные о территории, ограничениях и нормативных требованиях, а также результат выявления потенциальных конфликтов.", "Результат градостроительного анализа территории"],
  ["Программа ИЦ СИИП, вер. 3, разд. 6, ИПР ИИ-5, стр. 26 — оценка, экспертиза и модификация проектов", "ИПР ИИ-5 будет рассчитана на использование в составе специализированных систем поддержки градостроительной деятельности на стадиях оценки, экспертизы и итерационной модификации проектов развития территорий", "Сервис предоставляет результаты, необходимые для оценки, экспертизы и итерационной модификации проекта развития территории.", "Результат работы сервиса на стадиях оценки, экспертизы и модификации"],
  ["Программа ИЦ СИИП, вер. 3, разд. 6, ИПР ИИ-5, стр. 26 — виртуальный ассистент", "она будет способна обеспечивать логику человеко-машинного взаимодействия в режиме виртуального ассистента или интеллектуального помощника", "Сервис обеспечивает человеко-машинное взаимодействие в режиме виртуального ассистента или интеллектуального помощника.", "Диалог с виртуальным ассистентом"],
  ["Программа ИЦ СИИП, вер. 3, разд. 6, ИПР ИИ-5, стр. 26 — выявление градостроительных конфликтов", "выявление градостроительных конфликтов", "Сервис выявляет градостроительные конфликты и предоставляет пользователю результат их анализа.", "Перечень или карта выявленных конфликтов"],
  ["Программа ИЦ СИИП, вер. 3, разд. 6, ИПР ИИ-5, стр. 26 — модификация проектов и решения застройки", "модификации градостроительных проектов, включая элементы генерации объемно-пространственных решений (застройки)", "Сервис поддерживает модификацию градостроительного проекта и предоставляет сгенерированные элементы объёмно-пространственных решений застройки.", "Модифицированный проект и варианты объёмно-пространственных решений"],
  ["Программа ИЦ СИИП, вер. 3, разд. 6, ИПР ИИ-5, стр. 26 — проектная и градостроительная документация", "проверки и генерация элементов проектной и градостроительной документации в соответствие с нормами и требованиями", "Сервис проверяет и генерирует элементы проектной и градостроительной документации с учётом норм и требований.", "Результат проверки и сгенерированные элементы документации"],
  ["Программа ИЦ СИИП, вер. 3, разд. 6, ИПР ИИ-5, стр. 26 — оценка и экспертиза решений", "ценностно-ориентированной оценки и экспертизы решений развития территорий", "Сервис предоставляет результат ценностно-ориентированной оценки и экспертизы решения развития территории.", "Отчёт или справка с результатом оценки и экспертизы"],
  ["Программа ИЦ СИИП, вер. 3, разд. 6, ИПР ИИ-5, стр. 26 — управление городским хозяйством", "в задачах управления городским хозяйством", "Сервис предоставляет результат по прикладной задаче управления городским хозяйством на доступных данных.", "Результат решения задачи городского хозяйства"],
];
const requirements = rows.map((row, index) => ({ id: index + 1, title: row[0], check: row[1], expected: row[2], evidence: row[3], symbol: symbols[index % symbols.length] }));
const stateKey = "ipr5-approval-review-v2";
const sharedApiBase = "https://ipr5-approval-review.five1three-6615.chatgpt.site";
const sharedMigrationKey = "ipr5-shared-migration-v1";
const statusLabels = { pending: "Не рассмотрено", approved: "Одобрено", rejected: "Не одобрено" };
let reviews = loadReviews();
let activeId = 1;
let filter = "all";
let query = "";
let currentImageUrl = null;
let sharedCode = localStorage.getItem("ipr5-shared-code") || "";
let reviewerName = localStorage.getItem("ipr5-reviewer-name") || "";
let sharedReady = false;
const syncTimers = new Map();

const $ = id => document.getElementById(id);
const dbPromise = new Promise((resolve, reject) => {
  const request = indexedDB.open("ipr5-approval-images", 1);
  request.onupgradeneeded = () => request.result.createObjectStore("screenshots");
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

function loadReviews() {
  try { return JSON.parse(localStorage.getItem(stateKey)) || {}; } catch { return {}; }
}
function reviewFor(id) { return reviews[id] || { status: "pending", comment: "", nataliaComment: "", screenshotName: "" }; }
function saveReviews() { localStorage.setItem(stateKey, JSON.stringify(reviews)); }
function setReview(id, patch) {
  reviews[id] = { ...reviewFor(id), ...patch, updatedAt: new Date().toISOString() };
  saveReviews(); renderCounts(); renderList();
  if (sharedReady) scheduleReviewSync(id);
}
function motif(symbol) { return `assets/motifs/${symbol}.png`; }

function sharedFetch(path, options = {}) {
  const headers = new Headers(options.headers || {});
  headers.set("X-Review-Code", sharedCode);
  headers.set("X-Reviewer-Name", encodeURIComponent(reviewerName));
  return fetch(sharedApiBase + path, { ...options, headers });
}

function scheduleReviewSync(id) {
  clearTimeout(syncTimers.get(id));
  syncTimers.set(id, setTimeout(() => { void syncReview(id); }, 500));
}

async function syncReview(id) {
  const review = reviewFor(id);
  try {
    const response = await sharedFetch("/api/shared/reviews", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requirementId: id,
        status: review.status,
        comment: review.comment || "",
        nataliaComment: review.nataliaComment || "",
      }),
    });
    if (!response.ok) throw new Error((await response.json()).error || "Не удалось сохранить");
    reviews[id] = { ...review, ...(await response.json()) };
    saveReviews();
  } catch (error) {
    toast(error.message || "Нет связи с общим хранилищем");
  }
}

async function uploadSharedImage(id, blob, filename) {
  const form = new FormData();
  form.append("requirementId", String(id));
  form.append("file", blob, filename || `screenshot-${id}.png`);
  const response = await sharedFetch("/api/shared/upload", { method: "POST", body: form });
  if (!response.ok) throw new Error((await response.json()).error || "Не удалось загрузить скриншот");
  reviews[id] = { ...reviewFor(id), ...(await response.json()) };
  saveReviews();
}

async function refreshSharedReviews() {
  const response = await sharedFetch("/api/shared/reviews");
  if (!response.ok) throw new Error((await response.json()).error || "Не удалось открыть общие данные");
  const rows = await response.json();
  for (const row of rows) {
    if (reviewFor(row.requirementId).screenshotKey !== row.screenshotKey) {
      await imageStore("delete", row.requirementId);
    }
  }
  reviews = Object.fromEntries(rows.map(row => [row.requirementId, row]));
  saveReviews();
}

async function migrateLocalData(remoteRows) {
  if (localStorage.getItem(sharedMigrationKey)) return;
  const remoteById = Object.fromEntries(remoteRows.map(row => [row.requirementId, row]));
  for (const item of requirements) {
    const local = reviews[item.id];
    const remote = remoteById[item.id];
    const localTime = local?.updatedAt ? new Date(local.updatedAt).getTime() : 0;
    const remoteTime = remote?.updatedAt ? new Date(remote.updatedAt).getTime() : 0;
    const hasLocalText = local && (local.status && local.status !== "pending" || local.comment || local.nataliaComment);
    if (hasLocalText && (!remote || localTime >= remoteTime)) {
      const response = await sharedFetch("/api/shared/reviews", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requirementId: item.id,
          status: local.status || "pending",
          comment: local.comment || "",
          nataliaComment: local.nataliaComment || "",
        }),
      });
      if (!response.ok) throw new Error((await response.json()).error || "Не удалось перенести комментарии");
    }
    const blob = await imageStore("get", item.id);
    if (blob && (!remote?.screenshotKey || localTime >= remoteTime)) {
      await uploadSharedImage(item.id, blob, local?.screenshotName);
    }
  }
  localStorage.setItem(sharedMigrationKey, "1");
}

async function connectShared() {
  const name = $("reviewerName").value.trim();
  const code = $("accessCode").value.trim();
  const error = $("accessError");
  if (!name || !code) {
    error.textContent = "Введите имя и код доступа.";
    error.hidden = false;
    return;
  }
  reviewerName = name;
  sharedCode = code;
  $("startReview").disabled = true;
  $("startReview").firstChild.textContent = "Подключаю… ";
  error.hidden = true;
  try {
    const response = await sharedFetch("/api/shared/reviews");
    if (!response.ok) throw new Error((await response.json()).error || "Не удалось подключиться");
    const remoteRows = await response.json();
    await migrateLocalData(remoteRows);
    sharedReady = true;
    localStorage.setItem("ipr5-shared-code", sharedCode);
    localStorage.setItem("ipr5-reviewer-name", reviewerName);
    await refreshSharedReviews();
    $("welcomeScreen").classList.add("closed");
    setTimeout(() => $("welcomeScreen").remove(), 350);
    render();
    toast("Общее хранилище подключено");
  } catch (caught) {
    error.textContent = caught.message || "Не удалось подключиться";
    error.hidden = false;
  } finally {
    $("startReview").disabled = false;
    $("startReview").firstChild.textContent = "Войти к проверке ";
  }
}

async function imageStore(mode, id, value) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction("screenshots", mode === "get" ? "readonly" : "readwrite");
    const store = tx.objectStore("screenshots");
    const request = mode === "get" ? store.get(id) : mode === "delete" ? store.delete(id) : store.put(value, id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function renderCounts() {
  const statuses = requirements.map(item => reviewFor(item.id).status);
  $("approvedCount").textContent = statuses.filter(value => value === "approved").length;
  $("rejectedCount").textContent = statuses.filter(value => value === "rejected").length;
  $("pendingCount").textContent = statuses.filter(value => value === "pending").length;
}

function renderList() {
  const list = $("requirementsList");
  list.innerHTML = "";
  requirements.filter(item => {
    const status = reviewFor(item.id).status;
    return (filter === "all" || status === filter) && (!query || item.title.toLowerCase().includes(query) || String(item.id).includes(query));
  }).forEach(item => {
    const status = reviewFor(item.id).status;
    const button = document.createElement("button");
    button.className = activeId === item.id ? "active" : "";
    button.innerHTML = `<span class="dot ${status}"></span><span class="num">${String(item.id).padStart(2, "0")}</span><span class="label"></span>`;
    button.querySelector(".label").textContent = item.title;
    button.onclick = () => { activeId = item.id; render(); window.scrollTo({ top: 0, behavior: "smooth" }); };
    list.append(button);
  });
}

async function renderImage() {
  if (currentImageUrl) URL.revokeObjectURL(currentImageUrl);
  currentImageUrl = null;
  let blob = await imageStore("get", activeId);
  if (!blob && sharedReady && reviewFor(activeId).screenshotKey) {
    const response = await sharedFetch(`/api/shared/screenshots/${activeId}`);
    if (response.ok) {
      blob = await response.blob();
      await imageStore("put", activeId, blob);
    }
  }
  const image = $("screenshot");
  const empty = $("emptyScreenshot");
  const dropzone = $("dropzone");
  if (blob) {
    currentImageUrl = URL.createObjectURL(blob);
    image.src = currentImageUrl; image.hidden = false; empty.hidden = true; dropzone.classList.add("has-image"); $("deleteImage").hidden = false;
  } else {
    image.hidden = true; image.removeAttribute("src"); empty.hidden = false; dropzone.classList.remove("has-image"); $("deleteImage").hidden = true;
  }
}

function render() {
  const item = requirements[activeId - 1];
  const review = reviewFor(activeId);
  $("requirementNumber").textContent = String(item.id).padStart(2, "0");
  $("requirementTitle").textContent = item.title;
  $("requirementCheck").textContent = item.check;
  $("requirementExpected").textContent = item.expected;
  $("requirementEvidence").textContent = item.evidence;
  $("titleMotif").src = motif(item.symbol);
  $("emptyMotif").src = motif(item.symbol);
  $("comment").value = review.comment || "";
  $("nataliaComment").value = review.nataliaComment || "";
  $("approve").classList.toggle("active", review.status === "approved");
  $("reject").classList.toggle("active", review.status === "rejected");
  $("progress").textContent = `${activeId} / ${requirements.length}`;
  $("previous").disabled = activeId === 1;
  $("next").disabled = activeId === requirements.length;
  renderCounts(); renderList(); void renderImage();
}

function toast(message) { const el = $("toast"); el.textContent = message; el.hidden = false; clearTimeout(toast.timer); toast.timer = setTimeout(() => el.hidden = true, 1700); }
function burstCelebration(requirementId) {
  const box = $("confetti"); box.innerHTML = "";
  const theme = celebrationThemes[(requirementId - 1) % celebrationThemes.length];
  for (let index = 0; index < 56; index++) {
    const piece = document.createElement("i");
    const angle = (index / 56) * Math.PI * 2;
    const distance = 130 + (index % 8) * 28;
    const glyph = theme.glyphs[index % theme.glyphs.length];
    piece.className = `celebration-piece celebration-${theme.motion} ${glyph ? "celebration-glyph" : `celebration-shape-${index % 3}`}`;
    piece.textContent = glyph;
    piece.style.cssText = `--celebration-x:${(index * 37) % 100}vw;--celebration-delay:${(index % 9) * .035}s;--celebration-drift:${((index * 23) % 220) - 110}px;--celebration-spin:${360 + (index % 5) * 150}deg;--celebration-color:${theme.colors[index % theme.colors.length]};--celebration-dx:${Math.cos(angle) * distance}px;--celebration-dy:${Math.sin(angle) * distance}px;--celebration-size:${16 + (index % 5) * 3}px`;
    box.append(piece);
  }
  setTimeout(() => box.innerHTML = "", 2300);
}

async function acceptImage(file) {
  if (!file || !file.type.startsWith("image/")) return toast("Выберите изображение");
  await imageStore("put", activeId, file);
  setReview(activeId, { screenshotName: file.name || `screenshot-${activeId}.png` });
  if (sharedReady) {
    try { await uploadSharedImage(activeId, file, file.name); }
    catch (error) { return toast(error.message || "Не удалось загрузить скриншот"); }
  }
  await renderImage(); toast("Скриншот добавлен");
}

function download(name, blob) { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); }
function blobToDataUrl(blob) { return new Promise(resolve => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.readAsDataURL(blob); }); }
function dataUrlToBlob(dataUrl) { const [meta, data] = dataUrl.split(","); const type = /data:(.*?);/.exec(meta)?.[1] || "image/png"; const bytes = atob(data); const array = new Uint8Array(bytes.length); for (let i = 0; i < bytes.length; i++) array[i] = bytes.charCodeAt(i); return new Blob([array], { type }); }

$("search").oninput = event => { query = event.target.value.trim().toLowerCase(); renderList(); };
$("filters").onclick = event => { const button = event.target.closest("button"); if (!button) return; filter = button.dataset.filter; [...$("filters").children].forEach(el => el.classList.toggle("active", el === button)); renderList(); };
$("comment").oninput = event => setReview(activeId, { comment: event.target.value });
$("nataliaComment").oninput = event => setReview(activeId, { nataliaComment: event.target.value });
$("approve").onclick = () => { setReview(activeId, { status: "approved" }); burstCelebration(activeId); render(); toast("Требование одобрено"); };
$("reject").onclick = () => { setReview(activeId, { status: "rejected" }); render(); toast("Добавлено замечание"); };
$("previous").onclick = () => { if (activeId > 1) { activeId--; render(); } };
$("next").onclick = () => { if (activeId < requirements.length) { activeId++; render(); } };
$("imageInput").onchange = event => { void acceptImage(event.target.files[0]); event.target.value = ""; };
$("deleteImage").onclick = async event => {
  event.stopPropagation();
  if (sharedReady) {
    const response = await sharedFetch(`/api/shared/upload?requirementId=${activeId}`, { method: "DELETE" });
    if (!response.ok) return toast((await response.json()).error || "Не удалось удалить скриншот");
  }
  await imageStore("delete", activeId);
  reviews[activeId] = { ...reviewFor(activeId), screenshotKey: null, screenshotName: "" };
  saveReviews();
  await renderImage(); toast("Скриншот удалён");
};
$("dropzone").ondragover = event => { event.preventDefault(); event.currentTarget.classList.add("drag"); };
$("dropzone").ondragleave = event => event.currentTarget.classList.remove("drag");
$("dropzone").ondrop = event => { event.preventDefault(); event.currentTarget.classList.remove("drag"); void acceptImage(event.dataTransfer.files[0]); };
$("dropzone").onclick = () => $("imageInput").click();
$("dropzone").onkeydown = event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); $("imageInput").click(); } };
$("reviewerName").value = reviewerName;
$("accessCode").value = sharedCode;
$("startReview").onclick = () => { void connectShared(); };

$("exportCsv").onclick = () => {
  const esc = value => `"${String(value || "").replaceAll('"', '""')}"`;
  const csvRows = [["№", "Требование", "Статус", "Комментарий согласующего", "Комментарий Натальи", "Скриншот"], ...requirements.map(item => { const review = reviewFor(item.id); return [item.id, item.title, statusLabels[review.status], review.comment, review.nataliaComment, review.screenshotName]; })];
  download("согласование-ипр-ии5.csv", new Blob(["\uFEFF" + csvRows.map(row => row.map(esc).join(";")).join("\n")], { type: "text/csv;charset=utf-8" }));
};

$("exportJson").onclick = async () => {
  const screenshots = {};
  for (const item of requirements) { const blob = await imageStore("get", item.id); if (blob) screenshots[item.id] = await blobToDataUrl(blob); }
  download("согласование-ипр-ии5.json", new Blob([JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), reviews, screenshots }, null, 2)], { type: "application/json" }));
};

$("importJson").onchange = async event => {
  try {
    const project = JSON.parse(await event.target.files[0].text());
    if (!project.reviews) throw new Error();
    reviews = project.reviews; saveReviews();
    for (const [id, dataUrl] of Object.entries(project.screenshots || {})) await imageStore("put", Number(id), dataUrlToBlob(dataUrl));
    render(); toast("Проект загружен");
  } catch { toast("Не удалось открыть файл проекта"); }
  event.target.value = "";
};

render();
