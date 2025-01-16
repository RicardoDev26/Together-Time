import React, { useState } from "react";
import { FlatList, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { StyledView, StyledText, StyledTouchableOpacity, StyledImage } from "../../shared/styled";
import IconArrowBack from "../../components/Icons/IconArrowBack";   
import IconOptions from "../../components/Icons/IconOptions";
import IconSend from "../../components/Icons/IconSend";
import { useNavigation } from "@react-navigation/native";

const ImageProfile = require("../../../assets/ImagenProfileTwo.webp");

interface Message {
    id: string;
    text: string;
    isMine: boolean; // Para diferenciar entre mensajes enviados y recibidos
}

const RoomChatScreen = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", text: "Hola Antonio, ¿cómo estás?", isMine: false },
        { id: "2", text: "¡Todo bien! ¿Y tú?", isMine: true },
    ]);
    const [messageText, setMessageText] = useState("");

    const navigation = useNavigation();

    const sendMessage = () => {
        if (messageText.trim() === "") return;
        setMessages([{ id: Date.now().toString(), text: messageText, isMine: true }, ...messages]); // Agregar mensaje al inicio
        setMessageText("");
    };

    return (
        <StyledView className="w-full h-full bg-TogetherBg px-5 pt-2">

            <StyledView className="flex-row justify-between items-center mb-3">
                <StyledView className="flex-row items-center gap-x-4">
                    <StyledTouchableOpacity onPress={() => navigation.goBack()}>
                        <IconArrowBack />
                    </StyledTouchableOpacity>
                    <StyledView className="flex-row items-center">
                        <StyledImage source={ImageProfile} className="w-10 h-10 rounded-full mr-2" />
                        <StyledText className="text-white text-lg font-medium">Antonio</StyledText>
                    </StyledView>
                </StyledView>
                <StyledTouchableOpacity className="items-center justify-center">
                    <IconOptions />     
                </StyledTouchableOpacity>
            </StyledView>

            {/* Chat */}
            <StyledView className="flex-1">
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <StyledView
                            className={`mb-2 p-3 rounded-lg ${
                                item.isMine
                                    ? "bg-blue-500 self-end"
                                    : "bg-gray-700 self-start"
                            }`}
                        >
                            <StyledText className="text-white">{item.text}</StyledText>
                        </StyledView>
                    )}
                    inverted // Mensajes recientes abajo
                />
            </StyledView>

            {/* Input de mensaje */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="w-full flex-row items-center bg-gray-800 p-3 rounded-full"
            >
                <TextInput
                    value={messageText}
                    onChangeText={setMessageText}
                    placeholder="Escribe un mensaje..."
                    placeholderTextColor="#ccc"
                    className="flex-1 text-white bg-gray-700 p-3 rounded-full mr-2"
                />
                <StyledTouchableOpacity onPress={sendMessage}>
                    <IconSend />
                </StyledTouchableOpacity>
            </KeyboardAvoidingView>
        </StyledView>
    );
};

export default RoomChatScreen;
