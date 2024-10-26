import ProgressBarProviders from "./progress-bar-provider";
import { ThemeProvider } from "./theme-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBarProviders>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ProgressBarProviders>
    </>
  );
};

export default Provider;
