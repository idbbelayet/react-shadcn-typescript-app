import { ProtectedRoute } from "@/auth/ProtectedRoute";
import RootLayout from "@/layouts/RootLayout";
import PageNotFound from "@/pages/PageNotFound";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// Simulated API/resource data
const res = [
  { url: "/", componentName: "Dashboard", isProtected: true },
  //{ url: "/about", componentName: "About", isProtected: true },
  { url: "/salesform", componentName: "SalesForm", isProtected: true },
  {    url: "/login", componentName: "Login", isProtected: false  },
];

const pages = import.meta.glob("../pages/*.tsx");

function getComponent(componentName: string) {
  const path = `../pages/${componentName}.tsx`;
  const loader = pages[path];

  if (!loader) {
    throw new Error(`Component ${componentName} not found at ${path}`);
  }

  return lazy(loader as () => Promise<{ default: React.ComponentType }>);
}

const routeChildren = res.map(({ url, componentName, isProtected }) => {
  const Component = getComponent(componentName);

  return {
    path: url === "/" ? "" : url,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        {isProtected ? (
          <ProtectedRoute>
            <Component />
          </ProtectedRoute>
        ) : (
          <Component />
        )}
      </Suspense>
    ),
  };
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...routeChildren,
      {
        path: "*",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
