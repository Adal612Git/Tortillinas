/**
 * Implementación simple de cola para pedidos pendientes.
 * @module queue
 */
class Queue {
  constructor(items = []) {
    this.items = items;
  }
  enqueue(item) { this.items.push(item); this.save(); }
  dequeue() { const it = this.items.shift(); this.save(); return it; }
  peek() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
  toArray() { return [...this.items]; }
  save() { localStorage.setItem('orderQueue', JSON.stringify(this.items)); }
  static load() {
    return new Queue(JSON.parse(localStorage.getItem('orderQueue')) || []);
  }
}
const orderQueue = Queue.load();
console.log('Cola de pedidos:', orderQueue.toArray());
window.orderQueue = orderQueue;
