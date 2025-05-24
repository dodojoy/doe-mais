import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-green-main justify-between px-8 py-15">
      <View className="flex-1 justify-center items-center">
        <Text className="text-7xl font-bold text-white mb-5">DOE+</Text>
        <Text className="text-base text-white text-center leading-6 mx-5">
          Conecte quem quer doar com quem precisa.{"\n"}
          Sua doação faz a diferença.
        </Text>
      </View>

      <View className="gap-4">
        <TouchableOpacity
          className="bg-white py-4 rounded-3xl items-center"
          onPress={() => router.push("/register")}
        >
          <Text className="text-base font-semibold text-green-main">
            Criar conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-transparent py-4 rounded-3xl border-2 border-white items-center"
          onPress={() => router.push("/login")}
        >
          <Text className="text-base font-semibold text-white">Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
