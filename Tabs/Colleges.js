import { StyleSheet, Image, Text, View, SectionList } from 'react-native';



export default function Colleges() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingCollege}> My Top Three Choices </Text>
        
        <Image
            source={require('../assets/collegeBuilding.png')}
            
            style={styles.collegeImage}
          />

        <SectionList
          sections={[
            {title: 'First Choice', data: ['USC']},
            {title: 'Second Choice', data: ['Northeastern University']},
            {title: 'Third Choice', data: ['UCLA']},
          ]} // parameter -> item being passed -> render item //
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          // keyExtractor={(item, index) => `basicListEntry-${item.title}`}
        />
        
        {/* <StatusBar style="auto" /> */}

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
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 25,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
      fontFamily: 'monospace',
    },
  
    item: {
      fontSize: 25,
      padding: 10,
      width: 500,
      fontFamily: 'monospace',
    },

    collegeImage: {
      padding: 100,
      width: 450, 
      height: 250,
    },

    headingCollege: {
      fontSize: 25,
      alignItems: 'center',
      padding: 15,
      paddingBottom: 25,
      fontFamily: 'monospace',
    },
    // uscNorth: {
    //   backgroundColor: 'rgba(253, 98, 98, 0.8)'
    // },

    // ucla: {
    //   backgroundColor: 'rgba(94, 94, 255, 0.8)',
    // }

  });  


  // import React, { useState } from "react";
  // import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
  
  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "First Item",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     title: "Second Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  // ];
  
  // const Item = ({ item, onPress, backgroundColor, textColor }) => (
  //   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  //     <Text style={[styles.title, textColor]}>{item.title}</Text>
  //   </TouchableOpacity>
  // );
  
  // const App = () => {
  //   const [selectedId, setSelectedId] = useState(null);
  
  //   const renderItem = ({ item }) => {
  //     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //     const color = item.id === selectedId ? 'white' : 'black';
  
  //     return (
  //       <Item
  //         item={item}
  //         onPress={() => setSelectedId(item.id)}
  //         backgroundColor={{ backgroundColor }}
  //         textColor={{ color }}
  //       />
  //     );
  //   };
  
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <FlatList
  //         data={DATA}
  //         renderItem={renderItem}
  //         keyExtractor={(item) => item.id}
  //         extraData={selectedId}
  //       />
  //     </SafeAreaView>
  //   );
  // };
  
  

