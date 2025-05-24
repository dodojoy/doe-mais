import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PontosDoacaoScreen() {
  const router = useRouter();

  const pontos = [
    {
      id: 1,
      nome: "Ponto de Doação Próximo",
      endereco: "Rua das Flores, 123 - Centro",
      distancia: "0,5 km",
      horario: "Seg-Sex: 8h às 18h",
      categoria: "Roupas e Alimentos",
    },
    {
      id: 2,
      nome: "Centro Comunitário São José",
      endereco: "Av. Principal, 456 - Bairro Novo",
      distancia: "1,2 km",
      horario: "Seg-Dom: 7h às 19h",
      categoria: "Móveis e Eletrodomésticos",
    },
    {
      id: 3,
      nome: "ONG Mãos Solidárias",
      endereco: "Rua da Esperança, 789 - Vila Feliz",
      distancia: "2,1 km",
      horario: "Seg-Sáb: 9h às 17h",
      categoria: "Brinquedos e Livros",
    },
  ];

  return (
    <View className="flex-1 bg-green-main justify-between px-8 py-15">
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity
          className="bg-white py-4 rounded-3xl px-4 items-center"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-7xl font-bold text-white mb-5">
          Pontos de Doação Próximos
        </Text>
      </View>

      {/* Área do Mapa Simulado */}
      <View className="flex-1 justify-center items-center">
        <View className="flex-1 justify-center items-center">
          <MaterialCommunityIcons name="map" size={40} color="#999" />
          <Text className="text-base text-white text-center leading-6 mx-5">
            Mapa dos pontos próximos
          </Text>
          <Text className="text-base text-white text-center leading-6 mx-5">
            Localização Atual: Av. Principal, Centro
          </Text>
        </View>

        {/* Indicador de Impacto */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-base text-white text-center leading-6 mx-5">
            Indicador de Impacto
          </Text>
          <View className="flex-1 justify-center items-center">
            <View className="flex-1 justify-center items-center">
              <Text className="text-base text-white text-center leading-6 mx-5">
                1.250
              </Text>
              <Text className="text-base text-white text-center leading-6 mx-5">
                Doações
              </Text>
            </View>
            <View className="flex-1 justify-center items-center">
              <Text className="text-base text-white text-center leading-6 mx-5">
                95
              </Text>
              <Text className="text-base text-white text-center leading-6 mx-5">
                Famílias
              </Text>
            </View>
            <View className="flex-1 justify-center items-center">
              <Text className="text-base text-white text-center leading-6 mx-5">
                15
              </Text>
              <Text className="text-base text-white text-center leading-6 mx-5">
                Pontos
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Lista de Pontos */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-base text-white text-center leading-6 mx-5">
          Atividades Recentes
        </Text>
        <ScrollView className="flex-1 justify-center items-center">
          {pontos.map((ponto) => (
            <TouchableOpacity
              key={ponto.id}
              className="flex-1 justify-center items-center"
            >
              <View className="flex-1 justify-center items-center">
                <MaterialCommunityIcons
                  name="map-marker"
                  size={24}
                  color="#699636"
                />
              </View>
              <View className="flex-1 justify-center items-center">
                <Text className="text-base text-white text-center leading-6 mx-5">
                  {ponto.nome}
                </Text>
                <Text className="text-base text-white text-center leading-6 mx-5">
                  {ponto.endereco}
                </Text>
                <Text className="text-base text-white text-center leading-6 mx-5">
                  {ponto.distancia}
                </Text>
                <Text className="text-base text-white text-center leading-6 mx-5">
                  {ponto.horario}
                </Text>
                <Text className="text-base text-white text-center leading-6 mx-5">
                  {ponto.categoria}
                </Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
