import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderMain from "../../components/HeaderMain";

import {Calendar, LocaleConfig} from 'react-native-calendars';
import ListaOpcoes from "./components/ListaOpcoes";
import ListaCirurgia from "./components/ListaCirurgia";


export default function Home() {
    return (
        <View  style={styles.container}>
            <HeaderMain name="Samuel Lima" />
            <View style={styles.conteudo}>
              <ListaOpcoes />
              <ListaCirurgia />
              {/* <Calendar
                // Customize the appearance of the calendar
                style={{
                  borderWidth: 1,
                  borderColor: 'gray',
                }}
                // Specify the current date
                current={'2012-03-01'}
                // Callback that gets called when the user selects a day
                onDayPress={day => {
                  console.log('selected day', day);
                }}
                // Mark specific dates as marked
                markedDates={{
                  '2023-03-01': {selected: true, marked: true, selectedColor: 'blue'},
                  '2023-03-02': {marked: true},
                  '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
                }}
              /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%'
    },
    conteudo:{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
})