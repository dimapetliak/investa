import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

interface ContainerProps extends ViewProps {
  noPadding?: boolean;
  paddingTop?: keyof typeof Spacing;
  padding?: keyof typeof Spacing;
}

export interface ScreenLayoutProps {
  children: React.ReactNode;
  containerProps?: ContainerProps;
  showsVerticalScrollIndicator?: boolean;
  scrollable?: boolean;
  scrollViewProps?: ScrollViewProps;
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  containerProps = {},
  showsVerticalScrollIndicator = true,
  scrollable = true,
  scrollViewProps = {},
}) => {
  const { colors } = useTheme();
  const { noPadding, paddingTop, padding, style, ...restContainerProps } = containerProps;

  const containerStyle = [
    styles.container,
    {
      backgroundColor: colors.background,
      padding: noPadding ? 0 : padding ? Spacing[padding] : Spacing.md,
      paddingTop: paddingTop ? Spacing[paddingTop] : undefined,
    },
    style,
  ];

  const content = scrollable ? (
    <ScrollView
      contentContainerStyle={containerStyle}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...scrollViewProps}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={containerStyle} {...restContainerProps}>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        {content}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
  },
});
