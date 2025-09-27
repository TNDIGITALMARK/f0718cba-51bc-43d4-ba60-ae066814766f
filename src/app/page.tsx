import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedCategories } from '@/components/FeaturedCategories'
import { BusinessListings } from '@/components/BusinessListings'
import { Footer } from '@/components/Footer'

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCategories />
      <BusinessListings />
      <Footer />
    </div>
  );
}