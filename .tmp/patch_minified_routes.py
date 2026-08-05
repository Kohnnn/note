from pathlib import Path

root = Path(r"C:/Users/Admin/Desktop/PersonalWebsite/interactive-note/interactive-explanation")

# blockchain main
path = root / "blockchain/index.html"
text = path.read_text(encoding="utf-8")
old = '</section><main class="story-lab-main"><div class="container-fluid" id="blockchain-workbench">'
new = '</section><section class="story-callout story-lab-panel" data-story-callout="next"><div class="story-lab-grid"><div><p class="story-lab-kicker">Read the states</p><ul class="story-checklist"><li><span class="story-checklist__step">1</span><div><strong>Green blocks</strong> are locally valid again after mining.</div></li><li><span class="story-checklist__step">2</span><div><strong>Red blocks</strong> still trust an older previous hash and need their own repair step.</div></li><li><span class="story-checklist__step">3</span><div><strong>Scroll right</strong> to keep following the cascade into later blocks.</div></li></ul></div><div><p class="story-lab-kicker">Keep going</p><p class="story-shell-caption">The row is horizontally scrollable because the later blocks matter. Use the distributed view when you want to compare competing peers, or jump into keys and signatures once the chain state feels concrete.</p><div class="story-hero__actions"><a class="story-button story-button--secondary" href="./distributed.html">Open distributed view</a><a class="story-button story-button--secondary" href="../public-private-keys/">Open keys and signatures</a></div></div></div></section><main class="story-lab-main"><div class="container-fluid" id="blockchain-workbench">'
if old not in text:
    raise SystemExit("blockchain shell insertion point not found")
text = text.replace(old, new, 1)
old = "  setup(3, 1);\n  setup(4, 1);\n  setup(5, 1);\n});"
new = "  setup(3, 1);\n  setup(4, 1);\n  setup(5, 1);\n\n  $('.row-horizon').attr({ tabindex: '0', role: 'region', 'aria-label': 'Scrollable blockchain row' });\n  $('textarea[id$=\"data\"]').attr('placeholder', 'Type or paste payload text here to invalidate the current hash.');\n  $('.ladda-button').attr('title', 'Mine this block to search for a valid nonce and repair only this block.');\n});"
if old not in text:
    raise SystemExit("blockchain script insertion point not found")
text = text.replace(old, new, 1)
path.write_text(text, encoding="utf-8")

# blockchain distributed
path = root / "blockchain/distributed.html"
text = path.read_text(encoding="utf-8")
text = text.replace('<link rel="stylesheet" href="./stylesheets/blockchain.css"><script src="./javascripts/lib/jquery.min.js"></script>', '<link rel="stylesheet" href="./stylesheets/blockchain.css"><link rel="stylesheet" href="../shared/engineering-sandbox.css"><script src="./javascripts/lib/jquery.min.js"></script>', 1)
text = text.replace('<link rel="stylesheet" href="../shared/public-footer.css"><script defer src="../shared/public-footer.js"></script></head><body data-reference-url="https://andersbrownworth.com/blockchain/" data-reference-text="Blockchain Demo" data-footer-label="Original page">', '<link rel="stylesheet" href="../shared/public-footer.css"><script defer src="../shared/engineering-sandbox.js"></script><script defer src="../shared/public-footer.js"></script></head><body data-reference-url="https://andersbrownworth.com/blockchain/" data-reference-text="Blockchain Demo" data-footer-label="Original page" data-story-shell="engineering-sandbox" data-story-variant="lab" data-story-family="anders-lab" data-story-nav="none" data-story-route="blockchain-distributed">', 1)
old = '</nav><div class="container-fluid">'
new = '</nav><section class="story-hero story-hero--tight"><p class="story-hero__eyebrow">Engineering Sandbox lab · distributed consensus</p><div class="story-hero__grid"><div><h1 class="story-hero__title">Split the same chain across peers, then watch tampering turn into disagreement.</h1><p class="story-hero__summary">This view works best after the single-chain demo. Compare Peer A, Peer B, and the attacker row as competing claims about history. The important move is seeing which branch repairs locally, which branch still diverges, and why consensus is more than one valid hash.</p><div class="story-hero__meta"><span class="story-chip">Compare peers side by side</span><span class="story-chip">Watch disagreement propagate</span><span class="story-chip">Return to the main chain when needed</span></div></div><div class="story-callout story-hero__panel" data-story-callout="play"><span class="story-callout__label">Try this first</span><p>Change a block in Peer A, then compare the same block in Peer B before mining anything. Once the histories drift, use the mine buttons to see how hard it is to restore agreement instead of only repairing one branch.</p><div class="story-hero__actions"><a class="story-button" href="./">Back to blockchain</a><a class="story-button story-button--secondary" href="../blockchain-101-combined-flow/">Open combined flow</a></div></div></div></section><section class="story-callout story-lab-panel" data-story-callout="engineering"><div class="story-lab-grid"><div><p class="story-lab-kicker">What the peers mean</p><ul class="story-checklist"><li><span class="story-checklist__step">1</span><div><strong>Peer A</strong> is one history proposal you can tamper with directly.</div></li><li><span class="story-checklist__step">2</span><div><strong>Peer B</strong> gives you a clean comparison branch that may keep different data.</div></li><li><span class="story-checklist__step">3</span><div><strong>The third row</strong> makes the consensus problem visible instead of abstract.</div></li></ul></div><div><p class="story-lab-kicker">Use the layout</p><p class="story-shell-caption">This row is horizontally scrollable for the same reason the main blockchain row is: later blocks still matter. Move sideways when the early peer state makes sense so you can keep reading divergence as it propagates.</p></div></div></section><main class="story-lab-main"><div class="container-fluid" id="blockchain-distributed-workbench">'
if old not in text:
    raise SystemExit("distributed shell insertion point not found")
text = text.replace(old, new, 1)
old = '</div><script>$(function() {'
if old not in text:
    raise SystemExit("distributed main close point not found")
text = text.replace(old, '</div></main><script>$(function() {', 1)
old = "  setup(4, 3);\n  setup(5, 3);\n});"
new = "  setup(4, 3);\n  setup(5, 3);\n\n  $('.row-horizon').attr({ tabindex: '0', role: 'region', 'aria-label': 'Scrollable distributed blockchain row' });\n  $('textarea[id$=\"data\"]').attr('placeholder', 'Type or paste payload text here to fork this peer history.');\n  $('.ladda-button').attr('title', 'Mine this block to repair only the current peer branch.');\n});"
if old not in text:
    raise SystemExit("distributed script insertion point not found")
text = text.replace(old, new, 1)
path.write_text(text, encoding="utf-8")

# public/private keys
path = root / "public-private-keys/index.html"
text = path.read_text(encoding="utf-8")
old = '</main><script>var EC = elliptic.elliptic().ec;'
new = '</main><section class="story-callout story-lab-panel" data-story-callout="next"><div class="story-lab-grid"><div><p class="story-lab-kicker">Continue the flow</p><p class="story-shell-caption">This page only establishes the identity layer. The real pay-off happens when you carry the same keypair into message signing, transaction construction, and the blockchain view that consumes signed data.</p><div class="story-hero__actions"><a class="story-button" href="./signatures/">Open signatures</a><a class="story-button story-button--secondary" href="./transaction/">Open transaction flow</a></div></div><div><p class="story-lab-kicker">What to do next</p><ul class="story-checklist"><li><span class="story-checklist__step">1</span><div><strong>Keep this keypair.</strong> The later tabs reuse the same identity.</div></li><li><span class="story-checklist__step">2</span><div><strong>Sign a message.</strong> Create a payload and attach proof that it came from this key.</div></li><li><span class="story-checklist__step">3</span><div><strong>Mutate and verify.</strong> Change the data and watch trust collapse immediately.</div></li></ul></div></div></section><script>var EC = elliptic.elliptic().ec;'
if old not in text:
    raise SystemExit("keys continuation insertion point not found")
text = text.replace(old, new, 1)
old = "$(function() {\n  $('#randomButton').click(random);"
new = "$(function() {\n  $('#privateKey').attr('placeholder', 'Generate a fresh private key or paste one to resume.');\n  $('#publicKey').attr('placeholder', 'Public key appears here automatically.');\n  $('#randomButton').click(random);"
if old not in text:
    raise SystemExit("keys script insertion point not found")
text = text.replace(old, new, 1)
path.write_text(text, encoding="utf-8")

print("updated minified route files")
