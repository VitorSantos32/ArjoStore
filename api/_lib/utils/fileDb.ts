import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'api', '_lib', 'data');
const memoryCache = new Map<string, unknown>();

export function readJson<T>(filename: string, fallback: T): T {
  if (memoryCache.has(filename)) {
    return memoryCache.get(filename) as T;
  }

  const filePath = path.join(DATA_DIR, filename);

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw) as T;
    memoryCache.set(filename, parsed);
    return parsed;
  } catch (error) {
    console.warn(`Não foi possível ler ${filename}. Usando fallback.`, error);
    memoryCache.set(filename, fallback);
    return fallback;
  }
}

export function writeJson<T>(filename: string, data: T): void {
  memoryCache.set(filename, data);

  const filePath = path.join(DATA_DIR, filename);

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    // Em ambiente serverless o filesystem pode ser somente leitura.
    console.warn(`Não foi possível escrever ${filename}. Operação ignorada.`, error);
  }
}

