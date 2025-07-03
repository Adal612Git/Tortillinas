/**
 * Implementación sencilla de pila para historial de navegación.
 * @module stack
 */
class Stack {
  constructor(items = []) {
    this.items = items;
  }
  push(item) { this.items.push(item); this.save(); }
  pop() { const it = this.items.pop(); this.save(); return it; }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
  toArray() { return [...this.items]; }
  save() { localStorage.setItem('navigationStack', JSON.stringify(this.items)); }
  static load() {
    return new Stack(JSON.parse(localStorage.getItem('navigationStack')) || []);
  }
}
const navStack = Stack.load();
function track() {
  const name = document.title || location.pathname;
  navStack.push(name);
  console.log('Historial de navegación:', navStack.toArray());
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', track);
} else {
  track();
}
window.navStack = navStack;
