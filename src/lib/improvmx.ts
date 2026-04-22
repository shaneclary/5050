import "server-only";

const API_BASE = "https://api.improvmx.com/v3";

function apiKey() {
  const key = process.env.IMPROVMX_API_KEY;
  if (!key) throw new Error("IMPROVMX_API_KEY is not set");
  return key;
}

function authHeader() {
  return "Basic " + Buffer.from(`api:${apiKey()}`).toString("base64");
}

export type ImprovmxAlias = {
  alias: string;
  forward: string;
  id: number;
};

export async function listAliases(domain: string): Promise<ImprovmxAlias[]> {
  const res = await fetch(`${API_BASE}/domains/${domain}/aliases`, {
    headers: { Authorization: authHeader() },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`ImprovMX listAliases failed: ${res.status}`);
  const data = (await res.json()) as { aliases: ImprovmxAlias[] };
  return data.aliases;
}

export async function createAlias(domain: string, alias: string, forward: string): Promise<ImprovmxAlias> {
  const res = await fetch(`${API_BASE}/domains/${domain}/aliases`, {
    method: "POST",
    headers: { Authorization: authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ alias, forward }),
  });
  if (!res.ok) throw new Error(`ImprovMX createAlias failed: ${res.status}`);
  const data = (await res.json()) as { alias: ImprovmxAlias };
  return data.alias;
}

export async function deleteAlias(domain: string, alias: string): Promise<void> {
  const res = await fetch(`${API_BASE}/domains/${domain}/aliases/${alias}`, {
    method: "DELETE",
    headers: { Authorization: authHeader() },
  });
  if (!res.ok) throw new Error(`ImprovMX deleteAlias failed: ${res.status}`);
}
