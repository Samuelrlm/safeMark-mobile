import {Calendar, LocaleConfig} from 'react-native-calendars';
import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function CalendarioMes() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    data = ano + '-' + mes + '-' + dia;

    return(
        <View style={styles.container}>
            <View style={styles.containertitulo}>
                <Text style={styles.titulo}>Minha Agenda</Text>
            </View>
            <Calendar
                style={{
                    width: 360,
                    paddingBottom: 10,
                    backgroundColor: '#E5E5E5',
                    borderRadius: 20,
                }}
                theme={{
                    backgroundColor: '#FFFFFF',
                    calendarBackground: '#FFFFFF',
                    textSectionTitleColor: '#000000',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#0092FA',
                    selectedDayTextColor: '#FFFFFF',
                    todayTextColor: '#FFD900',
                    dayTextColor: '#000000',
                    textDisabledColor: '#000000',
                    dotColor: '#0092FA',
                    selectedDotColor: '#000000',
                    arrowColor: '#0092FA',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: '#000000',
                    indicatorColor: '#0092FA',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                    
                }}
                //deixar datas marcadas
                markedDates={{
                    '2023-05-16': {selected: true, selectedDotColor: '#0092FA'},
                    '2023-05-10': {selected: true, selectedDotColor: '#0092FA'},
                    '2023-05-18': {selected: true, selectedDotColor: '#0092FA'},
                    '2023-05-04': {selected: true, selectDotColor: '#0092FA'},
                    '2023-05-25': {selected: true, selectDotColor: '#0092FA'},
                }}
                initialDate={data}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        alignItems: 'center',
    },
    containertitulo:{
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 14,
        marginBottom: 10,
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',

    }
})