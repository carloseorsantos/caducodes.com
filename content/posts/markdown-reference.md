---
title: Markdown reference
subtitle: Everything a post can use. This is a draft, so it only shows up in development.
date: 2026-10-19
tags: [meta]
draft: true
# cover: /blog/my-cover.jpg   # file in public/blog/, or a URL allowed in next.config.ts
# coverAlt: Caption shown under the cover image
---

Paragraphs use a serif font, like Medium. You can write **bold**, *italic*, `inline code` and [links](https://caducodes.com).

## Headings

Use `##` for sections and `###` for subsections. Every heading gets an anchor id automatically.

### Lists

1. Ordered
2. Lists

- [x] Task lists
- [ ] work too

## Code

```swift title="Example.swift"
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, world")
            .padding()
    }
}
```

```ts
export function greet(name: string) {
  return `Hello, ${name}`;
}
```

## Quotes and tables

> A blockquote looks like a Medium pull quote.

| Feature | Supported |
| ------- | --------- |
| Tables  | Yes       |
| GFM     | Yes       |

---

A horizontal rule renders as the classic `· · ·` section break.
