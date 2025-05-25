import ForgotPassword from "@/components/ForgotPassword";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { useRef, useState } from "react";
import { Animated, Dimensions, Easing, Image, Text, TouchableOpacity, View, } from "react-native";

const { height } = Dimensions.get("window");

export default function HomeScreen() {
  const [action, setAction] = useState<"none" | "login" | "forgot-password" | "register">("none");

  const animation = useRef(new Animated.Value(0)).current;
  const logoPosition = useRef(new Animated.Value(0)).current;
  const textFade = useRef(new Animated.Value(1)).current;
  const expand = (type: "login" | "register") => {
    setAction(type);

    Animated.parallel([
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(logoPosition, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(textFade, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const backgroundHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  const logoTop = logoPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  const logoScale = logoPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });

  const textOpacity = textFade.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const textHeight = textFade.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 60],
  });

  return (
    <View className="flex-1 bg-green-main relative">

      <Animated.View
        style={{
          alignItems: "center",
          transform: [{ translateY: logoTop }, { scale: logoScale }],
          marginTop: 180,
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 300, height: 150 }}
          resizeMode="contain"

        />
      </Animated.View>

      <Animated.View
        style={{
          opacity: textOpacity,
          height: textHeight,
          alignItems: "center",
          marginTop: 60,
          overflow: "hidden",
        }}
      >
        <Text className="text-white text-center border-t-2 border-white pt-4 px-4">
          Conectando quem pode ajudar a quem precisa. {"\n"}
          Juntos, combatemos a fome e o desperdício.
        </Text>
      </Animated.View>


      {action === "none" && (
        <View className="gap-4 items-center absolute bottom-20 w-full">
          <TouchableOpacity
            className="bg-white px-28 py-4 rounded-full items-center"
            onPress={() => expand("register")}
          >
            <Text className="text-base font-semibold text-green-main">
              Criar conta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => expand("login")}>
            <Text className="text-base font-semibold text-white">Entrar</Text>
          </TouchableOpacity>
        </View>
      )}


      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: backgroundHeight,
          maxHeight: "60%",
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        {action === "login" && <LoginForm setAction={setAction} />}
        {action === "register" && <RegisterForm setAction={setAction} />}
        {action === "forgot-password" && <ForgotPassword setAction={setAction} />}
      </Animated.View>
    </View>
  );
}
