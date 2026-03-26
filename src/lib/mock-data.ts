import { Article } from './types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'GPT-5 Released: What Developers Need to Know',
    summary:
      'OpenAI has released GPT-5 with significant improvements in reasoning, code generation, and multimodal capabilities.',
    content: `OpenAI's latest model, GPT-5, marks a substantial leap in large language model capabilities. Engineers and product teams worldwide are already exploring its new features.

**Improved Reasoning**
GPT-5 introduces chain-of-thought reasoning by default, allowing it to solve multi-step problems far more reliably than its predecessors. Benchmarks show a 40% improvement on complex math and logic tasks.

**Code Generation**
One of the most exciting improvements is in code generation. GPT-5 can now maintain context across large codebases, suggest refactors with explanations, and generate unit tests automatically.

**Multimodal Capabilities**
The model accepts image, audio, and video inputs natively. Developers can now build applications that understand and process rich media without external preprocessing pipelines.

**API Changes**
The new API introduces streaming by default and a unified endpoint for all modalities. Pricing has been adjusted to reflect the increased compute demands, but batch processing discounts make it cost-competitive for high-volume use cases.

**Getting Started**
Access GPT-5 through the OpenAI platform. Existing API keys are compatible, but you'll need to update your model parameter to "gpt-5" in your requests.`,
    category: 'AI',
    author: 'Sarah Chen',
    publishedAt: '2026-03-10T09:00:00Z',
    source: 'AI Weekly',
    sourceUrl: 'https://aiweekly.co',
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80',
    readingTimeMinutes: 5,
  },
  {
    id: '2',
    title: 'Next.js 16 Brings Partial Prerendering to Stable',
    summary:
      'Vercel officially stabilizes Partial Prerendering in Next.js 16, merging the best of static and dynamic rendering.',
    content: `Next.js 16 has arrived and the headline feature is the promotion of Partial Prerendering (PPR) from experimental to stable. This changes how developers think about rendering strategies.

**What is Partial Prerendering?**
PPR allows a single route to serve a static shell immediately while streaming in dynamic content. The result: pages that feel instant while still reflecting live data.

**How It Works**
Wrap dynamic parts of your UI in React Suspense boundaries. Next.js automatically detects what can be prerendered and what must be dynamic. No configuration needed.

\`\`\`tsx
export default function Page() {
  return (
    <main>
      <StaticHeader />
      <Suspense fallback={<NewsSkeleton />}>
        <DynamicNewsFeed />
      </Suspense>
    </main>
  );
}
\`\`\`

**Performance Impact**
Early adopters report Time-to-First-Byte improvements of up to 60% on content-heavy pages. The static shell is served from the CDN edge, while dynamic content streams from the origin.

**Migration**
Existing Next.js 15 apps can upgrade with minimal changes. The team has provided a detailed codemod to handle the most common patterns automatically.`,
    category: 'Web',
    author: 'Marcus Weber',
    publishedAt: '2026-03-09T11:30:00Z',
    source: 'Vercel Blog',
    sourceUrl: 'https://vercel.com/blog',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80',
    readingTimeMinutes: 4,
  },
  {
    id: '3',
    title: 'Critical Zero-Day Found in Popular npm Packages',
    summary:
      'Security researchers discovered a supply-chain vulnerability affecting over 2,000 npm packages with combined weekly downloads exceeding 500 million.',
    content: `A critical supply-chain vulnerability has been disclosed affecting a large portion of the npm ecosystem. The flaw, tracked as CVE-2026-1337, allows attackers to execute arbitrary code during package installation.

**Scope of the Vulnerability**
The vulnerability originates in a widely-used build tool that is a transitive dependency for thousands of packages. Any package that depends on affected versions is potentially compromised.

**How It Works**
The exploit targets the postinstall script mechanism. A malicious actor who can publish to a compromised package can inject code that runs silently during npm install.

**Am I Affected?**
Run the following to check your project:
\`\`\`bash
npx audit-check --cve CVE-2026-1337
\`\`\`

**Mitigation**
1. Update all dependencies to patched versions immediately.
2. Add "ignore-scripts" to your .npmrc for production builds.
3. Use a lockfile and verify checksums in CI.
4. Consider using Socket.dev or similar tools for continuous supply-chain monitoring.

**Timeline**
The vulnerability was reported privately to the maintainers on February 28. A patch was released within 48 hours. Public disclosure followed the standard 90-day responsible disclosure window.`,
    category: 'Security',
    author: 'Lena Müller',
    publishedAt: '2026-03-08T14:00:00Z',
    source: 'Security Weekly',
    sourceUrl: 'https://securityweekly.com',
    imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1600&q=80',
    readingTimeMinutes: 6,
  },
  {
    id: '4',
    title: 'React Native 0.80 Drops Old Architecture for Good',
    summary:
      'Meta officially retires the legacy React Native architecture in version 0.80, with the New Architecture now the only supported mode.',
    content: `React Native 0.80 is a milestone release. Meta has dropped the legacy Paper renderer and Bridge-based architecture, making the New Architecture — Fabric and TurboModules — the sole supported mode.

**Why This Matters**
The New Architecture brings React Native in line with modern React expectations: concurrent rendering, synchronous native calls, and significantly improved startup times.

**Breaking Changes**
- All third-party libraries must use the New Architecture. Most popular libraries have been compatible since early 2025.
- The \`UIManager\` imperative API is removed. Use refs and the \`measure\` API instead.
- \`NativeModules\` bridge is gone. Migrate to TurboModules.

**Performance Numbers**
Teams migrating from 0.73 to 0.80 report startup time reductions of 30–50% and smoother animations due to concurrent rendering capabilities.

**Upgrading**
Use the React Native Upgrade Helper at react-native-community.github.io/upgrade-helper. Most migrations take a few hours for medium-sized apps.

**Ecosystem Status**
Over 95% of top-1000 npm packages for React Native now support the New Architecture. The remaining packages are either deprecated or have active pull requests.`,
    category: 'Mobile',
    author: 'James Park',
    publishedAt: '2026-03-07T08:00:00Z',
    source: 'React Native Blog',
    sourceUrl: 'https://reactnative.dev/blog',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80',
    readingTimeMinutes: 5,
  },
  {
    id: '5',
    title: 'Linux Kernel 7.0 Reaches Stable with Rust Drivers',
    summary:
      'The Linux kernel hits a major version milestone with Rust as a first-class language for driver development alongside C.',
    content: `Linux 7.0 is officially stable. The headline change that has been in development for years is finally complete: Rust is now a first-class language for writing kernel drivers, with the same level of support and tooling as C.

**Rust in the Kernel**
The first major subsystem to be implemented primarily in Rust is the new Wi-Fi 7 driver stack. Early reports show significantly fewer memory-safety bugs compared to equivalent C drivers.

**What Changed for Developers**
If you maintain out-of-tree drivers, you now have the option to write new drivers in Rust. The kernel provides safe abstractions over core kernel APIs, making it much harder to introduce use-after-free or buffer overflow bugs.

**Performance**
Benchmarks show Rust drivers performing within 1–2% of equivalent C drivers. The overhead of Rust's safety abstractions at the kernel boundary is negligible in practice.

**Broader Changes**
- New scheduler algorithm reduces latency on desktop workloads by ~15%
- Improved memory reclaim under pressure
- Support for RISC-V 64-bit as a tier-1 platform

**Getting It**
Linux 7.0 is available from kernel.org. Major distributions are expected to ship it within 3–6 months.`,
    category: 'Open Source',
    author: 'Tobias Richter',
    publishedAt: '2026-03-06T16:00:00Z',
    source: 'LWN.net',
    sourceUrl: 'https://lwn.net',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1600&q=80',
    readingTimeMinutes: 7,
  },
  {
    id: '6',
    title: 'Claude 4 Sonnet Sets New Coding Benchmarks',
    summary:
      'Anthropic releases Claude 4 Sonnet, which tops SWE-bench and HumanEval, becoming the preferred model for coding assistants.',
    content: `Anthropic has launched Claude 4 Sonnet, and the developer community is taking notice. The model achieves state-of-the-art results on SWE-bench (resolving real GitHub issues) and HumanEval (code completion), setting a new bar for AI coding assistants.

**SWE-bench Results**
Claude 4 Sonnet resolves 68% of SWE-bench Verified tasks autonomously, up from 49% for Claude 3.5 Sonnet. For context, the best human engineers resolve roughly 90%.

**What Makes It Better at Coding?**
Anthropic attributes the improvement to:
- Longer effective context window (200k tokens with no degradation)
- Improved tool use and multi-step reasoning
- Better understanding of large codebases via extended thinking

**IDE Integrations**
Claude 4 Sonnet is already available in Cursor, GitHub Copilot, and JetBrains AI Assistant. Users report noticeably better refactoring suggestions and more accurate long-file edits.

**Pricing**
Input: $3/million tokens. Output: $15/million tokens. Batch API available at 50% discount. Extended thinking adds a surcharge per thinking token.

**API Access**
Available now via api.anthropic.com. Model ID: claude-4-sonnet-20260310.`,
    category: 'AI',
    author: 'Sarah Chen',
    publishedAt: '2026-03-05T10:00:00Z',
    source: 'Anthropic Blog',
    sourceUrl: 'https://anthropic.com/blog',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80',
    readingTimeMinutes: 4,
  },
  {
    id: '7',
    title: 'Svelte 6 Rewrites Reactivity With Signals',
    summary:
      'Svelte 6 lands with a signals-based reactivity model, bringing fine-grained updates and improved performance to the framework.',
    content: `Svelte 6 has been released, and the most significant change under the hood is the switch to a signals-based reactivity system — the same foundation that powers Solid.js and Angular 17+.

**Why Signals?**
Svelte's compile-time reactivity was already very efficient, but signals allow for even more granular updates. Instead of re-running an entire component on state change, only the exact parts of the DOM that depend on the changed value update.

**Developer Experience**
The API stays familiar. The \`$state\` rune from Svelte 5 is unchanged. The signals are an implementation detail — you write the same code, it just runs faster.

**Performance Numbers**
The Svelte team reports a 25% improvement in update throughput on JS Framework Benchmark, and startup time improvements of 10–15% for large component trees.

**Breaking Changes**
Svelte 6 is mostly backward compatible with Svelte 5. The migration guide lists a small number of edge cases around lifecycle timing that may need attention.

**SvelteKit 3**
SvelteKit 3 ships alongside Svelte 6 with improved server streaming support and first-class view transitions.`,
    category: 'Web',
    author: 'Anna Kovacs',
    publishedAt: '2026-03-04T13:00:00Z',
    source: 'Svelte Blog',
    sourceUrl: 'https://svelte.dev/blog',
    imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1600&q=80',
    readingTimeMinutes: 5,
  },
  {
    id: '8',
    title: 'iOS 20 Preview: New APIs for Developers',
    summary:
      'Apple previews iOS 20 at WWDC with expanded Swift APIs, improved CoreML performance, and on-device AI features for third-party apps.',
    content: `Apple's WWDC 2026 keynote unveiled iOS 20, and developers have a lot to look forward to. The beta is available now for registered developers.

**On-Device AI APIs**
The most anticipated addition is the Foundation Models framework, which exposes Apple Intelligence capabilities to third-party apps. Developers can run LLM inference on-device without sending data to the cloud.

**Swift 7 Integration**
iOS 20 ships with Swift 7, which brings:
- Strict concurrency by default (no more Sendable warnings)
- Improved macro system
- Native regex literals with full Unicode support

**CoreML Performance**
The Neural Engine in A19 chips is 2x faster than A18 for transformer workloads. Existing CoreML models compiled for A18 automatically benefit.

**New Frameworks**
- **RealityKit 4**: Improved spatial audio and physics for Vision Pro apps
- **SwiftUI 7**: New layout containers and improved animation APIs
- **StoreKit 4**: Simplified subscription management

**Beta Access**
iOS 20 Beta 1 is available at developer.apple.com. The public beta launches in July with a stable release expected in September.`,
    category: 'Mobile',
    author: 'Yuki Tanaka',
    publishedAt: '2026-03-03T09:00:00Z',
    source: 'Apple Developer News',
    sourceUrl: 'https://developer.apple.com/news',
    imageUrl: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80',
    readingTimeMinutes: 6,
  },
  {
    id: '9',
    title: 'Postgres 18 Brings Async I/O and JSON Schema Validation',
    summary:
      'PostgreSQL 18 arrives with asynchronous I/O support and native JSON Schema validation, significantly improving performance for I/O-bound workloads.',
    content: `PostgreSQL 18 has been released, and the two headline features — async I/O and JSON Schema validation — address long-standing requests from the community.

**Asynchronous I/O**
PostgreSQL has historically used synchronous I/O, which limits throughput on fast NVMe SSDs. Version 18 introduces a new async I/O subsystem that allows the engine to issue multiple I/O operations concurrently.

Benchmarks on NVMe storage show up to 2x improvement in throughput for sequential scans and 40% improvement for random reads. The gains are most pronounced on cloud instances with high-IOPS storage.

**JSON Schema Validation**
\`\`\`sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  data JSONB NOT NULL CHECK (
    jsonb_matches_schema(
      '{"type":"object","required":["name","price"]}',
      data
    )
  )
);
\`\`\`

This allows database-level enforcement of JSON structure without application-layer validation.

**Other Improvements**
- Incremental backup support
- Improved query parallelism for aggregations
- Native UUID v7 generation function

**Upgrading**
Use pg_upgrade for in-place upgrades from Postgres 14+. Major cloud providers (AWS RDS, GCP Cloud SQL, Azure) will offer managed upgrades within 60 days.`,
    category: 'Open Source',
    author: 'Tobias Richter',
    publishedAt: '2026-03-02T12:00:00Z',
    source: 'PostgreSQL News',
    sourceUrl: 'https://postgresql.org/news',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1600&q=80',
    readingTimeMinutes: 6,
  },
  {
    id: '10',
    title: 'OAuth 2.2 Draft Addresses Token Theft and PKCE Gaps',
    summary:
      'The IETF publishes OAuth 2.2 draft, tightening security requirements and mandating PKCE for all client types to close known attack vectors.',
    content: `The Internet Engineering Task Force (IETF) has published the OAuth 2.2 draft specification, consolidating security best practices from the past several years and mandating protections that were previously optional.

**PKCE for All Clients**
PKCE (Proof Key for Code Exchange) is now mandatory for all client types, including confidential clients. Previously, PKCE was only required for public clients (SPAs, mobile apps). This closes an attack vector where a compromised client secret could be used to steal authorization codes.

**Token Binding Improvements**
The spec introduces sender-constrained access tokens as a SHOULD requirement. Tokens cryptographically bound to the client's TLS session cannot be used by a third party even if stolen.

**Implicit Grant Removed**
The implicit grant flow is formally removed from the spec (it was already deprecated in OAuth 2.1). All remaining flows require PKCE.

**Impact on Developers**
Most major authorization libraries already implement these requirements. Check your library's changelog to verify compliance. If you're using a hosted provider like Auth0, Okta, or Clerk, updates will be transparent.

**Timeline**
The draft is in last call. Final RFC publication is expected Q3 2026.`,
    category: 'Security',
    author: 'Lena Müller',
    publishedAt: '2026-03-01T15:00:00Z',
    source: 'IETF',
    sourceUrl: 'https://ietf.org',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80',
    readingTimeMinutes: 5,
  },
  {
    id: '11',
    title: 'Bun 2.0 Challenges Node.js with Full Compatibility',
    summary:
      'Bun 2.0 achieves 99% Node.js API compatibility while maintaining its 3–5x speed advantage, making migration nearly seamless.',
    content: `Bun 2.0 is out, and it makes a compelling case for migration from Node.js. The release focuses on compatibility over new features: 99% of Node.js core APIs now work correctly in Bun.

**Compatibility Milestone**
The Bun team ran the Node.js compatibility test suite and passes 99.1% of tests. The remaining 0.9% covers rarely-used legacy APIs that are deprecated in Node.js itself.

**Performance**
Bun 2.0 continues to outperform Node.js and Deno in most benchmarks:
- HTTP server throughput: 3.2x faster than Node.js 22
- Cold start: 4x faster
- npm install: 25x faster (using Bun's built-in package manager)

**Package Manager Improvements**
\`bun install\` now supports workspaces with the same semantics as npm. The \`bun.lock\` format is human-readable TOML.

**New Features**
- Built-in S3 client
- Native WebSocket server improvements
- \`bun build\` now supports CSS bundling

**Should You Migrate?**
For greenfield projects: yes, absolutely. For existing projects: test your test suite against Bun 2.0 — most will pass without any changes.`,
    category: 'Open Source',
    author: 'Marcus Weber',
    publishedAt: '2026-02-28T10:00:00Z',
    source: 'Bun Blog',
    sourceUrl: 'https://bun.sh/blog',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1600&q=80',
    readingTimeMinutes: 5,
  },
  {
    id: '12',
    title: 'CSS Grid Level 3: Masonry Layout Arrives in Browsers',
    summary:
      'Chrome 135 and Firefox 128 ship native CSS Masonry layout, ending years of JavaScript-based workarounds for Pinterest-style grids.',
    content: `CSS Grid Level 3 finally ships native Masonry layout in Chrome 135 and Firefox 128. Safari has had it behind a flag since 2024 and is expected to enable it by default in Safari 18.

**What is Masonry Layout?**
Masonry arranges items in a grid where they fill available vertical space like bricks in a wall — think Pinterest or image galleries where items have variable heights.

Previously, this required JavaScript libraries like Masonry.js or complex CSS hacks. Now it's a single CSS property.

**How to Use It**
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
  gap: 1rem;
}
\`\`\`

**Performance**
Native masonry is significantly faster than JavaScript implementations. The browser can calculate layout during style resolution without additional JavaScript execution.

**Browser Support**
- Chrome 135+: ✅ Stable
- Firefox 128+: ✅ Stable
- Safari 17.5+: ✅ Behind flag (safari-masonry)
- Edge 135+: ✅ Stable (Chromium-based)

**Progressive Enhancement**
Use \`@supports\` to provide a fallback for older browsers:
\`\`\`css
@supports (grid-template-rows: masonry) {
  .gallery { grid-template-rows: masonry; }
}
\`\`\``,
    category: 'Web',
    author: 'Anna Kovacs',
    publishedAt: '2026-02-27T11:00:00Z',
    source: 'CSS-Tricks',
    sourceUrl: 'https://css-tricks.com',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&q=80',
    readingTimeMinutes: 4,
  },
];

export const categories = ['AI', 'Web', 'Mobile', 'Security', 'Open Source'] as const;

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase().replace(/-/g, ' ')
  );
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );
}
