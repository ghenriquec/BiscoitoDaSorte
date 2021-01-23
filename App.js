import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity
  } from 'react-native'; 

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        fraseText: '',
        img: require('./src/biscoito.png'),
      };

      this.brokenCookie = this.brokenCookie.bind(this);

    this.frases = [
      'Os problemas são oportunidades para se mostrar o que sabe. (Duke Ellington)',
      'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos. (Henry Ford)',
      'Tente de novo. Fracasse de novo. Mas fracasse melhor. (Samuel Beckett)',
      'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo. (Sócrates)',
      'O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido. (W. F. Grenfel)',
      'Cada cliente é como se fosse primeiro e único. (Norman Bawes)',
      'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer. (Santo Agostinho)',
      'Vender é construir uma ponte entre você e seu cliente e fazê-lo atravessar para o seu lado. (Ciclo dos Profissionais de Venda)',
      'Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos. (Churton Collins)',
      'A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz. (Jean Paul Sartre)',
      'Nada acontece a menos que sonhemos antes. (Carl Sandburg)',
      'É sempre divertido fazer o impossível. (Walt Disney)',
      'A coisa mais cara é transformar um cliente insatisfeito em satisfeito. (Jan Carlzon)',
      'Experiência é o nome que cada um dá a seus erros. (Oscar Wilde)',
      'Lembre sempre que a sua vontade de triunfar é mais importante do que qualquer outra coisa. (Abraham Lincoln)',
      'Prefiro os erros do entusiasmo à indiferença da sabedoria. (Anatole France)',
      'Na realidade, vendas e serviços são inseparáveis. (Carter Brow)',
      'A arte de ser ora audacioso, ora prudente, é a arte de vencer. (Napoleão Bonaparte)',
      'Seja corajoso. Mesmo que você não seja, finja ser. Ninguém nota a diferença. (H. Jackson Brown Jr.)',
      'Não somos responsáveis apenas pelo que fazemos, mas também pelo que deixamos de fazer. (Moliere)',
      'A estratégia de marketing começa, termina, vive e morre com o cliente. (Michael Gerber)',
      'Quando você contrata pessoas mais inteligentes do que você, prova que é mais inteligente do que elas. (R. H. Grant)',
      'O talento vence jogos, mas só o trabalho em equipe vence campeonatos. (Michael Jordan)',
      'Um negócio nunca é bom se com ele conseguimos um inimigo. (Hugh Prather)',
      'Um objetivo nada mais é do que um sonho com limite de tempo. (Joel L. Griffith)',
      'Sorte é o que acontece quando a preparação encontra a oportunidade. (Elmer Letterman)',
      'O mercado dita inovações. Quem não segue vira peça de museu. (Phill Knight)',
      'O único lugar que o sucesso vem antes do trabalho é no dicionário. (Vidal Sasson)',
      'Se você quiser ir daqui para lá no mundo dos negócios, não encontrará nenhuma linha reta para levá-lo. (William Ahmanson)',
      'Integridade é a essência de todo negócio. (R. Buckminster Fuller)',
      'Existe o risco que você jamais pode correr. Existe o risco que você jamais pode deixar de correr.(Peter Drucker)'
    ];
  }

  brokenCookie(){
    let aleatoryNumber = Math.floor(Math.random() * this.frases.length);

    this.setState({
      fraseText: ' " '+ this.frases[aleatoryNumber] + ' " ',
      img: require('./src/biscoitoAberto.png') 
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image 
        source={this.state.img}
        style={styles.img}
        />
        <Text style={styles.fraseText}>{this.state.fraseText}</Text>
        <TouchableOpacity style={styles.buttonOpacity} onPress={this.brokenCookie}>
          <View style={styles.buttonArea}> 
            <Text style={styles.buttonText}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  fraseText:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  buttonOpacity:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  buttonArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});



export default App;