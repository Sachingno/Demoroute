import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InventoryTracking from "./pages/InventoryTracking";
import ChamberMonitoring from "./pages/ChamberMonitoring";
import PaymentsDues from "./pages/PaymentsDues";
import ReportsAnalytics from "./pages/ReportsAnalytics";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="p-4 bg-white shadow flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cold Storage ERP</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-blue-600">Inventory</Link>
            <Link to="/chambers" className="text-blue-600">Chambers</Link>
            <Link to="/payments" className="text-blue-600">Payments</Link>
            <Link to="/reports" className="text-blue-600">Reports</Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<InventoryTracking />} />
            <Route path="/chambers" element={<ChamberMonitoring />} />
            <Route path="/payments" element={<PaymentsDues />} />
            <Route path="/reports" element={<ReportsAnalytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
