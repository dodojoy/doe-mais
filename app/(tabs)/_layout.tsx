import { useAuth } from "@/contexts/authContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Tabs, useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";

const ACTIVE_COLOR = "green";
const INACTIVE_COLOR = "gray";

const icons = {
  index: "home",
  mapa: "compass",
  doacoes: "package-variant",
  solicitacoes: "handshake",
  perfil: "account",
} as const;

export default function TabLayout() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (isAuthenticated === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isAuthenticated) {
    router.replace("/login");
    return null;
  }
  return (
    <Tabs
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={icons[route.name as keyof typeof icons]}
            size={24}
            color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
          />
        ),
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="mapa" options={{ title: "Mapa" }} />
      <Tabs.Screen name="doacoes" options={{ title: "Doações" }} />
      <Tabs.Screen name="solicitacoes" options={{ title: "Solicitações" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
