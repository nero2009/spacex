import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router, { AppStackParamList } from './src/router';

const queryClient = new QueryClient();
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Router />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
