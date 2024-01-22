import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenido a mi tienda, soy Sandra Ipiales</Text>
        <Text style={{ color: 'brown' , backgroundColor:'white', fontSize:20 }}>Chocolate</Text>
        <Text style={{ color: 'purple', backgroundColor:'white', fontSize:20 }}>Gaseosa</Text>
        <Text style={{ color: 'green',backgroundColor:'white' , fontSize:20 }}>Helado</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeSandra');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A5690',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });