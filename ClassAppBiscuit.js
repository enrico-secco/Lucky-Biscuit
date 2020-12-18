import React, { Component } from 'react';
import { StyleSheet, Text, View, Image
, TouchableOpacity } from 'react-native';
// botão que tem no react, se colocar ele só text sem css, é um texto botão

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
    textoFrase: 'Bem vindo ao Biscoito da Sorte',
    img: require('./src/biscoito.png') 
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.limpar = this.limpar.bind(this);

    this.frases = [ 'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
    ];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* this.frases.length);
    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./src/biscoitoAberto.png')
    }) 
  };

  limpar(){
    this.setState({
      textoFrase:'',
      img: require('./src/biscoito.png'),
    })
  };

  render(){
    return(
      <View style={styles.container}>

      <Image
      source={this.state.img}
      style={styles.img}
      />

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

      
      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={this.limpar}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Limpar Frase</Text>
        </View>
      </TouchableOpacity>


      </View>
    )
  }
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

export default App;
