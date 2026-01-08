import { cn } from "@/utils/cn";
import { useRouter } from "expo-router";
import { Calendar, MapPin } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { LinearGradientOrange } from "./linearGradientOrange";
import { Text } from "./PoppinsText";
interface Data {
  id: number;
  serviceName: string;
  equipmentName: string;
  tag: string;
  local: string;
  serviceOrder: number;
  date: string;
}
interface RoutesCardProps {
  data: Data;
  index: number;
  quantity: number;
}
export function RoutesCard({ data, index, quantity }: RoutesCardProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/routes",
          params: { id: data.id },
        })
      }
      className={cn(
        "w-60 flex  overflow-hidden h-60 rounded-2xl relative",
        index === 0 ? "ml-6" : "",
        index === quantity ? "mr-6" : ""
      )}
    >
      <LinearGradientOrange />
      <View className="absolute w-[80%] rounded-full h-[80%] -top-1/3 -right-1/3 bg-secondary-400 opacity-20 " />
      <View className="absolute w-[80%] rounded-full h-[80%] -bottom-1/3 -left-1/3 bg-secondary-400 opacity-20 " />
      <View className="flex flex-col h-full bg-gray-50 border border-gray-200 shadow-sm rounded-lg w-72 p-4 justify-between">
        <View className="flex flex-row justify-between items-start">
          <View className="flex flex-col gap-1">
            <Text className="text-primary-500 font-poppins-bold text-lg leading-6 w-52">
              {data.serviceName}
            </Text>
            <Text className="text-secondary-400 text-sm font-poppins-medium">
              {data.equipmentName}
            </Text>
            <View className="bg-secondary-100 self-start px-2 py-0.5 rounded">
              <Text className="text-secondary-500 text-xs font-poppins-bold">
                {data.tag}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col gap-2 mt-4">
          <View className="flex flex-row gap-2 items-center">
            <MapPin color={"#ED6842"} size={16} />
            <Text className="text-secondary-500 text-sm">{data.local}</Text>
          </View>
          <View className="flex flex-row gap-2 items-center">
            <Calendar color={"#ED6842"} size={16} />
            <Text className="text-secondary-500 text-sm">{data.date}</Text>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mt-2">
          <View className="bg-primary-100 px-3 py-1 rounded-full">
            <Text className="text-primary-600 text-xs font-poppins-bold">
              OS #{data.id}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
