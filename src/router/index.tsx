import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import MainLayout from "@layouts/MainLayout";
import AboutPage from "@pages/AboutPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Route>
  )
);

export default router;
