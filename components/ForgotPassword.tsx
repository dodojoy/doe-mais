import { auth } from "@/services/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Alert, Animated, Easing, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  setAction: Dispatch<SetStateAction<"none" | "login" | "forgot-password" | "register">>;
};

export default function ForgotPassword({ setAction }: Props) {

  const [email, setEmail] = useState("");

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSendPassword = async () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, digite seu email.");
      return;
    }

    const response = await sendPasswordResetEmail(auth, email);
    console.log(response);
    console.log("Email enviado para:", email);

    Alert.alert("Email enviado!", "Você receberá um email para redefinir sua senha.");
  };

  return (
    <SafeAreaView className="flex-1 justify-between bg-white px-8 pb-10"
      style={{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: "100%",
        padding: 20
      }}>
      <Animated.View style={{ opacity: fadeAnim }}>

        <View className="items-center text-black text-center leading-6 mb-12 mt-2">

          <Text className="font-semibold text-sm mb-2">
            Problemas para entrar?
          </Text>
          <Text className="text-xs w-4/5 text-center">
            Insira o seu email ou telefone e enviaremos um link para você voltar a acessar a sua conta.
          </Text>
        </View>

        <View>
          <View className="w-full">
            <Text className="text-black font-semibold mb-1 text-sm">Email ou Telefone</Text>
            <TextInput
              className="bg-gray-100 w-full h-15 p-4 mb-1 rounded-md border border-gray-400/50"
              placeholder="Digite seu email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View className="items-center m-5">
          <TouchableOpacity
            className="bg-green-main mt-3 py-1 w-2/3 rounded-3xl px-4 items-center"
            onPress={handleSendPassword}
          >
            <Text className="text-white font-semibold text-base">Enviar link</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center my-3">
          <View className="flex-1 h-0.5 bg-gray-400/50" />
          <Text className="text-sm text-green-dark font-semibold text-center mx-2">ou</Text>
          <View className="flex-1 h-0.5 bg-gray-400/50" />
        </View>

        <View className="items-center gap-10">

          <View>
            <TouchableOpacity onPress={() => setAction("register")}>
              <Text className="text-sm text-blue-500 text-center mt-5 font-medium">
                Criar uma conta nova
              </Text>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity onPress={() => setAction("login")}>
              <Text className="text-sm text-black text-center mt-5 font-medium">
                Voltar ao login?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </Animated.View>
    </SafeAreaView>
  );
}

