import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import { Text } from '../atoms/text';

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
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  headerRight?: React.ReactNode;
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  containerProps = {},
  showsVerticalScrollIndicator = true,
  scrollable = true,
  scrollViewProps = {},
  title,
  showBackButton,
  onBackPress,
  headerRight,
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

  const hasHeader = title || showBackButton || headerRight;

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
        {hasHeader && (
          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <View style={styles.headerLeft}>
              {showBackButton && (
                <Pressable onPress={onBackPress} style={styles.backButton}>
                  <Ionicons name="arrow-back" size={24} color={colors.foreground} />
                </Pressable>
              )}
            </View>
            {title && (
              <Text variant="h3" style={styles.headerTitle}>
                {title}
              </Text>
            )}
            <View style={styles.headerRight}>
              {headerRight}
            </View>
          </View>
        )}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
  },
  headerLeft: {
    width: 48,
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
  },
  headerRight: {
    width: 48,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: Spacing.xs,
  },
});
