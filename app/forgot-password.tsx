import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import ForgotPassword from "../components/ForgotPassword";

export default function ForgotPasswordScreen() {
  const [action, setAction] = useState<"login" | "register" | "forgot-password" | "none">("forgot-password");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {action === "forgot-password" && <ForgotPassword setAction={setAction} />}
      </View>
    </SafeAreaView>
  );
}