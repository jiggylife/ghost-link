import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registery";
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
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
