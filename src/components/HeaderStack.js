import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation} from "@react-navigation/native";


const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; 

export default function HeaderMain({ name }) {
    const navigation = useNavigation()
    
    function handleBack(){
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerObjetos}>
                <TouchableOpacity 
                    onPress={handleBack}
                    style={styles.containerBotao}>
                    <Feather name="arrow-left" size={35} color={'#ffffff'} />
                </TouchableOpacity>
                <View style={styles.titulo}>
                    <Text style={styles.text}>{name}</Text>
                </View>
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
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    titulo:{
        width: '80%',
        alignItems: 'center',
    },
})