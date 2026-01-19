import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SoftBackdrop from '../components/SoftBackdrop';
import LenisScroll from '../components/lenis';

export default function MainLayout() {
  return (
    <>
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
