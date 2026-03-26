/**
 * Lightweight markdown-to-HTML renderer for article content.
 * Handles: headings, bold, inline code, code blocks, bullet lists, paragraphs.
 */
export function renderMarkdownLite(markdown: string): string {
  const lines = markdown.split('\n');
  const html: string[] = [];
  let inCodeBlock = false;
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      if (inList) { html.push('</ul>'); inList = false; }
      if (inCodeBlock) {
        html.push('</code></pre>');
        inCodeBlock = false;
      } else {
        html.push('<pre><code>');
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      html.push(escapeHtml(line));
      continue;
    }

    // Headings
    if (line.startsWith('## ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('### ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
      continue;
    }

    // List items
    if (line.startsWith('- ')) {
      if (!inList) { html.push('<ul>'); inList = true; }
      html.push(`<li>${inlineFormat(line.slice(2))}</li>`);
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      if (inList) { html.push('</ul>'); inList = false; }
      continue;
    }

    // Paragraph
    if (inList) { html.push('</ul>'); inList = false; }
    html.push(`<p>${inlineFormat(line)}</p>`);
  }

  if (inList) html.push('</ul>');
  return html.join('\n');
}

function inlineFormat(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
