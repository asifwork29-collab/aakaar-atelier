import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { useLocation } from "react-router";
import { Navbar } from "./components/layout/Navbar";
import { MobileMenuDrawer } from "./components/layout/MobileMenuDrawer";
import { Footer } from "./components/layout/Footer";
import { ConsultationDrawer } from "./components/ui/ConsultationDrawer";
import { HomePage } from "./pages/HomePage";
import { useScrolled } from "./hooks/useScrolled";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { JournalDetailPage } from "./pages/JournalDetailPage";

function App() {
  const navigate = useNavigate();
  const isScrolled = useScrolled(60);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenEnquiry = (service = "") => {
    setSelectedService(typeof service === "string" ? service : "");
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const handleSelectProject = (project) => {
    navigate(`/projects/${project.id}`);
  };

  const handleSelectArticle = (article) => {
    navigate(`/journal/${article.id}`);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar
        isScrolled={!isHomePage || isScrolled}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenEnquiry={() => {
          setIsMobileMenuOpen(false);
          handleOpenEnquiry();
        }}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenEnquiry={handleOpenEnquiry}
                onSelectProject={handleSelectProject}
                onSelectArticle={handleSelectArticle}
              />
            }
          />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetailPage onOpenEnquiry={handleOpenEnquiry} />}
          />
          <Route path="/journal/:articleId" element={<JournalDetailPage />} />
        </Routes>
      </main>

      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      <ConsultationDrawer
        isOpen={isEnquiryOpen}
        initialScope={selectedService}
        onClose={handleCloseEnquiry}
      />
    </>
  );
}

export default App;
