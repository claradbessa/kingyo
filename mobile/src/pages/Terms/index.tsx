import React, { useCallback, useRef, useState } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  View,
  Text
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

import PetItem, { Pet } from '../../components/PetItem';

import { useAuth } from '../../contexts/auth';
import PageHeader from '../../components/PageHeaderMenu';

import styles from './styles';

import api from '../../services/api';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';


const Term: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToPetCreatePage() {
    navigate('ProfessionalRegister');
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>

        <ScrollView keyboardShouldPersistTaps="handled" >

          <PageHeader title='Termos de Uso'></PageHeader>

          <View style={styles.container}>
            <Text style={styles.text}>
              Os Termos de Uso abaixo estipulados, aplicam-se a qualquer pessoa física ou jurídica, doravante
              denominadas “TUTOR” ou “PROFISSIONAL”, interessada em utilizar os serviços do aplicativo Kingyo -
              produto de propriedade da sociedade Kingyo LTDA - a partir de um cadastro inicial. Por estes
              termos, o TUTOR e o PROFISSIONAL da KINGYO ficam cientes e concordam que ao utilizar os recursos
              do aplicativo, automaticamente irão aderir e concordar em se respeitar de forma integral às condições
              do presente documento e a qualquer de suas alterações futuras. A violação de qualquer das disposições
              estipuladas neste instrumento poderá resultar no cancelamento de sua conta sem qualquer notificação,
              de modo a ficar impossibilitado de utilizar os serviços do aplicativo.
          </Text>

            <Text style={styles.text}>
              A KINGYO LTDA se reserva no direito de atualizar e modificar os Termos de Uso periodicamente,
              notificando previamente os TUTORES e PROFISSIONAIS cadastrados, mas que poderão rever a versão
              mais recente dos Termos de Uso a qualquer momento através do aplicativo ou do nosso website,
              disponível em www.kingyo.com.br
            </Text>

            <Text style={styles.title}>DAS NOSSAS OBRIGAÇÕES</Text>
            <Text style={styles.text}>
              Fica garantido ao TUTOR e PROFISSIONAL que o aplicativo deverá funcionar regularmente, se
              respeitadas as condições de uso definidas na documentação. Na ocorrência de falhas de
              programação, será feita a correção pela KINGYO corrigindo tais falhas mediante às possíveis
              atualizações disponibilizadas nas plataformas de aplicativos, se assim for necessário.</Text>

            <Text style={styles.text}>Todos os serviços gratuitos ficarão disponíveis para o TUTOR e PROFISSIONAL ao aceitar os termos deste contrato.</Text>

            <Text style={styles.text}>As informações pessoais e financeiras do TUTOR e PROFISSIONAL, assim como os registros de acesso serão mantidos em sigilo e armazenados em ambiente um seguro, respeitando a intimidade, privacidade e a imagem do TUTOR e PROFISSIONAL conforme as disposições da Lei Geral de Proteção aos 49 Dados (LGPD). </Text>

            <Text style={styles.title}>DAS OBRIGAÇÕES DO TUTOR E PROFISSIONAL</Text>
            <Text style={styles.text}>É dever do TUTOR e PROFISSIONAL assumir as informações inseridas no aplicativo no momento do cadastramento. A KINGYO em hipótese alguma será responsável pelo conteúdo disponibilizado no aplicativo por ambos, não sendo, portanto, revisado em momento algum por nossa equipe.</Text>
            <Text style={styles.text}>As informações compartilhadas entre TUTORES e PROFISSIONAIS de forma irregular e errônea não serão de responsabilidade nem terão vínculo com o App ou com o KINGYO, livrando-os de todas as responsabilidades legais e civis.</Text>
            <Text style={styles.text}>Os TUTORES se responsabilizarão de forma integral com as informações armazenadas no Aplicativo, bem como os PROFISSIONAIS se responsabilizam pelas informações compartilhadas com o mesmo, garantindo que não armazenará ou compartilhará as informações que foram compartilhadas fora do Aplicativo.</Text>

            <Text style={styles.title}>DOS SERVIÇOS OFERECIDOS</Text>
            <Text style={styles.text}>AO TUTOR: Após realizado o cadastro, o TUTOR encontrará disponível no App um perfil com as informações fornecidas por ele no primeiro acesso, e poderá armazenar as informações de seu Pet, bem como compartilhar essas informações com profissionais de sua confiança que também fazem uso do App.
</Text>
            <Text style={styles.text}>
AO PROFISSIONAL: Após realizado o cadastro, o PROFISSIONAL encontrará disponível no App um perfil com as informações fornecidas por ele no primeiro acesso, bem como as informações dos Pets compartilhadas com ele, e se histórico e consultas no calendário do App.
</Text>

            <Text style={styles.title}>PREÇO, RESTRIÇÕES E LICENÇA DE USO DO APLICATIVO</Text>
            <Text style={styles.text}>Sujeito aos termos e condições aqui estabelecidas, este contrato concede ao TUTOR e PROFISSIONAL uma licença irrevogável e intransferível para uso do aplicativo. Não é permitido utilizar e nem permitir que o aplicativo seja utilizado para outra finalidade que não seja as descritas neste documento.
</Text>
            <Text style={styles.text}>Em hipótese alguma é permitido ao PROFISSIONAL copiar, vender ou oferecer informações e seus clientes com outros profissionais da área. Também fica proibido praticar engenharia reversa, descompilação ou desmontagem do aplicativo, na tentativa de burlar ou alterar quaisquer recursos e serviços oferecidos. 
</Text>

            <Text style={styles.title}>DA LEI APLICÁVEL </Text>
            <Text style={styles.text}>Este contrato será regido, interpretado e se sujeitará às leis brasileiras e, fica eleito o foro da Cidade de Aparecida no Estado de São Paulo para eliminar quaisquer dúvidas ou controvérsias resultantes deste contrato, com a exclusão de qualquer outro, por mais privilegiado que seja. Todos os usuários do aplicativo podem tirar dúvidas e buscar suporte através do e-mail contato@kingyo.com.br.</Text>
            
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Term;