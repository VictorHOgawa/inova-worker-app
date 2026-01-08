import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex w-full h-full bg-white items-center justify-center">
        <Text className="text-2xl font-bold">Pagina não encontrada</Text>
      </View>
    </>
  );
}
