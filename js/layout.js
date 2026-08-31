import { icon } from './render.js';

export function initHeader() {
  const mark = document.getElementById('brand-mark');
  if (mark) mark.append(icon('book', { size: 18 }));
}

export function formatRelativeDate(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diffDays = Math.round((startOfDay(now) - startOfDay(date)) / 86400000);
  if (diffDays === 0) return '今天';
  if (diffDays === 1) return '昨天';
  if (diffDays < 7) return `${diffDays} 天前`;
  return `${date.getMonth() + 1}/${date.getDate()}`;
}
