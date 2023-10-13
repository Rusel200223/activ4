import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,ScrollView} from 'react-native';

const Policytab =()=>{
    const [modalVisible, setModalVisible] = useState(false);
    return(
      
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Madlang people mabuhay!!!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
<ScrollView style={{height:30,width :200}}>
    <Text>
Get the huge list of more than 500 Essay Topics and Ideas

How to Avoid Lying
Have faith in people. Almost everyone lies because of a lack of faith in others. One should not assume that others will not accept the truth.

Gather up courage to speak up the truth. Speaking truth certainly takes a lot of courage. It is not the job of a faint-hearted person.

Always think from the other person’s perspective. So certainly ask yourself the question: “would you prefer to be lied to?”. Certainly, the answer would be no. So, why should you lie to others.

One should always prepare the words before speaking the truth. Furthermore, one must ensure not to be rude or blunt. Also, the person must be diplomatic.

In conclusion, the phrase “Honesty is the Best Policy” is of significant importance. Honesty is the light of hope in this dark world. Honesty shall always prevail while falsehood is bound to perish.

Honesty – Benefits:
Honesty is always admirable in the family, civil society, friends and across the globe. A person with honesty is respected by all. For one to build the character of Honesty entirely depends on his/her family values and ethics and his/her surrounding environment. Parents showing honest behavior and character in front of their children create an impact on the children and we say “Honesty lies in their genes”. Honesty can also be developed practically which requires proper guidance, encouragement, patience, and dedication.

An honest person is always known for his/her honesty just like a sun is known for its eternal light and unlimited energy. It is a quality which helps a person to succeed in life and get much respect. It gives identification to the moral character of a person. Dishonest people may easily get trust and respect from other people. However, they lose that forever whenever they get caught.

Being dishonest is a sin in all the religions, however, people practice it for their short time benefits and selfishness. They never become morally strong and their life becomes miserable. An honest person moves freely in society and spread his/her fragrance in all directions. Being honest is never mean to bear the bad habits of others or bear ill-treated activities. Everyone has rights to reveal and take action against what is going wrong with him.

Importance of Honesty in Life:
Honesty plays an important role in everyone’s life and it is a character which is visible with open eyes like an open book. Having considered as an Honest person, by society is one of the best compliment one can dream of in his/her entire life. It is the real character a person earns in life by being sincere and dedicated towards it. Lack of honesty in society is doom. It is due to the lack of proper interpersonal relationship between parents-children and students-teachers. Honesty is a practice which is built slowly and patiently, firstly at home and then school. Hence home and school are the best places for a child to develop Honesty since his/her growing times.

Home and school are the places where a child learns moral ethics. Thus, the education system should ensure to include some essential habits and practices to keep a child close to morality. Children must be instructed right from the beginning and their childhood to practice honesty. Youths of any country are the future of that country so they should give better opportunities to develop moral character so that they can lead their country in a better way.

For all human problems, Honesty is the ultimate solution. Corruption and various problems are everywhere in society. It is because of the decreasing number of honest people. In today’s fast and competitive world, we have forgotten about moral and integral ethics. It is very important and necessary for us to rethink and remodel, that we bring the honesty back in society so that everything goes in a natural manner.

Conclusion:
Moral ethics of a person is known through Honesty. In a society, if all the people seriously practice getting honest, then society will become an ideal society and free of all the corruptions and evils. There will be huge changes in the day-to-day life of everyone. It can happen very easily if all the parents and teachers understand their responsibilities towards the nation and teach their children and students about moral ethics.

People should realize the value of honesty in order to manage social and economic balance. Honesty is an essential requirement in modern time. It is one of the best habits which encourages an individual and make capable enough to solve and handle any difficult situation in his/her life. Honesty acts as a catalyst in strengthening our will power to face and fight any odds in life.

</Text>
</ScrollView>

    </View>

  
 
    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
export default Policytab