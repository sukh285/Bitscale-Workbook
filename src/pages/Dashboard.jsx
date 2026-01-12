import React from "react";
import { Header } from "../components/layout/Header";
import { PaymentBanner } from "../components/ui/PaymentBanner";
import { GridToolbar } from "../components/grid/GridToolbar";

export const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen font-sans text-gray-900 bg-white overflow-hidden">
      <Header />

      <main className="flex-1 flex flex-col overflow-hidden">
        <PaymentBanner />

        {/* Toolbar Section */}
        <GridToolbar />


      </main>
    </div>
  );
};
