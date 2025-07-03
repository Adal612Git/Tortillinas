let map;
const branches = [
  {
    position: { lat: 19.4326, lng: -99.1332 },
    title: 'Ciudad de México',
    address: 'Centro CDMX',
    hours: '9am - 9pm'
  },
  {
    position: { lat: 20.6597, lng: -103.3496 },
    title: 'Guadalajara',
    address: 'Av. Juárez 1',
    hours: '9am - 8pm'
  },
  {
    position: { lat: 25.6866, lng: -100.3161 },
    title: 'Monterrey',
    address: 'Macroplaza',
    hours: '8am - 8pm'
  },
  {
    position: { lat: 21.1619, lng: -86.8515 },
    title: 'Cancún',
    address: 'Zona Hotelera',
    hours: '10am - 7pm'
  },
  {
    position: { lat: 32.5149, lng: -117.0382 },
    title: 'Tijuana',
    address: 'Av. Revolución',
    hours: '9am - 9pm'
  }
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
    const content = `<h3>${branch.title}</h3><p>${branch.address}</p><p>${branch.hours}</p>`;
    const info = new google.maps.InfoWindow({ content });
    marker.addListener('click', () => info.open(map, marker));
  });
}

window.initMap = initMap;
export {};
