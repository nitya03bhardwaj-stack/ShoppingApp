import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
    <View style={styles.Separator}>
      <Text>Separator</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    Separator:{
        height:0.8,
        backgroundColor:'#3f3d3df3'
    },
          
})

export default Separator
