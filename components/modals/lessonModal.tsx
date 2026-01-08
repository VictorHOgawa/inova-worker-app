import { useModal } from "@/context/modalContext";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import { Text } from "../PoppinsText";

export function LessonModal() {
  const { closeLessonModal } = useModal();
  return (
    <Animated.View
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(300)}
      className="w-full h-full flex items-center bg-transparent justify-center absolute"
    >
      <TouchableOpacity
        onPress={() => closeLessonModal()}
        className="w-full h-full absolute bg-black/60 z-10"
      />
      <Animated.View
        entering={SlideInDown.duration(300)}
        exiting={SlideOutDown.duration(300)}
        className="w-[90%]  rounded-lg flex gap-8 p-4 py-8 flex-col border border-secondary-400  bg-white absolute z-20"
      >
        <View className="flex-row items-center  ">
          {/* Left: ocupa flex-1 e alinha à esquerda */}
          <View className="flex-1">
            <TouchableOpacity onPress={() => closeLessonModal()}>
              <ArrowLeft color="#182D53" size={28} />
            </TouchableOpacity>
          </View>

          {/* Centro: flex-none e text-center */}
          <Text className="flex-none text-primary-500 font-poppins-bold text-lg text-center">
            NOME DA AULA
          </Text>

          {/* Right: ocupa flex-1 e alinha à direita (vazio para manter alinhamento) */}
          <View className="flex-1" />
        </View>
        <View className="flex px-8">
          <View className="bg-zinc-300 rounded-lg w-full h-40"></View>
        </View>

        <View className="flex flex-row gap-4 items-center">
          <TouchableOpacity
            onPress={() => closeLessonModal()}
            className="flex flex-1 p-4 justify-center  rounded-lg bg-secondary-400  flex-row gap-4 items-center"
          >
            <Text className="text-white font-poppins-bold">Acessar</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
}
