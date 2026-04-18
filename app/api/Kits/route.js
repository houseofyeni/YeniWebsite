import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

// Store count in /tmp so it persists within the same server process
// On Vercel, use environment variable KITS_INITIAL to seed the starting count
const DATA_DIR = "/tmp/yeni-data";
const DATA_FILE = join(DATA_DIR, "kits.json");
const INITIAL_COUNT = parseInt(process.env.KITS_INITIAL || "500", 10);
const MIN_COUNT = 3; // never show 0 or negative

function getCount() {
  try {
    if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
    if (!existsSync(DATA_FILE)) {
      // First boot — seed with initial count
      writeFileSync(
        DATA_FILE,
        JSON.stringify({ count: INITIAL_COUNT, updatedAt: Date.now() }),
      );
      return INITIAL_COUNT;
    }
    const data = JSON.parse(readFileSync(DATA_FILE, "utf8"));
    return Math.max(data.count, MIN_COUNT);
  } catch {
    return INITIAL_COUNT;
  }
}

function setCount(n) {
  try {
    if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(
      DATA_FILE,
      JSON.stringify({ count: Math.max(n, MIN_COUNT), updatedAt: Date.now() }),
    );
  } catch {}
}

// GET — return current count
export async function GET() {
  const count = getCount();
  return Response.json(
    { count },
    {
      headers: { "Cache-Control": "no-store, max-age=0" },
    },
  );
}

// POST — decrement by 1 (called when someone joins the waitlist)
export async function POST() {
  const current = getCount();
  const next = Math.max(current - 1, MIN_COUNT);
  setCount(next);
  return Response.json({ count: next });
}
