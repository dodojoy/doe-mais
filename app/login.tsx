import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }
    // Aqui você implementaria a lógica de login
    router.push("/(tabs)");
  };

  const handleGoogleLogin = () => {
    // Aqui você implementaria o login com Google
    Alert.alert("Login Google", "Funcionalidade em desenvolvimento");
  };

  return (
    <View className="flex-1 bg-green-main justify-between px-8 py-15">
      <View className="flex-1 justify-center items-center">
        <Text className="text-7xl font-bold text-white mb-5">DOE+</Text>
        <Text className="text-base text-white text-center leading-6 mx-5">
          Faça suas informações de login
        </Text>
      </View>

      <View className="gap-4">
        <View className="gap-2">
          <TextInput
            className="bg-white py-4 rounded-3xl px-4"
            placeholder="Email ou nome de usuário"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="gap-2">
          <TextInput
            className="bg-white py-4 rounded-3xl px-4"
            placeholder="Senha"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          className="bg-white py-4 rounded-3xl px-4 items-center"
          onPress={handleLogin}
        >
          <Text className="text-base font-semibold text-green-main">
            Entrar
          </Text>
        </TouchableOpacity>

        <Text className="text-base text-white text-center leading-6 mx-5">
          ou
        </Text>

        <TouchableOpacity
          className="bg-white py-4 rounded-3xl px-4 items-center"
          onPress={handleGoogleLogin}
        >
          <Text className="text-base font-semibold text-green-main">
            Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
          <Text className="text-base text-white text-center leading-6 mx-5">
            Não tem uma conta? <Text className="text-green-main">Crie uma</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
