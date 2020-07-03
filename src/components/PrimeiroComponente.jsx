import React, {Component}  from 'react';
import {View, Text} from 'react-native';

export default class PrimeiroComponente extends Component {
    render() {
        return(
            <View>
                <Text style={styles.titulo}>Meu Primeiro componente está funcionando!</Text>
                <Text style={styles.paragrafo}>Só mais um texto</Text>
            </View>        
        );
    }
}

const styles = StyleSheet.create({

titulo: {
    fontSize:40,
    fontStyle:"italic",
    color:"000021"
},
    paragrafo:{
        fontSize: 20,
        color:"000060"
    }

});