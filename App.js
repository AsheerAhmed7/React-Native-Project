//import 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image, ScrollView,SafeAreaView, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
//import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name='Home' component={Landing}
        >
        </Stack.Screen>
        <Stack.Screen
        name='Login' component={Login}
        >
        </Stack.Screen>
        <Stack.Screen
        name='Register' component={Register}
        ></Stack.Screen>
          <Stack.Screen
        name='MainPage' component={MainPage}
        options={{headerTitle:()=>null}}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Landing = (props)=>{
  return(
  <View style={styles.landing}>
    <Text style={styles.heading}>Shopsie</Text>
    <Text>The best way to style your life</Text>
    <TouchableOpacity
    style={styles.logbtn}
    onPress={()=>props.navigation.navigate('Login')}
    >
      <Text style={styles.logtxt}>Get Started</Text>
    </TouchableOpacity>
  </View>
  )
}
const Login = (props) => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Welcome back! Glad to see you, Again!</Text>   
       <TextInput
       style={styles.textinput}
       placeholder='Enter your email'></TextInput>
       <TextInput
       style={styles.textinput}
       placeholder='Enter your password'></TextInput>
       <TouchableOpacity
       style={styles.button}
       onPress={()=>props.navigation.navigate('MainPage')}
       >
        <Text style={styles.buttontext}>Login</Text>
       </TouchableOpacity>
       <Text style={{textAlign:'center',fontWeight:'400'}}>or Login with</Text>
       <View style={styles.img_containor}>
        <Image
        style={{height:35,width:15}}
        source={require('./assets/fb.png')}>          
        </Image>
        <Image
        style={{height:45,width:25}}
        source={require('./assets/google.png')}>          
        </Image>
       </View>
       <View style={{flexDirection:'row',justifyContent:'center'}}>
       <Text>Don't you have an account? </Text>
       <TouchableOpacity
       onPress={()=> props.navigation.navigate("Register")}
       ><Text style={{color:'green'}}>Resgister now</Text></TouchableOpacity>
       </View>
    </View>
  );
}
const Register = (props)=> {
  return (
    <View style={styles.container2}>
      <Text style={styles.text2}>Hello! Register to get started</Text>
      <TextInput
      style={styles.textinput2}
      placeholder='First Name'></TextInput>
      <TextInput
      style={styles.textinput2}
      placeholder='Last Name'></TextInput>
      <TextInput
      style={styles.textinput2}
      placeholder='Email'></TextInput>
      <TextInput
      style={styles.textinput2}
      placeholder='Password'></TextInput>
      <TouchableOpacity
      style={[styles.button,{width:385}]}
      onPress={()=>props.navigation.navigate('MainPage')} >  
      <Text style={styles.buttontext}>Register</Text>
      </TouchableOpacity>
      <Text style={{textAlign:'center',fontWeight:'400'}}>or Login with</Text>
       <View style={styles.img_containor}>
        <Image
        style={{height:35,width:15}}
        source={require('./assets/fb.png')}>          
        </Image>
        <Image
        style={{height:45,width:25}}
        source={require('./assets/google.png')}>          
        </Image>
       </View>
       <View style={{flexDirection:'row',justifyContent:'center'}}>
       <Text>Already have an account? </Text>
       <TouchableOpacity
       onPress={()=>props.navigation.navigate("Login")}
       ><Text style={{color:'green'}}>Login now</Text></TouchableOpacity>
       </View>
      </View>
  );
}
const styles = StyleSheet.create({
  landing:{
   flex:1,
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
  },
  heading:{
   fontSize:65,
   fontFamily:'monospace',
   fontWeight:'bold',
   color:'blue',
   marginBottom:20
   
  },
  logbtn:{
    marginTop:150,
    borderColor:'blue',
    backgroundColor:'blue',
    borderWidth:4,
    borderRadius:15,
    height:45,
    width:350,
    justifyContent:'center'
  },
  logtxt:{
   color:'white',
   fontSize:20,
   textAlign:'center'
  },
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    margin:10,
    paddingRight:30,
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    flexWrap:'wrap',
    marginBottom:20
  },
  textinput:{
     marginLeft:10,
     fontSize:15,
     fontWeight:'600',
     marginBottom:20
  },
  button:{
    borderRadius:5,
    borderColor:'blue',
    backgroundColor:'blue',
    marginLeft:10,
    marginBottom:20,
    height:40,
    width:350,
    padding:8
  },
  buttontext:{
    fontSize:15,
    fontWeight:'500',
    textAlign:'center',
    textAlignVertical:'center',
    color:'white'
  },
  img_containor:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:15,
    paddingBottom:30,
  },
  container2:{
    flex:1,
    flexDirection:'column',
    paddingTop:100,
  },
  text2:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:50
  },
  textinput2:{
    marginLeft:20,
    fontSize:15,
    fontWeight:'600',
    marginBottom:20
 }
});
const MainPage = ()=> {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar hidden={true} ></StatusBar>
    <ScrollView>
    <View style={styles2.container}>
      <Text style={{fontSize:35,color:'blue',fontWeight:'bold',marginBottom:15}}>SHOPSIE</Text>
    <View style={{borderTopStartRadius:120,borderTopEndRadius:120,overflow:'hidden'}}>
    <Image
    style={styles2.img1}
  source={require('./assets/pic1.jpg')}></Image></View>
  <TouchableOpacity
  style={styles2.text}>  
  <Text style={{fontSize:18,color:'white'}}>Shop Now</Text>
  </TouchableOpacity>
  <Image
    style={styles2.img2}
  source={require('./assets/pic4.jpg')}></Image>
   <Text style={{fontSize:30,fontWeight:'bold',marginBottom:50}}>Trending Now</Text>
   <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={styles2.selection}>
      <Text style={{textAlign:'center',marginTop:10,color:'white'}}>All</Text>
    </TouchableOpacity >
    <TouchableOpacity style={styles2.selection}>
      <Text style={{textAlign:'center',marginTop:10,color:'white'}}>Dresses</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles2.selection}>
      <Text style={{textAlign:'center',marginTop:10,color:'white'}}>Accessories</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles2.selection}>
      <Text style={{textAlign:'center',marginTop:10,color:'white'}}>Mufflers</Text>
    </TouchableOpacity>
   </View>
   <ScrollView horizontal={true}> 
    <View style={{flexDirection:'row',marginBottom:30}}>
    <View style={{flexDirection:'column'}}>
      <Image
      style={styles2.wrap}
      source={require('./assets/pic5.jpg')}>
      </Image>
      <Text style={{fontSize:13,marginLeft:22}}>Olive Plain Dress</Text>
      <Text style={{fontSize:13,marginLeft:22,color:'green'}}>$14.33</Text>
      </View>
      <View style={{flexDirection:'column'}}>
      <Image
      style={styles2.wrap}
      source={require('./assets/pic6.jpg')}>
      </Image>
      <Text style={{fontSize:13,marginLeft:22}}>Olive Plain Dress</Text>
      <Text style={{fontSize:13,marginLeft:22,color:'green'}}>$14.33</Text>
      </View>
      <View style={{flexDirection:'column'}}>
      <Image
      style={styles2.wrap}
      source={require('./assets/pic7.jpg')}>
      </Image>
      <Text style={{fontSize:13,marginLeft:22}}>Olive Plain Dress</Text>
      <Text style={{fontSize:13,marginLeft:22,color:'green'}}>$14.33</Text>
      </View>
      <View style={{flexDirection:'column'}}>
      <Image
      style={styles2.wrap}
      source={require('./assets/pic2.jpg')}>
      </Image>
      <Text style={{fontSize:13,marginLeft:22}}>Olive Plain Dress</Text>
      <Text style={{fontSize:13,marginLeft:22,color:'green'}}>$14.33</Text>
      </View>
    </View>
    </ScrollView>
    <Text style={{fontSize:25,fontWeight:'bold'}}>ACTUAL CATEGORIES</Text>
    <Image
    style={styles2.img3}
    source={require('./assets/pic8.jpg')}>
    </Image>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Outwear</Text>
    <Text>Raincorts,sweaters,etc</Text>
    <Image
    style={styles2.img3}
    source={require('./assets/pic9.jpg')}>
    </Image>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Leather Shoes</Text>
    <Text>Shoes,sandals,etc</Text>
    <Image
    style={styles2.img3}
    source={require('./assets/pic10.jpg')}>
    </Image>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Light Dresses</Text>
    <Text>Evening,casual,home</Text>
    <Text style={{fontSize:27,fontWeight:'bold',marginTop:30}}>ONLY TRUSTED BRANDS</Text>
    <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
      <Image
      style={{height:100,width:100,margin:10}}
      source={require('./assets/tiffany.jpg')}></Image>
            <Image
      style={{height:100,width:100,margin:10}}
      source={require('./assets/dg.jpg')}></Image>
      <Image
      style={{height:100,width:100,margin:10}}
      source={require('./assets/rolex.jpg')}></Image>
      <Image
      style={{height:100,width:100,margin:10}}
      source={require('./assets/gucci.jpg')}></Image>
       <Image
      style={{height:100,width:100,margin:10}}
      source={require('./assets/prada.jpg')}></Image>
       <Image
      style={{height:100,width:100,margin:10}}
      source={require('./assets/fendi.jpg')}></Image>
    </View>
    <View style={styles2.cover}>
      <Text style={{fontSize:40,color:'yellow'}}>NEW ARRIVAL</Text>
      <Text style={{fontSize:20,color:'yellow'}}>FALL 2023</Text>
      <View style={styles2.frame}>
      <Image
      style={styles2.coverimg}
      source={require('./assets/pic11.jpg')}></Image></View>
      <TouchableOpacity
      style={styles2.btn}>
        <Text style={{color:'blue',fontSize:20,textAlign:'center'}}>Explore</Text>
      </TouchableOpacity>
    </View>
    <Text style={{fontSize:23,fontWeight:'bold',marginBottom:20}}>RECOMMENDED LOOKS FOR YOU</Text>
    <View style={{flex:1,margin:10,borderWidth:3,borderBlockColor:'grey',marginBottom:60}}>
      <Image
      style={{marginBottom:20,height:400,width:400}}
      source={require('./assets/pic12.jpg')}
      >
      </Image>
      <Text style={{fontWeight:'bold',fontSize:20,marginBottom:20,marginLeft:10}}>In This look</Text>
      <View style={{flexDirection:'row',marginLeft:10,marginBottom:10}}>
        <Image
        style={{borderRadius:35,width:70,height:70,marginRight:15}}
        source={require('./assets/pic12.jpg')}></Image>
        <View >
        <Text>$43.90</Text>
        <Text>Cotton White Dress</Text></View>
      </View>
      <View style={{flexDirection:'row',marginLeft:10,marginBottom:10}}>
        <Image
        style={{borderRadius:35,width:70,height:70,marginRight:15}}
        source={require('./assets/pic12.jpg')}></Image>
        <View >
        <Text>$43.90</Text>
        <Text>Cotton White Dress</Text></View>
      </View>
      <View style={{flexDirection:'row',marginLeft:10,marginBottom:10}}>
        <Image
        style={{borderRadius:35,width:70,height:70,marginRight:15}}
        source={require('./assets/pic12.jpg')}></Image>
        <View >
        <Text>$43.90</Text>
        <Text>Cotton White Dress</Text></View>
      </View>
      <View style={{alignItems:'center'}}>
      <TouchableOpacity
      style={{borderWidth:3,borderColor:'blue',height:40,width:250,alignItems:'center',borderRadius:7,marginBottom:10}}>
        <Text style={{color:'blue',fontSize:18}}>Buy it Now</Text>
      </TouchableOpacity></View>
    </View>
    <View style={{backgroundColor:'blue',height:390,width:450,borderWidth:3,borderColor:'blue',alignItems:'center'}}>
     <Image
     style={{height:200,width:200,borderRadius:15,margin:30}}
     source={require('./assets/pic13.jpg')}>
       </Image>
     <Text style={{fontSize:20,fontWeight:'800'}}>GET 20% OFF</Text>
     <Text>Leave your email and get a discount</Text>
     <View style={{flexDirection:'row',marginTop:20}}>
      <TextInput
      style={styles2.email}
      placeholder='Email'></TextInput>
      <TouchableOpacity
      style={{height:40,width:120,alignItems:'center',backgroundColor:'purple',marginLeft:10,borderRadius:7}}>
        <Text style={{fontSize:15,color:'white',marginTop:5}}>Subscribe</Text>
      </TouchableOpacity>
     </View>
    </View>
    <View>
    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    marginTop:30
  },
  img1:{
    height:300,
    width:250,
    borderRadius:25,
    marginBottom:25
  },
  text:{
    borderWidth:3,
    borderColor:'blue',
    borderRadius:120,
    padding:10,
    paddingLeft:50,
    paddingRight:50,
    marginBottom:20,
    backgroundColor:'blue'
  },
  img2:{
    height:120,
    width:470,
    marginBottom:60
   
  },
  selection:{
     height:50,
     width:85,
     borderWidth:3,
     borderColor:'blue',
     borderRadius:8,
     margin:10,
     backgroundColor:'blue',
    
  },
  wrap:{
    height:120,
    width:100,
    margin:20,
    borderRadius:8
  },
  img3:{
    height:350,
    width:400,
    marginTop:30,
    marginBottom:30
  },
  cover:{
    flex:1,
    backgroundColor:'purple',
    flexDirection:'column',
    height:720,
    width:420,
    alignItems:'center',
    marginBottom:30
  },
  coverimg:{
    marginTop:35,
    height:500,
    width:300,
    marginBottom:30,
  },
  frame:{
   
   borderTopEndRadius:150,
   overflow:'hidden'
  },
  btn:{
    height:50,width:120,borderRadius:7,borderWidth:4,borderColor:'white',backgroundColor:'white',
    padding:5
  },
  email:{
    fontSize:14,backgroundColor:'white',borderWidth:3,borderColor:'white',
    height:40,width:150,borderRadius:7,
  }
});


