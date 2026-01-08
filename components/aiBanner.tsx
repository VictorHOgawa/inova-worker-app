import { Image, View } from "react-native";

export function AiBanner() {
  return (
    <View className="w-full bg-secondary-400 h-32 overflow-hidden rounded-2xl relative items-center justify-center">
      <Image
        source={require("../assets/images/workerWithStars.png")}
        resizeMode="contain"
        className="h-[100%] absolute right-2 bottom-0  w-40 opacity-50"
      />
    </View>
  );
}
