import { useModal } from "@/context/modalContext";
import { EllipsisVertical, Radio } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./PoppinsText";

export function InovaUniversity() {
  const lesson = [
    {
      id: 1,
      title: "Curso de Engenharia de Lubrificação",
      date: "2025-05-02T08:00:00.000Z",
    },
    {
      id: 2,
      title: "Curso de Engenharia de Lubrificação",
      date: "2025-05-01T00:00:00.000Z",
    },
    {
      id: 3,
      title: "Curso de Engenharia de Lubrificação",
      date: "2025-04-29T00:00:00.000Z",
    },
    {
      id: 4,
      title: "Curso de Engenharia de Lubrificação",
      date: "2025-04-28T00:00:00.000Z",
    },
    {
      id: 5,
      title: "Curso de Engenharia de Lubrificação",
      date: "2025-04-27T00:00:00.000Z",
    },
  ];
  const getDiffDays = (dateString: string) => {
    const date = new Date(dateString);
    const msPerDay = 1000 * 60 * 60 * 24;
    // Time diff em ms (positiva se date < hoje)
    const diffTime = Date.now() - date.getTime();
    // Arredonda pra baixo para ter 0 se for mesmo dia
    const diffDays = Math.floor(diffTime / msPerDay);

    if (diffDays === 0) {
      return "Hoje";
    } else if (diffDays === 1) {
      return "Ontem";
    } else {
      return `${diffDays} dias atrás`;
    }
  };

  const { openLessonModal } = useModal();
  return (
    <View className="w-full px-5 flex flex-col gap-4 mt-2">
      <Text className="text-primary-500 text-2xl font-poppins-semi-bold">
        UNIVERSIDADE INOVA
      </Text>
      <View className="flex flex-col gap-4 pb-6">
        {lesson.map((item) => (
          <TouchableOpacity
            onPress={() => openLessonModal()}
            key={item.id}
            className="flex flex-row shadow-md rounded-lg p-6 bg-white justify-between items-center"
          >
            <View className="flex flex-row gap-2 flex-1 items-center">
              <View className="h-12 w-12 bg-secondary-400 rounded-lg flex items-center justify-center">
                <Radio color={"white"} />
              </View>
              <View className="flex flex-col flex-1 ">
                <Text className="text-primary-500 font-poppins-bold">
                  {item.title}
                </Text>
                <Text className="text-[#AEAEB3] ">
                  {getDiffDays(item.date)}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <EllipsisVertical color={"#D8DEF3"} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
