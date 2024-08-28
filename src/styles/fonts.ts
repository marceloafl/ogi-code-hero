import { PT_Sans, PT_Sans_Caption } from "next/font/google";

export const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
