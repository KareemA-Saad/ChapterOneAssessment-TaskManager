/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#6366f1'; // Elegant indigo
const tintColorDark = '#a5b4fc'; // Light indigo for dark mode

export const Colors = {
  light: {
    text: '#1e293b',             // Elegant slate
    background: '#fefefe',       // Slightly warm white
    tint: tintColorLight,
    icon: '#64748b',             // Muted slate
    tabIconDefault: '#94a3b8',   // Light slate
    tabIconSelected: tintColorLight,
    // Task-specific colors - Elegant palette
    primary: '#6366f1',          // Elegant indigo
    primaryPressed: '#4f46e5',   // Deeper indigo
    primaryLight: '#e0e7ff',     // Light indigo background
    success: '#059669',          // Elegant emerald
    successLight: '#d1fae5',     // Light emerald background
    successDark: '#047857',      // Dark emerald
    danger: '#dc2626',           // Elegant red
    dangerLight: '#fee2e2',      // Light red background
    dangerDark: '#b91c1c',       // Dark red
    border: '#e2e8f0',           // Elegant slate border
    borderLight: '#f1f5f9',      // Very light slate
    placeholder: '#94a3b8',      // Muted slate placeholder
    taskBackground: '#ffffff',   // Pure white
    taskCompleted: '#f0f9ff',    // Subtle blue background
    taskHover: '#f8fafc',        // Light hover state
    shadow: 'rgba(15, 23, 42, 0.08)', // Elegant shadow
    shadowDark: 'rgba(15, 23, 42, 0.12)', // Darker shadow
  },
  dark: {
    text: '#f1f5f9',             // Light slate
    background: '#0f172a',       // Deep slate background
    tint: tintColorDark,
    icon: '#94a3b8',             // Muted slate
    tabIconDefault: '#64748b',   // Dark slate
    tabIconSelected: tintColorDark,
    // Task-specific colors - Elegant dark palette
    primary: '#818cf8',          // Light indigo for dark
    primaryPressed: '#6366f1',   // Indigo pressed
    primaryLight: '#312e81',     // Dark indigo background
    success: '#10b981',          // Emerald for dark
    successLight: '#064e3b',     // Dark emerald background
    successDark: '#047857',      // Dark emerald
    danger: '#f87171',           // Light red for dark
    dangerLight: '#7f1d1d',      // Dark red background
    dangerDark: '#dc2626',       // Red for dark
    border: '#334155',           // Slate border
    borderLight: '#475569',      // Light slate border
    placeholder: '#64748b',      // Muted slate placeholder
    taskBackground: '#1e293b',   // Slate task background
    taskCompleted: '#1e3a5f',    // Blue completed background
    taskHover: '#334155',        // Hover state
    shadow: 'rgba(0, 0, 0, 0.4)', // Dark shadow
    shadowDark: 'rgba(0, 0, 0, 0.6)', // Darker shadow
  },
};
