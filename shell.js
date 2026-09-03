import { Terminal } from "https://cdn.jsdelivr.net/npm/@xterm/xterm@5.5.0/+esm";
import { FitAddon } from "https://cdn.jsdelivr.net/npm/@xterm/addon-fit@0.10.0/+esm";

const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[38;5;244m",
  name: "\x1b[38;5;62m",
  path: "\x1b[38;5;33m",
};

const osc = (text, href) => `\x1b]8;;${href}\x1b\\${text}\x1b]8;;\x1b\\`;
const PLAIN_URL = new URL("plain.html", window.location.href).href;

const PAGES = {
  index: () => [
    `${C.bold}Ph.D. Candidate${C.reset} · ${osc("CSE", "https://www.cse.cuhk.edu.hk/")} · ${osc("CUHK", "https://www.cuhk.edu.hk/")}`,
    "Hong Kong SAR, China",
    "",
    `> ${osc("GitHub", "https://github.com/Lim-ZQ")} · ${osc("Group Github", "https://github.com/ml4bio")} · ${osc("Scholar", "https://scholar.google.com/citations?user=rGY-MwUAAAAJ")}`,
    "",
    "I am a Ph.D. candidate in Computer Science and Engineering at The Chinese",
    `University of Hong Kong, advised by ${osc("Prof. Yu Li", "https://liyu95.com/")} and`,
    `${osc("Prof. Irwin King", "https://www.cse.cuhk.edu.hk/people/faculty/irwin-king/")}.`,
    "",
    `${C.bold}Research interests${C.reset}`,
    `  ${C.path}•${C.reset} RNA structure prediction and design`,
    `  ${C.path}•${C.reset} Diffusion models for biomolecule generation`,
    `  ${C.path}•${C.reset} Biomolecule interactions`,
    "",
    "• This page doubles as a shell.",
    `  Try: ${C.path}help${C.reset}, ${C.path}papers${C.reset}, ${C.path}ls${C.reset}.`,
    "",
    `${C.dim}Last update: Thu Sep 3 2026 13:46${C.reset}`,
  ],
  about: () => [
    `${C.bold}# about${C.reset}`,
    "",
    "I am a Ph.D. candidate in the Department of Computer Science and Engineering",
    `at ${osc("The Chinese University of Hong Kong", "https://www.cuhk.edu.hk/")}, advised by`,
    `${osc("Prof. Yu Li", "https://liyu95.com/")} and ${osc("Prof. Irwin King", "https://www.cse.cuhk.edu.hk/people/faculty/irwin-king/")}.`,
    "",
    `${C.bold}Research interests${C.reset}`,
    `  ${C.path}•${C.reset} RNA structure prediction and design`,
    `  ${C.path}•${C.reset} Diffusion models for biomolecule generation`,
    `  ${C.path}•${C.reset} Biomolecule interactions`,
    "",
    `I received my B.Eng. in Artificial Intelligence from ${osc("Nanjing University", "https://www.nju.edu.cn/")},`,
    `advised by ${osc("Prof. Zhihua Zhou", "https://cs.nju.edu.cn/zhouzh/index.htm")}.`,
  ],
  interests: () => [
    `${C.bold}# research interests${C.reset}`,
    "",
    `  ${C.path}•${C.reset} RNA structure prediction and design`,
    `  ${C.path}•${C.reset} Diffusion models for biomolecule generation`,
    `  ${C.path}•${C.reset} Biomolecule interactions`,
  ],
  papers: () => [
    `${C.bold}# selected publications${C.reset}`,
    `  ${osc("[Google Scholar]", "https://scholar.google.com/citations?user=rGY-MwUAAAAJ")}`,
    "",
    `${C.bold}[RiboDiffusion] RiboDiffusion: tertiary structure-based RNA inverse folding${C.reset}`,
    "  with generative diffusion models",
    "  H. Huang*, Z. Lin*, D. He, L. Hong, Y. Li",
    "  ISMB / Bioinformatics, 2024. (acceptance rate 18%)",
    `  ${osc("doi:10.1093/bioinformatics/btae259", "https://doi.org/10.1093/bioinformatics/btae259")}`,
    "",
    `${C.bold}Discovering reference-missing cell types in bulk transcriptomics${C.reset}`,
    "  Y. Fan, Y. Liu, Y. Zhong, Y. Wang, K.-H. Lee, Y. Wang, X. Liu, J. Li,",
    "  X. Wang, Z. Lin, L. Li, Y. Li",
    "  Bioinformatics / ECCB, 2026.",
    `  ${osc("doi:10.1093/bioinformatics/btag412", "https://doi.org/10.1093/bioinformatics/btag412")}`,
    "",
    `${C.bold}DS-ProGen: a dual-structure deep language model for functional protein design${C.reset}`,
    "  Y. Li*, J. Jiang*, Z. Wang*, Z. Lin, D. He, Y. Shan, Y. Shao, J. Li,",
    "  X. Shi, J. Wang, Y. Chen, Y. Fan, H. Li, Y. Li",
    "  AAAI, 2026.",
    `  ${osc("doi:10.1609/aaai.v40i1.37037", "https://doi.org/10.1609/aaai.v40i1.37037")}`,
    "",
    `${C.bold}RMSAGen: Integrating Multiple Sequence Alignment for Function RNA Design${C.reset}`,
    "  J. Jiang, Y. Chen, Q. Zhang, J. Li, X. Shi, C. Zhou, Z. Lin, J. Wang,",
    "  D. He, L. Hong, Q. Li, P. Chen, J. Chen, X. Zhang, J. Yuan, T. Zhang, Y. Li",
    "  AAAI, 2026.",
    `  ${osc("doi:10.1609/aaai.v40i1.37012", "https://doi.org/10.1609/aaai.v40i1.37012")}`,
  ],
  experience: () => [
    `${C.bold}# research experience${C.reset}`,
    "",
    `${C.bold}Ph.D. Candidate, CUHK, Hong Kong SAR${C.reset} (Sep. 2024 – Present)`,
    `  Advisors: ${osc("Prof. Yu Li", "https://liyu95.com/")} and ${osc("Prof. Irwin King", "https://www.cse.cuhk.edu.hk/people/faculty/irwin-king/")}`,
    "",
    `${C.bold}Research Intern, Shanghai Academy of AI for Science, Shanghai${C.reset} (Aug. 2025 – Present)`,
    `  Advisors: ${osc("Prof. Yuan Cheng", "https://ai3.fudan.edu.cn/info/1088/2244.htm")} and Dr. Xvyang Liu`,
    "",
    `${C.bold}Research Intern, AIH Group, CUHK${C.reset} (Sep. 2023 – Aug. 2024)`,
    `  Advisor: ${osc("Prof. Yu Li", "https://liyu95.com/")}`,
    "",
    `${C.bold}Research Intern, LAMDA-1 Group, Nanjing University${C.reset} (Feb. 2022 – Sep. 2023)`,
    `  Advisors: ${osc("Prof. Zhihua Zhou", "https://cs.nju.edu.cn/zhouzh/index.htm")} and ${osc("Prof. Shaoqun Zhang", "https://www.lamda.nju.edu.cn/zhangsq/")}`,
  ],
  education: () => [
    `${C.bold}# education${C.reset}`,
    "",
    "• Ph.D. in Computer Science and Engineering, The Chinese University of Hong Kong (Sep. 2024 – Now)",
    "• B.Eng. in Artificial Intelligence, Nanjing University (Sep. 2020 – Jun. 2024)",
  ],
  honors: () => [
    `${C.bold}# honors & scholarships${C.reset}`,
    "",
    "• 2024 – Present: Postgraduate Studentship (PGS), The Chinese University of Hong Kong",
    "• 2024: Outstanding graduate, University level, 10% of about 3000 graduates",
    "• 2023: Outstanding Student Leader Model, University level, 1% of 13000 students",
    "• 2023: Outstanding Minority Student, University level, 10 out of 1500 students",
    "• 2022: National Scholarship, National level, 1 out of 97 students",
  ],
  service: () => [
    `${C.bold}# academic service${C.reset}`,
    "",
    "• Reviewer for journals: Science, Cell, Nature Methods, Nature Communications,",
    "  Communications Biology, Bioinformatics",
    "• Reviewer for conferences: RECOMB, NeurIPS, EMNLP, ACL, AAAI",
  ],
  teaching: () => [
    `${C.bold}# teaching${C.reset}`,
    "",
    "• BMEG-3105, Data Analytics for Personalized Genomics and Precision Medicine (2024–2026)",
    "• CSCI-5640, Natural Language Processing (2025)",
    "• ENGG-1110, Problem Solving By Programming (2024)",
  ],
  help: () => [
    `${C.bold}# help${C.reset}`,
    "",
    "This site is a terminal. Documents are commands — `index`, `about`, `papers` —",
    "and tools live in /bin.",
    "",
    `${C.bold}commands${C.reset}`,
    "  ls              list pages",
    "  cat <page>      print a page without clearing",
    "  about           open about",
    "  papers          open publications",
    "  interests       research interests",
    "  experience      research experience",
    "  education       education",
    "  honors          honors & scholarships",
    "  service         academic service",
    "  teaching        teaching",
    "  index / home    return to the home page",
    "  plain           open the Bright Hong style page",
    "  clear           clear the screen",
    "  help            this page",
    "",
    `${C.bold}tips${C.reset}`,
    "  Type a page name to open it, e.g. papers or about.",
    "  Type plain (or classic) for the normal webpage.",
    "  History: ↑ / ↓. Cancel: Ctrl-C. Clear: Ctrl-L.",
  ],
};

const ALIAS = {
  home: "index",
  bio: "about",
  pub: "papers",
  publications: "papers",
  awards: "honors",
};

const NAMES = Object.keys(PAGES);

function resolveName(name) {
  const key = (name || "").toLowerCase();
  return ALIAS[key] || (PAGES[key] ? key : null);
}

function pageLines(name) {
  const key = resolveName(name);
  return key ? PAGES[key]() : null;
}

const host = document.getElementById("term-host");
const screen = document.getElementById("term-screen");

const term = new Terminal({
  fontFamily:
    '"Maple Mono", "Fira Code", "JetBrains Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace',
  fontSize: 16,
  lineHeight: 1.0,
  cursorBlink: true,
  convertEol: true,
  allowProposedApi: true,
  theme: {
    background: "#fafafa",
    foreground: "#2e3338",
    cursor: "#4a5158",
    selectionBackground: "#d0d7de",
  },
  linkHandler: {
    activate(_ev, target) {
      if (target.startsWith("#")) {
        inject(target.slice(1));
        return;
      }
      try {
        const url = new URL(target, window.location.href);
        if (url.origin === window.location.origin) {
          window.location.href = url.href;
          return;
        }
      } catch (_) {}
      window.open(target, "_blank", "noopener");
    },
  },
});

const fit = new FitAddon();
term.loadAddon(fit);
term.open(screen);

function writeln(s = "") {
  term.writeln(s);
}

function writePage(name, { clear = true } = {}) {
  const lines = pageLines(name);
  if (!lines) {
    writeln(`cat: ${name}: no such file`);
    return false;
  }
  if (clear) term.write("\x1b[2J\x1b[3J\x1b[H");
  for (const line of lines) writeln(line);
  return true;
}

function promptText() {
  return `${C.name}lzq${C.reset}:${C.path}/${C.reset}${C.dim}$${C.reset} `;
}

let buffer = "";
let cursor = 0;
let history = [];
let histIdx = -1;
let busy = false;

function redrawLine() {
  term.write("\x1b[2K\r" + promptText() + buffer);
  const back = buffer.length - cursor;
  if (back > 0) term.write("\x1b[" + back + "D");
}

function run(line) {
  const raw = line.trim();
  if (!raw) return;
  const parts = raw.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const arg = parts.slice(1).join(" ");

  if (cmd === "clear") {
    term.write("\x1b[2J\x1b[3J\x1b[H");
    return;
  }
  if (cmd === "ls") {
    writeln(NAMES.join("  "));
    return;
  }
  if (cmd === "whoami") {
    writeln("Ziqian LIN");
    return;
  }
  if (cmd === "plain" || cmd === "classic" || cmd === "normal") {
    writeln("opening the normal page...");
    window.location.href = PLAIN_URL;
    return;
  }
  if (cmd === "cat") {
    if (!arg) {
      writeln("usage: cat <page>");
      return;
    }
    writePage(arg, { clear: false });
    return;
  }
  if (resolveName(cmd)) {
    writePage(cmd, { clear: true });
    return;
  }
  writeln(`${cmd}: command not found`);
}

function complete() {
  const head = buffer.slice(0, cursor);
  const parts = head.split(/\s+/);
  const last = parts[parts.length - 1] || "";
  const pool = parts.length <= 1 ? [...NAMES, "ls", "cat", "clear", "help", "whoami", "home", "plain", "classic"] : NAMES;
  const hits = pool.filter((n) => n.startsWith(last));
  if (hits.length === 1) {
    const rest = hits[0].slice(last.length);
    buffer = buffer.slice(0, cursor) + rest + buffer.slice(cursor);
    cursor += rest.length;
    redrawLine();
  } else if (hits.length > 1) {
    writeln("");
    writeln(hits.join("  "));
    redrawLine();
  }
}

function accept() {
  writeln("");
  const line = buffer;
  if (line.trim()) history.push(line);
  buffer = "";
  cursor = 0;
  histIdx = -1;
  busy = true;
  run(line);
  busy = false;
  term.write(promptText());
}

function inject(cmd) {
  if (busy) return;
  term.write(cmd + "\r\n");
  if (cmd.trim()) history.push(cmd);
  buffer = "";
  cursor = 0;
  histIdx = -1;
  busy = true;
  run(cmd);
  busy = false;
  term.write(promptText());
}

term.onData((data) => {
  if (busy) return;
  if (data === "\r") {
    accept();
    return;
  }
  if (data === "\t") {
    complete();
    return;
  }
  if (data === "\x03") {
    writeln("^C");
    buffer = "";
    cursor = 0;
    term.write(promptText());
    return;
  }
  if (data === "\x0c") {
    term.write("\x1b[2J\x1b[3J\x1b[H");
    term.write(promptText() + buffer);
    return;
  }
  if (data === "\x15") {
    buffer = buffer.slice(cursor);
    cursor = 0;
    redrawLine();
    return;
  }
  if (data === "\x7f" || data === "\b") {
    if (cursor > 0) {
      buffer = buffer.slice(0, cursor - 1) + buffer.slice(cursor);
      cursor -= 1;
      redrawLine();
    }
    return;
  }
  if (data === "\x1b[A") {
    if (!history.length) return;
    if (histIdx < 0) histIdx = history.length;
    histIdx = Math.max(0, histIdx - 1);
    buffer = history[histIdx];
    cursor = buffer.length;
    redrawLine();
    return;
  }
  if (data === "\x1b[B") {
    if (histIdx < 0) return;
    histIdx += 1;
    if (histIdx >= history.length) {
      histIdx = -1;
      buffer = "";
    } else {
      buffer = history[histIdx];
    }
    cursor = buffer.length;
    redrawLine();
    return;
  }
  if (data === "\x1b[D") {
    if (cursor > 0) {
      cursor -= 1;
      term.write("\x1b[D");
    }
    return;
  }
  if (data === "\x1b[C") {
    if (cursor < buffer.length) {
      cursor += 1;
      term.write("\x1b[C");
    }
    return;
  }
  if (data === "\x1b[H" || data === "\x01") {
    if (cursor > 0) term.write("\x1b[" + cursor + "D");
    cursor = 0;
    return;
  }
  if (data === "\x1b[F" || data === "\x05") {
    const n = buffer.length - cursor;
    if (n > 0) term.write("\x1b[" + n + "C");
    cursor = buffer.length;
    return;
  }
  if (data.length === 1 && data >= " ") {
    buffer = buffer.slice(0, cursor) + data + buffer.slice(cursor);
    cursor += 1;
    redrawLine();
  }
});

function start() {
  fit.fit();
  writePage("index", { clear: true });
  writeln("");
  term.write(promptText());
  host.classList.add("ready");
  term.focus();
}

const ro = new ResizeObserver(() => fit.fit());
ro.observe(host);

const fonts = document.fonts?.ready;
if (fonts) fonts.then(start);
else start();
setTimeout(() => {
  if (!host.classList.contains("ready")) start();
}, 1500);
