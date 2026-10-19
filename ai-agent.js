/* Avia — Scripted AI Bot for AviaSwap (€SWAP) */
(function () {
  'use strict';
  var state = { isOpen: false };
  function el(id) { return document.getElementById(id); }

  var CONTRACT = '3B6aBYVxQLzVSsrYJtZnmFhbR3tzA6TZoAhfJYmhgAnM';
  var POOL = '5Kpq5umZRNjsvQUhF3voPMr6PD9w1U2LxiFWhLpNj9ov';
  var AUDT = '4EqVmfTc2ftfdcXCbR95UEsoMdab3WstSj5MEPVW2kqb';
  var PROOF = '5rzYSSWCgiY5dUf7JG1i1fBUkNWbYA51fuzWhMYx6t6A';
  var CERT = 'BZ7ZJA3FgWshS9fqhhavfBXZ8165aC7h4FUhCrztcQjg';

  var KB = {
    'what': {
      title: 'What is AviaSwap (€SWAP)?',
      answer: [
        '**AviaSwap (€SWAP)** — the Interest Rate Swap Token of AviaTrust on Solana.',
        '',
        '€SWAP lets aircraft operators and lessors **hedge interest-rate risk** on aircraft financing.',
        '',
        '**Use case:**',
        '· Airline finances a €B787 with a floating-rate loan',
        '· Fear: rates go up → payments rise',
        '· Solution: buy €SWAP → pay fixed, receive floating',
        '· Result: predictable cashflow',
        '',
        '**How it works:**',
        '· Notional amount encoded on-chain',
        '· Fixed rate locked in €SWAP metadata',
        '· Floating leg settles via oracle',
        '· Auto-settled at expiry in €ESCR',
        '',
        '**Key point:** No €AUDT — no €SWAP. Every swap is gated by on-chain audit.',
        '',
        '📄 Contract: `' + CONTRACT + '`',
        '⛓ Chain: Solana (Token-2022, 1% transfer fee + Transfer Hook)'
      ].join('\n')
    },
    'audit': {
      title: 'How €SWAP is gated by audit',
      answer: [
        '**Three gates — enforced by Transfer Hook (code, not policy):**',
        '',
        '**Gate 1 — €AUDT burn**',
        '· Burn X €AUDT per swap creation',
        '· No burn → mint blocked',
        '',
        '**Gate 2 — €PROOF issue**',
        '· €PROOF certificate minted to the holder',
        '· Transfer requires valid €PROOF',
        '· Expired → transfer frozen automatically',
        '',
        '**Gate 3 — €CERT stake**',
        '· Trader must lock €CERT',
        '· Anti-spam + skin-in-the-game',
        '',
        '🔍 €AUDT: `' + AUDT + '`',
        '✅ €PROOF: `' + PROOF + '`',
        '💎 €CERT: `' + CERT + '`'
      ].join('\n')
    },
    'buy': {
      title: 'How to buy €SWAP?',
      answer: [
        '**Buy AviaSwap (€SWAP) on Solana:**',
        '',
        '**1. OpenSea**',
        '→ https://opensea.io/token/solana/' + CONTRACT,
        '',
        '**2. GeckoTerminal**',
        '→ https://www.geckoterminal.com/solana/pools/' + POOL,
        '',
        '**3. Binance Web3**',
        '→ https://app.binance.com/uni-qr/web3-token-details?tokenCA=' + CONTRACT + '&binanceChainId=CT_501&chain=sol',
        '',
        '💡 Recommend OpenSea or Jupiter for lowest slippage.'
      ].join('\n')
    },
    'contract': {
      title: 'Contract & Pool',
      answer: [
        '**AviaSwap (€SWAP) Contract**',
        '',
        '`' + CONTRACT + '`',
        '',
        '**Meteora DAMM V2 Pool**',
        '`' + POOL + '`',
        '',
        '**Verify on:**',
        '· Solscan: https://solscan.io/token/' + CONTRACT,
        '· GeckoTerminal: https://www.geckoterminal.com/solana/pools/' + POOL,
        '· OpenSea: https://opensea.io/token/solana/' + CONTRACT
      ].join('\n')
    },
    'price': {
      title: 'Price & Target',
      answer: [
        '**AviaSwap (€SWAP) Price**',
        '',
        '· Launch price: **€0.01**',
        '· Current: **$0.01153** (Oct 2026)',
        '· Community target: **×100 → €1.00**',
        '',
        '**Live price:**',
        '· GeckoTerminal: https://www.geckoterminal.com/solana/pools/' + POOL,
        '· OpenSea: https://opensea.io/token/solana/' + CONTRACT,
        '',
        '⚠️ The ×100 is a community-stated target, not a promise.'
      ].join('\n')
    },
    'ecosystem': {
      title: 'What is AviaTrust?',
      answer: [
        '**AviaTrust — aviation tokenization ecosystem on Solana.**',
        '',
        '**L1 — Aircraft Layer:**',
        '· €B787 · €A350 · €C929 · €A220 · €E195 · €IL96',
        '',
        '**L2 — Financial Layer:**',
        '· **€ESCR** — Escrow',
        '· **€DLCT** — Tokenized Documentary LC',
        '· **€SBLCT** — Standby LC',
        '· **€LUMP** — Lump Sum',
        '',
        '**L3 — Audit Layer:**',
        '· **€AUDT** — Audit working unit',
        '· **€PROOF** — Audit certificate',
        '· **€CERT** — Revenue share',
        '',
        '**L4 — Derivatives Layer (you are here):**',
        '· **€SWAP** — Interest Rate Swap',
        '· **€FWD** — Aircraft Forward',
        '· **€RIGHT** — Purchase Right',
        '· **€FLEET** — Fleet Futures'
      ].join('\n')
    },
    'risk': {
      title: 'Is €SWAP risky?',
      answer: [
        '**Honest answer: YES.**',
        '',
        '**Known risks:**',
        '· Interest-rate risk (if hedged wrong)',
        '· Counterparty risk (mitigated by €PROOF)',
        '· Liquidity risk on secondary market',
        '· Oracle risk on floating leg',
        '',
        '**What reduces risk:**',
        '· €PROOF gate — no unverified counterparties',
        '· €CERT staking — skin in the game',
        '· Insurance pool — covers defaults',
        '· Mint/Freeze authority disabled',
        '',
        '⚠️ **Not financial advice.** Derivatives can lose 100% of value.'
      ].join('\n')
    }
  };

  var SUGGESTIONS = [
    { key: 'what',      label: '🔄 What is €SWAP?' },
    { key: 'audit',     label: '🔒 How it is audited' },
    { key: 'buy',       label: '🛒 How to buy?' },
    { key: 'contract',  label: '🔗 Contract & Pool' },
    { key: 'price',     label: '💰 Price & Target' },
    { key: 'ecosystem', label: '🌍 AviaTrust' },
    { key: 'risk',      label: '⚠️ Is it risky?' }
  ];

  function createUI() {
    var btn = document.createElement('button');
    btn.id = 'avia-btn';
    btn.className = 'avia-btn';
    btn.innerHTML = '<span class="avia-btn-icon">🔄</span><span class="avia-btn-label">Avia</span>';
    document.body.appendChild(btn);

    var win = document.createElement('div');
    win.id = 'avia-window';
    win.className = 'avia-window';
    win.innerHTML = [
      '<div class="avia-header">',
      '  <div class="avia-header-left">',
      '    <img src="swap_logo.png" alt="Avia" class="avia-avatar" onerror="this.style.display=\'none\'" />',
      '    <div>',
      '      <div class="avia-name">Avia</div>',
      '      <div class="avia-status">AI assistant · €SWAP</div>',
      '    </div>',
      '  </div>',
      '  <button class="avia-close" id="avia-close">×</button>',
      '</div>',
      '<div class="avia-messages" id="avia-messages"></div>',
      '<div class="avia-suggestions" id="avia-suggestions"></div>',
      '<div class="avia-external">',
      '  <a href="https://opensea.io/token/solana/' + CONTRACT + '" target="_blank">🖼️ OpenSea</a>',
      '  <a href="https://t.me/aviatrust" target="_blank">📱 TG</a>',
      '  <a href="https://x.com/aviatrust" target="_blank">🐦 X</a>',
      '</div>',
      '<div class="avia-footer">Scripted assistant · Not financial advice</div>'
    ].join('');
    document.body.appendChild(win);

    el('avia-btn').addEventListener('click', toggle);
    el('avia-close').addEventListener('click', toggle);

    addMessage('agent', 'Hi! I am Avia — assistant for AviaSwap (€SWAP). Pick a topic below.');
    renderSuggestions();
  }

  function renderSuggestions() {
    var box = el('avia-suggestions');
    if (!box) return;
    box.innerHTML = '';
    SUGGESTIONS.forEach(function (item) {
      var b = document.createElement('button');
      b.className = 'avia-suggestion';
      b.textContent = item.label;
      b.addEventListener('click', function () { showAnswer(item.key); });
      box.appendChild(b);
    });
  }

  function addMessage(role, text) {
    var box = el('avia-messages');
    if (!box) return;
    var msg = document.createElement('div');
    msg.className = 'avia-msg avia-msg-' + role;
    var bubble = document.createElement('div');
    bubble.className = 'avia-bubble';
    bubble.innerHTML = formatText(text);
    msg.appendChild(bubble);
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  function formatText(text) {
    var safe = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    safe = safe.replace(/`([^`]+)`/g, '<code>$1</code>');
    safe = safe.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    safe = safe.replace(/\n/g, '<br />');
    safe = safe.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    return safe;
  }

  function showAnswer(key) {
    var item = KB[key];
    if (!item) { addMessage('agent', 'Sorry, no info on that.'); return; }
    addMessage('user', item.title);
    setTimeout(function () { addMessage('agent', item.answer); }, 250);
  }

  function toggle() {
    state.isOpen = !state.isOpen;
    var win = el('avia-window');
    var btn = el('avia-btn');
    if (state.isOpen) { win.classList.add('avia-open'); btn.classList.add('avia-btn-hidden'); }
    else { win.classList.remove('avia-open'); btn.classList.remove('avia-btn-hidden'); }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createUI);
  else createUI();
})();
