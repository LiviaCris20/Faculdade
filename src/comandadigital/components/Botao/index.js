import React from 'react';
import { TouchableOpacity, Text} from 'react-native';

export default function Botao({valor, acao}) {
    return <TouchableOpacity onPress={acao}>
        <Text>{valor}</Text>
     </TouchableOpacity>
}