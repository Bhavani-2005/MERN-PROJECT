import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* PAGES */

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Payments from "./pages/Payments";
import AIAdvisory from "./pages/AIAdvisory";
import Profile from "./pages/Profile";
import Schemes from "./pages/Schemes";
import Documents from "./pages/Documents";

/* ADMIN */

import AdminLayout from "./admin/AdminLayout";

import AdminOverview from "./admin/AdminOverview";

import AdminArtisans from "./admin/AdminArtisans";

import AdminClusters from "./admin/AdminClusters";

/* ROLE DASHBOARDS */

import ClusterDashboard
from "./cluster/ClusterDashboard";

import ArtisanDashboard
from "./artisan/ArtisanDashboard";

/* COMPONENTS */

import ProtectedRoute
from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />

        {/* COMMON DASHBOARD */}

        <Route
          path="/dashboard"
          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }
        />

        {/* ========================= */}
        {/* ADMIN PANEL */}
        {/* ========================= */}

        <Route
          path="/admin"

          element={

            <ProtectedRoute
              allowedRoles={["admin"]}
            >

              <AdminLayout />

            </ProtectedRoute>

          }
        >

          {/* OVERVIEW */}

          <Route
            index
            element={
              <AdminOverview />
            }
          />

          {/* ARTISANS */}

          <Route
            path="artisans"
            element={
              <AdminArtisans />
            }
          />

          {/* CLUSTERS */}

          <Route
            path="clusters"
            element={
              <AdminClusters />
            }
          />

        </Route>

        {/* ========================= */}
        {/* CLUSTER HEAD */}
        {/* ========================= */}

        <Route
          path="/cluster"

          element={

            <ProtectedRoute
              allowedRoles={[
                "cluster-head",
              ]}
            >

              <ClusterDashboard />

            </ProtectedRoute>

          }
        />

        {/* ========================= */}
        {/* ARTISAN */}
        {/* ========================= */}

        <Route
          path="/artisan"

          element={

            <ProtectedRoute
              allowedRoles={[
                "artisan",
              ]}
            >

              <ArtisanDashboard />

            </ProtectedRoute>

          }
        />

        {/* PRODUCTS */}

        <Route
          path="/products"

          element={

            <ProtectedRoute>

              <Products />

            </ProtectedRoute>

          }
        />

        {/* PRODUCTION */}

        <Route
          path="/production"

          element={

            <ProtectedRoute>

              <Products />

            </ProtectedRoute>

          }
        />

        {/* PAYMENTS */}

        <Route
          path="/payments"

          element={

            <ProtectedRoute>

              <Payments />

            </ProtectedRoute>

          }
        />

        {/* AI */}

        <Route
          path="/ai"

          element={

            <ProtectedRoute>

              <AIAdvisory />

            </ProtectedRoute>

          }
        />

        {/* SCHEMES */}

        <Route
          path="/schemes"

          element={

            <ProtectedRoute>

              <Schemes />

            </ProtectedRoute>

          }
        />

        {/* DOCUMENTS */}

        <Route
          path="/documents"

          element={

            <ProtectedRoute>

              <Documents />

            </ProtectedRoute>

          }
        />

        {/* PROFILE */}

        <Route
          path="/profile"

          element={

            <ProtectedRoute>

              <Profile />

            </ProtectedRoute>

          }
        />

        {/* INVALID ROUTE */}

        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;