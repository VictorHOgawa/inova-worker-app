import { useRouter } from "expo-router";
import { ArrowLeft, BrainCircuit } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { LinearGradientOrange } from "../linearGradientOrange";
import { Text } from "../PoppinsText";

interface RoutesHeaderProps {
  id: number;
  serviceName: string;
  local: string;
  serviceOrder: number;
  date: string;
  equipmentName: string;
  tag: string;
}
interface Data {
  data?: RoutesHeaderProps;
}
export function RoutesHeader({ data }: Data) {
  const router = useRouter();
  return (
    <View className="w-full h-96 flex flex-col overflow-hidden">
      <LinearGradientOrange />
      <View className="absolute w-60 rounded-full h-60 -top-20 -right-14  bg-secondary-400 opacity-20 " />
      <View className="absolute w-60 rounded-full h-60 -bottom-20 -left-14 bg-secondary-400 opacity-20 " />
      <View className="w-full h-full flex flex-col p-4 gap-8">
        <View className="flex-row items-center mt-6 px-4">
          {/* Left: ocupa flex-1 e alinha à esquerda */}
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="flex-1"
          >
            <ArrowLeft color="#fff" size={28} />
          </TouchableOpacity>

          {/* Centro: flex-none e text-center */}
          <Text className="flex-none text-white font-poppins-bold text-lg text-center">
            Sua Rota
          </Text>

          {/* Right: ocupa flex-1 e alinha à direita */}
          <TouchableOpacity className="flex-1 items-end">
            <View className="flex-col items-center">
              <View className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <BrainCircuit color="#ED6842" />
              </View>
              <Text className="text-white text-xs mt-1">IA. INOVA</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex flex-col gap-2">
          <Text className="text-white">Serviço</Text>
          <Text className="text-white font-poppins-bold text-lg">
            {data?.serviceName}
          </Text>
          <View className="w-full h-0.5 bg-white rounded-lg" />
        </View>
        <View className="w-full flex-row flex gap-x-8 ">
          <View className="flex flex-col flex-1 gap-2">
            <Text className="text-white">Equipamento:</Text>
            <Text className="text-white font-poppins-bold text-lg">
              {data?.equipmentName}
            </Text>
            <View className="w-full h-0.5 bg-white rounded-lg" />
          </View>
          <View className="flex flex-col flex-1 gap-2">
            <Text className="text-white">TAG</Text>
            <Text className="text-white font-poppins-bold text-lg">
              {data?.tag}
            </Text>
            <View className="w-full h-0.5 bg-white rounded-lg" />
          </View>
        </View>
      </View>
    </View>
  );
}
