import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useRef, useState } from "react";
import { Alert, Animated, Easing, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../services/firebase';

type Props = {
  setAction: (action: "login" | "register" | "forgot-password" | "none") => void;
};

export default function LoginForm({ setAction }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    try {
      await AsyncStorage.setItem('loggedIn', 'true');
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login salvo no AsyncStorage');
      // router.push("/(tabs)");
    } catch (error) {
      console.error('Erro ao salvar login:', error);
      Alert.alert("Erro", "Não foi possível salvar o login.");
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert("Login Google", "Funcionalidade em desenvolvimento");
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-8 pb-10"
      style={{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: "100%",
        padding: 20
      }}>

      <Animated.View style={{ opacity: fadeAnim }}>

        <Text className="text-base text-black font-bold text-center leading-6 mb-12 mt-2">
          Insira suas informações de login
        </Text>

        <View className="gap-3 h-content">

          <View className="flex-row items-center border-2 border-gray-400/50 rounded-md px-3 h-15 bg-gray-100">
            <Feather name="mail" size={20} color="#699636" style={{ marginRight: 15 }} />
            <TextInput
              className="flex-1 py-4"
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View className="flex-row items-center border-2 border-gray-400/50 rounded-md px-3 h-15 bg-gray-100">
            <MaterialIcons name="lock-outline" size={20} color="#699636" style={{ marginRight: 15 }} />
            <TextInput
              className="flex-1 py-4"
              placeholder="Senha"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialCommunityIcons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-end mb-5">
            <TouchableOpacity onPress={() => setAction("forgot-password")}>
              <Text className="text-green-main text-sm font-semibold">
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity
          className="bg-green-main py-3 rounded-3xl px-4 items-center mt-2"
          onPress={handleLogin}
        >
          <Text className="text-base font-semibold text-white">Entrar</Text>
        </TouchableOpacity>
        <View className="flex-row items-center my-5">
          <View className="flex-1 h-0.5 bg-gray-400/50" />
          <Text className="text-base text-green-dark font-semibold text-center mx-2">ou</Text>
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
          <TouchableOpacity onPress={() => setAction("register")}>
            <Text className="text-sm text-black text-center mt-8 font-medium">
              Não tem uma conta? <Text className="text-blue-500 font-medium">Criar conta</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

