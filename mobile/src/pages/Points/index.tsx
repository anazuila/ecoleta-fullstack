import React from 'react';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { 
  View,
  StyleSheet, 
  TouchableOpacity, 
  Text,
  ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg'

const Points = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79"/>
        </TouchableOpacity>

        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>   

        <View style={styles.mapContainer}>
          <MapView 
            style={styles.map} 
            initialRegion={{
              latitude: -23.5420615,
              longitude: -46.6995142,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
          }}>
            <Marker coordinate={{
               latitude: -23.5420615,
               longitude: -46.6995142,
            }}
          />

          </MapView>
        </View>

      </View>
        <ScrollView 
          horizontal 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          >
          <View style={styles.itemsContainer}>
            <TouchableOpacity  style={styles.item} onPress={() => {}}>
              <SvgUri width={42} height={42} uri="http://192.168.15.14:3333/uploads/lampadas.svg"/>
              <Text style={styles.itemTitle}>Lâmpadas</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.item} onPress={() => {}}>
              <SvgUri width={42} height={42} uri="http://192.168.15.14:3333/uploads/lampadas.svg"/>
              <Text style={styles.itemTitle}>Lâmpadas</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.item} onPress={() => {}}>
              <SvgUri width={42} height={42} uri="http://192.168.15.14:3333/uploads/lampadas.svg"/>
              <Text style={styles.itemTitle}>Lâmpadas</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.item} onPress={() => {}}>
              <SvgUri width={42} height={42} uri="http://192.168.15.14:3333/uploads/lampadas.svg"/>
              <Text style={styles.itemTitle}>Lâmpadas</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.item} onPress={() => {}}>
              <SvgUri width={42} height={42} uri="http://192.168.15.14:3333/uploads/lampadas.svg"/>
              <Text style={styles.itemTitle}>Lâmpadas</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.item} onPress={() => {}}>
              <SvgUri width={42} height={42} uri="http://192.168.15.14:3333/uploads/lampadas.svg"/>
              <Text style={styles.itemTitle}>Lâmpadas</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  title: {
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 24,
    color: "#34CB79",
  },

  description: {
    color: "#000",
    fontSize: 16,
    marginTop: 4,
    fontFamily: "Roboto_400Regular",
  },

  mapContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 16,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: "#34CB79",
    flexDirection: "column",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: "cover",
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: "Roboto_400Regular",
    color: "#FFF",
    fontSize: 13,
    lineHeight: 23,
  },

  itemsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",

    textAlign: "center",
  },

  selectedItem: {
    borderColor: "#34CB79",
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 13,
  },
});

export default Points;