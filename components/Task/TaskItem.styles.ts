import { StyleSheet } from 'react-native';
import { useTheme } from '../../constants/theme';

export const createTaskItemStyles = () => {
  const { colors, spacing, borderRadius, typography, shadows } = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: spacing.lg,
      marginBottom: spacing.md,
      backgroundColor: colors.taskBackground,
      borderRadius: borderRadius.xl,
      borderWidth: 1,
      borderColor: colors.borderLight,
      ...shadows.lg,
    },
    containerCompleted: {
      backgroundColor: colors.taskCompleted,
      borderColor: colors.successLight,
      ...shadows.md,
    },
    checkbox: {
      width: 28,
      height: 28,
      borderRadius: borderRadius.lg,
      borderWidth: 2,
      borderColor: colors.border,
      marginRight: spacing.lg,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      ...shadows.sm,
    },
    checkboxChecked: {
      backgroundColor: colors.success,
      borderColor: colors.success,
      ...shadows.md,
    },
    checkboxText: {
      color: colors.background,
      fontSize: 14,
      fontWeight: typography.fontWeight.bold,
    },
    content: {
      flex: 1,
      marginRight: spacing.sm,
    },
    text: {
      fontSize: typography.fontSize.md,
      color: colors.text,
      lineHeight: 20,
    },
    textCompleted: {
      textDecorationLine: 'line-through',
      color: colors.placeholder,
    },
    deleteButton: {
      width: 34,
      height: 34,
      borderRadius: borderRadius.md,
      backgroundColor: colors.dangerLight,
      justifyContent: 'center',
      alignItems: 'center',
      ...shadows.xs,
    },
    deleteButtonText: {
      color: colors.danger,
      fontSize: 16,
      fontWeight: typography.fontWeight.bold,
    },
  });
};
