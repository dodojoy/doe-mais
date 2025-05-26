import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const [action, setAction] = useState<"login" | "register" | "forgot-password" | "none">("login");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {action === "login" && <LoginForm setAction={setAction} />}
      </View>
    </SafeAreaView>
  );
}