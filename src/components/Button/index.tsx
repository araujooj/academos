import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  iconSize = 20,
  iconColor = '#fff',
  children,
  ...rest
}) => (
  <Container {...rest}>
    {icon && (
      <Icon
        name={icon}
        size={iconSize}
        color={iconColor}
        style={{ marginRight: 8 }}
      />
    )}
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
