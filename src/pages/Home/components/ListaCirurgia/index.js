import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Cirurgias } from "../../../../mocks/Cirurgias";
import CardCirurgia from "./CardCirurgia";

export default function ListaCirurgia() {
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.texto}>Minhas Cirurgias</Text>
            </View>
            <FlatList
                style={styles.lista}
                horizontal={true}
                data={Cirurgias}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <CardCirurgia data={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 250,
    },
    titulo:{
        width: '100%',
        height: 30,
    },
    texto:{
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 14,
    },
    lista:{
        width: '100%',
        paddingLeft: 14,
    }
})
