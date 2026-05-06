import DataTable from "@/components/DataTable";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trendingCoins: TrendingCoin[] = [
  {
    item: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "btc",
      market_cap_rank: 1,
      thumb: "/logo.svg",
      large: "/logo.svg",
      data: {
        price: 89000,
        price_change_percentage_24h: {
          usd: 2.34,
        },
      },
    },
  },
  {
    item: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "eth",
      market_cap_rank: 2,
      thumb: "/converter.svg",
      large: "/converter.svg",
      data: {
        price: 4300,
        price_change_percentage_24h: {
          usd: -1.12,
        },
      },
    },
  },
  {
    item: {
      id: "solana",
      name: "Solana",
      symbol: "sol",
      market_cap_rank: 5,
      thumb: "/logo.svg",
      large: "/logo.svg",
      data: {
        price: 190,
        price_change_percentage_24h: {
          usd: 4.07,
        },
      },
    },
  },
];

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      return (
        <Link href={`/coin/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      )
    },
  },
  {
    header: '24h Change',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
      return <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
        <p>{isTrendingUp ? <TrendingUp /> : <TrendingDown />}</p>
        {item.data.price_change_percentage_24h.usd}%
      </div>
    },
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) => {
      const item = coin.item;
      return <p>${item.data.price}</p>
    },
  }
];

export default function Home() {
  return (
    <main className="main-container">
      <section className="home-grid">
        <div id="coin-overview">
          <div className="header pt-2">
            <Image 
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" 
              alt="Bitcoin image"
              width={56}
              height={56}
            />
            <div className="info">
              <p>Bitcoin / BTC</p>
              <h1> $89,000.00 </h1>
            </div>
          </div>
        </div>
        <p>Trending Coins</p>
        <DataTable
          data={trendingCoins}
          columns={columns}
          rowKey={(coin) => coin.item.id}
        />
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>categories</p>
      </section>
    </main>
  );
}
