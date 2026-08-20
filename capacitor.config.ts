
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nissa.beoalsanzcropadvisory',
  appName: 'Beoal Sanz- Kashmir Crop Advisory',
  webDir: 'build',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      backgroundColor: '#FFFFFF',
    },
  },
};

export default config;