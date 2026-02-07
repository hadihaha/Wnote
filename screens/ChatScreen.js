
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';
import colors from '../constants/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCallback, useState } from 'react';
import UserMessage from '../components/UserMessage';

export default function Chatbot() {

  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([])

 

  const sendMessage = useCallback (() => {
    if (messageText.trim().length === 0 ) return;

    const userMsg = { id: Date.now().toString() , text: messageText , sender: 'user'};

     setMessages((prev)=>[userMsg, ...prev]);
     setMessageText("");

     setTimeout(() => {
        const botMsg = {
            id: (Date.now() + 1).toString(),
            text : "I am a fake Ai . HOW can i help!",
            sender: 'ai'
        };
        setMessages((prev) => [botMsg ,...prev]);
     }, 1000)

  }, [messageText] ); 

  return (
  <KeyboardAvoidingView style ={{flex: 1}} behavior='padding' keyboardVerticalOffset={100}>
      <View style={styles.container}>
         
         <FlatList 
         data={messages}
         keyExtractor={(item)=> item.id}
         renderItem={({ item } ) => <UserMessage message={item.text} sender={item.sender}/>}
         style={styles.messagesContainer}
         inverted={true}
         contentContainerStyle={{paddingVertical: 10}}
        />


        <View style={styles.inputContainer}>
          <TextInput 
           style={styles.textBox} 
           value={messageText}
            placeholder='Type a message ...'
            onChangeText={(text)=> setMessageText(text)}
           />

          <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          >

             <FontAwesome name="send" size={16} color="white" />
           </TouchableOpacity>
           

          </View>

      </View>
   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBg ,
    
  },
  inputContainer : {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 35,
    height: 35,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:50,
    marginRight:10,
  }
  ,
  textBox : {
   flex: 1,
  },
  messagesContainer : {
    flex:1,
  }
});
