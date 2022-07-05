import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';



export default function Profile() {
    return (
      <View style={styles.container}>
        {/* <Stack.Navigator>
            <Stack.Screen
          
            />
        </Stack.Navigator> */}
        <Text style={styles.nameHeading}>About Henry Martinez</Text>
        <Image
            source={require('../assets/lightbulb.png')}
            
            style={styles.imageMyself}
          />
          <ScrollView>
          <Text style={styles.nameHeading}>Who Am I?</Text>
          <Text style={styles.textStyle}> Hello, my name is Henry Martinez a 10th grader moving to 11th grade the upcomming year at Orthopaedic Medical Magnet High.
        
          </Text>
          <Text style={styles.nameHeading}>Who I want to be?</Text>
          <Text style={styles.textStyle}>
            I hope to be able to be more of a team member and be more proficient with working with others being 
            a main thing I want to achieve here at TxT.
          </Text>
          </ScrollView>
 
      </View>
    );
        {/* <StatusBar style="auto" /> */}
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageMyself: {
      padding: 150,
      width: 200, 
      height: 200,
    },

    nameHeading: {

      fontSize: 30,
      padding: 10,
      fontFamily: 'monospace',
      textAlign: 'center',
    },

    textStyle: {
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: 'rgba(247,247,257,1.0)',
      width: 390,
      borderStyle: 'solid',
      borderWidth: 4,
      borderColor: 'black',
      padding: 5,
      fontFamily: 'monospace',


    }
  });


