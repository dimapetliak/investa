import { Colors } from '@/theme/colors';
import { Fonts } from '@/theme/fonts';
import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: Colors.neutral200,
    borderRadius: 8,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.black,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 48,
  },
  selectButtonFocused: {
    borderColor: Colors.primary,
  },
  selectButtonError: {
    borderColor: Colors.error,
  },
  selectButtonDisabled: {
    backgroundColor: Colors.neutral100,
    opacity: 0.7,
  },
  selectButtonText: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  selectButtonTextPlaceholder: {
    color: Colors.neutral400,
  },
  iconContainer: {
    marginLeft: Spacing.sm,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    paddingTop: Spacing.md,
  },
  modalHeader: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    color: Colors.black,
  },
  optionItem: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral100,
  },
  optionItemSelected: {
    backgroundColor: Colors.primaryExtraLight,
  },
  optionItemText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  optionItemTextSelected: {
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  },
  hint: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.neutral500,
  },
});

