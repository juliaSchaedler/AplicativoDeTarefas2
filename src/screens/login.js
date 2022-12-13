import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import Card  from "../components"
import { COLORS, SIZES, FONTS, SHADOW } from "../constants"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"




const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding
    },
    textBoxWrapper: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SIZES.padding
    },
    textInput: {
        ...SHADOW,
        borderRadius: SIZES.textBoxRadius,
        backgroundColor: COLORS.secondary,
        height: 60,
        paddingLeft: 15,
        width: "90%",
        color: COLORS.primary,
        marginRight: 15,
        ...FONTS.h2_semiBold,
    },
    btn: {
        ...SHADOW,
        backgroundColor: COLORS.accent,
        height: 45,
        width: 45,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default function Login() {

    //State variables
    const [user, setuser] = useState("teste@gmail.com")
    const [password, setpassword] = useState("123456")

    const logar = async()=>{ 
        try {
            let credenciais = await signInWithEmailAndPassword(getAuth(), user, password)
            if (credenciais) {
                console.log("Tem cadastro")
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    return <View>
       <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
               
                placeholder="Coloque sua altura Ex: 1.75" keyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput 
    
                placeholder="Coloque seu peso Ex: 75.5" keyboardType="numeric"/>
                <TouchableOpacity onPress={logar}>
                    <Text>botao</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}




