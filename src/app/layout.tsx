import './globals.css';

import type { Metadata } from "next";

import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: "devstage",
};

const oxanium = Oxanium({
  weight: ['500', '600'], // medium and semi-bold
  subsets: ['latin'], // quais caracteres quer carregar da fonte. latin-ext carrega todos os caracteres latinos
  variable: '--font-oxanium'
});

const montserrat = Montserrat({
  weight: ['400', '600'], // regular and semi-bold
  subsets: ['latin'], // quais caracteres quer carregar da fonte. latin-ext carrega todos os caracteres latinos
  variable: '--font-montserrat'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // DEIXANDO AS FONTS DISPONÍVEIS PARA O PROJETO
    // DENTRO DO CLASSNAME, VAMOS INCLUIR UM CÓDIGO JAVASCRIPT
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
