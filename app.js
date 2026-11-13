const symbols = ["dragon", "panda", "lantern", "fan", "pagoda"];
const rows = [
  ["Работа интеллектуального ассистента", "Задать в чате вопрос о выбранной территории, например о действующих градостроительных ограничениях.", "Сервис понимает запрос, учитывает выбранную территорию и формирует содержательный ответ. В ответ не попадают сведения из другого проекта или региона.", "Диалог с вопросом и полным ответом сервиса"],
  ["Градостроительный контекст территории", "Запросить сведения о градостроительном контексте выбранного проекта.", "Справка содержит границы территории, доступные сведения об объектах, функциональных зонах и социально-экономических характеристиках. Отсутствующие данные обозначены явно.", "Справка в чате или карточка территории"],
  ["Ответы по нормативным документам", "Задать вопросы по документам федерального, регионального и местного уровня.", "Ответ основан на загруженном корпусе. Сервис указывает документ и применимое положение. Региональные требования соответствуют региону проекта.", "Ответ с указанием нормативного источника"],
  ["Извлечение норм и требований", "Загрузить нормативный документ с градостроительными требованиями и запустить обработку.", "Сервис извлекает нормы, ограничения, условия применения и связанные объекты. Результат представлен в структурированном виде и связан с исходным фрагментом документа.", "Извлечённое требование и исходный фрагмент"],
  ["Ограничения, применимые к территории", "Выбрать территорию, на которой заведомо действуют несколько видов ограничений.", "Сервис определяет применимые ограничения с учётом характеристик территории и расположенных объектов. Для каждого ограничения указаны вид, параметры и нормативная основа.", "Перечень применимых ограничений"],
  ["Геоинформационные слои ограничений", "Сформировать слой ограничений по территории на основании не менее пяти нормативных документов.", "Карта показывает зоны действия ограничений. Слой содержит корректную геометрию, вид ограничения, параметры и нормативный источник.", "Карта с включённым слоем и легендой"],
  ["Проверка нарушений ограничений", "Проверить проект с объектами без нарушений, с нарушением допускающего ограничения и с нарушением строгого ограничения.", "Сервис выявляет пересечения и относит каждый объект к одной из трёх категорий. Для нарушения приведены пояснение и нормативная основа.", "Результаты проверки по трём категориям"],
  ["Геоинформационный слой нарушений", "Запросить отображение результатов проверки проекта на карте.", "Отдельный слой показывает объекты, попавшие в зоны ограничений. Для каждого объекта доступны тип нарушения и связанное ограничение.", "Карта нарушений и атрибуты объекта"],
  ["Определение территориальной зоны ПЗЗ", "Выбрать проектную территорию с заранее известной территориальной зоной по ПЗЗ.", "Сервис правильно определяет зону или зоны ПЗЗ для территории и проектных объектов и выводит применимый нормативный режим.", "Зона ПЗЗ на карте и её описание"],
  ["Проверка проекта по ПЗЗ", "Загрузить проект с соответствующими и несоответствующими ВРИ или градостроительным регламентам объектами.", "Сервис проверяет ВРИ и параметры объектов. Этажность проверяется обязательно. Для несоответствия указаны объект и применимый пункт ПЗЗ.", "Справка о соответствии и выявленных нарушениях"],
  ["Существующее состояние территории", "Запросить сведения о текущем состоянии выбранной территории.", "Сервис показывает имеющиеся объекты, функциональные зоны, действующие ограничения и доступные характеристики территории. Сведения соответствуют исходным данным.", "Карта или сводная справка о территории"],
  ["Сценарий развития территории", "Загрузить или выбрать сценарий с планируемым размещением объектов.", "Сервис отображает проектные решения и использует их в последующих проверках и расчётах. Существующее и проектное состояние различимы.", "Сценарий на карте и перечень проектных объектов"],
  ["Обеспеченность социальной инфраструктурой", "Выполнить оценку по территории с известной численностью населения, вместимостью и расположением социальных объектов.", "Сервис сопоставляет потребность и вместимость с учётом нормативной доступности. По типам объектов показаны обеспеченность, дефицит или профицит.", "Расчёт баланса по типам инфраструктуры"],
  ["Доступность социальных объектов", "Проверить территорию, где часть населения находится за пределами нормативной доступности.", "Сервис выявляет зоны недостаточной доступности и учитывает их в итоговой оценке. Суммарная вместимость не скрывает территориальную недоступность.", "Карта зон доступности и итоговая оценка"],
  ["Оценка социальных рисков", "Оценить сценарий с дефицитом мест минимум в трёх типах социальной инфраструктуры.", "Сервис рассчитывает социальные риски не менее чем по трём типам объектов, показывает дефицит и изменение обеспеченности после реализации сценария.", "Риски и дефицит по трём типам объектов"],
  ["Технико-экономические показатели", "Запустить расчёт на проекте с полным набором исходных данных.", "Сервис рассчитывает не менее десяти показателей. Для каждого показаны наименование, единица измерения и значение. Результаты совпадают с контрольным расчётом в пределах допуска.", "Таблица не менее чем с 10 показателями"],
  ["Выдача слоя через программный интерфейс", "Запросить сформированный геоинформационный слой через предусмотренный программный интерфейс.", "Целевая геоинформационная система открывает слой без ручного исправления структуры. Геометрия и атрибуты совпадают с результатом в интерфейсе сервиса.", "Ответ интерфейса и открытый слой в ГИС"],
  ["Корпус нормативных документов", "Проверить работу сервиса на документах федерального, регионального и местного уровня из трёх регионов.", "В базу интегрировано не менее 10 документов. Ответы формируются по корпусу не менее 25 документов из трёх регионов. Требования разных регионов не смешиваются.", "Состав корпуса и примеры региональных ответов"],
  ["Слой на основе нескольких документов", "Сформировать единый слой ограничений для территории по совокупности нормативных источников.", "Итоговый слой использует не менее пяти документов. Ограничения объединены без потери связи каждого объекта слоя с нормативным источником.", "Слой и перечень пяти или более источников"],
  ["Апробация на трёх проектах", "Провести полный цикл испытаний на трёх проектах развития территорий из разных регионов.", "Для каждого проекта получены контекст, ограничения, проверки нарушений и ПЗЗ, социальные оценки и расчёты при наличии исходных данных.", "Сводка результатов по трём проектам"],
  ["Время подготовки градостроительного анализа", "Измерить время от загрузки данных до получения ограничений и градостроительного контекста для территории до 100 га.", "Среднее время составляет не более 3 часов при базовом значении 20 часов без автоматизации. Сокращение времени достигает не менее 85%.", "Протокол времени начала и завершения"],
  ["Время оценки проектного сценария", "Измерить время проверки нарушений, ПЗЗ и баланса социальной инфраструктуры для территории до 100 га.", "Полный результат формируется в среднем не более чем за 3 часа при базовом значении 20 часов. Сокращение времени достигает не менее 85%.", "Протокол выполнения полного сценария"]
];
const requirements = rows.map((row, index) => ({ id: index + 1, title: row[0], check: row[1], expected: row[2], evidence: row[3], symbol: symbols[index % symbols.length] }));
const stateKey = "ipr5-approval-review-v2";
const statusLabels = { pending: "Не рассмотрено", approved: "Одобрено", rejected: "Не одобрено" };
let reviews = loadReviews();
let activeId = 1;
let filter = "all";
let query = "";
let currentImageUrl = null;

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
function reviewFor(id) { return reviews[id] || { status: "pending", comment: "", screenshotName: "" }; }
function saveReviews() { localStorage.setItem(stateKey, JSON.stringify(reviews)); }
function setReview(id, patch) { reviews[id] = { ...reviewFor(id), ...patch, updatedAt: new Date().toISOString() }; saveReviews(); renderCounts(); renderList(); }
function motif(symbol) { return `assets/motifs/${symbol}.png`; }

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
  const blob = await imageStore("get", activeId);
  const image = $("screenshot");
  const empty = $("emptyScreenshot");
  if (blob) {
    currentImageUrl = URL.createObjectURL(blob);
    image.src = currentImageUrl; image.hidden = false; empty.hidden = true; $("deleteImage").hidden = false;
  } else {
    image.hidden = true; image.removeAttribute("src"); empty.hidden = false; $("deleteImage").hidden = true;
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
  $("approve").classList.toggle("active", review.status === "approved");
  $("reject").classList.toggle("active", review.status === "rejected");
  $("progress").textContent = `${activeId} / ${requirements.length}`;
  $("previous").disabled = activeId === 1;
  $("next").disabled = activeId === requirements.length;
  renderCounts(); renderList(); void renderImage();
}

function toast(message) { const el = $("toast"); el.textContent = message; el.hidden = false; clearTimeout(toast.timer); toast.timer = setTimeout(() => el.hidden = true, 1700); }
function burstConfetti() {
  const box = $("confetti"); box.innerHTML = "";
  const colors = ["#edc66e", "#b51f2b", "#fff0bd", "#d85c45", "#7cba82"];
  for (let index = 0; index < 58; index++) {
    const piece = document.createElement("i");
    piece.style.cssText = `--x:${(index * 37) % 100}vw;--d:${(index % 9) * .035}s;--drift:${((index * 23) % 180) - 90}px;--spin:${360 + (index % 5) * 150}deg;--c:${colors[index % colors.length]}`;
    box.append(piece);
  }
  setTimeout(() => box.innerHTML = "", 2000);
}

async function acceptImage(file) {
  if (!file || !file.type.startsWith("image/")) return toast("Выберите изображение");
  await imageStore("put", activeId, file);
  setReview(activeId, { screenshotName: file.name || `screenshot-${activeId}.png` });
  await renderImage(); toast("Скриншот добавлен");
}

function download(name, blob) { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); }
function blobToDataUrl(blob) { return new Promise(resolve => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.readAsDataURL(blob); }); }
function dataUrlToBlob(dataUrl) { const [meta, data] = dataUrl.split(","); const type = /data:(.*?);/.exec(meta)?.[1] || "image/png"; const bytes = atob(data); const array = new Uint8Array(bytes.length); for (let i = 0; i < bytes.length; i++) array[i] = bytes.charCodeAt(i); return new Blob([array], { type }); }

$("search").oninput = event => { query = event.target.value.trim().toLowerCase(); renderList(); };
$("filters").onclick = event => { const button = event.target.closest("button"); if (!button) return; filter = button.dataset.filter; [...$("filters").children].forEach(el => el.classList.toggle("active", el === button)); renderList(); };
$("comment").oninput = event => setReview(activeId, { comment: event.target.value });
$("approve").onclick = () => { setReview(activeId, { status: "approved" }); burstConfetti(); render(); toast("Требование одобрено"); };
$("reject").onclick = () => { setReview(activeId, { status: "rejected" }); render(); toast("Добавлено замечание"); };
$("previous").onclick = () => { if (activeId > 1) { activeId--; render(); } };
$("next").onclick = () => { if (activeId < requirements.length) { activeId++; render(); } };
$("chooseImage").onclick = () => $("imageInput").click();
$("imageInput").onchange = event => { void acceptImage(event.target.files[0]); event.target.value = ""; };
$("deleteImage").onclick = async () => { await imageStore("delete", activeId); setReview(activeId, { screenshotName: "" }); await renderImage(); toast("Скриншот удалён"); };
$("pasteImage").onclick = async () => { try { const items = await navigator.clipboard.read(); for (const item of items) { const type = item.types.find(value => value.startsWith("image/")); if (type) return acceptImage(new File([await item.getType(type)], `screenshot-${activeId}.png`, { type })); } toast("В буфере нет изображения"); } catch { toast("Разрешите доступ к буферу или перетащите файл"); } };
$("dropzone").ondragover = event => { event.preventDefault(); event.currentTarget.classList.add("drag"); };
$("dropzone").ondragleave = event => event.currentTarget.classList.remove("drag");
$("dropzone").ondrop = event => { event.preventDefault(); event.currentTarget.classList.remove("drag"); void acceptImage(event.dataTransfer.files[0]); };
$("dropzone").onclick = event => { if (event.target.id !== "screenshot") $("imageInput").click(); };

$("exportCsv").onclick = () => {
  const esc = value => `"${String(value || "").replaceAll('"', '""')}"`;
  const csvRows = [["№", "Требование", "Статус", "Комментарий", "Скриншот"], ...requirements.map(item => { const review = reviewFor(item.id); return [item.id, item.title, statusLabels[review.status], review.comment, review.screenshotName]; })];
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
