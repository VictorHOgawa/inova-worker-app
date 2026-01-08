import { LoginHeader } from "@/components/headers/loginHeader";
import { Text } from "@/components/PoppinsText";
import { useRouter } from "expo-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function HomeScreen() {
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const router = useRouter();
  return (
    <View className="h-full w-full bg-white gap-4 flex flex-col">
      <LoginHeader />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-full px-4 flex flex-col"
      >
        <View className="flex flex-col gap-8 items-start w-full">
          <View className="w-full flex flex-wrap flex-row items-center justify-center">
            <Text className="text-primary-500 text-3xl font-poppins-semi-bold">
              Entrar no InovAi
            </Text>
          </View>

          <View className="flex flex-col gap-1 w-full">
            <Text className="text-secondary-400 font-poppins-bold">Email</Text>
            <View className="flex flex-row gap-2 w-full items-center border-[#a3a3a3] border-b">
              <Mail color={"#ED6842"} />
              <TextInput
                placeholderTextColor={"#a3a3a3"}
                placeholder="Insira o seu endereço de email"
                className="flex-1 h-12"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View className="flex flex-col gap-1 w-full">
            <Text className="text-secondary-400  font-poppins-bold">Senha</Text>
            <View className="flex flex-row gap-2 w-full items-center border-[#a3a3a3] border-b">
              <Lock color={"#ED6842"} />
              <TextInput
                placeholderTextColor={"#a3a3a3"}
                placeholder="Coloque sua senha"
                className="flex-1 h-12"
                secureTextEntry={!isShowingPassword}
              />
              <TouchableOpacity
                onPress={() => setIsShowingPassword(!isShowingPassword)}
              >
                {isShowingPassword ? (
                  <EyeOff color={"#a3a3a3"} />
                ) : (
                  <Eye color={"#a3a3a3"} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View className="w-full flex flex-col flex-1 p-4 py-14 justify-between">
        <View className="w-full flex flex-col gap-6 items-center">
          <TouchableOpacity
            onPress={() => router.push("/loading")}
            className={`bg-secondary-500  flex items-center justify-center w-[80%] rounded-xl py-4 x`}
          >
            <Text className="text-white text-xl font-poppins-bold text-center">
              ENTRAR
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row gap-1"></View>
        </View>
      </View>
    </View>
  );
}
