import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from "react-native";
import Checkbox from 'expo-checkbox';
import { useState } from "react";   
import PasswordInput from "../components/input";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {

    const [check, setChecked] = useState(false);
        
    return (
        <View style={styles.container}>

            <Image style={{ height: 150, width: 150 }} source={require('../assets/Soema.jpg')}/>

            <Text style={styles.text}> E-mail </Text>

            <TextInput placeholder="Digite seu e-mail" keyboardType="email-address" style={styles.input}></TextInput>

            <Text style={styles.text}> Senha </Text>

            <PasswordInput placeholder="Digite sua senha"/>
            
            <View style={{padding:10, flexDirection: "row", marginBottom: 15}}>
                <Checkbox value={check} onValueChange={setChecked} color={check ? '#13b666' : undefined}/>
                <Text style={{marginLeft:windowWidth*0.03}}>Lembrar minha senha</Text>
                <Text style={{marginLeft:windowWidth*0.12}}>Esqueci minha senha</Text>
            </View>

            <View style={{display: "flex", flexDirection: "row", gap: 10}}>

                <TouchableOpacity underlayColor={"#3CB371"} style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#144DC8", borderRadius: 8, width: 150, height: 60}}>
                    <Text style={{color: "#ffffff"}}>Entrar</Text>
                </TouchableOpacity>
        
                <TouchableOpacity underlayColor={"#3CB371"} style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f3f3", borderRadius: 8, width: 150, height: 60}} onPress={() => {navigation.navigate("Home");}}>
                    <Text>Voltar</Text>
                </TouchableOpacity>

            </View>

            <Text style={{marginTop: 50, marginBottom:20, display: "flex", justifyContent: "center", alignItems: "center"}}>------------------- Ou continue com -------------------</Text>

                <View style={{ display: "flex", flexDirection: "row", gap: 45 }}>
                    <TouchableOpacity>
                        <Image style={{ height: 45, width: 45 }} source={require('../assets/google.jpg')}/>
                    </TouchableOpacity>
        
                    <TouchableOpacity>
                        <Image style={{ height: 45, width: 45 }} source={require('../assets/facebook.jpg')}/>
                    </TouchableOpacity>
                </View>
        </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        margin: 10, 
        width: windowWidth * 0.5,
        borderRadius: 5,
        borderRadius: '15px',
    },

    button: {
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#0096FF',
    },
    input: {
        width: 300,
        height: 50,
        margin: 10,
        marginLeft:-15,
        borderRadius: 8,
        color: "#333355",
        backgroundColor: "#daeaf5ff",
    },
    text: {
        fontSize: 15,
        alignSelf: "flex-start",
        margin: 5,
        marginLeft: 30
    },
});