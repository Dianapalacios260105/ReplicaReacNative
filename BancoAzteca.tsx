import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from "react-native";
const bancoAztecaLogo = require("../assets/bancoAztecaLogo.png");


export default function BancoAztecaLogin() {
    return (
        <ScrollView contentContainerStyle={estilo.scrollContainer}>
            <View style={estilo.contenedor}>
                {/* Logo de Banco Azteca */}
                <Image source={bancoAztecaLogo} style={estilo.logo} />


                <Text style={estilo.bienvenida}>Buenos días,</Text>
                <Text style={estilo.usuario}>Diana</Text>

                <Text style={estilo.labels}>Contraseña</Text>
                <TextInput style={estilo.cajas}placeholder="••••••••"secureTextEntry={true}/>

                <TouchableOpacity onPress={() => Alert.alert("Recuperar contraseña")}>
                    <Text style={estilo.olvidoClave}>OLVIDÉ MI CONTRASEÑA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.boton} onPress={() => Alert.alert("Iniciando sesión...")}>
                    <Text style={estilo.botonTexto}>ENTRAR</Text>
                </TouchableOpacity>
                
                {/* Botón extra con Button */}
                <View style={estilo.extraButton}>
                    <Button title="Más información" color={'#0f0'} onPress={() => Alert.alert("Información adicional")} />
                </View>
            </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    contenedor: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: "contain",
        marginBottom: 20,
    },
    bienvenida: {
        color: "#fff",
        fontSize: 20,
        marginBottom: 5,
    },
    usuario: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    labels: {
        color: "#fff",
        fontSize: 16,
        alignSelf: "flex-start",
        marginBottom: 5,
    },
    cajas: {
        width: "100%",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: "#fff",
        marginBottom: 10,
    },
    olvidoClave: {
        color: "#0f0",
        fontSize: 14,
        marginBottom: 20,
        textDecorationLine: "underline",
    },
    boton: {
        backgroundColor: "#0f0",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginBottom: 10,
    },
    botonTexto: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
    extraButton: {
        marginTop: 20,
        width: "100%",
    },
});
