import { Colors } from '@/theme/colors';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Container } from '../container/container.component';
import { styles } from './screen-layout.styles';
import { ScreenLayoutProps } from './screen-layout.types';

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  keyboardAvoidingView = false,
  scrollViewStyle,
  backgroundColor = Colors.white,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  keyboardShouldPersistTaps = 'handled',
  containerProps,
  ...scrollViewProps
}) => {

  const scrollViewContent = (
    <ScrollView
      style={[styles.scrollView, { backgroundColor }, scrollViewStyle]}
      contentContainerStyle={[
        styles.contentContainer,
        contentContainerStyle,
      ]}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      {...scrollViewProps}
    >
      <Container {...containerProps}>
        {children}
      </Container>
    </ScrollView>
  );

  if (keyboardAvoidingView) {
    return (
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {scrollViewContent}
      </KeyboardAvoidingView>
    );
  }

  return scrollViewContent;
};


