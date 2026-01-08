import { RoutesHeader } from "@/components/headers/routesHeader";
import { Text } from "@/components/PoppinsText";
import { useRoutes } from "@/context/RouteContext";
import { cn } from "@/utils/cn";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import { CheckCheck, LogIn, X } from "lucide-react-native";
import { Alert, FlatList, TouchableOpacity, View } from "react-native";

export default function Routes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { routes } = useRoutes();
  const { isRouteStarted, setIsRouteStarted } = useRoutes();

  const selectedData = routes.find((item) => item.id === Number(id));
  const router = useRouter();

  return (
    <View className="bg-white w-full h-full flex flex-col">
      <RoutesHeader data={selectedData} />
      <View className="bg-white gap-4 rounded-t-[30px] p-4 pb-2 flex flex-1 -mt-6 items-center justify-center">
        <View className="w-16 h-2 bg-secondary-400 rounded-full" />
        <View className="flex w-full flex-1 flex-col gap-8">
          <FlatList
            data={routes}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="h-8" />}
            renderItem={({ item }) => (
              <TouchableOpacity
                disabled={!isRouteStarted || item.status === "finished"}
                onPress={() =>
                  router.push({
                    pathname: "/routeEquipment",
                    params: { id: item.id },
                  })
                }
                className="flex w-full gap-2 flex-row items-center"
              >
                <Text className="opacity-50 text-lg text-[#363942]">
                  {item.local}
                </Text>
                <View
                  className={cn(
                    " flex flex-1  rounded-lg p-4 items-center shadow-lg flex-row justify-between",
                    isRouteStarted ? "bg-white" : "opacity-50"
                  )}
                >
                  <View className="flex-1 flex flex-col">
                    <Text className="font-poppins-bold  text-primary-500 text-lg">
                      {item.serviceName}
                    </Text>
                    <Text className="opacity-50 text-sm">
                      {item.startTime} - {item.endTime}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    {item.status === "finished" ? (
                      <CheckCheck color="#182D" />
                    ) : item.status === "issue" ? (
                      <X color="#ED6842" />
                    ) : (
                      <LogIn color={"#182D53"} />
                    )}
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (isRouteStarted) {
              const pendingParams = routes.find(
                (item) => item.status !== "finished" && item.status !== "issue"
              );
              const hasIssues = routes.find((item) => item.status === "issue");

              if (pendingParams) {
                Alert.alert(
                  "Existem tarefas pendentes",
                  "Complete todas as tarefas para concluir a rota",
                  [
                    {
                      text: "Fechar",
                      style: "cancel",
                    },
                  ]
                );
              } else if (hasIssues) {
                Alert.alert(
                  "Atenção",
                  "Existem tarefas com problemas relatados. Deseja realmente finalizar a rota?",
                  [
                    {
                      text: "Cancelar",
                      style: "cancel",
                    },
                    {
                      text: "Finalizar",
                      onPress: () => router.push("/home"),
                    },
                  ]
                );
              } else {
                return router.push("/home");
              }
            } else if (!isRouteStarted) {
              setIsRouteStarted(true);
            }
          }}
          className="bg-secondary-500 rounded-full px-20 py-4 flex items-center justify-center"
        >
          <Text className="text-white font-poppins-bold text-lg">
            {isRouteStarted ? "FINALIZAR ROTA" : "INICIAR ROTA"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
