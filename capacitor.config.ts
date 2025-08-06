import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.onelastai.aidigitalmarket',
  appName: 'AI Digital Market',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#1f2937",
      androidSplashResourceName: "splash",
      showSpinner: true,
      spinnerColor: "#06b6d4"
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#1f2937'
    },
    App: {
      "appendUserAgent": "AI Digital Market - onelastai.com"
    }
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
      releaseType: "APK",
      signingType: "apksigner"
    }
  },
  ios: {
    scheme: "AI Digital Market"
  }
};

export default config;
