import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground ,Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <view style={styles.Carcontainer}>
         <ImageBackground source={require('assets.images.ModelX.jpeg')}>
         style={styles.image}
         </ImageBackground>
      


       </view>
       <view style={style.titles} >
         <text style={styles.title}> MODEL S </text>
         <text style={styles.subtitle}> starting at $60,000 </text>
       </view>
       <view style={style.buttoncontainer}>
        
         <Pressable style={style.button}>
         onPress={}=>{
           console.warn[data:['hey there']
         
         <text>custom order</text>

         </Pressable>
         </view>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Carcontainer:{
    width:'100%',
    height:'100%'

  },
  titles:{

    margintap:'30%',
    width:'100%',
    alignItems:'center',


  },
  title:{
    fontSize:'40',
    fontweight:'600',


  },
  subtitle:{
    fontSize:'16',
    color:'#5c5e62',


  },
  image:{
    width:'100',
    height:'100',
    resizeMode:'cover',
    position:'absoulte'

  },
  buttoncontainer:{
    width:'100',
    padding:'10px'
  },
  button:{
    backgroundColor:'white',
    height:'40px',
    justifyContent:'center',
    alignItems:'center',
    boderradius:'center',

  },
  Text:{
    fontSize:12,
    footwigth:'bold',
    texttranform:'uppercase',
  }





});
  
