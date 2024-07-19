import "react-native-reanimated";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Stack>
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
        </Stack>
      </PersistGate>
    </Provider>
  );
}
