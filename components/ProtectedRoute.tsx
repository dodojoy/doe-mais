import { useAuth } from "@/contexts/authContext";
import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
        router.replace("/login"); // Redireciona para a tela de login
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;