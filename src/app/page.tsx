import ClientReviews from '@/components/ClientReviews';
import GetStartedSection from '@/components/GetStarted';
import HeroSection from '@/components/HeroSection';
import LoanProducts from '@/components/LoanProducts';
import OtherResources from '@/components/OtherResources';
import PastProjects from '@/components/PastProjects';
import WhereWeLend from '@/components/WhereWeLend';
import WorkWithUs from '@/components/WorkWithUs';


export default function HomePage() {
  return (
    <main>

      <HeroSection />
      <LoanProducts />
      <WhereWeLend />
      <ClientReviews />
      <PastProjects />
      <WorkWithUs />
      <OtherResources />
      <GetStartedSection />

    </main>


  );
}
