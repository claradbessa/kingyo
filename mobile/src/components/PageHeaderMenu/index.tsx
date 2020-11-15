import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles';

interface PageHeaderProps {
    title?: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title, headerRight, children }) =>{    
    const { goBack } = useNavigation();

    function handleGoBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/> 
                </BorderlessButton>

                <Text style={styles.title}>{title}</Text>     

                <Image source={logoImg} resizeMode="contain" style={styles.logo}/> 
            </View>

            {children}
        </View>
    )
}

export default PageHeader;