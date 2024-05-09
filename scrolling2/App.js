import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

    export default function App() {
      return (
        <View style={styles.containery}>
    
           <View style={styles.container}>
    <ScrollView horizontal={true}>
          <Text style={styles.Text} >  Section1        Section2        Section3        Section4        Section5 </Text>
          </ScrollView>
        </View>

        <ScrollView>
       
        <View style={styles.container2}>
    
          <Text style={styles.Text2}>Image/video</Text>
          <StatusBar style="auto" />
        </View>
   
        
      
      
        <ScrollView horizontal={true}>
        <View style={styles.containers1}>
    
          <Text style={styles.Text2}>seconds</Text>
          <StatusBar style="auto" />
        </View>
        
        <View style={styles.containers2}>
        <ScrollView horizontal={false}>
          <Text style={styles.Texts2}>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.

While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.</Text><Text style={styles.Texts2}>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.

While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.</Text>
          
          </ScrollView>
        
        </View>
        
        </ScrollView>
      
    
   
        
  


       
        

  {/* <ScrollView horizontal={true}>
  <View style={styles.containers1}>

    <Text style={styles.Text2}>seonds</Text>
    <StatusBar style="auto" />
  </View>
  <View style={styles.containers2}>

    <Text style={styles.Text2}>seonds</Text>
    <StatusBar style="auto" />
  </View>

  <View style={styles.containers}>

<View style={styles.containers1} />
<View style={styles.containers2} />
</View>
  

  
    <StatusBar style="auto" />


    </ScrollView> */}



    <ScrollView horizontal={true}>
  <View style={styles.containert1}>

    <Text style={styles.Textt1}>thirds</Text>
    <StatusBar style="auto" />
  </View>
  <View style={styles.containert2}>

    <Text style={styles.Textt2}>thirds</Text>
    <StatusBar style="auto" />
  </View>
  <View style={styles.containert3}>

    <Text style={styles.Textt3}>thirds</Text>
    <StatusBar style="auto" />
  </View>

 
  

  
    <StatusBar style="auto" />


    </ScrollView>




    <ScrollView horizontal={true}>
  <View style={styles.containerf1}>

    <Text style={styles.Textf1}>fourths</Text>
    <StatusBar style="auto" />
  </View>
  <View style={styles.containerf2}>

    <Text style={styles.Textf2}>fourths</Text>
    <StatusBar style="auto" />
  </View>
  <View style={styles.containerf3}>

    <Text style={styles.Textf3}>fourths</Text>
    <StatusBar style="auto" />
  </View>
  <View style={styles.containerf4}>

    <Text style={styles.Textf4}>fourths</Text>
    <StatusBar style="auto" />
  </View>


 
  

  
    <StatusBar style="auto" />


    </ScrollView>



          </ScrollView>

          <View style={styles.container4}>
    
          <Text  style={styles.Text4}  >Footer</Text>
          <StatusBar style="auto" />
        </View>

        </View>




      );
    }
    
    
    const styles = StyleSheet.create({
      container: {
        width:'100%',
        backgroundColor: 'red',
        alignItems: 'stretch',
        justifyContent: 'center',
        height:50
    
      },
      container2: {
        width:473,
        backgroundColor: 'green',
        alignItems:'center',
        justifyContent: 'space-around',
        height:300
    
      },

      containers1: {
        width:205,
        backgroundColor: 'powderblue',
        height:300,
        alignItems: "center",
        
    
      },
      containers2: {
        width:205,
        backgroundColor: 'yellow',
        height:300,
        alignItems: "center",
        
    
      },
     

      
  
    
    
    
    
      container4: {
        width:'100%',
        backgroundColor: 'yellow',
        alignItems:'center',
        justifyContent: 'center',
        
    
      },
    
      Text:{
        color:'black',
        fontSize:20
      },
      Text2:{
        color:'yellow',
        fontSize:12,
        textAlign: "center",
        justifyContent: "center"
      },
    
      Text3:{
        color:'red',
        fontSize:45
      },
      Text4:{
        color:'black',
        fontSize:20
      
      },
    
      Texts2:{
        color:'black',
        fontSize:20
     
      
    
        
        
        
        },
        containery:{
          width:"100%",
          height:'100%',
          backgroundColor: '',
          },

          containert1: {
            width:136.6,
            height:300,
            backgroundColor: 'pink',
            alignItems:'center',
            justifyContent: 'center',
          },
          containert2: {
            width:136.6,
            height:300,
            backgroundColor: 'white',
            alignItems:'center',
            justifyContent: 'center',
          },
          containert3: {
            width:136.6,
            height:300,
            backgroundColor: 'pink',
            alignItems:'center',
            justifyContent: 'center',
          },

          containerf1: {
            width:102.5,
            height:300,
            backgroundColor: 'purple',
            alignItems:'center',
            justifyContent: 'center',
          },
          containerf2: {
            width:102.5,
            height:300,
            backgroundColor: 'white',
            alignItems:'center',
            justifyContent: 'center',
          },
          containerf3: {
            width:102.5,
            height:300,
            backgroundColor: 'purple',
            alignItems:'center',
            justifyContent: 'center',
          },
          containerf4: {
            width:102.5,
            height:300,
            backgroundColor: 'white',
            alignItems:'center',
            justifyContent: 'center',
          },
    
    
    });