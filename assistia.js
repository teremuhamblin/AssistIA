// ────────────────────────────────────────────────
// AssistIA v5.2 — ALL-IN-ONE Tactical CLI (ROOT)
// Doctrine : MIL-STD-IA-5.2
// Signature : QUANTUM ERA READY
// Modules : OPS / DIAG / SYS / NET
// ANSI Colors : ENABLED
// ────────────────────────────────────────────────

import { init, status } from "./engine.js";
import os from "node:os";
import { performance } from "node:perf_hooks";

// ANSI colors
const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m"
};

// Banner Quantum ERA
const banner = `
${C.cyan}${C.bold}╔══════════════════════════════════════════════════╗
║            ASSISTIA — QUANTUM ERA CLI            ║
╚══════════════════════════════════════════════════╝${C.reset}
`;

// OPS — opérations tactiques
const ops = () => {
  console.log(`${C.yellow}[OPS] Niveau tactique : ONLINE${C.reset}`);
  console.log({
    ops_mode: "TACTICAL",
    latency_ms: performance.now().toFixed(0),
    node: process.version
  });
};

// DIAG — diagnostic système
const diag = () => {
  console.log(`${C.green}[DIAG] Diagnostic système Quantum ERA${C.reset}`);
  console.log({
    hostname: os.hostname(),
    platform: os.platform(),
    cpus: os.cpus().length,
    memory_gb: (os.totalmem() / 1e9).toFixed(2)
  });
};

// SYS — informations système
const sys = () => {
  console.log(`${C.cyan}[SYS] Informations système${C.reset}`);
  console.log({
    uptime_s: os.uptime(),
    tmp_dir: os.tmpdir(),
    home: os.homedir()
  });
};

// NET — informations réseau
const net = () => {
  console.log(`${C.red}[NET] Interfaces réseau${C.reset}`);
  console.log(os.networkInterfaces());
};

// Commandes principales
const commands = {
  init: () => {
    console.log(banner);
    const s = init();
    console.log(`${C.green}[CLI] Moteur Quantum ERA initialisé.${C.reset}`);
    console.log(s);
  },

  status: () => {
    console.log(banner);
    const s = status();
    console.log(`${C.cyan}[CLI] Statut opérationnel :${C.reset}`);
    console.log(s);
  },

  ops,
  diag,
  sys,
  net,

  help: () => {
    console.log(banner);
    console.log(`${C.bold}Commandes disponibles :${C.reset}`);
    console.log(`
  assistia init      → Initialisation du moteur Quantum ERA
  assistia status    → Statut du moteur
  assistia ops       → Opérations tactiques
  assistia diag      → Diagnostic système
  assistia sys       → Informations système
  assistia net       → Informations réseau
  assistia help      → Aide CLI
`);
  }
};

// Parsing d’arguments
const args = process.argv.slice(2);
const cmd = args[0];

if (!cmd || !commands[cmd]) {
  commands.help();
} else {
  commands[cmd]();
}

export default commands;
