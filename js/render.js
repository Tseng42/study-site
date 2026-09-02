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

// 閱讀測驗題組的文章區塊。題目資料裡 passageTitle/passage 會重複存在同一組的
// 每一題上(保持每題都是可以獨立抽取的物件,跟其他題型一致),畫面上由呼叫端
// 自己追蹤同一個 passageId 只顯示一次,避免同一篇文章在同一次測驗裡重複出現。
export function renderPassage(q) {
  const box = el('div', { class: 'quiz-passage' });
  if (q.passageTitle) box.append(el('h4', { class: 'quiz-passage-title' }, q.passageTitle));
  (q.passage || '')
    .split('\n')
    .filter(Boolean)
    .forEach((line) => box.append(el('p', {}, line)));
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
