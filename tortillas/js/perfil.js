/**
 * Carga historial de pedidos para el perfil de usuario.
 * @module perfil
 */
function loadOrders() {
  const container = document.getElementById('orders');
  if (!container) return;
  const orders = JSON.parse(localStorage.getItem('historialPedidos')) || [];
  if (!orders.length) {
    container.textContent = 'No hay pedidos en tu historial.';
    return;
  }
  const list = document.createElement('ul');
  orders.forEach((o, i) => {
    const li = document.createElement('li');
    li.textContent = `Pedido #${i + 1}: ${o.detalle}`;
    list.appendChild(li);
  });
  container.innerHTML = '<h2>Historial de pedidos</h2>';
  container.appendChild(list);
}

document.addEventListener('DOMContentLoaded', loadOrders);
