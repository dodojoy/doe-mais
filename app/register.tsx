import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }
    // Aqui você implementaria a lógica de registro
    Alert.alert("Sucesso", "Conta criada com sucesso!", [
      { text: "OK", onPress: () => router.push("/(tabs)") },
    ]);
  };

  const handleGoogleRegister = () => {
    // Aqui você implementaria o registro com Google
    Alert.alert("Registro Google", "Funcionalidade em desenvolvimento");
  };

  return (
    <View className="flex-1 bg-green-main justify-between px-8 py-15">
      <View className="flex-1 justify-center items-center">
        <Text className="text-7xl font-bold text-white mb-5">DOE+</Text>
        <Text className="text-base text-white text-center leading-6 mx-5">
          Preencha as informações do usuário
        </Text>
      </View>

      <View className="flex-1 justify-center items-center">
        <View className="flex-1 justify-center items-center">
          <TextInput
            className="bg-white py-4 rounded-3xl px-4"
            placeholder="Nome"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View className="flex-1 justify-center items-center">
          <TextInput
            className="bg-white py-4 rounded-3xl px-4"
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="flex-1 justify-center items-center">
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
          onPress={handleRegister}
        >
          <Text className="text-base font-semibold text-green-main">
            Cadastrar
          </Text>
        </TouchableOpacity>

        <Text className="text-base text-white text-center leading-6 mx-5">
          ou
        </Text>

        <TouchableOpacity
          className="bg-white py-4 rounded-3xl px-4 items-center"
          onPress={handleGoogleRegister}
        >
          <Text className="text-base font-semibold text-green-main">
            Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className="text-base text-white text-center leading-6 mx-5">
            Já tem uma conta? <Text className="text-green-main">Entre</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
