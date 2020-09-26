import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api';


function CreateUsers() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleUserSubmit(){
       
        const response = await api.post('register', {
                email,
                password
        });

        console.log(response);

    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                placeholderTextColor="#c1bccc"
                style={styles.input}
                value={email}
                onChangeText={email => setEmail(email)}
                placeholder="Email" />

            <Text style={styles.label}>Password</Text>
            <TextInput
                value={password}
                onChangeText={password => setPassword(password)}
                placeholderTextColor="#c1bccc"
                style={styles.input}
                placeholder="password" />

            <RectButton style={styles.submitButton} onPress={handleUserSubmit}>
                <Text style={styles.submitButtonText}>Save</Text>
            </RectButton>
        </View>
    );

}

export default CreateUsers;