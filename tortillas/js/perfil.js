/**
 * Carga historial de pedidos para el perfil de usuario.
 * @module perfil
 */
async function loadOrders() {
  const container = document.getElementById('orders');
  if (!container) return;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
  const orders = await res.json();
  container.innerHTML = '<h2>Historial de pedidos</h2>' +
    '<ul>' + orders.slice(0,5).map(o => `<li>Pedido #${o.id}: ${o.title}</li>`).join('') + '</ul>';
}

document.addEventListener('DOMContentLoaded', loadOrders);
