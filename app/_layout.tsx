import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";
import "../styles/global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Registro" }} />
      </Stack>
    </AuthProvider>
  );
}
