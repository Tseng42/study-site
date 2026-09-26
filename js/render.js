// 共用的小型 DOM render 工具,避免每個頁面重複寫一樣的樣板邏輯。

export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'class') node.className = value;
    else if (key.startsWith('on') && typeof value === 'function') {
      node.addEventListener(key.slice(2), value);
    } else {
      node.setAttribute(key, value);
    }
  }
  for (const child of [].concat(children)) {
    if (child == null || child === '') continue;
    node.append(child instanceof Node ? child : document.createTextNode(child));
  }
  return node;
}

export function progressBar(percent, { tone } = {}) {
  const fill = el('div', { class: 'progress-bar-fill' });
  fill.style.transform = `scaleX(${Math.max(0, Math.min(100, percent)) / 100})`;
  if (tone) fill.style.background = tone;
  return el('div', { class: 'progress-bar' }, fill);
}

// ---- Icons: hand-authored outline set, one consistent stroke. ----
const ICON_PATHS = {
  home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/>',
  flag: '<path d="M6 3v18"/><path d="M6 4.5h10l-2.5 3.5L16 11.5H6Z"/>',
  book: '<path d="M4 5.5c2.2-1 5-1 8 .5V19c-3-1.5-5.8-1.5-8-.5V5.5Z"/><path d="M20 5.5c-2.2-1-5-1-8 .5V19c3-1.5 5.8-1.5 8-.5V5.5Z"/>',
  scroll: '<path d="M4 6.5a2 2 0 0 1 2-2h1v15H6a2 2 0 0 1-2-2v-11Z"/><path d="M20 17.5a2 2 0 0 1-2 2h-1v-15h1a2 2 0 0 1 2 2v11Z"/><path d="M7 4.5h10M7 19.5h10"/>',
  chat: '<path d="M4 5h16v11H9l-4 4V5Z"/><path d="M8 9h8M8 12.5h5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2Z"/>',
  atom: '<circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4.2 5.8 4.2 9S14.8 18.4 12 21c-2.8-2.6-4.2-5.8-4.2-9S9.2 5.6 12 3Z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  chevronRight: '<path d="M9 6l6 6-6 6"/>',
  chevronLeft: '<path d="M15 6l-6 6 6 6"/>',
  trendUp: '<path d="M4 16l5-5 4 4 7-8"/><path d="M15 7h5v5"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/>',
  layers: '<path d="M12 4l8 4-8 4-8-4 8-4Z"/><path d="M4 12l8 4 8-4"/><path d="M4 16l8 4 8-4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  star: '<path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3Z"/>',
  question: '<path d="M9 8.5a3 3 0 1 1 4 2.8c-.9.4-1.5 1.1-1.5 2.2v.5"/><circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none"/>',
  // ---- 成就徽章專用圖示(每個成就依主題挑選,同系列成就共用同一個圖示,靠 tier 徽章區分等級)----
  spark: '<path d="M12 3c0 3.7 1.5 6.2 5.2 7.2-3.7 1-5.2 3.5-5.2 7.2 0-3.7-1.5-6.2-5.2-7.2C10.5 9.2 12 6.7 12 3Z"/><path d="M18.5 14.8c0 1.4.9 2.3 2.3 2.3-1.4 0-2.3.9-2.3 2.3 0-1.4-.9-2.3-2.3-2.3 1.4 0 2.3-.9 2.3-2.3Z" fill="currentColor" stroke="none"/>',
  flame: '<path d="M12 3c1.1 3-3 4.2-3 7.8a3 3 0 0 0 6 0c0-1.2-.5-2-1.1-2.9 1 .4 2.3 1.8 2.3 4.5a4.2 4.2 0 0 1-8.4 0C7.8 8.6 10.1 7 12 3Z"/>',
  bolt: '<path d="M13 3 5.5 13.5H11L10 21l8-11h-5.5L13 3Z"/>',
  scale: '<path d="M12 4v16M8 20h8M4.5 8h15"/><path d="M4.5 8 2.3 12.6a2.4 2.4 0 0 0 4.6 0L4.5 8Z"/><path d="M19.5 8l-2.2 4.6a2.4 2.4 0 0 0 4.6 0L19.5 8Z"/>',
  medal: '<path d="M8 3l4 7 4-7"/><circle cx="12" cy="15.5" r="5.5"/><path d="M12 12.5v6M9.3 15.5h5.4"/>',
  trophy: '<path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4.3A3 3 0 0 0 7 10M17 5h2.7A3 3 0 0 1 17 10"/><path d="M12 13v3M9 20h6M9.4 20c0-2 .9-2.7 2.6-2.7s2.6.7 2.6 2.7"/>',
  crown: '<path d="M4 18h16l-1.4-8-4 3-2.6-5-2.6 5-4-3L4 18Z"/><path d="M4 20.5h16"/>',
  moon: '<path d="M18.5 13.8A7.5 7.5 0 1 1 10.2 5.5a6 6 0 0 0 8.3 8.3Z"/>',
  sunrise: '<path d="M4 16.5h16"/><path d="M6.5 16.5a5.5 5.5 0 0 1 11 0"/><path d="M12 6v3.2M6.3 9.5l1.8 1.8M17.7 9.5l-1.8 1.8"/>',
  pen: '<path d="M4.5 19.5 5.6 15 16 4.6a1.6 1.6 0 0 1 2.3 0l1.1 1.1a1.6 1.6 0 0 1 0 2.3L9 18.4l-4.5 1.1Z"/><path d="M14 6.6l3.4 3.4"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/><path d="M8.5 14h.01M12 14h.01M15.5 14h.01M8.5 17h.01M12 17h.01"/>',
  shield: '<path d="M12 3.2 19 6v5.6c0 4.3-2.9 7.4-7 9.2-4.1-1.8-7-4.9-7-9.2V6l7-2.8Z"/><path d="M8.8 12l2.3 2.3 4.2-4.6"/>',
  gem: '<path d="M6.8 4h10.4l3.3 5L12 20 3.5 9l3.3-5Z"/><path d="M3.5 9h17M9.6 4 8.3 9 12 20M14.4 4l1.3 5L12 20"/>',
  rocket: '<path d="M14.5 3.5c3.2.2 5.6 2.6 6 6-1.6 3.3-4.4 5.9-8 7.2L7 12.2c1.3-3.6 3.9-6.4 7.5-8.7Z"/><circle cx="14.6" cy="9.4" r="1.6"/><path d="M7 12.2l-3.2.9 2.6 2.6M11.8 17l-.9 3.2-2.6-2.6"/>',
};

export function icon(name, { size = 20, strokeWidth = 1.75, className = '' } = {}) {
  const wrapper = document.createElement('span');
  wrapper.innerHTML = `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="icon ${className}" aria-hidden="true">${ICON_PATHS[name] || ''}</svg>`;
  return wrapper.firstElementChild;
}

export function subjectIcon(subject) {
  return icon(subject.icon || 'book', { size: 22, className: 'subject-icon-glyph' });
}

// ---- Circular completion mark, replaces the bare checkbox visually. ----
export function circularCheck(checked, onChange) {
  const input = el('input', { type: 'checkbox', class: 'sr-only-checkbox' });
  input.checked = checked;
  const mark = el('span', { class: 'circular-check' }, icon('check', { size: 13 }));
  const label = el('label', { class: 'circular-check-wrap' }, [input, mark]);
  input.addEventListener('change', () => {
    mark.classList.toggle('is-checked', input.checked);
    onChange?.(input.checked);
  });
  if (checked) mark.classList.add('is-checked');
  return { label, input };
}

export function blobDecoration(color) {
  const wrapper = document.createElement('span');
  wrapper.innerHTML = `<svg class="blob-deco" viewBox="0 0 200 200" aria-hidden="true"><path fill="${color}" d="M52,-62C66,-52,74,-33,76,-13C78,7,74,28,62,44C50,60,30,71,8,73C-14,75,-38,68,-54,53C-70,38,-78,15,-77,-8C-76,-31,-66,-53,-49,-64C-32,-75,-8,-75,12,-77C32,-79,38,-72,52,-62Z" transform="translate(100 100)"/></svg>`;
  return wrapper.firstElementChild;
}

// ---- 題目/文章裡的表格 ----
// 歷屆試題的題幹跟文章是純文字,表格用「一列一行、欄位之間用 ' | ' 隔開」的格式寫
// (第一列是表頭)。連續兩行以上都有 ' | ' 的區塊畫成真正的 <table>,其餘每一行各自是
// 一個段落。文字裡的絕對值符號(|x|)前後沒有空白,不會被誤認成表格。
// 儲存格裡真的要出現 | 的話寫成 \|;儲存格內容是 << 代表跟左邊那格合併(colspan)。
const isTableLine = (line) => /\s\|\s/.test(line);
const BACKSLASH = String.fromCharCode(92);

function splitCells(s) {
  const cells = [];
  let cur = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === BACKSLASH && s[i + 1] === '|') {
      cur += '|';
      i++;
    } else if (ch === '|') {
      cells.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  cells.push(cur.trim());
  return cells;
}

function parseTableRow(line) {
  let s = line.trim();
  // 兩頭都有 | 的寫法(| a | b |)先把最外面的 | 拿掉;只有開頭有 |(第一欄留空)則保留空欄。
  if (s.startsWith('|') && s.endsWith('|') && !s.endsWith(BACKSLASH + '|')) s = s.slice(1, -1);
  const cells = [];
  for (const text of splitCells(s)) {
    if (text === '<<' && cells.length) cells[cells.length - 1].span += 1;
    else cells.push({ text, span: 1 });
  }
  return cells;
}

function buildTable(lines) {
  const rows = lines.map(parseTableRow);
  const widthOf = (r) => r.reduce((sum, c) => sum + c.span, 0);
  const width = Math.max(...rows.map(widthOf));
  const pad = (r) => r.concat(new Array(width - widthOf(r)).fill(null).map(() => ({ text: '', span: 1 })));
  const attrs = (c, extra = {}) => (c.span > 1 ? { ...extra, colspan: String(c.span) } : extra);
  const [head, ...body] = rows;
  const thead = el('thead', {}, el('tr', {}, pad(head).map((c) => el('th', attrs(c, { scope: 'col' }), c.text))));
  const tbody = el(
    'tbody',
    {},
    body.map((r) =>
      el('tr', {}, pad(r).map((c, i) => (i === 0 ? el('th', attrs(c, { scope: 'row' }), c.text) : el('td', attrs(c), c.text))))
    )
  );
  return el('div', { class: 'exam-table-wrap' }, el('table', { class: 'exam-table' }, [thead, tbody]));
}

// 把一段文字畫成「段落 + 表格」:每個非空的行是一個 className 的 <p>,表格區塊是 <table>。
// badge(可選)接在第一個段落後面(題型標籤用)。
export function renderRichText(text, { className = '', badge = null } = {}) {
  const wrap = el('div', { class: 'rich-text' });
  const lines = String(text ?? '').split('\n');
  let badgePlaced = !badge;
  for (let i = 0; i < lines.length; ) {
    if (isTableLine(lines[i])) {
      let j = i;
      while (j < lines.length && isTableLine(lines[j])) j++;
      if (j - i >= 2) {
        wrap.append(buildTable(lines.slice(i, j)));
        i = j;
        continue;
      }
    }
    const line = lines[i++];
    if (!line.trim()) continue;
    const p = el('p', { class: className }, line);
    if (!badgePlaced) {
      p.append(badge);
      badgePlaced = true;
    }
    wrap.append(p);
  }
  return wrap;
}

// 閱讀測驗題組的文章區塊。題目資料裡 passageTitle/passage 會重複存在同一組的
// 每一題上(保持每題都是可以獨立抽取的物件,跟其他題型一致),畫面上由呼叫端
// 自己追蹤同一個 passageId 只顯示一次,避免同一篇文章在同一次測驗裡重複出現。
export function renderPassage(q) {
  const box = el('div', { class: 'quiz-passage' });
  if (q.passageTitle) box.append(el('h4', { class: 'quiz-passage-title' }, q.passageTitle));
  box.append(renderRichText(q.passage || ''));
  return box;
}

export function renderNoteSections(sections) {
  const container = el('div', { class: 'note-sections' });
  for (const section of sections) {
    const sectionEl = el('section', { class: 'note-section' });
    if (section.heading) sectionEl.append(el('h4', {}, section.heading));

    if (Array.isArray(section.content)) {
      const list = el('ul', { class: 'note-list' });
      section.content.forEach((item) => list.append(el('li', {}, item)));
      sectionEl.append(list);
    } else if (typeof section.content === 'string') {
      section.content
        .split('\n')
        .filter(Boolean)
        .forEach((line) => sectionEl.append(el('p', {}, line)));
    }

    if (section.table) sectionEl.append(renderTable(section.table));
    container.append(sectionEl);
  }
  return container;
}

function renderTable({ headers, rows }) {
  const thead = el('thead', {}, el('tr', {}, headers.map((h) => el('th', {}, h))));
  const tbody = el(
    'tbody',
    {},
    rows.map((row) => el('tr', {}, row.map((cell) => el('td', {}, cell))))
  );
  return el('table', { class: 'note-table' }, [thead, tbody]);
}
