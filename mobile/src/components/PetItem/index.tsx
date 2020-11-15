import React, { useState } from 'react';
import { View, Image, Text, Linking, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'


import styles from './style';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export interface Pet {
    id: number;
    name: string;
    age: string;
    gender: string;
    species: string;
    breed: string;
}

interface PetItemProps {
    pet: Pet;
    favorited?: boolean;
}


const PetItem: React.FunctionComponent<PetItemProps> = ({ pet, favorited }) => {

    const { navigate } = useNavigation();

    function handlerNavigateTutorPerfil(pet_id){
        console.log(pet_id)
        navigate('PetPerfil', {
            petId: pet_id
          })
        }

    return (
        <View style={styles.container}>
            <RectButton onPress={() => handlerNavigateTutorPerfil(pet.id)}>
                <View style={styles.profile}>

                    <Icon
                        raised
                        name={pet.species == 'Cachorro' ? 'dog' : pet.species == 'Gato' ? 'cat' : pet.species == 'Ave' ? 'dove' : pet.species == 'Peixe' ? 'fish' : 'paw'}
                        type='font-awesome-5'
                        color='#EE812E' size={30} />

                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>{pet.name}</Text>
                        <Text style={styles.subject}>{pet.species} {pet.breed && <Text>- {pet.breed}</Text>} </Text>
                    </View>

                    <Icon
                        name='bars'
                        type='font-awesome-5'
                        color='#EE812E' size={30} />
                </View>
            </RectButton>
        </View>
    );
}


export default PetItem;