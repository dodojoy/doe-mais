import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSendPassword = () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, digite seu email");
      return;
    }

    // Aqui você implementaria a lógica de recuperação de senha
    Alert.alert(
      "Email enviado!",
      "Verifique sua caixa de entrada para redefinir sua senha.",
      [{ text: "OK", onPress: () => router.back() }]
    );
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <View className="flex-1 bg-green-main justify-between px-8 py-15">
      <View className="flex-1 justify-center items-center">
        <Text className="text-7xl font-bold text-white mb-5">DOE+</Text>
        <Text className="text-base text-white text-center leading-6 mx-5">
          Problemas para entrar?
        </Text>
        <Text className="text-base text-white text-center leading-6 mx-5">
          Digite seu email e enviaremos um link para você voltar a acessar sua
          conta.
        </Text>
      </View>

      <View className="gap-4">
        <View className="gap-2">
          <Text className="text-base text-white text-center leading-6 mx-5">
            Email de cadastro
          </Text>
          <TextInput
            className="bg-white py-4 rounded-3xl px-4"
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          className="bg-white py-4 rounded-3xl px-4 items-center"
          onPress={handleSendPassword}
        >
          <Text className="text-base font-semibold text-green-main">
            Enviar nova senha
          </Text>
        </TouchableOpacity>

        <Text className="text-base text-white text-center leading-6 mx-5">
          ou
        </Text>

        <TouchableOpacity onPress={handleBackToLogin}>
          <Text className="text-base text-white text-center leading-6 mx-5">
            <Text className="text-green-main">Voltar ao login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
