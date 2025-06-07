import React from "react";
import { createRoot } from "react-dom/client";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Board from "./Board";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

const theme = deepMerge(grommet, {
  global: {
    colors: {
      app: "#E7BEFF",
    },
    font: {
      family: "Lato",
    },
  },
});

// @ts-ignore
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <QueryClientProvider client={client}>
      <Grommet theme={theme} full={true}>
        <Board />
      </Grommet>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
