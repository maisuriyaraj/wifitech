import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLoader from '../components/commonLoader';

const LoginPage = lazy(() => import("../pages/auth/login"));
const ServicePlans = lazy(() => import("../pages/public/plans"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"  
          element={
            <Suspense fallback={<CommonLoader />}>
              <LoginPage />
            </Suspense>
          } 
        />
        <Route 
          path="/plans"  
          element={
            <Suspense fallback={<CommonLoader />}>
              <ServicePlans />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
