import React, {Component}  from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Axios from 'axios';


export default class PrimeiroComponente extends Component {
    state = {
      user:{
      }
        
    }


    
    componentDidMount(){
        Axios.get("https://reqres.in/api/users")
        .then(response =>{
            this.setState({ user: response.data.data[0] })
        })
    }
    
    render() {
        return(

            <View>
                <Text style={styles.titulo}>Meu Primeiro componente está funcionando!</Text>
                <Text style={styles.paragrafo}>Só mais um texto</Text>
            </View>
            
            <View>
                <Image 
                style={{
                    width: 200,
                    height: 200
                }}
                source={{uri: this.state.user.avatar}} />
                <Text style={styles.paragrafo}>{this.state.user.email}</Text>
                <Text style={styles.paragrafo}>{this.state.user.id}</Text>
                <Text style={styles.paragrafo}>{this.state.user.first_name} {this.state.user.last_name}</Text>
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