import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
//import {Camera} from 'expo-camera';

export default function CadastroProduct() {
 const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de produtos</Text>
      
      <Text style={styles.text}>Nome</Text>
      <TextInput style={styles.textBox} placeholder='Nome do produto'></TextInput>

      <Text style={styles.text}>Lote</Text>
      <TextInput style={styles.textBox} placeholder='Insira lote do produto'></TextInput>
      
      <Text style={styles.text}>Código de barra</Text>
      <TextInput style={styles.textBox} placeholder='insira o código de barra do produto'></TextInput>
      
      <Text style={styles.text}>Quantidade</Text>
      <TextInput style={styles.textBox} placeholder='Quantidade'></TextInput>
     
      <Text style={styles.text}>Data de chegada</Text>
      <TextInput style={styles.textBox} placeholder='Insira a data'></TextInput>
      
      <Text style={styles.text}>Data de fabricação</Text>
      <TextInput style={styles.textBox} placeholder='Insira a data de fabricação do produto'></TextInput>
      
      <Text style={styles.text}>Data de validade</Text>
      <TextInput style={styles.textBox} placeholder='Data de validade do produto'></TextInput>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.buttonText}>Adicionar Fotos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}
      onPress={ () => navigation.navigate('catalago')}>
        <Text style={styles.buttonText}>Confirmar Cadastro</Text>
      </TouchableOpacity>
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8B4513',
        overflowY:'scroll'
      },
      topoPagina:{
        marginTop: '10%',
        marginBottom: '6%',
        paddingStart: '5%'
      },
      titulo:{
        fontSize:30,
        fontWeight:'bold'
      },
      container2:{
        backgroundColor:'#A0522D',
        flex:1,
        borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingStart:'5%',
      paddingEnd:'5%',
      overflowY:'scroll'
      },
      text:{
        fontSize:15,
        marginTop:15
      },
      textBox:{
        borderBottomWidth:1,
        height:40,
        fontSize:15
      },
      botao:{
        backgroundColor:'#FFDEAD',
        paddingVertical:8,
        marginTop:14,
        borderRadius:30,
        width:'100%',
        alignItems:'center'
      },
      buttonText:{
        fontWeight: 'bold',
        color: '#8B4513'
      }
})