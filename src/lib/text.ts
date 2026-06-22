// 一文（。！？）ごとに改行する
export const sentences = (s: string): string =>
  (s ?? '')
    .replace(/<br\s*\/?>/g, '')
    .replace(/\n/g, '')
    .split(/(?<=[。！？])/)
    .map((t) => t.trim())
    .filter(Boolean)
    .join('<br>');
