import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { preset } from 'vue-cli-plugin-vuetify-preset-basil/preset'
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  preset,
  theme: {
    themes: {
      light: {
        primary: colors.red.darken4,
        accent: '#FFFBE5',
        gold: '#FFD700'
      }
    }
  }
});
