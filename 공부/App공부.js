import React from 'react';
import Card_Study from './Home/Card_Study';  //. 하나당 폴더하나 나가는거거 
import { ScrollView } from 'react-native';

const App = () => {
    return (
        <ScrollView>
            <Card_Study />  
        </ScrollView>
    );
  };
  
export default App;  //필수