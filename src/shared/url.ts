export function buildUrl(template: string, text: string, translateLang: string, prompt?: string): string {
  const query = prompt ? prompt.replace('%s', text) : text;
  return template
    .replace('%s', encodeURIComponent(query))
    .replace('%lang%', encodeURIComponent(translateLang));
}

/** Returns true only for http and https URLs. Rejects javascript:, file:, data:, etc. */
export function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/** Returns true if a URL template has a safe protocol prefix (before %s substitution). */
export function isSafeUrlTemplate(template: string): boolean {
  return template.startsWith('https://') || template.startsWith('http://');
}
