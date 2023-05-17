import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import HeaderStack from "../../../components/HeaderStack";


export default function DetalhesCirurgia() {
    const route = useRoute();
    const { nome } = route.params;

    return (
        <View style={styles.container}>
            <HeaderStack name={'Detalhes da Cirurgia'} />
            <View style={styles.containerConteudo}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerConteudo:{
        width: '100%',
        height: '100%',
    }
});
