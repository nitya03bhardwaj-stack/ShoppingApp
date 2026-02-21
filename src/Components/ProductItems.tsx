import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ProductProps = PropsWithChildren<{
    product : Product
}>

const ProductItems = ({product} : ProductProps) => {
  return (
    <View style={styles.container}>
      <Image
       source={{uri:product.imageUrl}}
       style={styles.image}
      />
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
      </View>
    </View>
    
  )
}


const styles = StyleSheet.create({
    
container: {
    margin: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 95,
    height: 150,
    resizeMode: "contain",
    marginRight: 14,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
  },

  name: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    lineHeight: 20,
  },

  ratingContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  priceContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  rating: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: "center",
    backgroundColor: "#16a34a",
    marginRight: 6,
  },

  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  ratingCount: {
    color: "#6b7280",
    fontSize: 12,
    fontWeight: "500",
  },

  originalPrice: {
    fontSize: 15,
    marginRight: 8,
    fontWeight: "500",
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },

  discountPrice: {
    fontSize: 20,
    marginRight: 8,
    fontWeight: "700",
    color: "#000",
  },

  offerPercentage: {
    fontSize: 15,
    fontWeight: "700",
    color: "#16a34a",
  },
})




export default ProductItems
