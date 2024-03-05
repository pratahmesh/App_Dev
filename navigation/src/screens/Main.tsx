import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyD_E9AcwluDWiXe19rjmekIlAaJXdDokZk");

const Main = () => {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("no output yet");
    const [past, setPast] = React.useState("");
    async function run(){
        const model = genAI.getGenerativeModel({model:"gemini-pro"});
        const prompt = input;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        setOutput(text);
        setPast(input);
        setInput("");
        }
return (
    <ScrollView>
    <View style={styles.container}>
        <Text>Input</Text>
        <TextInput style={styles.textIn} placeholder="Enter your prompt" value={input} onChangeText={(text) => setInput(text)}  />
        <TouchableOpacity style={styles.btn} onPress={run}>
            <Text style={{color:'white', fontFamily:'monospace'}}>Submit</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 20}}>For Input: {past}</Text>
        <Text style={{marginTop: 20}}>Output:</Text>
        <Text style={styles.outp}>{output}</Text>
    </View>
    </ScrollView>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 30,
        marginEnd: 30,
        marginTop: 50,
        // backgroundColor: "lightblue",
    },
    textIn: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        padding: 5,
        marginTop: 10,
    },
    btn: {
        backgroundColor: "#3a86ff",
        padding: 10,
        marginTop: 20,
        alignItems: "center",
        borderRadius: 50,
    },
    outp:{
        marginTop: 20,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        fontFamily: "monospace",
        fontSize: 15,
        marginBottom: 50,
    }
})

export default Main

