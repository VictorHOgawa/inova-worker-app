import { RoutesHeader } from "@/components/headers/routesHeader";
import { LinearGradientOrange } from "@/components/linearGradientOrange";
import { ItemModal } from "@/components/modals/itemModal";
import { Text } from "@/components/PoppinsText";
import { useModal } from "@/context/modalContext";
import { useRoutes } from "@/context/RouteContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

export default function RouteEquipment() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { routes, setRoutes, selectedRoute, setSelectedRoute } = useRoutes();

  const router = useRouter();
  const { isItemModalOpen, setItemModalData, openItemModal } = useModal();
  const [isTaskStarted, setIsTaskStarted] = useState(false);

  useEffect(() => {
    if (id) {
      setSelectedRoute(routes.find((route) => route.id === Number(id)) || null);
    }
  }, [id, routes]); // Added routes to dependency array

  if (!selectedRoute)
    return (
      <View className="bg-white flex-1 items-center justify-center">
        <Text>Carregando...</Text>
      </View>
    );

  return (
    <View className="bg-white w-full h-full flex flex-col">
      <RoutesHeader data={selectedRoute} />
      <Animated.View
        entering={SlideInDown.duration(300)}
        exiting={SlideOutDown.duration(300)}
        className="bg-white gap-4 rounded-t-[30px] p-4 pb-2 flex flex-1 -mt-6 items-center justify-center"
      >
        <View className="w-16 h-2 bg-secondary-400 rounded-full" />
        <View className="flex w-full flex-1 flex-col gap-8">
          <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
            <View className="flex flex-col gap-2 border-b border-gray-200 p-4">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-col gap-2">
                  <Text className="text-primary-500">Começar</Text>
                  <View className="flex flex-row gap-1 items-center">
                    <Text className=" text-lg">
                      {new Date().toDateString()} -{" "}
                    </Text>
                    <Text className="font-poppins-bold text-lg">
                      {selectedRoute?.startTime}
                    </Text>
                  </View>
                </View>
                <View className="flex flex-1  items-end">
                  <View className=" rounded-full    overflow-hidden  flex flex-col">
                    <LinearGradientOrange />
                    <View className="px-16 py-2 flex flex-col items-center justify-center">
                      <Text className="text-white font-poppins-bold">O.S</Text>
                      <Text className="font-poppins-bold text-lg text-white">
                        {selectedRoute?.serviceOrder}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className="flex flex-col gap-2 border-b border-gray-200 p-4">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-col gap-2">
                  <Text className="text-primary-500">Participantes</Text>
                  <View className="flex flex-row gap-2 items-center">
                    <View className="w-12 h-12 rounded-full overflow-hidden bg-secondary-400">
                      <Image
                        className="w-full h-full"
                        source={require("../assets/images/worker.png")}
                      />
                    </View>
                    <Text className="font-poppins-bold text-lg">
                      João Carlos Stel de Paula
                    </Text>
                  </View>
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
                      data={selectedRoute.tools}
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
                      data={selectedRoute.materials}
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
            {/* Orientação em Vídeo removed */}
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "/startedRoute",
              params: { id: selectedRoute?.id },
            });
            setIsTaskStarted(true);
          }}
          className="bg-secondary-500 rounded-full px-20 py-4 flex items-center justify-center"
        >
          <Text className="text-white font-poppins-bold text-lg">
            {isTaskStarted ? "FINALIZAR TAREFA" : "INICIAR TAREFA"}
          </Text>
        </TouchableOpacity>
      </Animated.View>
      {isItemModalOpen && <ItemModal />}
    </View>
  );
}
