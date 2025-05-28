import { ScrollView, Text } from 'react-native';
import DoacaoCard from '../../components/DoacaoCard';

export default function DoacoesScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8, color: '#222', fontFamily: 'system-ui' }}>
        Adicionados Recentemente
      </Text>
      <DoacaoCard
        alimento="45Kg de Arroz Branco"
        localizacao="Comunidade Esperança - Av. dos Estudantes"
        imagem={require('../../assets/images/arroz.jpg')}
        progresso={65}
      />
      <DoacaoCard
        alimento="45Kg de Arroz Branco"
        localizacao="Comunidade Esperança - Av. dos Estudantes"
        imagem={require('../../assets/images/feijao.jpg')}
        progresso={25}
      />
      <DoacaoCard
        alimento="45Kg de Arroz Branco"
        localizacao="Comunidade Esperança - Av. dos Estudantes"
        imagem={require('../../assets/images/arroz.jpg')}
        progresso={65}
      />
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8, color: '#222', fontFamily: 'system-ui' }}>
        Esta semana
      </Text>
      <DoacaoCard
        alimento="10Kg de Feijão Preto"
        localizacao="Bairro Novo Horizonte - Rua Central"
        imagem={require('../../assets/images/feijao.jpg')}
        progresso={40}
      />
      <DoacaoCard
        alimento="45Kg de Arroz Branco"
        localizacao="Comunidade Esperança - Av. dos Estudantes"
        imagem={require('../../assets/images/arroz.jpg')}
        progresso={65}
      />

    </ScrollView>
  );
}