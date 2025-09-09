import { StyleSheet } from 'react-native';
import { useTheme } from '../../constants/theme';

export const createTaskInputStyles = () => {
  const { colors, spacing, borderRadius, typography, shadows } = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      marginBottom: spacing.md,
      minHeight: 48,
    },
    input: {
      flex: 1,
      height: 52,
      paddingHorizontal: spacing.lg,
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: borderRadius.lg,
      fontSize: typography.fontSize.md,
      color: colors.text,
      ...shadows.sm,
    },
    inputFocused: {
      borderColor: colors.primary,
      borderWidth: 2,
      ...shadows.md,
    },
    addButton: {
      height: 52,
      paddingHorizontal: spacing.xl,
      backgroundColor: colors.primary,
      borderRadius: borderRadius.lg,
      justifyContent: 'center',
      alignItems: 'center',
      ...shadows.md,
    },
    addButtonDisabled: {
      backgroundColor: colors.border,
      ...shadows.xs,
    },
    addButtonText: {
      color: colors.background,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
    },
  });
};
