import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; 

export default function HeaderMain({ name }) {
    return(
        <View style={styles.container}>
            <View style={styles.containerObjetos}>
                <View style={styles.containerUsuario}>
                    <TouchableOpacity style={styles.botao}>
                        <Feather name="user" size={32} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <TouchableOpacity>
                    <Feather name="bell" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: StatusBarHeight + 50,
        backgroundColor: '#1e90ff',
        padding: 10,
        justifyContent: 'flex-end',
    },
    containerObjetos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerUsuario:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    botao:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2E2E2E4B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})
