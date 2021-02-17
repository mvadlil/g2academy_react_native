import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image } from 'react-native';


const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View>
            <Image 
              style={styles.imageProfile}
              source={require('./fadlil.jpg')}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.subTitle}>Muhammad Fadlil</Text>
            <Text style={styles.title}>Ages</Text>
            <Text style={styles.subTitle}>24 Years Old</Text>
            <Text style={styles.title}>Date Of Birth</Text>
            <Text style={styles.subTitle}>27 Juli 1996</Text>
          </View>

          <View style={styles.aboutContainer}>
            <Text style={styles.title}>
              About
            </Text>
            <Text style={styles.subTitle}>
              Hello, my name is Fadlil!
              “I’m the first son from my parent, people said that i am an introvert person, 
              but Cheerfully. Even though an introvert, but very open with new people, easy going, 
              open mind and easy to communicate with the others, even in front of public”
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Hobbies</Text>
            <Text style={styles.title}>----------------</Text>

            <Image 
              style={styles.hobbies}
              source={require('./learning.png')}
            />
            <Text style={styles.subTitle}>Learning</Text>

            <Image 
              style={styles.hobbies}
              source={require('./games.jpg')}
            />
            <Text style={styles.subTitle}>Playing Games</Text>

            <Image 
              style={styles.hobbies}
              source={require('./travel.png')}
            />
            <Text style={styles.subTitle}>Travelling</Text>
          </View>

          <View style={styles.aboutContainer}>
            <Text style={styles.title}>
              Work Experience
            </Text>
            <Image 
              style={styles.hobbies}
              source={require('./jnet.jpg')}
            />
            <Text style={styles.subTitle2}>JNET Travel</Text>
            <Text style={styles.subTitle}>Expat Service</Text>

            <Image 
              style={styles.hobbies}
              source={require('./sigma.png')}
            />
            <Text style={styles.subTitle2}>Sigma Mitra Convex</Text>
            <Text style={styles.subTitle}>Mice Coordinator</Text>

            <Image 
              style={styles.hobbies}
              source={require('./miki.jpg')}
            />
            <Text style={styles.subTitle2}>Miki Travel</Text>
            <Text style={styles.subTitle}>Operation Executive</Text>

            <Image 
              style={styles.hobbies}
              source={require('./annisa.jpg')}
            />
            <Text style={styles.subTitle2}>Annisa Travel</Text>
            <Text style={styles.subTitle}>Product Supervisor</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Contact</Text>
            <Text style={styles.title}>----------------</Text>

            <Image 
              style={styles.hobbies}
              source={require('./instagram.png')}
            />
            <Text style={styles.subTitle}>@mvadlil</Text>

            <Image 
              style={styles.hobbies}
              source={require('./facebook.png')}
            />
            <Text style={styles.subTitle}>Muhammad Fadlil</Text>

            <Image 
              style={styles.hobbies}
              source={require('./twitter.jpg')}
            />
            <Text style={styles.subTitle}>@mvadlil</Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'grey'
  },
  imageProfile: {
    width: 450,
    height: 450,
    top: -100
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    top: -180,
    opacity: 0.7
  },  
  title: {
    fontSize: 25,
    margin: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginBottom: 10,
  },
  subTitle2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  aboutContainer: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
    top: -200,
    alignItems: 'center',
    textAlign: 'justify',
  },
  hobbies: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10
  }
});

export default App;
