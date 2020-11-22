import React, { useState } from 'react';
import { Alert, TouchableOpacity, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { Agenda } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import LocaleConfig from '../../../utils/i18n';

import PageHeader from '../../../components/PageHeaderMenu';

import api from '../../../services/api';
import { useAuth } from '../../../contexts/auth';

import styles from './style';

LocaleConfig.defaultLocale = 'pt-br';

import moment from 'moment';

export interface Pet {
  id: number;
  date: string;
  name: string;
}

const Calendar: React.FC = () => {

  const { navigate } = useNavigation();

  function handleNavigateToEventCreatePage() {
    navigate('PetList');
  }

  const [events, setEvents] = useState([]);
  const { signIn, user } = useAuth();

  function loadPets() {

    api.get('/professionals/events', { params: {}, headers: { 'user': user.id } }).then(response => {

      if (response) {
        setEvents(response.data)
      }
    });

  }

  useFocusEffect(() => {
    loadPets();
  });

  const item = (item: any, firstItemInDay: any) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }} onPress={() => Alert.alert(item.place)} >
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={styles.placeText}>{item.place}</Text>
                <Text>{item.type}</Text>
                <Text>{item.hour}</Text>
              </View>
              <Avatar.Text label={item.place.substring(0, 1)} color={styles.itemCalendar.color} style={styles.itemCalendar} />
            </View>

          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <PageHeader title='Calendário'></PageHeader>

      <Agenda
        items={events}

        loadItemsForMonth={(month) => { console.log('trigger items loading') }}

        selected={new Date()}

        renderItem={item}

        renderEmptyDate={() => { return (<View />); }}

        renderEmptyData={() => { return (<View />); }}

        rowHasChanged={(r1: any, r2: any) => { return r1.text !== r2.text }}

        theme={{
          selectedDayBackgroundColor: styles.themeCalendar.backgroundColor,
          dotColor: styles.themeCalendar.color
        }}
      />

      <RectButton
        style={[styles.button]} onPress={handleNavigateToEventCreatePage}>
        <Icon
          raised
          name='plus'
          type='font-awesome'
          color='#EE812E' size={30} />
      </RectButton>


    </>
  );
};

export default Calendar;