import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import { Props } from './types';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const ReactQueryProvider = ({ children, dehydratedState }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools position="bottom-right" />
    <Hydrate state={dehydratedState}>{children}</Hydrate>
  </QueryClientProvider>
);

export default ReactQueryProvider;
