import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export default function Home() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 300,
          maxHeight: "60%",
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          opacity: fadeAnim,
        }}
      >
        <View style={{ padding: 20 }}>
          {/* Botão para redirecionar para a página de login */}
          <Button onPress={() => router.push("/login")}>Login</Button>

          {/* Botão para redirecionar para a página de registro */}
          <Button onPress={() => router.push("/register")}>Registrar</Button>

          {/* Botão para redirecionar para a página de recuperação de senha */}
          <Button onPress={() => router.push("/forgot-password")}>Esqueceu a senha?</Button>
        </View>
      </Animated.View>
    </View>
  );
}