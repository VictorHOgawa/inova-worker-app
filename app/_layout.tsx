import { ContextProvider } from "@/context/contextProvider";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    // alias opcional: "PoppinsBold": Poppins_700Bold, etc.
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ContextProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />

          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="routes" options={{ headerShown: false }} />

          <Stack.Screen
            name="routeEquipment"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="startedRoute" options={{ headerShown: false }} />
          <Stack.Screen
            name="loading"
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ContextProvider>
  );
}
