import CoinOverview from "@/components/Home/CoinOverview";
import { CoinOverviewFallback, TrendingCoinsFallback } from "@/components/Home/FallBack";
import TrendingCoins from "@/components/Home/TrendingCoins";
import { Suspense } from "react";

const Home = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>categories</p>
      </section>
    </main>
  );
};

export default Home;
