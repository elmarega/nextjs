"use client";

import { HeaderStyled } from "../shared/layout/global-style";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderStyled className="custom-header">
        <h2>ProdutcsStore</h2>
        <button>Sair</button>
      </HeaderStyled>
      {children}
    </>
  );
}
