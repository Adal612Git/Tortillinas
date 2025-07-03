class Node {
  constructor(product) {
    this.product = product;
    this.prev = null;
    this.next = null;
  }
}

class Carrito {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.load();
  }

  add(product) {
    const existing = this.find(product.id);
    if (existing) {
      existing.product.qty += product.qty || 1;
    } else {
      const node = new Node({ ...product, qty: product.qty || 1 });
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }
    this.save();
  }

  remove(id) {
    let current = this.head;
    while (current) {
      if (current.product.id === id) {
        if (current.prev) current.prev.next = current.next; else this.head = current.next;
        if (current.next) current.next.prev = current.prev; else this.tail = current.prev;
        this.size--;
        this.save();
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(id) {
    let cur = this.head;
    while (cur) {
      if (cur.product.id === id) return cur;
      cur = cur.next;
    }
    return null;
  }

  calculateTotal() {
    let total = 0;
    let cur = this.head;
    while (cur) {
      total += cur.product.price * cur.product.qty;
      cur = cur.next;
    }
    return total;
  }

  toArray() {
    const arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.product);
      cur = cur.next;
    }
    return arr;
  }

  save() {
    localStorage.setItem('carrito', JSON.stringify(this.toArray()));
  }

  load() {
    const data = JSON.parse(localStorage.getItem('carrito')) || [];
    data.forEach(p => {
      const node = new Node({ ...p });
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    });
  }
}

const carrito = new Carrito();

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = carrito.size;
}

function setupCart() {
  updateCartCount();
  document.addEventListener('click', e => {
    if (e.target.classList.contains('add-cart')) {
      const { id, name, price } = e.target.dataset;
      carrito.add({ id, name, price: Number(price) });
      updateCartCount();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupCart);
} else {
  setupCart();
}

export { carrito };
