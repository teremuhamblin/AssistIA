// ────────────────────────────────────────────────
// AssistIA v5.2 — Tactical Utilities (ROOT Edition)
// Doctrine : MIL-STD-IA-5.2
// Signature : QUANTUM ERA READY
// ────────────────────────────────────────────────

import os from "node:os";
import crypto from "node:crypto";

// Générateur d'identifiants tactiques
export const tacticalId = () => {
  return "OPS-" + crypto.randomBytes(4).toString("hex").toUpperCase();
};

// Informations système rapides
export const systemInfo = () => ({
  hostname: os.hostname(),
  platform: os.platform(),
  cpus: os.cpus().length,
  memory_gb: (os.totalmem() / 1e9).toFixed(2),
  uptime_s: os.uptime()
});

// Logger militaire Quantum ERA
export const log = (msg, level = "INFO") => {
  const stamp = new Date().toISOString();
  console.log(`[${level}] [${stamp}] ${msg}`);
};

// Vérification de sécurité basique
export const securityCheck = () => {
  const issues = [];

  if (os.totalmem() < 2e9) {
    issues.push("Mémoire insuffisante pour opérations IA tactiques.");
  }

  if (os.cpus().length < 2) {
    issues.push("CPU insuffisant pour Quantum ERA.");
  }

  return {
    secure: issues.length === 0,
    issues
  };
};

// Export principal
export default {
  tacticalId,
  systemInfo,
  log,
  securityCheck
};
