import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <Card style={styles.containerCard}>
          <Card.Title/>
          <Text>Currently playing</Text>
          <Text style={{ fontWeight: 700, fontSize: 24 }}>Best song ever</Text>
          <Text style={{ fontWeight: 700, fontSize: 18 }}>by One Direction</Text>
          <Text>Proposed by @aleqsio</Text>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/700' }} />
            
         
          <Card.Content>
            <Text>Next up:</Text>
            <Text style={{ fontWeight: 700, fontSize: 18 }}>Never gonna give you up</Text>
            <Text style={{ fontWeight: 700 }}>By Rick Ashley</Text>
            <View style={styles.flex}>
            <Button style={styles.button} icon="arrow-drop-up" mode="contained" >LIKE</Button>
            <Button style={styles.button} icon="arrow-drop-down" mode="contained" >DISLIKE</Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",

  },
  
  containerCard: {
    width:"50%",
    maxWidth:500,
    padding: 20,
    flex: 1,
  },
  cardCover: {
    marginTop:40,
    marginBottom:40,
    borderRadius: 10000,
    margin: "auto",
    borderBottomLeftRadius: 10000,
    width:300,
    height:300,
  },
  button: {
    margin:10,
  },
  flex: {
    flexDirection:"row",
  }
});
