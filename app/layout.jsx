import "@styles/globals.css";
import Head from "next/head";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "PromptPot",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: "/favicon.png",  
    shortcut: "/favicon.png",  
    apple: "/favicon.png",
  }
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
        <Footer/>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
