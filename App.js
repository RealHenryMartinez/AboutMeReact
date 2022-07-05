import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// custom Components
import Colleges from './Tabs/Colleges';
import Profile from './Tabs/Profile';

// an instance of the bottom Tab Navigator
const Tabs = createBottomTabNavigator();

export default function App() {
  
  return (


    

    <NavigationContainer>
      <Tabs.Navigator>
      <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name="Colleges" options={{ title: 'Colleges' }} component={Colleges} />
        
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

