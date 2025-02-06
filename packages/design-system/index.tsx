// import { AnalyticsProvider } from '@repo/analytics';
// "@repo/analytics": "workspace:*",

// import { AuthProvider } from '@repo/auth/provider';
// "@repo/auth": "workspace:*",
import { env } from "@repo/env";
// import { VercelToolbar } from "@vercel/toolbar/next";
import type { ThemeProviderProps } from "next-themes";
import { Toaster } from "./components/ui/sonner";
// import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./providers/theme";

type DesignSystemProviderProperties = ThemeProviderProps;

export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider {...properties}>
    {/* <TooltipProvider></TooltipProvider> */}
    {children}
    <Toaster />
    {/* {env.NODE_ENV === "development" && env.FLAGS_SECRET && <VercelToolbar />} */}
  </ThemeProvider>
);
