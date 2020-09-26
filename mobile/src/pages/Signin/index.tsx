import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import {useAuth} from '../../contexts/auth';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {navigate} = useNavigation();
    
    const {signIn} = useAuth();

    async function handleSignIn() {
        await signIn(email, password);
    }
   
    function handleNavigateToRegisterPage(){
        navigate('Register');
    } 

    return (
        <View style={styles.container}>

        <PageHeader  title='Fazer Login'></PageHeader>

        <View style={styles.viewInput}>
        <TextInput
            placeholderTextColor="#c1bccc"
            style={styles.input}
            value={email}
            onChangeText={email => setEmail(email)}
            placeholder="E-mail" />

        <TextInput
            value={password}
            onChangeText={password => setPassword(password)}
            placeholderTextColor="#c1bccc"
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha" />

        <RectButton style={styles.submitButton} onPress={handleSignIn}>
            <Text style={styles.submitButtonText}>Entrar</Text>
        </RectButton>
        </View>


    </View>
    );

}

export default Signin;