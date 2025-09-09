import { TaskList } from '@/components/Task/TaskList';
import { TaskInput } from '@/components/TaskInput/TaskInput';
import { useTheme } from '@/constants/theme';
import { useTaskManager } from '@/hooks/useTaskManager';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const { tasks, addTask, toggleTask, deleteTask, getTaskStats } = useTaskManager();
  const { colors, spacing, typography } = useTheme();
  const stats = getTaskStats();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar 
        barStyle={colors.background === '#fff' ? 'dark-content' : 'light-content'}
        backgroundColor={colors.background}
      />
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.borderLight }]}>
          <View style={styles.headerContent}>
            <Text style={[styles.title, { color: colors.text }]}>My Tasks</Text>
            {stats.total > 0 && (
              <View style={[styles.statsContainer, { backgroundColor: colors.primaryLight }]}>
                <Text style={[styles.stats, { color: colors.primary }]}>
                  {stats.remaining} of {stats.total} remaining
                </Text>
              </View>
            )}
          </View>
        </View>

          {/* Task Input */}
          <View style={styles.inputContainer}>
            <TaskInput onAddTask={addTask} />
          </View>

          {/* Task List */}
          <View style={styles.listContainer}>
            <TaskList 
              tasks={tasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    minHeight: 100,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  statsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  stats: {
    fontSize: 14,
    fontWeight: '600',
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  listContainer: {
    flex: 1,
    minHeight: 0, // Important for FlatList to work properly
  },
});
