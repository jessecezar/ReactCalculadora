import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  
  const styles = StyleSheet.create({
    calculadora: {
      maxWidth: '100vw',
    },
    results: {
      minHeight: 255,
      backgroundColor: '#f7f7f7',
      justifyContent: 'end',
      alignItems: 'end',
      paddingRight: 20,
      paddingBottom: 30,
    },
    historyText: {
      fontSize: 13,
      color: '#ff1dc0',
    },
    resultText: {
      color: '#333',
      fontSize: 70,
      fontWeight: 600,
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth: 320,
      backgroundColor: '#fff',
      marginTop: 4,
    },
    button: {
      backgroundColor: '#f7f7f7',
      minWidth: 60,
      minHeight: 60,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
      borderRadius: 50,
      margin: 4,
    },
    textButton: {
      fontSize: 20,
      color: '#5F48C6',
    },
  });

  return (
    <View style={styles.calculadora}>
      <View style={styles.results}>
        <Text style={styles.historyText}>78 x 5 x 540 x 2</Text>
        <Text style={styles.resultText}>1470</Text>
      </View>
      <View style={styles.buttons}>
        
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textButton, {color: '#929292'}]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textButton, {color: '#929292'}]}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textButton, {color: '#929292'}]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textButton, {color: '#ff1dc0'}]}>/</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textButton, {color: '#ff1dc0'}]}>x</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textButton, {color: '#ff1dc0'}]}>-</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textButton, {color: '#ff1dc0'}]}>+</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.button, {minWidth: 128}]}>
            <Text style={styles.textButton}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {background: 'linear-gradient(0deg, rgba(255,29,192,1) 0%, rgba(255,151,93,1) 100%)'}]}>
            <Text style={[styles.textButton, {color: 'white'}]}>=</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}
