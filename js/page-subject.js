import { getSubject } from './subjects-registry.js';
import { isUnitCompleted, getSubjectProgress } from './storage.js';
import { el, progressBar, icon, subjectIcon } from './render.js';
import { initHeader } from './layout.js';

initHeader();

const params = new URLSearchParams(location.search);
const subjectId = params.get('subject');
const subject = getSubject(subjectId);

if (!subject) {
  document.getElementById('subject-content').append(el('p', {}, '找不到這個科目。'));
} else {
  render();
}

function render() {
  document.title = `${subject.name} - 學測複習站`;
  const progress = getSubjectProgress(subject.id, subject.units.length);

  const hero = document.getElementById('subject-header');
  hero.className = 'subject-hero';
  hero.style.setProperty('--hero-color', subject.color);
  hero.append(
    el('div', { class: 'subject-card-icon', style: 'margin-bottom: 12px;' }, subjectIcon(subject)),
    el('h2', {}, subject.name),
    el('p', {}, `已完成 ${progress.completed} / ${progress.total} 個單元(${progress.percent}%)`),
    progressBar(progress.percent)
  );

  const listContainer = document.getElementById('unit-list');
  const grouped = groupByCategory(subject.units);

  for (const [category, units] of grouped) {
    if (category) listContainer.append(el('h3', { class: 'category-heading' }, category));
    const group = el('div', { class: 'unit-list' });
    for (const unit of units) {
      const done = isUnitCompleted(subject.id, unit.id);
      const hasContent = !!(unit.note?.sections?.length || unit.quiz?.length);
      const item = el('a', {
        class: `unit-item${hasContent ? '' : ' is-stub'}`,
        href: `unit.html?subject=${subject.id}&unit=${unit.id}`,
      });
      item.style.setProperty('--row-color', subject.color);
      item.append(
        el('span', { class: `circular-check${done ? ' is-checked' : ''}` }, icon('check', { size: 12 })),
        el('span', { class: 'unit-title' }, unit.title),
        hasContent
          ? el('span', { class: 'unit-quiz-count' }, unit.quiz?.length ? `${unit.quiz.length} 題測驗` : '')
          : el('span', { class: 'unit-badge-stub' }, '製作中')
      );
      group.append(item);
    }
    listContainer.append(group);
  }

  if (!subject.units.length) {
    listContainer.append(el('p', {}, '這個科目還沒有單元內容,敬請期待。'));
  }
}

function groupByCategory(units) {
  const map = new Map();
  for (const unit of units) {
    const key = unit.category || null;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(unit);
  }
  return map;
}
