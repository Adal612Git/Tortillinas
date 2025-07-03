let map;
const branches = [
  { position: { lat: 19.4326, lng: -99.1332 }, title: 'Sucursal Ciudad de México' },
  { position: { lat: 20.6597, lng: -103.3496 }, title: 'Sucursal Guadalajara' }
];

function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const userPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        createMap(userPos);
        new google.maps.Marker({ position: userPos, map, title: 'Tu ubicación' });
        addMarkers();
      },
      () => loadDefault()
    );
  } else {
    loadDefault();
  }
}

function createMap(center) {
  map = new google.maps.Map(document.getElementById('map'), {
    center,
    zoom: 12
  });
}

function loadDefault() {
  createMap(branches[0].position);
  addMarkers();
}

function addMarkers() {
  branches.forEach(branch => {
    const marker = new google.maps.Marker({ position: branch.position, map, title: branch.title });
    const info = new google.maps.InfoWindow({ content: `<h3>${branch.title}</h3>` });
    marker.addListener('click', () => info.open(map, marker));
  });
}

window.initMap = initMap;
export {};
