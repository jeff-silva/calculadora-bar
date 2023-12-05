import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Calculadora de Bar',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
