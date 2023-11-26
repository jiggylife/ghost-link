import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "@/lib/globalStyle";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghostlink",
  description:
    "Welcome to Ghost Link – Your space for anonymous messages. Share thoughts, jokes, or whatever's on your mind without revealing your identity. Ghost Link lets you communicate freely, no strings attached. Join the conversation without the fuss. Start sending anonymous messages now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
      />
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
