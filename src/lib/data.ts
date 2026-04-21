export type RaffleRow = {
  year: number;
  organization: string;
  numRaffles: number | null;
  grossReceipts: number;
  toCharity: number;
};

export const RAFFLE_DATA: RaffleRow[] = [
  { year: 2024, organization: "Condors Community Foundation", numRaffles: 36, grossReceipts: 117220, toCharity: 58610 },
  { year: 2024, organization: "Los Angeles Dodgers Foundation", numRaffles: 90, grossReceipts: 5289610, toCharity: 2644805 },
  { year: 2024, organization: "Los Angeles Rams Foundation", numRaffles: 9, grossReceipts: 1548780, toCharity: 774390 },
  { year: 2024, organization: "San Francisco Giants Community Fund", numRaffles: 82, grossReceipts: 2104258, toCharity: 1052129 },
  { year: 2023, organization: "Anaheim Ducks Foundation", numRaffles: null, grossReceipts: 13227.84, toCharity: 6613.92 },
  { year: 2023, organization: "Condors Community Foundation", numRaffles: 28, grossReceipts: 84400, toCharity: 42200 },
  { year: 2023, organization: "Los Angeles Chargers Charities", numRaffles: 10, grossReceipts: 932380, toCharity: 466190 },
  { year: 2023, organization: "Los Angeles Dodgers Foundation", numRaffles: 84, grossReceipts: 4103698, toCharity: 2051849 },
  { year: 2023, organization: "Los Angeles Rams Foundation", numRaffles: null, grossReceipts: 163462, toCharity: 81731 },
  { year: 2023, organization: "Oakland A's Community Fund", numRaffles: null, grossReceipts: 3462, toCharity: 1731 },
  { year: 2023, organization: "San Francisco Giants Community Fund", numRaffles: 82, grossReceipts: 2073560, toCharity: 1036780 },
  { year: 2023, organization: "San Jose Sharks Foundation", numRaffles: 41, grossReceipts: 343730, toCharity: 171865 },
  { year: 2022, organization: "Anaheim Ducks Foundation", numRaffles: 44, grossReceipts: 636050, toCharity: 318025 },
  { year: 2022, organization: "Los Angeles Chargers Charities", numRaffles: 10, grossReceipts: 857615, toCharity: 428807.5 },
  { year: 2022, organization: "Los Angeles Rams Foundation", numRaffles: 14, grossReceipts: 3358350, toCharity: 1679175 },
  { year: 2022, organization: "San Diego Padres Foundation", numRaffles: 46, grossReceipts: 1141080, toCharity: 570540 },
  { year: 2022, organization: "San Francisco Giants Community Fund", numRaffles: null, grossReceipts: 1749640, toCharity: 874820 },
  { year: 2022, organization: "San Francisco 49ers Foundation", numRaffles: 12, grossReceipts: 1528059, toCharity: 764029.5 },
  { year: 2021, organization: "Anaheim Ducks Foundation", numRaffles: 44, grossReceipts: 519500, toCharity: 259750 },
  { year: 2021, organization: "Los Angeles Chargers Charities", numRaffles: 10, grossReceipts: 999420, toCharity: 499710 },
  { year: 2021, organization: "Los Angeles Dodgers Foundation", numRaffles: 65, grossReceipts: 2794350, toCharity: 1397175 },
  { year: 2021, organization: "Los Angeles Rams Foundation", numRaffles: null, grossReceipts: 694360, toCharity: 347180 },
  { year: 2021, organization: "Oakland A's Community Fund", numRaffles: 50, grossReceipts: 548430, toCharity: 274215 },
  { year: 2021, organization: "San Diego Padres Foundation", numRaffles: 46, grossReceipts: 1141080, toCharity: 570540 },
  { year: 2021, organization: "San Francisco 49ers Foundation", numRaffles: 801, grossReceipts: 801069, toCharity: 400534.5 },
  { year: 2021, organization: "San Francisco Giants Community Fund", numRaffles: null, grossReceipts: 975360, toCharity: 487680 },
  { year: 2020, organization: "LA Kings Care Foundation", numRaffles: 15, grossReceipts: 218505, toCharity: 109252.5 },
  { year: 2020, organization: "San Jose Sharks Foundation", numRaffles: 13, grossReceipts: 187810, toCharity: 93905 },
  { year: 2019, organization: "Golden State Warriors Community Foundation", numRaffles: null, grossReceipts: 390825, toCharity: 195412.5 },
  { year: 2019, organization: "Los Angeles Dodgers Foundation", numRaffles: 3, grossReceipts: 3867840, toCharity: 1933920 },
  { year: 2019, organization: "LA Kings Care Foundation", numRaffles: 39, grossReceipts: 551445, toCharity: 275722.5 },
  { year: 2019, organization: "Sacramento River Cats Foundation", numRaffles: 68, grossReceipts: 113, toCharity: 56.5 },
  { year: 2019, organization: "San Diego Padres Foundation", numRaffles: 59, grossReceipts: 975664, toCharity: 487832 },
  { year: 2019, organization: "San Francisco 49ers Foundation", numRaffles: 12, grossReceipts: 1491860, toCharity: 745930 },
  { year: 2019, organization: "San Francisco Giants Community Fund", numRaffles: 83, grossReceipts: 1664414, toCharity: 832207 },
  { year: 2018, organization: "66ers Foundation", numRaffles: 25, grossReceipts: 41750, toCharity: 20875 },
  { year: 2018, organization: "Anaheim Ducks Foundation", numRaffles: 44, grossReceipts: 778770, toCharity: 389385 },
  { year: 2018, organization: "Condors Community Foundation", numRaffles: 38, grossReceipts: 136140, toCharity: 68070 },
  { year: 2018, organization: "San Francisco Giants Community Fund", numRaffles: null, grossReceipts: 992261.75, toCharity: 496130.875 },
  { year: 2018, organization: "Hope Reigns Charity Foundation", numRaffles: 38, grossReceipts: 247155, toCharity: 123577.5 },
  { year: 2018, organization: "Los Angeles Chargers Charities", numRaffles: 6, grossReceipts: 123280, toCharity: 61640 },
  { year: 2018, organization: "Los Angeles Dodgers Foundation", numRaffles: null, grossReceipts: 3794805, toCharity: 1897425 },
  { year: 2018, organization: "LA Kings Care Foundation", numRaffles: 46, grossReceipts: 925835, toCharity: 462917.5 },
  { year: 2018, organization: "Los Angeles Rams Foundation", numRaffles: 11, grossReceipts: 427180, toCharity: 213590 },
  { year: 2018, organization: "San Diego Padres Foundation", numRaffles: 78, grossReceipts: 1087274, toCharity: 543637 },
  { year: 2018, organization: "Sacramento River Cats Foundation", numRaffles: 66, grossReceipts: 185823, toCharity: 92911.5 },
  { year: 2018, organization: "Sacramento Kings Foundation", numRaffles: 44, grossReceipts: 298290, toCharity: 149145 },
  { year: 2018, organization: "San Francisco 49ers Foundation", numRaffles: 759, grossReceipts: 759600, toCharity: 379800 },
  { year: 2018, organization: "San Jose Sharks Foundation", numRaffles: 49, grossReceipts: 891445, toCharity: 445722.5 },
  { year: 2017, organization: "Anaheim Ducks Foundation", numRaffles: null, grossReceipts: 216547, toCharity: 108273.5 },
  { year: 2017, organization: "San Francisco Giants Community Fund", numRaffles: null, grossReceipts: 1769762, toCharity: 832564 },
  { year: 2017, organization: "Hope Reigns Charity Foundation", numRaffles: null, grossReceipts: 310495, toCharity: 155247.5 },
  { year: 2017, organization: "LA Kings Care Foundation", numRaffles: null, grossReceipts: 728755, toCharity: 388465 },
  { year: 2017, organization: "Los Angeles Lakers Youth Foundation", numRaffles: null, grossReceipts: 93139, toCharity: 46569.5 },
  { year: 2017, organization: "Oakland A's Community Fund", numRaffles: null, grossReceipts: 216563.33, toCharity: 108281.665 },
  { year: 2017, organization: "Sacramento Kings Foundation", numRaffles: null, grossReceipts: 84780, toCharity: 42390 },
  { year: 2017, organization: "San Jose Sharks Foundation", numRaffles: null, grossReceipts: 1006540, toCharity: 503270 },
  { year: 2016, organization: "Anaheim Ducks Foundation", numRaffles: null, grossReceipts: 216547, toCharity: 108273.5 },
  { year: 2016, organization: "Condors Community Foundation", numRaffles: null, grossReceipts: 85888, toCharity: 42944 },
  { year: 2016, organization: "San Francisco Giants Community Fund", numRaffles: null, grossReceipts: 1421055, toCharity: 647166 },
  { year: 2016, organization: "Los Angeles Dodgers Foundation", numRaffles: null, grossReceipts: 774161.39, toCharity: 387080.695 },
  { year: 2016, organization: "San Diego Padres Foundation", numRaffles: null, grossReceipts: 73934, toCharity: 36967 },
  { year: 2016, organization: "San Jose Sharks Foundation", numRaffles: null, grossReceipts: 319430, toCharity: 148012.5 },
];

export function yearlyTotals() {
  const map = new Map<number, { year: number; gross: number; charity: number; orgs: number }>();
  for (const row of RAFFLE_DATA) {
    const cur = map.get(row.year) ?? { year: row.year, gross: 0, charity: 0, orgs: 0 };
    cur.gross += row.grossReceipts;
    cur.charity += row.toCharity;
    cur.orgs += 1;
    map.set(row.year, cur);
  }
  return Array.from(map.values()).sort((a, b) => a.year - b.year);
}

export function grandTotals() {
  return RAFFLE_DATA.reduce(
    (acc, r) => ({ gross: acc.gross + r.grossReceipts, charity: acc.charity + r.toCharity }),
    { gross: 0, charity: 0 }
  );
}

export function usd(n: number, opts: { compact?: boolean } = {}) {
  if (opts.compact) {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
    return `$${n.toFixed(0)}`;
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}
