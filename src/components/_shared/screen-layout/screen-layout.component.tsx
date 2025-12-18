import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from '../container/container.component';
import { styles } from './screen-layout.styles';
import { ScreenLayoutProps } from './screen-layout.types';

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  keyboardAvoidingView = false,
  scrollViewStyle,
  backgroundColor,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  keyboardShouldPersistTaps = 'handled',
  containerProps,
  ...scrollViewProps
}) => {
  const { top: insetsTop } = useSafeAreaInsets();
  const { colors } = useTheme();
  const bgColor = backgroundColor || colors.background;

  const scrollViewContent = (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: bgColor }, scrollViewStyle]}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insetsTop },
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


