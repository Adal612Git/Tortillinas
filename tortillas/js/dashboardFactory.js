/**
 * Factory Pattern for creating dashboards without code duplication.
 * Uses JSONPlaceholder to mock data.
 * @module dashboardFactory
 */
class Dashboard {
  constructor(container) {
    this.container = container;
  }
  async render() {
    this.container.innerHTML = '';
  }
}

class AdminDashboard extends Dashboard {
  async render() {
    await super.render();
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.container.innerHTML = `<h2>Admin Dashboard</h2><ul>${users.slice(0,3).map(u => `<li>${u.name}</li>`).join('')}</ul>`;
  }
}

class CashierDashboard extends Dashboard {
  async render() {
    await super.render();
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const orders = await res.json();
    this.container.innerHTML = `<h2>Cajero Dashboard</h2><p>Pedidos hoy: ${orders.length}</p>`;
  }
}

class RepartidorDashboard extends Dashboard {
  async render() {
    await super.render();
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const tasks = await res.json();
    this.container.innerHTML = `<h2>Repartidor Dashboard</h2><ul>${tasks.slice(0,5).map(t => `<li>${t.title}</li>`).join('')}</ul>`;
  }
}

function createDashboard(type, container) {
  switch(type) {
    case 'admin':
      return new AdminDashboard(container);
    case 'cajero':
      return new CashierDashboard(container);
    case 'repartidor':
      return new RepartidorDashboard(container);
    default:
      throw new Error('Tipo desconocido');
  }
}

window.createDashboard = createDashboard;
