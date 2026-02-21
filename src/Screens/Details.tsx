import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type DetailsProps = NativeStackScreenProps<RootStackParamList , 'Details'>

const Details = ({route} : DetailsProps) => {

  const {product} = route.params
  console.log("FULL PRODUCT:", product);



  return (
  <ScrollView style={styles.container}>
    
    <View>
      <Image
      source={{uri : product.imageUrl}}
      style={styles.image}/>
    </View>
    <View>
            <Text style ={styles.name}>{product.name}</Text>
            <View style ={[styles.rowContainer,styles.ratingContainer]}>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>{product.rating}☆</Text>
                </View>
                <Text style={styles.ratingCount}>({product.ratingCount.toLocaleString()})</Text>
            </View>
            <View style ={[styles.rowContainer,styles.priceContainer]}>
                <Text style={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</Text>
                <Text style={styles.discountPrice}>₹{product.discountPrice.toLocaleString()}</Text>
                <Text style={styles.offerPercentage}>%{product.offerPercentage}off</Text>
             </View>

             {product.tags.map((tag,index) => (
              <View key={index} style={styles.badge}>
                <Text style={styles.tagBadge}>{tag}</Text>
              </View>
             ))}

          </View>
  
  </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: "#f6f7fb",
    flex: 1,
    paddingBottom: 40,
  }, 

  image: {
    width: "100%",
    height: 420,
    resizeMode: "contain",
    borderRadius: 14,
    backgroundColor: "#fff",
    marginBottom: 18,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    marginBottom: 8,
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    lineHeight: 28,
  },

  ratingContainer: {
    marginVertical: 10,
  },

  priceContainer: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#ecfdf5",
  },

  rating: {
    marginRight: 8,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    justifyContent: "center",
    backgroundColor: "#16a34a",
  },

  ratingText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },

  ratingCount: {
    fontSize: 13,
    color: "#6b7280",
    fontWeight: "500",
  },

  originalPrice: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 10,
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },

  discountPrice: {
    fontSize: 22,
    color: "#000",
    fontWeight: "700",
    marginRight: 10,
  },

  offerPercentage: {
    fontSize: 16,
    fontWeight: "700",
    color: "#16a34a",
  },

  badge: {
     flexDirection: "row",
     flexWrap: "wrap",
     marginTop: 8,
   },
  

  tagBadge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#e5e7eb",
    backgroundColor: "#fff",
    color: "#374151",
    fontSize: 12,
    fontWeight: "600",
  },
});


export default Details
