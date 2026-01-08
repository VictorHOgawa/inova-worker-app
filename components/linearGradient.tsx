import { LinearGradient as Gradient } from "expo-linear-gradient";
export function LinearGradient() {
  return (
    <Gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      // cores e posições exatas do seu design
      colors={["#ED6942", "#003366"]}
      locations={[0.22, 1]}
      className="w-full h-full absolute "
    />
  );
}
