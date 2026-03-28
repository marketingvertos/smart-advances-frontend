import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./admin/layout/AdminLayout";

// Public Pages
import Index from "./pages/Index";
import BlogPage from "./pages/BlogPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import ConsultingPage from "./pages/ConsultingPage";
import TrainingPage from "./pages/TrainingPage";
import ServicesPage from "./pages/ServicesPage";
import AIToolsPage from "./pages/AIToolsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import NotFound from "./pages/NotFound";

// Admin Pages
import Login from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Blogs from "./admin/pages/Blogs";
import Categories from "./admin/pages/Categories";
import Leads from "./admin/pages/Leads";
import LeadDetail from "./admin/pages/LeadDetail";
import CreateBlog from "./admin/pages/CreateBlog";
import EditBlog from "./admin/pages/EditBlog";
import Media from "./admin/pages/Media";
import Users from "./admin/pages/Users";
import Settings from "./admin/pages/Settings";
import ActivityLogs from "./admin/pages/ActivityLogs";
import PageSeo from "./admin/pages/PageSeo";
import SeoSettings from "./admin/pages/SeoSettings";
import Tracking from "./admin/pages/Tracking";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Toaster />
          <Sonner position="top-right" />
          <Routes>

            {/* PUBLIC WEBSITE */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Index />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="consulting" element={<ConsultingPage />} />
              <Route path="training" element={<TrainingPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:slug" element={<SingleBlogPage />} />
              <Route path="ai-tools" element={<AIToolsPage />} />
              <Route path="case-studies" element={<CaseStudiesPage />} />
            </Route>

            {/* ADMIN LOGIN */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* ADMIN PANEL */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/create" element={<CreateBlog />} />
              <Route path="blogs/edit/:id" element={<EditBlog />} />
              <Route path="categories" element={<Categories />} />
              <Route path="leads" element={<Leads />} />
              <Route path="leads/:id" element={<LeadDetail />} />
              <Route path="media" element={<Media />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="activity-logs" element={<ActivityLogs />} />
              <Route path="page-seo" element={<PageSeo />} />
              <Route path="seo-settings" element={<SeoSettings />} />
              <Route path="tracking" element={<Tracking />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;