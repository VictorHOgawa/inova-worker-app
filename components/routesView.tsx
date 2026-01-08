import { cn } from "@/utils/cn";
import { List, ListChecks, ListTodo } from "lucide-react-native";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "./PoppinsText";
import { RoutesCard } from "./routesCard";

export function RoutesView() {
  const [selectedView, setSelectedView] = useState(0);
  const completed = [
    {
      id: 1,
      serviceName: "Troca de Óleo",
      equipmentName: "Moenda 01",
      tag: "MOE-001",
      local: "Setor A",
      serviceOrder: 1001,
      date: "01/05/2023",
    },
    {
      id: 2,
      serviceName: "Análise de Vibração",
      equipmentName: "Motor Exaustor 3",
      tag: "MOT-045",
      local: "Setor B",
      serviceOrder: 1002,
      date: "01/05/2023",
    },
    {
      id: 3,
      serviceName: "Troca de Filtros",
      equipmentName: "Unidade Hidráulica",
      tag: "HID-007",
      local: "Setor C",
      serviceOrder: 1003,
      date: "01/05/2023",
    },
  ];

  const toDo = [
    {
      id: 1,
      serviceName: "Lubrificação de Mancais",
      equipmentName: "Ventilador Industrial",
      tag: "VEN-012",
      local: "Setor D",
      serviceOrder: 2001,
      date: "02/05/2023",
    },
    {
      id: 2,
      serviceName: "Inspeção Visual",
      equipmentName: "Redutor Transportador 2",
      tag: "RED-023",
      local: "Setor E",
      serviceOrder: 2002,
      date: "02/05/2023",
    },
    {
      id: 3,
      serviceName: "Coleta de Amostra",
      equipmentName: "Turbina Gerador 1",
      tag: "TUR-001",
      local: "Casa de Força",
      serviceOrder: 2003,
      date: "02/05/2023",
    },
  ];

  const inProgress = [
    {
      id: 1,
      serviceName: "Troca de Graxa",
      equipmentName: "Esteira de Entrada",
      tag: "EST-101",
      local: "Recepção",
      serviceOrder: 3001,
      date: "02/05/2023",
    },
    {
      id: 2,
      serviceName: "Limpeza de Reservatório",
      equipmentName: "Central Hidráulica",
      tag: "HID-100",
      local: "Setor F",
      serviceOrder: 3002,
      date: "02/05/2023",
    },
  ];
  const data =
    selectedView === 0 ? toDo : selectedView === 1 ? inProgress : completed;
  return (
    <View className=" w-full flex flex-col gap-4 ">
      <View className="flex flex-row justify-between px-6">
        <TouchableOpacity
          onPress={() => setSelectedView(0)}
          className={cn(
            "w-32 transition-all duration-700   border flex items-center justify-center gap-2 flex-row py-4 border-secondary-400",
            selectedView === 0
              ? "bg-secondary-400/20 rounded-3xl"
              : "bg-white rounded-2xl"
          )}
        >
          <List color={"#182D53"} />
          <Text className="text-sm text-primary-500">A Fazer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedView(1)}
          className={cn(
            "w-32 transition-all duration-700   border flex items-center justify-center gap-2 flex-row py-4 border-secondary-400",
            selectedView === 1
              ? "bg-secondary-400/20 rounded-3xl"
              : "bg-white rounded-2xl"
          )}
        >
          <ListTodo color={"#182D53"} />
          <Text className="text-sm text-primary-500">Fazendo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedView(2)}
          className={cn(
            "w-32 transition-all duration-700   border flex items-center justify-center gap-2 flex-row py-4 border-secondary-400",
            selectedView === 2
              ? "bg-secondary-400/20 rounded-3xl"
              : "bg-white rounded-2xl"
          )}
        >
          <ListChecks color={"#182D53"} />
          <Text className="text-sm text-primary-500">Completo</Text>
        </TouchableOpacity>
      </View>
      <View className="flex">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-4" />}
          data={
            selectedView === 0
              ? toDo
              : selectedView === 1
              ? inProgress
              : completed
          }
          renderItem={({ item, index }) => (
            <RoutesCard data={item} index={index} quantity={data.length - 1} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
