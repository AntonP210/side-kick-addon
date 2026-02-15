export function buildUrl(template: string, text: string, translateLang: string): string {
  return template
    .replace('%s', encodeURIComponent(text))
    .replace('%lang%', encodeURIComponent(translateLang));
}
