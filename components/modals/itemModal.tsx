import { useModal } from "@/context/modalContext";
import { X } from "lucide-react-native";
import { Image, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import { Text } from "../PoppinsText";

export function ItemModal() {
  const { closeItemModal, itemModalData } = useModal();
  return (
    <Animated.View
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(300)}
      className="w-full h-full flex items-center bg-transparent justify-center absolute"
    >
      <TouchableOpacity
        onPress={() => closeItemModal()}
        className="w-full h-full absolute bg-black/60 z-10"
      />
      <Animated.View
        entering={SlideInDown.duration(300)}
        exiting={SlideOutDown.duration(300)}
        className="w-[90%]  rounded-lg flex gap-8 p-4 py-8 flex-col border border-secondary-400  bg-white absolute z-20"
      >
        <View className="flex-row flex justify-end items-end  w-full">
          <TouchableOpacity
            onPress={() => closeItemModal()}
            className=" rounded-full  s bg-secondary-400 self-end items-end"
          >
            <X color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex px-8">
          <View className=" rounded-lg w-full h-40">
            {itemModalData.image &&
              (typeof itemModalData.image === "string" ? (
                <Image
                  source={{ uri: itemModalData.image }}
                  className="w-full h-full rounded-lg"
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={itemModalData.image}
                  className="w-full h-full rounded-lg"
                  resizeMode="contain"
                />
              ))}
          </View>
        </View>
        <View className="flex w-full justify-between flex-row items-center">
          <View className="flex flex-1">
            <Text className="flex-none text-primary-500 font-poppins-bold text-lg ">
              {itemModalData.name}
            </Text>
          </View>
          <Text className="text-primary-500/50">
            Quantidade: {itemModalData.quantity}
          </Text>
        </View>

        <View className="flex flex-row gap-4 items-center">
          <TouchableOpacity
            onPress={() => closeItemModal()}
            className="flex flex-1 p-4 justify-center  rounded-lg bg-secondary-400  flex-row gap-4 items-center"
          >
            <Text className="text-white font-poppins-bold">Entendido</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
}
