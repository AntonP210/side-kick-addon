/** Affiliate parameter keys to strip when affiliates are disabled. */
/** Affiliate parameter keys to strip when affiliates are disabled. */
const AFFILIATE_PARAMS = new Set([
  'tag', // Amazon
]);

export function buildUrl(template: string, text: string, translateLang: string, prompt?: string, affiliateEnabled = true): string {
  const query = prompt ? prompt.replace('%s', text) : text;
  let url = template
    .replace('%s', encodeURIComponent(query))
    .replace('%lang%', encodeURIComponent(translateLang));

  if (!affiliateEnabled) {
    try {
      const parsed = new URL(url);
      for (const key of [...parsed.searchParams.keys()]) {
        if (AFFILIATE_PARAMS.has(key)) parsed.searchParams.delete(key);
      }
      url = parsed.toString();
    } catch {
      // If URL can't be parsed, return as-is
    }
  }

  return url;
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
