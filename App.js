import React, {useState} from 'react';
import { StyleSheet, Text, View, Image
, TouchableOpacity } from 'react-native';

// botão que tem no react, se colocar ele só text sem css, é um texto botão

export default function BiscoitoDaSorte() {

  const [textoFrase, setTextoFrase] = useState('Bem vindo ao Biscoito da Sorte')
  const [img, setImage] = useState(require('./src/biscoito.png'));

  const[frases] = useState(['Siga os bons e aprenda com eles.', 
  'O bom-senso vale mais do que muito conhecimento.', 
  'O riso é a menor distância entre duas pessoas.', 
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.'])

  
  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* frases.length);
    
    setTextoFrase(frases[numeroAleatorio])
    setImage(require('./src/biscoitoAberto.png'))
    
  };

  function limpar(){

    setTextoFrase('')
    setImage(require('./src/biscoito.png'))
  };

 return (
  <View style={styles.container}>

  <Image
  source={img}
  style={styles.img}
  />

  <Text style={styles.textoFrase}>{textoFrase}</Text>

  
  <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
    <View style={styles.btnArea}>
      <Text style={styles.btnTexto}>Quebrar biscoito</Text>
    </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.botao} onPress={limpar}>
    <View style={styles.btnArea}>
      <Text style={styles.btnTexto}>Limpar Frase</Text>
    </View>
  </TouchableOpacity>


  </View>
  );
}

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' //horizontal
  },
  img:{
    width: 250,
    height: 250
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30, //distanciar da imagem e do botão.
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    marginBottom: 20
  },
  btnArea:{
    flex: 1, //para o ocupar toda a área do botão
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  
  },
  btnTexto:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#dd7b22'
  }
});

