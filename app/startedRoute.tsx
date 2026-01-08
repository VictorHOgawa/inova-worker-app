import { LinearGradientOrange } from "@/components/linearGradientOrange";
import { ItemModal } from "@/components/modals/itemModal";
import { Text } from "@/components/PoppinsText";
import { useModal } from "@/context/modalContext";
import { useRoutes } from "@/context/RouteContext";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import {
  ArrowLeft,
  BrainCircuit,
  CheckCheck,
  Play,
  X,
} from "lucide-react-native";
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";

export default function StartedRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { setItemModalData, openItemModal, isItemModalOpen } = useModal();
  const { routes, setRoutes, selectedRoute, setSelectedRoute } = useRoutes();
  const data = [
    {
      id: 1,
      title: "Calibrar Equipamento",
      local: "Local A",
      serviceOrder: 1001,
      date: "01/05/2023",
      equipmentsQuantity: 15,
      serviceType: "Calibragem",
    },
    {
      id: 2,
      title: "Inspecionar Máquina",
      local: "Local B",
      serviceOrder: 1002,
      date: "02/05/2023",
      equipmentsQuantity: 8,

      serviceType: "Calibragem",
    },
    {
      id: 3,
      title: "Verificar Sistema",
      local: "Local C",
      serviceOrder: 1003,
      date: "03/05/2023",
      equipmentsQuantity: 2,

      serviceType: "Calibragem",
    },
    {
      id: 4,
      title: "Manutenção Preventiva",
      local: "Local D",
      serviceOrder: 1004,
      date: "04/05/2023",
      equipmentsQuantity: 45,
      serviceType: "Calibragem",
    },
    {
      id: 5,
      title: "Teste de Segurança",
      local: "Local E",
      serviceOrder: 1005,
      date: "05/05/2023",
      equipmentsQuantity: 15,
      serviceType: "Calibragem",
    },
  ];

  const selectedData = data.find((item) => item.id === Number(id));
  const router = useRouter();
  const materials = [
    {
      id: 1,
      name: "Material 1",
      quantity: 10,
      image: require("../assets/images/placeholder/material1.png"),
    },
    {
      id: 2,
      name: "Material 2",
      quantity: 10,
      image: require("../assets/images/placeholder/material2.png"),
    },
  ];
  const tools = [
    {
      id: 1,
      name: "Material 1",
      quantity: 10,
      image: require("../assets/images/placeholder/tool1.png"),
    },
    {
      id: 2,
      name: "Material 2",
      quantity: 10,
      image: require("../assets/images/placeholder/tool2.png"),
    },
  ];

  return (
    <View className="bg-white w-full h-full flex flex-col">
      <View className="w-full h-32 flex flex-col overflow-hidden">
        <LinearGradientOrange />
        <View className="absolute w-60 rounded-full h-60 -top-20 -right-14  bg-secondary-400 opacity-20 " />
        <View className="absolute w-60 rounded-full h-60 -bottom-20 -left-14 bg-secondary-400 opacity-20 " />
        <Animated.View
          entering={FadeIn.duration(300)}
          className="w-full h-full flex flex-col p-4 gap-8"
        >
          <View className="flex-row items-center mt-6 px-4">
            {/* Left: ocupa flex-1 e alinha à esquerda */}
            <TouchableOpacity onPress={() => router.back()} className="flex-1">
              <ArrowLeft color="#fff" size={28} />
            </TouchableOpacity>

            {/* Centro: flex-none e text-center */}
            <Text className="flex-none text-white font-poppins-bold text-lg text-center">
              Extrutora Metering
            </Text>

            {/* Right: ocupa flex-1 e alinha à direita */}
            <TouchableOpacity className="flex-1 items-end">
              <View className="flex-col items-center">
                <View className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <BrainCircuit color="#ED6842" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
      <Animated.View
        entering={SlideInDown.duration(300)}
        exiting={SlideOutDown.duration(300)}
        className="bg-white gap-4 rounded-t-[30px] py-4  flex flex-1 -mt-6 items-center justify-center"
      >
        <View className="w-16 h-2 bg-secondary-400 rounded-full" />
        <View className="flex w-full flex-1 flex-col ">
          <View className="w-full h-80  flex">
            <Image
              className="w-full h-full"
              resizeMode="contain"
              source={require("../assets/images/placeholder/machine.png")}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="flex-1 px-4 "
          >
            <View className="flex flex-col gap-2 border-b border-gray-200 pt-0 p-4">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-col gap-2">
                  <View className="flex flex-row gap-1 items-center">
                    <Text className=" text-lg">C.I.P: </Text>
                    <Text className="font-poppins-bold text-lg">624</Text>
                  </View>
                  <Text className="text-primary-500">
                    Setor A - Conjunto - Subconjunto
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex flex-col gap-2 border-b border-gray-200 p-4">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-col gap-2">
                  <Text className="text-primary-500">
                    Ferramentas necessárias
                  </Text>
                  <View className="flex flex-row gap-2 items-center">
                    <FlatList
                      data={tools}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      ItemSeparatorComponent={() => <View className="w-4" />}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => {
                            setItemModalData(item);
                            openItemModal();
                          }}
                          className="flex h-20 w-20 overflow-hidden border border-secondary-400 rounded-lg flex-row gap-2 items-center"
                        >
                          <Image
                            className="w-full h-full"
                            source={item.image}
                          />
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.id.toString()}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View className="flex flex-col gap-2 border-b border-gray-200 p-4">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-col gap-2">
                  <Text className="text-primary-500">
                    Materiais necessários
                  </Text>
                  <View className="flex flex-row gap-2 items-center">
                    <FlatList
                      data={materials}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      ItemSeparatorComponent={() => <View className="w-4" />}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => {
                            setItemModalData(item);
                            openItemModal();
                          }}
                          className="flex h-20 w-20 overflow-hidden border border-secondary-400 rounded-lg flex-row gap-2 items-center"
                        >
                          <Image
                            className="w-full h-full"
                            source={item.image}
                          />
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.id.toString()}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View className="flex flex-col gap-2 w-full border-b border-gray-200 p-4">
              <View className="flex flex-row w-full items-center justify-between">
                <View className="flex flex-col w-full gap-2">
                  <Text className="text-primary-500">Orientação em Vídeo</Text>
                  <TouchableOpacity className="flex flex-row gap-2 items-center w-full bg-secondary-400 shadow-lg shadow-secondary-400 rounded-lg p-4">
                    <View className="flex-1 flex flex-col">
                      <Text className="text-white font-poppins-bold text-lg">
                        Como Aplicar o Material
                      </Text>
                      <Text className="text-white ">
                        Graxas e Lubrificações
                      </Text>
                    </View>
                    <View className="w-10  h-10 p-2 rounded-lg bg-white flex items-center justify-center">
                      <Play color={"#ED6842"} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View className="flex flex-row gap-6 px-4 ">
          <TouchableOpacity
            onPress={() => {
              router.push("/routes");
              setRoutes((prev) =>
                prev.map((route) =>
                  route.id === Number(id)
                    ? { ...route, status: "issue" }
                    : route
                )
              );
            }}
            className="border border-primary-500 rounded-full flex-1 gap-2 py-4 flex-row flex items-center justify-center"
          >
            <Text className="text-primary-500 font-poppins-bold ">
              RELATAR PROBLEMA
            </Text>
            <View className="bg-primary-500/20 rounded-lg h-7 w-7 flex items-center justify-center">
              <X color={"#182D53"} size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/routes");
              setRoutes((prev) =>
                prev.map((route) =>
                  route.id === Number(id)
                    ? { ...route, status: "finished" }
                    : route
                )
              );
            }}
            className="bg-secondary-500 rounded-full px-4  py-4 flex items-center flex-row gap-2 justify-center"
          >
            <Text className="text-white font-poppins-bold ">CONCLUIR</Text>
            <View className="bg-white/20 rounded-lg h-7 w-7 flex items-center justify-center">
              <CheckCheck color={"#fff"} size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
      {isItemModalOpen && <ItemModal />}
    </View>
  );
}
