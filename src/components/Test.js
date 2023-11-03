import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const test = () => {
    const [date, setdate] = useState(data);
    const render = (val) =>{
        const {id, first_name,last_name,email} = val.item;
        return(
            <View >
                <Text>{id}</Text>
                <Text>{first_name}</Text>
                <Text>{last_name}</Text>
                <Text>{email}</Text>
            </View>
        )
    }
    
  return (
    <View>
      <FlatList
      data={date}
      renderItem={render}
      keyExtractor={item => item.id}
      horizontal={true}
      showsVerticalScrollIndicator={false}>

      </FlatList>
    </View>
  )
}

export default test

const styles = StyleSheet.create({})

var data =
[{
  "id": 1,
  "first_name": "Merci",
  "last_name": "McMillam",
  "email": "mmcmillam0@europa.eu"
}, {
  "id": 2,
  "first_name": "Leila",
  "last_name": "Kelleway",
  "email": "lkelleway1@google.com.br"
}, {
  "id": 3,
  "first_name": "Kendricks",
  "last_name": "Hatwell",
  "email": "khatwell2@plala.or.jp"
}, {
  "id": 4,
  "first_name": "Mary",
  "last_name": "Elizabeth",
  "email": "melizabeth3@nba.com"
}, {
  "id": 5,
  "first_name": "Robin",
  "last_name": "Glason",
  "email": "rglason4@opensource.org"
}, {
  "id": 6,
  "first_name": "Merrile",
  "last_name": "Jory",
  "email": "mjory5@ucoz.com"
}, {
  "id": 7,
  "first_name": "Susannah",
  "last_name": "Rappoport",
  "email": "srappoport6@miibeian.gov.cn"
}, {
  "id": 8,
  "first_name": "Carlina",
  "last_name": "Campagne",
  "email": "ccampagne7@samsung.com"
}, {
  "id": 9,
  "first_name": "Wat",
  "last_name": "Mummery",
  "email": "wmummery8@digg.com"
}, {
  "id": 10,
  "first_name": "Cleavland",
  "last_name": "Pople",
  "email": "cpople9@upenn.edu"
}, {
  "id": 11,
  "first_name": "Rheta",
  "last_name": "Whitcher",
  "email": "rwhitchera@pbs.org"
}, {
  "id": 12,
  "first_name": "Winston",
  "last_name": "MacGrath",
  "email": "wmacgrathb@qq.com"
}, {
  "id": 13,
  "first_name": "Odille",
  "last_name": "Vannuccini",
  "email": "ovannuccinic@wisc.edu"
}, {
  "id": 14,
  "first_name": "Bibbye",
  "last_name": "Flori",
  "email": "bflorid@imageshack.us"
}, {
  "id": 15,
  "first_name": "Codi",
  "last_name": "Georges",
  "email": "cgeorgese@ucoz.ru"
}, {
  "id": 16,
  "first_name": "Verene",
  "last_name": "Buckell",
  "email": "vbuckellf@princeton.edu"
}, {
  "id": 17,
  "first_name": "Addia",
  "last_name": "Staunton",
  "email": "astauntong@senate.gov"
}, {
  "id": 18,
  "first_name": "Juditha",
  "last_name": "Parratt",
  "email": "jparratth@sun.com"
}, {
  "id": 19,
  "first_name": "Kariotta",
  "last_name": "Warde",
  "email": "kwardei@sciencedirect.com"
}, {
  "id": 20,
  "first_name": "Agustin",
  "last_name": "Eixenberger",
  "email": "aeixenbergerj@baidu.com"
}]
