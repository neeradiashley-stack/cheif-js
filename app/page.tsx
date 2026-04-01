import Navbar from '@/components/Navbar';
import ProfileHeader from '@/components/ProfileHeader';
import SectionTabs from '@/components/SectionTabs';
import OverviewBanner from '@/components/OverviewBanner';
import KeyDetails from '@/components/KeyDetails';
import Cuisines from '@/components/Cuisines';
import WorkExperience from '@/components/WorkExperience';
import Verification from '@/components/Verification';
import Sidebar from '@/components/Sidebar';
import OtherStaff from '@/components/OtherStaff';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <ProfileHeader />
        <SectionTabs />
        <div className="page-body">
          <div className="content-col">
            <OverviewBanner />
            <KeyDetails />
            <Cuisines />
            <WorkExperience />
            <Verification />
          </div>
          <Sidebar />
        </div>
        <OtherStaff />
      </div>
      <Footer />
      <Toast />
    </>
  );
}
