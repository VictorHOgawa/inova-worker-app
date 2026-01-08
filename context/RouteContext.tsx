import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// Interface para tipar os dados do item modal
export interface ItemProps {
  id: number;
  name: string;
  quantity: number;
  image: any;
}

export interface RouteProps {
  id: number;
  serviceName: string;
  local: string;
  startTime: string;
  endTime: string;
  status: string;
  serviceOrder: number;
  date: string;
  tag: string;
  equipmentName: string;
  tools: ItemProps[];
  materials: ItemProps[];
}

// Interface para o contexto de modais
interface RoutesContextType {
  isRouteStarted: boolean;
  setIsRouteStarted: Dispatch<SetStateAction<boolean>>;
  routes: RouteProps[];
  setRoutes: Dispatch<SetStateAction<RouteProps[]>>;
  selectedRoute: RouteProps | null;
  setSelectedRoute: Dispatch<SetStateAction<RouteProps | null>>;
}

// Valor padrão para o contexto
const RoutesContext = createContext<RoutesContextType>({
  isRouteStarted: false,
  setIsRouteStarted: () => {},
  routes: [],
  setRoutes: () => {},
  selectedRoute: null,
  setSelectedRoute: () => {},
});

export const RoutesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRouteStarted, setIsRouteStarted] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<RouteProps | null>(null);
  const [routes, setRoutes] = useState<RouteProps[]>([
    {
      id: 1,
      serviceName: "Troca de Óleo",
      local: "Setor A",
      startTime: "9:00",
      endTime: "11:00",
      status: "inprogress",
      serviceOrder: 1001,
      date: "01/05/2023",
      tag: "MOE-001",
      equipmentName: "Moenda 01",
      tools: [
        {
          id: 1,
          name: "Chave Inglesa",
          quantity: 1,
          image: require("../assets/images/placeholder/tool1.png"),
        },
        {
          id: 2,
          name: "Funil",
          quantity: 1,
          image: require("../assets/images/placeholder/tool2.png"),
        },
      ],
      materials: [
        {
          id: 1,
          name: "Óleo 68",
          quantity: 20,
          image: require("../assets/images/placeholder/material1.png"),
        },
      ],
    },
    {
      id: 2,
      serviceName: "Inspeção Visual",
      local: "Setor B",
      startTime: "13:00",
      endTime: "14:00",
      status: "todo",
      serviceOrder: 1002,
      date: "02/05/2023",
      tag: "MOT-045",
      equipmentName: "Motor Exaustor 3",
      tools: [
        {
          id: 1,
          name: "Lanterna",
          quantity: 1,
          image: require("../assets/images/placeholder/tool1.png"),
        },
      ],
      materials: [],
    },
    {
      id: 3,
      serviceName: "Troca de Filtros",
      local: "Setor C",
      startTime: "14:00",
      endTime: "15:00",
      status: "todo",
      serviceOrder: 1003,
      date: "03/05/2023",
      tag: "HID-007",
      equipmentName: "Unidade Hidráulica",
      tools: [
        {
          id: 1,
          name: "Chave de Fenda",
          quantity: 1,
          image: require("../assets/images/placeholder/tool2.png"),
        },
      ],
      materials: [
        {
          id: 1,
          name: "Filtro de Óleo",
          quantity: 2,
          image: require("../assets/images/placeholder/material2.png"),
        },
      ],
    },
  ]);

  return (
    <RoutesContext.Provider
      value={{
        isRouteStarted,
        setIsRouteStarted,
        routes,
        setRoutes,
        selectedRoute,
        setSelectedRoute,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};

// Hook para consumo do contexto
export const useRoutes = () => {
  const context = useContext(RoutesContext);
  if (!context) {
    throw new Error("useRoutes deve ser usado dentro de um RoutesProvider");
  }
  return context;
};

export default RoutesContext;
