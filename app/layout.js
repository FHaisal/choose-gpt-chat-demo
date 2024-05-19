import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const APP_NAME = "Choose GPT";
const APP_DEFAULT_TITLE = "Choose GPT";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Choose GPT Chat Demo";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

const defaultColorScheme = 'dark';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <head>
      <ColorSchemeScript
        defaultColorScheme={defaultColorScheme}
      />
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <body>
    <MantineProvider defaultColorScheme={defaultColorScheme}>
      {children}
    </MantineProvider>
    </body>
    </html>
  );
};

export default RootLayout;