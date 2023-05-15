import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function ListaOpcoes() {
    //lista de icones e nomes
    const lista = [
        {icone: 'home', nome: 'Home'},
        {icone: 'calendar', nome: 'Agenda'},
        {icone: 'settings', nome: 'Ajustes'},
        {icone: 'log-out', nome: 'Sair'},
    ];
    return(
        <ScrollView 
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {lista.map((item) =>{
                return(
                    <TouchableOpacity style={styles.item} key={item.nome}>
                        <View style={styles.icone}>
                            <Feather name={item.icone} size={30} color="#fff" />
                        </View>
                        <Text style={styles.texto}>{item.nome}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 90,
        marginBottom: 14,
        marginTop: 18,
        marginEnd: 14,
        marginStart: 14,
        paddingTop: 5,

    },
    item:{
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icone:{
        width: 55,
        height: 55,
        backgroundColor: '#1e90ff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        color: '#1e90ff',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5
    }
})
