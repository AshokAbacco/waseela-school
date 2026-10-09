import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vision" element={<Vision />} />
        <Route path="mission" element={<Mission />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
