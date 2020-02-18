export interface CurrencyInfo {
  symbol: string;
  category: "coin" | "token";
  platform?: string; // Only tokens have platforms, coins don't
}

/**
 * Get the currency info.
 *
 * @param symbol The currency symbol, e.g., BTC, ETH, EOS, USDT, etc.
 * @returns The CurrencyInfo
 */
export declare function getCurrencyInfo(symbol: string): CurrencyInfo;
