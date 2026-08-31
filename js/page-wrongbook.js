import { getWrongQuestions, markQuestionMastered } from './storage.js';
import { getQuestion, getUnit, getSubject } from './subjects-registry.js';
import { el, icon } from './render.js';
import { initHeader } from './layout.js';

initHeader();
render();

function render() {
  const wrongs = getWrongQuestions();
  const summary = document.getElementById('wrongbook-summary');
  const list = document.getElementById('wrongbook-list');
  summary.className = 'wrongbook-summary';

  if (!wrongs.length) {
    summary.append(el('p', {}, '目前沒有待複習的錯題,繼續保持!'));
    return;
  }

  summary.append(el('p', {}, `目前共有 ${wrongs.length} 題待複習。`));

  for (const w of wrongs) {
    const subject = getSubject(w.subjectId);
    const unit = getUnit(w.subjectId, w.unitId);
    const question = getQuestion(w.subjectId, w.unitId, w.questionId);
    if (!question) continue;

    const card = el('div', { class: 'wrong-card' });
    card.style.setProperty('--row-color', subject?.color || '#201c2b');
    card.append(
      el('p', { class: 'wrong-meta' }, `${subject?.name || ''} · ${unit?.title || ''}`),
      el('p', { class: 'wrong-question' }, question.question)
    );

    const optionsWrap = el('div', { class: 'quiz-options' });
    question.options.forEach((opt, i) => {
      const row = el('div', { class: 'quiz-option-row static' });
      if (i === question.answer) row.classList.add('is-correct');
      row.append(el('span', {}, opt));
      optionsWrap.append(row);
    });
    card.append(optionsWrap);

    if (question.explanation) {
      card.append(el('p', { class: 'feedback-explanation' }, question.explanation));
    }

    const masterBtn = el('button', { class: 'btn-pill btn-pill-outline', style: 'margin-top: 14px;' }, [
      icon('check', { size: 14 }),
      '標記已熟練(從錯題本移除)',
    ]);
    masterBtn.addEventListener('click', () => {
      markQuestionMastered(w.questionId, true);
      card.remove();
      if (!list.querySelector('.wrong-card')) {
        summary.innerHTML = '';
        summary.append(el('p', {}, '目前沒有待複習的錯題,繼續保持!'));
      }
    });
    card.append(masterBtn);

    list.append(card);
  }
}
