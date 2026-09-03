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

const PAGES = {
  index: () => [
    `${C.bold}Ph.D. Candidate${C.reset} · ${osc("CSE", "https://www.cse.cuhk.edu.hk/")} · ${osc("CUHK", "https://www.cuhk.edu.hk/")}`,
    "Hong Kong SAR, China",
    "",
    `> ${osc("GitHub", "https://github.com/Lim-ZQ")} · ${osc("Group GitHub", "https://github.com/ml4bio")} · ${osc("Scholar", "https://scholar.google.com/citations?user=rGY-MwUAAAAJ")}`,
    "",
    "I am a Ph.D. candidate in Computer Science and Engineering at The Chinese",
    `University of Hong Kong, advised by ${osc("Prof. Yu Li", "https://liyu95.com/")} and`,
    `${osc("Prof. Irwin King", "https://www.cse.cuhk.edu.hk/people/faculty/irwin-king/")}.`,
    "",
    `${C.bold}Research Interests${C.reset}`,
    `  ${C.path}•${C.reset} RNA structure prediction and design`,
    `  ${C.path}•${C.reset} Diffusion models for biomolecule generation`,
    `  ${C.path}•${C.reset} Biomolecule interactions`,
    "",
    "• This page doubles as a shell.",
    `  Try: ${C.path}help${C.reset}, ${C.path}papers${C.reset}, ${C.path}design${C.reset}, ${C.path}ls /bin${C.reset}.`,
    "",
    `${C.dim}Last update: Thu Sep 3 2026 14:43${C.reset}`,
  ],
  about: () => [
    `${C.bold}# About${C.reset}`,
    "",
    "I am a Ph.D. candidate in the Department of Computer Science and Engineering",
    `at ${osc("The Chinese University of Hong Kong", "https://www.cuhk.edu.hk/")}, advised by`,
    `${osc("Prof. Yu Li", "https://liyu95.com/")} and ${osc("Prof. Irwin King", "https://www.cse.cuhk.edu.hk/people/faculty/irwin-king/")}.`,
    "",
    `${C.bold}Research Interests${C.reset}`,
    `  ${C.path}•${C.reset} RNA structure prediction and design`,
    `  ${C.path}•${C.reset} Diffusion models for biomolecule generation`,
    `  ${C.path}•${C.reset} Biomolecule interactions`,
    "",
    `I received my B.Eng. in Artificial Intelligence from ${osc("Nanjing University", "https://www.nju.edu.cn/")},`,
    `advised by ${osc("Prof. Zhihua Zhou", "https://cs.nju.edu.cn/zhouzh/index.htm")}.`,
  ],
  interests: () => [
    `${C.bold}# Research Interests${C.reset}`,
    "",
    `  ${C.path}•${C.reset} RNA structure prediction and design`,
    `  ${C.path}•${C.reset} Diffusion models for biomolecule generation`,
    `  ${C.path}•${C.reset} Biomolecule interactions`,
  ],
  papers: () => [
    `${C.bold}# Selected Publications${C.reset}`,
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
    `${C.bold}# Research Experience${C.reset}`,
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
    `${C.bold}# Education${C.reset}`,
    "",
    "• Ph.D. in Computer Science and Engineering, The Chinese University of Hong Kong (Sep. 2024 – Now)",
    "• B.Eng. in Artificial Intelligence, Nanjing University (Sep. 2020 – Jun. 2024)",
  ],
  honors: () => [
    `${C.bold}# Honors & Scholarships${C.reset}`,
    "",
    "• 2024 – Present: Postgraduate Studentship (PGS), The Chinese University of Hong Kong",
    "• 2024: Outstanding graduate, University level, 10% of about 3000 graduates",
    "• 2023: Outstanding Student Leader Model, University level, 1% of 13000 students",
    "• 2023: Outstanding Minority Student, University level, 10 out of 1500 students",
    "• 2022: National Scholarship, National level, 1 out of 97 students",
  ],
  service: () => [
    `${C.bold}# Academic Service${C.reset}`,
    "",
    "• Reviewer for journals: Science, Cell, Nature Methods, Nature Communications,",
    "  Communications Biology, Bioinformatics",
    "• Reviewer for conferences: RECOMB, NeurIPS, EMNLP, ACL, AAAI",
  ],
  teaching: () => [
    `${C.bold}# Teaching${C.reset}`,
    "",
    "• BMEG-3105, Data Analytics for Personalized Genomics and Precision Medicine (2024–2026)",
    "• CSCI-5640, Natural Language Processing (2025)",
    "• ENGG-1110, Problem Solving By Programming (2024)",
  ],
  help: () => [
    `${C.bold}# Help${C.reset}`,
    "",
    "This site is a terminal. Documents are commands — `index`, `about`, `papers` —",
    "and tools live in /bin.",
    "",
    `${C.bold}Pages${C.reset}`,
    "  about           About",
    "  papers          Selected Publications",
    "  interests       Research Interests",
    "  experience      Research Experience",
    "  education       Education",
    "  honors          Honors & Scholarships",
    "  service         Academic Service",
    "  teaching        Teaching",
    "  index / home    return to the home page",
    "  help            this page",
    "",
    `${C.bold}Commands${C.reset}`,
    "  ls [dir]        list a directory (try ls /bin)",
    "  cat <path>      print a document (no clear; pipe-friendly)",
    "  head [path]     first lines (head -n 5 papers, cat papers | head)",
    "  tail [path]     last lines (tail -n 3 about)",
    "  grep <pat>      filter lines (cat papers | grep RNA)",
    "  find [path]     walk the FS (find /bin -type f, find -name papers)",
    "  tree [path]     draw the FS as a tree",
    "  cd <dir>        change directory (cd /bin, cd .., cd /)",
    "  pwd             print the working directory",
    "  wc              count lines/words/bytes (cat about | wc -l)",
    "  whoami          who runs this site",
    "  design [n]      random RNA sequence, length 40–100 (or n)",
    "  clear           clear the screen",
    "  exit            return to the home page (same as Ctrl-D)",
    "",
    `${C.bold}Tips${C.reset}`,
    "  Run a page like papers to open it (clears the screen).",
    "  Pipes work: cat papers | grep RNA.",
    "  Paths: ./about, /help, ../, /bin.",
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

function pageText(name) {
  const lines = pageLines(name);
  return lines ? lines.join("\n") : null;
}

const APPS = {
  ls: { desc: "list a directory", run: cmdLs },
  cat: { desc: "print a document", run: cmdCat },
  head: { desc: "first lines", run: cmdHead },
  tail: { desc: "last lines", run: cmdTail },
  grep: { desc: "filter lines", run: cmdGrep },
  find: { desc: "walk the FS", run: cmdFind },
  tree: { desc: "draw the FS as a tree", run: cmdTree },
  wc: { desc: "count lines/words/bytes", run: cmdWc },
  clear: { desc: "clear the screen", run: cmdClear },
  exit: { desc: "return to the home page", run: cmdExit },
  whoami: { desc: "who runs this site", run: cmdWhoami },
  design: { desc: "random RNA sequence", run: cmdDesign },
  cd: { desc: "change directory", run: cmdCd, builtin: true },
  pwd: { desc: "print the working directory", run: cmdPwd, builtin: true },
};

const BIN_NAMES = Object.keys(APPS)
  .filter((n) => !APPS[n].builtin)
  .sort();

let cwd = "";

function resolvePath(name, from = cwd) {
  if (name == null || name === "") return from;
  const full = name.startsWith("/") ? name : `/${from}/${name}`;
  const parts = [];
  for (const seg of full.split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") parts.pop();
    else parts.push(seg);
  }
  return parts.join("/");
}

function displayPath(slug) {
  return slug ? `/${slug}` : "/";
}

function isDir(slug) {
  return slug === "" || slug === "bin";
}

function isDoc(slug) {
  return !!resolveName(slug);
}

function isBinFile(slug) {
  return slug.startsWith("bin/") && !!APPS[slug.slice(4)] && !APPS[slug.slice(4)].builtin;
}

function isFile(slug) {
  return isDoc(slug) || isBinFile(slug);
}

function childrenOf(slug) {
  if (slug === "bin") return BIN_NAMES.map((name) => ({ name, dir: false }));
  if (slug === "") {
    return [
      { name: "bin", dir: true },
      ...NAMES.slice().sort().map((name) => ({ name, dir: false })),
    ];
  }
  return [];
}

function readDoc(path) {
  const slug = resolvePath(path);
  const key = resolveName(slug);
  return key ? pageText(key) : null;
}

function stripAnsi(s) {
  return s
    .replace(/\x1b\]8;;[^\x1b]*\x1b\\/g, "")
    .replace(/\x1b\[[0-9;]*[A-Za-z]/g, "");
}

function parseLine(s) {
  const out = [];
  let cur = "";
  let q = false;
  for (const c of s) {
    if (c === '"') {
      q = !q;
      continue;
    }
    if (!q && /\s/.test(c)) {
      if (cur) out.push(cur);
      cur = "";
    } else cur += c;
  }
  if (cur) out.push(cur);
  return out;
}

function splitPipe(line) {
  const parts = [];
  let cur = "";
  let q = false;
  for (const c of line) {
    if (c === '"') {
      q = !q;
      cur += c;
    } else if (c === "|" && !q) {
      parts.push(cur);
      cur = "";
    } else cur += c;
  }
  parts.push(cur);
  return parts.map((s) => s.trim()).filter(Boolean);
}

function parseCount(argv) {
  const files = [];
  let n = 10;
  for (let i = 1; i < argv.length; i++) {
    const a = argv[i];
    if (a === "-n") {
      n = parseInt(argv[++i], 10);
    } else if (/^-n\d+$/.test(a)) {
      n = parseInt(a.slice(2), 10);
    } else if (/^-\d+$/.test(a)) {
      n = parseInt(a.slice(1), 10);
    } else {
      files.push(a);
    }
  }
  return { n: Number.isFinite(n) && n > 0 ? n : 0, files };
}

function collectInputs(files, stdin, errName, print) {
  if (files.length === 0) return [{ name: "(stdin)", text: stdin }];
  const out = [];
  for (const f of files) {
    const text = readDoc(f);
    if (text == null) {
      print(`${errName}: ${f}: no such file`);
      continue;
    }
    out.push({ name: f, text });
  }
  return out;
}

function cmdLs(argv, { print }) {
  const target = argv[1] ?? ".";
  const slug = resolvePath(target);
  if (!isDir(slug)) {
    if (isFile(slug)) {
      print(`  ${slug.split("/").pop()}`);
      return;
    }
    print(`ls: ${target}: not a directory`);
    return;
  }
  const entries = childrenOf(slug);
  if (!entries.length) {
    print("(empty)");
    return;
  }
  for (const e of entries) {
    print(e.dir ? `  ${C.name}${C.bold}${e.name}/${C.reset}` : `  ${e.name}`);
  }
}

function cmdCat(argv, { print, write }) {
  const paths = argv.slice(1);
  if (!paths.length) {
    print("usage: cat <path> [path...]");
    return;
  }
  for (const path of paths) {
    const text = readDoc(path);
    if (text == null) print(`cat: ${path}: no such file`);
    else write(text.endsWith("\n") ? text : text + "\n");
  }
}

function cmdHead(argv, ctx) {
  sliceLines(argv, ctx, "head", (lines, n) => lines.slice(0, n));
}

function cmdTail(argv, ctx) {
  sliceLines(argv, ctx, "tail", (lines, n) => lines.slice(-n));
}

function sliceLines(argv, { stdin, print, write }, name, pick) {
  const { n, files } = parseCount(argv);
  const inputs = collectInputs(files, stdin, name, print);
  const multi = inputs.length > 1;
  for (const { name: file, text } of inputs) {
    if (multi) print(`==> ${file} <==`);
    const lines = text.split("\n");
    if (lines.length && lines[lines.length - 1] === "") lines.pop();
    write(pick(lines, n).join("\n") + (n > 0 && pick(lines, n).length ? "\n" : ""));
  }
}

function cmdGrep(argv, { stdin, print }) {
  const rest = argv.slice(1).filter((a) => !a.startsWith("-"));
  const pattern = rest[0];
  if (!pattern) {
    print("usage: grep <pattern> [path...]");
    return;
  }
  let re;
  try {
    re = new RegExp(pattern);
  } catch {
    re = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  }
  const files = rest.slice(1);
  const inputs = collectInputs(files, stdin, "grep", print);
  const multi = inputs.length > 1;
  for (const { name, text } of inputs) {
    for (const line of text.split("\n")) {
      if (re.test(stripAnsi(line))) print(multi ? `${name}:${line}` : line);
    }
  }
}

function globToRe(g) {
  const re = g.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".");
  return new RegExp("^" + re + "$");
}

function cmdFind(argv, { print }) {
  const starts = [];
  let nameRe = null;
  let type = null;
  for (let i = 1; i < argv.length; i++) {
    const a = argv[i];
    if (a === "-name") {
      const v = argv[++i];
      if (v) nameRe = globToRe(v);
    } else if (a === "-type") {
      const v = argv[++i];
      if (v === "f" || v === "d") type = v;
    } else if (!a.startsWith("-")) {
      starts.push(a);
    }
  }
  const roots = starts.length ? starts : ["."];
  const emit = (disp, dir) => {
    if (type && (type === "f") === dir) return;
    if (nameRe && !nameRe.test(disp.split("/").pop() ?? disp)) return;
    print(disp);
  };
  const walk = (slug, disp) => {
    for (const k of childrenOf(slug)) {
      const childDisp = (disp === "/" ? "" : disp) + "/" + k.name;
      const childSlug = slug ? `${slug}/${k.name}` : k.name;
      emit(childDisp, k.dir);
      if (k.dir) walk(childSlug, childDisp);
    }
  };
  for (const start of roots) {
    const slug = resolvePath(start);
    const dir = isDir(slug);
    if (!dir && !isFile(slug)) {
      print(`find: ${start}: no such file or directory`);
      continue;
    }
    const disp = start.replace(/\/+$/, "") || "/";
    emit(disp === "." ? displayPath(slug) : disp, dir);
    if (dir) walk(slug, disp === "." ? displayPath(slug) : disp);
  }
}

function cmdTree(argv, { print }) {
  const start = argv[1] ?? ".";
  const slug = resolvePath(start);
  if (!isDir(slug)) {
    print(`tree: ${start}: not a directory`);
    return;
  }
  const root = start.replace(/\/+$/, "") || "/";
  print(root === "." ? displayPath(slug) : root);
  const counts = { dirs: 0, files: 0 };
  const draw = (cur, prefix) => {
    const kids = childrenOf(cur);
    kids.forEach((k, i) => {
      const last = i === kids.length - 1;
      const edge = last ? "└── " : "├── ";
      const cont = last ? "    " : "│   ";
      const name = k.dir ? `${C.bold}${C.name}${k.name}/${C.reset}` : k.name;
      print(`${C.dim}${prefix}${edge}${C.reset}${name}`);
      if (k.dir) {
        counts.dirs += 1;
        draw(cur ? `${cur}/${k.name}` : k.name, prefix + cont);
      } else {
        counts.files += 1;
      }
    });
  };
  draw(slug, "");
  print("");
  print(
    `${C.dim}${counts.dirs} director${counts.dirs === 1 ? "y" : "ies"}, ` +
      `${counts.files} file${counts.files === 1 ? "" : "s"}${C.reset}`,
  );
}

function cmdWc(argv, { stdin, print }) {
  const files = argv.slice(1).filter((a) => !a.startsWith("-"));
  const flag = argv.slice(1).find((a) => /^-[lwc]+$/.test(a));
  const want = (c) => !flag || flag.includes(c);
  const inputs = files.length ? collectInputs(files, stdin, "wc", print) : [{ name: "", text: stdin }];
  for (const { name, text } of inputs) {
    const body = stripAnsi(text);
    const lines = body === "" ? 0 : body.split("\n").length - (body.endsWith("\n") ? 1 : 0);
    const words = body.trim() ? body.trim().split(/\s+/).length : 0;
    const bytes = body.length;
    const parts = [];
    if (want("l")) parts.push(String(lines));
    if (want("w")) parts.push(String(words));
    if (want("c")) parts.push(String(bytes));
    print(name ? `${parts.join("\t")}\t${name}` : parts.join("\t"));
  }
}

function cmdClear() {
  term.write("\x1b[2J\x1b[3J\x1b[H");
}

function cmdExit() {
  cwd = "";
  writePage("index", { clear: true });
}

function cmdWhoami(_argv, { print }) {
  print("lzq");
}

function cmdDesign(argv, { print }) {
  const bases = ["A", "U", "G", "C"];
  let lo = 40;
  let hi = 100;
  const n1 = parseInt(argv[1], 10);
  const n2 = parseInt(argv[2], 10);
  if (Number.isFinite(n1) && Number.isFinite(n2)) {
    lo = Math.min(n1, n2);
    hi = Math.max(n1, n2);
  } else if (Number.isFinite(n1)) {
    lo = hi = n1;
  }
  if (!Number.isFinite(lo) || !Number.isFinite(hi) || lo < 1 || hi > 1000) {
    print("usage: design [length] | design [min max]   (default 40–100)");
    return;
  }
  const len = lo + Math.floor(Math.random() * (hi - lo + 1));
  let seq = "";
  for (let i = 0; i < len; i++) seq += bases[(Math.random() * 4) | 0];
  print(`>random_rna len=${len}`);
  print(seq);
}

function cmdCd(argv, { print }) {
  const target = argv[1] ?? "/";
  const slug = resolvePath(target);
  if (!isDir(slug)) {
    print(`cd: ${target}: not a directory`);
    return;
  }
  cwd = slug;
}

function cmdPwd(_argv, { print }) {
  print(displayPath(cwd));
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
  return `${C.name}lzq${C.reset}:${C.path}${displayPath(cwd)}${C.reset}${C.dim}$${C.reset} `;
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

function lookupCmd(name) {
  const bare = name.replace(/^\.\//, "");
  if (APPS[bare]) return APPS[bare].run;
  const slug = resolvePath(bare);
  if (slug.startsWith("bin/") && APPS[slug.slice(4)]) return APPS[slug.slice(4)].run;
  return null;
}

function runSegment(seg, stdin, isLast) {
  const argv = parseLine(seg);
  if (!argv.length) return { out: stdin, stop: false };
  const name = argv[0];
  const app = lookupCmd(name);
  let out = "";
  const print = (s = "") => {
    if (isLast) writeln(s);
    else out += s + "\n";
  };
  const write = (s) => {
    if (isLast) term.write(s);
    else out += s;
  };
  const ctx = { stdin, print, write };

  if (app) {
    app(argv, ctx);
    return { out, stop: false };
  }

  const doc = resolveName(name) || resolveName(resolvePath(name));
  if (doc) {
    if (isLast && argv.length === 1) writePage(doc, { clear: true });
    else {
      const text = pageText(doc);
      if (text) write(text.endsWith("\n") ? text : text + "\n");
    }
    return { out, stop: false };
  }

  if (isLast) writeln(`${name}: command not found`);
  else writeln(`${name}: command not found`);
  return { out: "", stop: true };
}

function run(line) {
  const raw = line.trim();
  if (!raw) return;
  const segs = splitPipe(raw);
  let stdin = "";
  for (let i = 0; i < segs.length; i++) {
    const { out, stop } = runSegment(segs[i], stdin, i === segs.length - 1);
    if (stop) return;
    stdin = out;
  }
}

function pathPool() {
  return ["/", "/bin", "bin", "..", ".", ...NAMES, ...BIN_NAMES];
}

function complete() {
  const head = buffer.slice(0, cursor);
  const parts = head.split(/\s+/);
  const last = parts[parts.length - 1] || "";
  const cmds = [...NAMES, ...Object.keys(APPS), "home"];
  const pool = parts.length <= 1 ? cmds : pathPool();
  const hits = [...new Set(pool)].filter((n) => n.startsWith(last)).sort();
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
  if (data === "\x04") {
    if (!buffer) {
      writeln("exit");
      busy = true;
      cmdExit();
      busy = false;
      term.write(promptText());
    }
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
  if (data === "\x1b[A" || data === "\x10") {
    if (!history.length) return;
    if (histIdx < 0) histIdx = history.length;
    histIdx = Math.max(0, histIdx - 1);
    buffer = history[histIdx];
    cursor = buffer.length;
    redrawLine();
    return;
  }
  if (data === "\x1b[B" || data === "\x0e") {
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
