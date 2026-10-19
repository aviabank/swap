# AviaSwap (SWAP) — Interest Rate Swap Token

**Derivatives Layer of AviaTrust on Solana.**

First derivative instrument of the AviaTrust ecosystem. On-chain interest-rate hedging for aircraft financing, gated by three-layer audit (€AUDT → €PROOF → €CERT).

---

## 📜 Contract
3B6aBYVxQLzVSsrYJtZnmFhbR3tzA6TZoAhfJYmhgAnM

**Pool (Meteora DAMM V2):**
5Kpq5umZRNjsvQUhF3voPMr6PD9w1U2LxiFWhLpNj9ov

**Pair:** €SWAP / USDC
**Chain:** Solana
**Standard:** Token-2022 (with Transfer Fee + Transfer Hook)
**Transfer Fee:** 1%
**Decimals:** 9
**Mint Authority:** Disabled
**Freeze Authority:** Disabled
**Launch Price:** $0.01153
**Target:** ×100 (community-stated)

---

## 🔄 What is AviaSwap?

AviaSwap (€SWAP) is an **Interest Rate Swap Token** — a financial derivative that lets aircraft operators and lessors hedge interest-rate risk on aircraft financing.

**How it works:**

1. Airline finances a €B787 with a floating-rate loan
2. Buys €SWAP → pays fixed, receives floating
3. Rates rise → floating leg pays more → net neutral
4. Rates fall → floating leg pays less → but fixed locked in
5. Cashflow becomes predictable

**Key point:** No €AUDT — no €SWAP. Every swap is gated by on-chain audit.

---

## 🛡️ Three Audit Gates (Transfer Hook Enforced)

| Gate | Token | Function |
|------|-------|----------|
| 1 | €AUDT | Burn required before mint |
| 2 | €PROOF | Verify on every transfer |
| 3 | €CERT | Min stake required to trade |

Enforced by **Token-2022 Transfer Hook** — code, not policy.

---

## 📁 Repository Structure

| File | Description |
|------|-------------|
| `index.html` | Home page — hero, buy, about, ecosystem |
| `buy.html` | Buy page — 4 payment methods, amount selector |
| `trade.html` | Trade page — live chart, pool info, DEX links |
| `fintech1.html` | 4 swap models — Fixed/Float, Reverse, Basis, Amortizing |
| `fintech2.html` | Mechanics — Token-2022 specs, 3 gates, lifecycle |
| `staking.html` | Stake €CERT for access — 3 tiers |
| `governance.html` | Vote on swap parameters |
| `ecosystem.html` | Full AviaTrust stack — 17 tokens |
| `counter.js` | Live visitor/client counter |
| `ai-agent.css` | Styles for the Avia AI assistant |
| `ai-agent.js` | Scripted AI assistant with knowledge base |

---

## 🎨 Media Files (add to repository)

| File | Purpose |
|------|---------|
| `swap_logo.png` | Logo, favicon, avatar |
| `swap_hero_bg.png` | Hero background |
| `swap_coin.png` | 3D coin in hero visual |
| `swap_chart.png` | Fixed ↔ Float mechanics chart |
| `swap_fintech_diagram.png` | Hedging flow diagram |
| `swap_promo_video.mp4` | Promo video |

---

## 🔗 Links

| Platform | URL |
|----------|-----|
| OpenSea | https://opensea.io/token/solana/3B6aBYVxQLzVSsrYJtZnmFhbR3tzA6TZoAhfJYmhgAnM |
| GeckoTerminal | https://www.geckoterminal.com/solana/pools/5Kpq5umZRNjsvQUhF3voPMr6PD9w1U2LxiFWhLpNj9ov |
| Binance Web3 | https://app.binance.com/uni-qr/web3-token-details?tokenCA=3B6aBYVxQLzVSsrYJtZnmFhbR3tzA6TZoAhfJYmhgAnM&binanceChainId=CT_501&chain=sol |
| Solscan | https://solscan.io/token/3B6aBYVxQLzVSsrYJtZnmFhbR3tzA6TZoAhfJYmhgAnM |
| Birdeye | https://birdeye.so/token/3B6aBYVxQLzVSsrYJtZnmFhbR3tzA6TZoAhfJYmhgAnM?chain=solana |
| DexScreener | https://dexscreener.com/solana/5Kpq5umZRNjsvQUhF3voPMr6PD9w1U2LxiFWhLpNj9ov |

---

## 🌍 AviaTrust Ecosystem (17 tokens)

**Audit Layer:**
- €AUDT — Audit Token
- €PROOF — Proof Token
- €CERT — Cert Audit Revenue

**Financial Layer:**
- €ESCR — Escrow
- €DLCT — Documentary LC
- €SBLCT — Standby LC
- €LUMP — Lump Sum

**Derivatives Layer:**
- **€SWAP — AviaSwap ← you are here**
- €FWD — Aircraft Forward
- €RIGHT — Purchase Right
- €FLEET — Fleet Futures

**Aircraft Layer:**
- €B787, €A350, €C929, €A220, €E195, €IL96

---

## 🚀 Deploy

1. Create GitHub repository `swap`
2. Upload all files listed above
3. Add media files (logo, coin, chart, diagrams, video)
4. Enable GitHub Pages: **Settings → Pages → Source: main / root**
5. Site goes live at `https://aviabank.github.io/swap/`

---

## ⚠️ Legal Notice

€SWAP is a derivative instrument. Trading derivatives involves significant risk of loss.

In some jurisdictions, on-chain derivatives may require registration or licensing. Users are responsible for compliance.

Not financial advice. Only invest what you can afford to lose.

---

© 2026 AviaTrust. Built on Solana.
