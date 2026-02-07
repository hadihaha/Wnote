
import react from "react"
import { StyleSheet, Text,View } from "react-native"
import Colors from "../constants/colors"

const UserMessage = ({message , sender })=> {

    const isUser = sender === 'user';
   return(
    <View style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]} >
     <Text style={isUser ? styles.userText : styles.aiText }>{message}</Text>
     </View>
   )
};

export default UserMessage


const styles = StyleSheet.create({
  bubble : {
    marginBottom: 50,
    padding:10,
    borderRadius:35,
  

  },
  userText : {
    marginRight:10,
    marginLeft:10,
    marginTop: 3,
    marginBottom:3,
    color:'white'
  },
  aiText:{
    marginRight:10,
    marginLeft:10,
    marginTop: 3,
    marginBottom:3,
    color:'white'
  },

  userBubble : {
  backgroundColor: Colors.primary,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginLeft: 40,
  },
  aiBubble : {
  backgroundColor : '#989996',
    alignSelf: 'flex-start',
    marginRight: 40,
    marginLeft: 10,
  }, 

});
