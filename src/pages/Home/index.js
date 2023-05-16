import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain";

import ListaOpcoes from "./components/ListaOpcoes";
import ListaCirurgia from "./components/ListaCirurgia";
import CalendarioMes from "./components/CalendarioMes";


export default function Home() {
    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <HeaderMain name="Samuel Lima" />
            <View style={styles.conteudo}>
              <ListaOpcoes />
              <ListaCirurgia />
              <CalendarioMes />
            </View>
            <View style={{height: 100}}></View>
        </ScrollView>
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