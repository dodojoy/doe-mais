import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface DoacaoCardProps {
    alimento: string;
    localizacao: string;
    imagem: any;
    progresso: number;
    periodo?: string;
}

export default function DoacaoCard({
    alimento,
    localizacao,
    imagem,
    progresso,
    periodo
}: DoacaoCardProps) {
    const router = useRouter();

    return (
        <View className="bg-[#A7C957] rounded-lg p-4 mb-4 ">
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Imagem à esquerda ocupando 1/5 */}
                <View style={{ flex: 1, maxWidth: '20%', alignItems: 'center' }}>
                    <Image
                        source={imagem}
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        resizeMode="cover"
                    />
                </View>
                {/* Coluna com textos, barra e botão */}
                <View style={{ flex: 4, marginLeft: 12, justifyContent: 'space-between', height: 80, position: 'relative' }}>
                    <Text className="text-base text-white" numberOfLines={1}>{alimento}</Text>
                    <Text className="text-xs text-white" numberOfLines={1}>{localizacao}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', top: 8, right: 16, zIndex: 1 }}>
                        {periodo && (
                            <>
                                <MaterialCommunityIcons name="clock-outline" size={14} color="#888" style={{ marginRight: 3 }} />
                                <Text style={{ color: '#888', fontSize: 12 }}>{periodo}</Text>
                            </>
                        )}
                    </View>
                    {/* Barra de progresso e botão na mesma linha */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        {/* Barra de progresso menor */}
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 6, backgroundColor: '#e5e7eb', borderRadius: 999, overflow: 'hidden', marginRight: 6 }}>
                                <View
                                    style={{
                                        height: '100%',
                                        width: `${progresso}%`,
                                        backgroundColor: '#E36C33',
                                        borderRadius: 999,
                                    }}
                                />
                            </View>
                            <Text className="text-xs text-gray-600" style={{ minWidth: 32, textAlign: 'right' }}>{progresso}%</Text>
                        </View>
                        {/* Botão menor ao lado direito */}
                        <TouchableOpacity
                            className="bg-[#E36C33] px-2 py-1 rounded-full"
                            style={{ minWidth: 50, marginLeft: 8, paddingHorizontal: 6, paddingVertical: 2 }}
                            onPress={() => router.push('/mapa')}
                        >
                            <Text className="text-xs text-white text-center">PONTO DE DOAÇÃO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}