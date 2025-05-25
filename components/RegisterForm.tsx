import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Alert, Animated, Easing, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaskInput from 'react-native-mask-input';

type Props = {
  setAction: Dispatch<SetStateAction<"none" | "login" | "register">>;
};

export default function RegisterForm({ setAction }: Props) {

  const [showPassword, setShowPassword] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);


  function handleRegister() {
    if (!nome || !telefone || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos corretamente.");
      return;
    }

    // Simula envio de dados
    console.log("Dados cadastrados:", {
      nome,
      telefone,
      email,
      senha,
    });

    Alert.alert("Cadastro realizado!", "Você será redirecionado para o login.");
    setAction("login");
  }

  const handleGoogleLogin = () => {
    Alert.alert("Login Google", "Funcionalidade em desenvolvimento");
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

        <Text className="text-sm text-black font-bold text-center leading-6 mb-4 mt-2">
          Preencha as informações de cadastro
        </Text>
        <View>
          <View className="w-full">
            <Text className="text-black">Nome</Text>
            <TextInput
              className="bg-gray-100 w-full min-h-10 px-3 mb-1 rounded-md border border-gray-400/50"
              placeholder=""
              placeholderTextColor="#999"
              keyboardType="default"
              autoCapitalize="words"
              autoCorrect={false}
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View className="w-full">
            <Text className="text-black">Telefone</Text>
            <MaskInput
              className="bg-gray-100 w-full min-h-10 px-3 mb-1 rounded-md border border-gray-400/50"
              placeholder=""
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={telefone}
              onChangeText={(masked, unmasked) => {
                setTelefone(masked);
              }}
              mask={['(', /\d/, /\d/, ')',' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            />
          </View>

          <View className="w-full">
            <Text className="text-black">Email</Text>
            <TextInput
              className="bg-gray-100 w-full min-h-10 px-3 mb-1 rounded-md border border-gray-400/50"
              placeholder=""
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View className="w-full">
            <Text className="text-black">Senha</Text>
            <View className="flex-row items-center mb-1 bg-gray-100 min-h-10 px-3 rounded-md border border-gray-400/50">
              <TextInput
                className="flex-1 text-base text-black"
                placeholder=""
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                value={senha}
                onChangeText={setSenha}
                style={{ height: '100%' }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialCommunityIcons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={22}
                  color="#999"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="items-center ">
            <TouchableOpacity
              className="bg-green-main mt-3 py-1 w-2/3 rounded-3xl px-4 items-center"
              onPress={handleRegister}
            >
              <Text className="text-white font-semibold text-base">Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center my-3">
            <View className="flex-1 h-0.5 bg-gray-400/50" />
            <Text className="text-sm text-green-dark font-semibold text-center mx-2">ou cadastre-se com</Text>
            <View className="flex-1 h-0.5 bg-gray-400/50" />
          </View>
          <View className="items-center">
            <TouchableOpacity
              className="bg-white w-fit py-2 px-3 rounded-3xl items-center border-2 border-gray-400/50 flex-row justify-center gap-2"
              onPress={handleGoogleLogin}
            >
              <Image
                source={require("../assets/images/icon-google.png")}
                style={{ width: 16, height: 16 }}
                resizeMode="contain"
              />
              <Text className="text-sm font-semibold text-black">Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAction("login")}>
              <Text className="text-sm text-center mt-5 font-medium">
                Já tem uma conta? <Text className="text-blue-500 font-medium">Entrar</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

