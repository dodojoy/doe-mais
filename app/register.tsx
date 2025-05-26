import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  const [action, setAction] = useState<"login" | "register" | "forgot-password" | "none">("register");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {action === "register" && <RegisterForm setAction={setAction} />}
      </View>
    </SafeAreaView>
  );
}