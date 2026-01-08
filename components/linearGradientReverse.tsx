import { LinearGradient as Gradient } from "expo-linear-gradient";
export function LinearGradientReverse() {
  return (
    <Gradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      // cores e posições exatas do seu design
      colors={["#ED6942", "#003366"]}
      locations={[0.22, 1]}
      className="w-full h-full absolute "
    />
  );
}
