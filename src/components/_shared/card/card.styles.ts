import { Colors } from "@/theme/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      borderRadius: 12,
    },
    subtle: {
      backgroundColor: Colors.white,
    },
    info: {
      backgroundColor: Colors.info,
    },
    danger: {
      backgroundColor: Colors.danger,
    },
    warning: {
      backgroundColor: Colors.warning,
    },
    success: {
      backgroundColor: Colors.success,
    },
    shadow: {
      // iOS shadow
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 1,
          shadowRadius: 3,
        },
        android: {
          elevation: 2,
        },
      }),
    },
  });