# cryptocurrency-info

All cryptocurrencies meta information.

## How to use

```javascript
/* eslint-disable import/no-unresolved,no-console */
const { getCurrencyInfo } = require("cryptocurrency-info");

console.info(getCurrencyInfo("BTC"));
```

## API Manual

There is only one API in this library:

```typescript
/**
 * Get the currency info.
 *
 * @param symbol The currency symbol, e.g., BTC, ETH, EOS, USDT, etc.
 * @returns The CurrencyInfo
 */
export declare function getCurrencyInfo(symbol: string): CurrencyInfo;
```

Which returns an `CurrencyInfo`:

```typescript
export interface CurrencyInfo {
  symbol: string;
  category: "coin" | "token";
  platform?: string; // Only tokens have platforms, coins don't
}
```
