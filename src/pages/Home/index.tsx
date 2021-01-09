import React from 'react';

import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import LottieView from 'lottie-react-native';

import { Container, Title, Info, InfoContainer } from './styles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#AA8AE5', '#FBC6CA']}
      style={styles.linearGradient}>
      <LottieView
        source={require('../../assets/lottie/home-animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Container>
        <Title>Find the best teachers</Title>
        <InfoContainer>
          <Info>
            Find the best teachers for whatever you desire, create your account:
          </Info>
        </InfoContainer>
        <InfoContainer>
          <Button
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Button>
          <Info>Already have an account ? </Info>
          <Button
            style={styles.signInButton}
            onPress={() => navigation.navigate('SignIn')}>
            Sign in
          </Button>
        </InfoContainer>
      </Container>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 350,
    height: 250,
  },
  signUpButton: {
    marginVertical: 16,
    backgroundColor: '#E7364E',
  },
  signInButton: {
    marginVertical: 16,
    backgroundColor: '#C9182F',
  },
});
