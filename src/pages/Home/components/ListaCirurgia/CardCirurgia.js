import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function CardCirurgia({data}) {
    const navigation = useNavigation();

    return(
        <TouchableOpacity 
            onPress={() => navigation.navigate("DetalhesCirurgia", {nome: data.NomeEmpresa})}
        style={styles.container}>
            <ImageBackground
                style={styles.imagem}
                source={{uri: data.Imagem}}
            >
                <View style={styles.titulo}>
                    <Text style={styles.texto}>{data.NomeEmpresa}</Text>
                </View>
            </ImageBackground>
            <View style={styles.conteudo}>
                <View style={styles.data}>
                    <View style={styles.Icone}>
                        <Feather name="clock" size={24} color="#000" />
                    </View>
                    <View style={styles.Textos}>
                        <Text style={styles.textoData}>{data.Data}</Text>
                        <Text style={styles.textoData}>{data.Hora}</Text>
                    </View>
                </View>
                <View style={styles.Status}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={styles.textoStatus}>Status</Text>
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            backgroundColor: data.Status == 'Confirmado' ? '#00ff00' : '#ff0000'
                        }}/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 300,
        height: 200,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 4,
            height: 4
        }
    },
    imagem:{
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    titulo:{
        width: '100%',
        height: '20%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
    texto:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14
    },
    conteudo:{
        width: '100%',
        height: '25%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 14,
        paddingRight: 14
    },
    data:{
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Icone:{
        flexDirection: 'row',
    },
    Textos:{
        flexDirection: 'column',
    },
    textoData:{
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 14
    },
    Status:{
        width: '50%',
        height: '100%',
        alignItems: 'flex-end',
    },
    textoStatus:{
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
    }
})
