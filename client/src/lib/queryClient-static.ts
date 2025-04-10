import { QueryClient } from "@tanstack/react-query";

// This is a modified version of queryClient for GitHub Pages static deployment
// It mocks API requests since there is no backend on GitHub Pages

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  console.log(`Static mode: ${method} request to ${url}`, data);
  
  // Return a mock successful response
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Simple mock queryFn that always returns an empty result
const mockQueryFn = async () => {
  return null;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: mockQueryFn,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});