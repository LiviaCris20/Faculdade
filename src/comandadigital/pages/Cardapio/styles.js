import { StyleSheet } from 'react-native'

import styled from 'styled-components'

export default StyleSheet.create({
  promotionsList: {
    minHeight: '90%',
    maxHeight: '90%',
    backgroundColor: '#ffffff'
  }
})
export const ButtonSubmit = styled.TouchableOpacity`
 background-color: #A287f4;
 border-radius: 9px;
 width: 90%;
 padding: 15px 20px;
 align-items: center;
`
;

export const TextButton = styled.Text`
 color: #FFF;
 front-size: 20px;
 font-weight: bold;
`
;