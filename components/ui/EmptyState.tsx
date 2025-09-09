import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../constants/theme';

interface EmptyStateProps {
  title: string;
  subtitle?: string;
}

/**
 * Component for displaying empty state messages
 * Used when there are no tasks to display
 */
export const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  const { colors, spacing, typography } = useTheme();

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.xxl,
    }}>
      {/* Elegant icon placeholder */}
      <View style={{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.lg,
      }}>
        <Text style={{
          fontSize: 32,
          color: colors.primary,
        }}>
          ✓
        </Text>
      </View>
      
      <Text style={{
        fontSize: typography.fontSize.xl,
        fontWeight: typography.fontWeight.bold,
        color: colors.text,
        textAlign: 'center',
        marginBottom: spacing.sm,
      }}>
        {title}
      </Text>
      {subtitle && (
        <Text style={{
          fontSize: typography.fontSize.md,
          color: colors.placeholder,
          textAlign: 'center',
          lineHeight: 24,
          maxWidth: 280,
        }}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};
