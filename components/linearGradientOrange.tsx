import { LinearGradient as Gradient } from "expo-linear-gradient";
export function LinearGradientOrange() {
  return (
    <Gradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#ED6842", "#2E0B01"]}
      locations={[0, 1]}
      className="w-full h-full absolute "
    />
  );
}
