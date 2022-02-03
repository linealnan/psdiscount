import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { ru, en } from './src/i18n/translates';
import Home from './src/views/home';

i18n.fallbacks = true;
i18n.translations = { ru, en };
i18n.locale = Localization.locale;

export default function App() {
  return (
    <Home />
  );
}
