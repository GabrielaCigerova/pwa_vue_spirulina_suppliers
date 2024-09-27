import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerIconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: markerIconRetinaUrl,
    iconUrl: markerIconUrl,
    shadowUrl: markerShadowUrl
});

createApp(App)
    .use(router)
    .mount('#app');

