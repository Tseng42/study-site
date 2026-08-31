// 科目清單的基本資訊。要新增科目時,在這裡加一筆,並在
// js/subjects-registry.js 裡 import 對應的資料檔即可。
// icon 對應 js/render.js 裡 icon() 函式的圖示名稱。
export const subjectsMeta = [
  { id: 'chinese', name: '國文', color: '#C2432B', icon: 'scroll' },
  { id: 'english', name: '英文', color: '#6C5CE7', icon: 'chat' },
  { id: 'math', name: '數學', color: '#157A64', icon: 'compass' },
  { id: 'science', name: '自然', color: '#A05C0D', icon: 'atom' },
  { id: 'social', name: '社會', color: '#C93E7D', icon: 'globe' },
];
