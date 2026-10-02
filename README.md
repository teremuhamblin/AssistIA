🧠⚔️ AssistIA v5.1 — Tactical IA Framework

<div align="left">

<img src="https://img.shields.io/badge/Version-5.1-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/Status-Operational-green?style=for-the-badge" />
<img src="https://img.shields.io/badge/Doctrine-MIL--STD--IA--5.1-black?style=for-the-badge" />
<img src="https://img.shields.io/badge/Node-20%2B-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />

</div>

</div>

`
██████╗  ███████╗ ███████╗ ███████╗ ████████╗██╗██╗   ██╗ █████╗
██╔══██╗ ██╔════╝ ██╔════╝ ██╔════╝ ╚══██╔══╝██║██║   ██║██╔══██╗
██████╔╝ █████╗   ███████╗ ███████╗    ██║   ██║██║   ██║███████║
██╔══██╗ ██╔══╝   ╚════██║ ╚════██║    ██║   ██║╚██╗ ██╔╝██╔══██║
██║  ██║ ███████╗ ███████║ ███████║    ██║   ██║ ╚████╔╝ ██║  ██║
╚═╝  ╚═╝ ╚══════╝ ╚══════╝ ╚══════╝    ╚═╝   ╚═╝  ╚═══╝  ╚═╝  ╚═╝
AssistIA v5.1 — Tactical IA Framework
`

---

✅ État du projet (v5.1)

- ✔️ Passage en v5.1  
- ✔️ Core Engine amélioré (statut enrichi, uptime, OS, Node)  
- ✔️ Architecture modulaire renforcée  
- ✔️ Workflow GitHub Action v5.1  
- ✔️ .npmrc militaire v5.1  
- ✔️ Manifest.in intégré  
- ✔️ Badges premium centrés à gauche  
- ✔️ Style militaire avancé  
- ✔️ Prêt pour la version BlackOps v5.2

---

🧩 Fonctionnalités principales

- ⚙️ Core Engine IA v5.1  
- 🛰️ CLI AssistIA (prévu v5.2)  
- 🛡️ Sécurité renforcée (npmrc + workflows)  
- 📦 Publication automatique GitHub Packages  
- 📡 Exports ESM propres  
- 🧠 Architecture modulaire IA / Ops / GitOps  

---

🗂️ Structure du projet (v5.1)

`ascii
assistia/
│
├── src/
│   ├── index.js          # Core Engine v5.1
│   ├── core/
│   │   └── engine.js     # (v5.2)
│   └── cli/
│       └── assistia.js   # (v5.2)
│
├── docs/
│   └── ...               # Documentation militaire
│
├── scripts/
│   └── ...               # Scripts tactiques
│
├── manifest.in           # Inclusion des fichiers pour packaging
├── package.json          # v5.1 militaire
├── .npmrc                # v5.1 sécurisé
├── .gitignore            # militaire
└── README.md             # ce fichier
`

---

⚙️ Core Engine — index.js v5.1

`js
import os from "node:os";
import { performance } from "node:perf_hooks";

export const status = () => ({
  system: "AssistIA — ONLINE",
  version: "5.1.0",
  doctrine: "MIL-STD-IA-5.1",
  signature: "TACTICAL OPS READY",
  uptime_ms: performance.now().toFixed(0),
  hostname: os.hostname(),
  platform: os.platform(),
  node: process.version
});

export const init = () => {
  console.log("AssistIA v5.1 — Tactical IA Framework");
  return status();
};

export default { status, init };
`

---

📦 package.json — AssistIA v5.1

`json
{
  "name": "@teremu/assistia",
  "version": "5.1.0",
  "description": "AssistIA — Framework militaire modulaire pour opérations IA, GitOps et automatisation tactique.",
  "type": "module",
  "main": "src/index.js",
  "exports": {
    ".": "./src/index.js",
    "./core": "./src/core/engine.js",
    "./cli": "./src/cli/assistia.js"
  },
  "bin": {
    "assistia": "src/cli/assistia.js"
  },
  "files": ["src/", "docs/", "scripts/", "LICENSE", "README.md"],
  "scripts": {
    "start": "node src/index.js",
    "assistia": "node src/cli/assistia.js",
    "lint": "eslint src/",
    "build": "echo 'AssistIA v5.1 — build opérationnel terminé'",
    "prepublishOnly": "npm run lint && npm run build"
  },
  "author": "Teremu",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/Teremu/AssistIA.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  },
  "engines": {
    "node": ">=20"
  }
}
`

---

🛡️ Workflow GitHub Action — Publish AssistIA v5.1

`yaml
name: AssistIA v5.1 — Publish Package

on:
  workflow_dispatch:

permissions:
  contents: write
  packages: write

jobs:
  publish:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://npm.pkg.github.com/

      - name: Configure npm
        run: |
          echo "@teremu:registry=https://npm.pkg.github.com/" >> ~/.npmrc
          echo "//npm.pkg.github.com/:authToken=${{ secrets.GITHUBTOKEN }}" >> ~/.npmrc

      - name: Install dependencies
        run: npm install

      - name: Verify package
        run: npm pack --dry-run

      - name: Publish AssistIA package
        env:
          NODEAUTHTOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: npm publish --access public
`

---

📄 manifest.in

`text
include README.md
include LICENSE
recursive-include src *
recursive-include docs *
recursive-include scripts *
`

---

📊 Graphique ASCII — Architecture AssistIA v5.1

`ascii
          ┌──────────────────────────────┐
          │        AssistIA v5.1         │
          └──────────────────────────────┘
                     ▲        ▲
                     │        │
        ┌────────────┘        └────────────┐
        │                                   │
┌──────────────┐                    ┌──────────────┐
│   Core Engine │                    │     CLI      │
│     v5.1      │                    │    v5.2      │
└──────────────┘                    └──────────────┘
        ▲                                   ▲
        │                                   │
┌──────────────┐                    ┌──────────────┐
│   Modules     │                    │   GitOps      │
│    v5.2       │                    │    v5.2       │
└──────────────┘                    └──────────────┘
`

---

🚀 Installation

`bash
npm install @teremu/assistia
`

---

🧠 Utilisation

`js
import AssistIA from "@teremu/assistia";

console.log(AssistIA.status());
AssistIA.init();
`

---

🏁 Roadmap v5.x

- ✔️ v5.1 — Core Engine amélioré  
- ⬜ v5.2 — CLI militaire complet  
- ⬜ v5.3 — Modules IA (ops, intel, security)  
- ⬜ v5.4 — BlackOps Edition (stealth mode)  

---

🧑‍✈️ Auteur
Teremu — The MadDoG.tmdg  
Architecte militaire du code
