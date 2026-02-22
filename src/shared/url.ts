export function buildUrl(template: string, text: string, translateLang: string, prompt?: string): string {
  const query = prompt ? prompt.replace('%s', text) : text;
  return template
    .replace('%s', encodeURIComponent(query))
    .replace('%lang%', encodeURIComponent(translateLang));
}
