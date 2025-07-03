/**
 * Factory Pattern for creating dashboards without code duplication.
 * Utiliza datos locales almacenados en localStorage.
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
    const users = JSON.parse(localStorage.getItem('users')) || [];
    this.container.innerHTML = `<h2>Admin Dashboard</h2><ul>${users.map(u => `<li>${u.role}: ${u.email}</li>`).join('')}</ul>`;
  }
}

class CashierDashboard extends Dashboard {
  async render() {
    await super.render();
    const orders = JSON.parse(localStorage.getItem('historialPedidos')) || [];
    this.container.innerHTML = `<h2>Cajero Dashboard</h2><p>Pedidos hoy: ${orders.length}</p>`;
  }
}

class RepartidorDashboard extends Dashboard {
  async render() {
    await super.render();
    const orders = window.orderQueue ? window.orderQueue.toArray() : [];
    this.container.innerHTML = `<h2>Repartidor Dashboard</h2><ul>${orders.map(o => `<li>${o.detalle}</li>`).join('')}</ul>`;
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
