<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## SOLVLYTE homepage architecture
- Keep the approved visual-only SOLVLYTE experience on the single `/` TanStack route with in-page anchors; this preserves the user's homepage-only scope and avoids implying unbuilt workflows.
- The approved copy lives in `src/content/homepage.ts` and is locked word for word. `src/components/home/HomePage.test.tsx` compares the rendered page with `src/content/approved-homepage-copy.txt`; change both files together, and only when SOLVLYTE has approved new wording.
- `src/routes/index.tsx` only mounts `HomePage`. Each section is a component in `src/components/home/`; shared pieces (header, footer, `CtaButton`, `SectionHeading`, `Picture`) are in `src/components/site/`.
- Photographs are registered in `src/assets/images/index.ts` (AVIF with WebP fallbacks at several widths). The current set is AI-generated placeholder imagery, to be replaced with SOLVLYTE's own photography.
- Buttons stay visual only until a real destination exists: `CtaButton` becomes a link only when given an `href`. Do not add forms, extra routes, integrations, or invented contact details and proof points.
- Fonts are self-hosted from `src/assets/fonts/`. Do not add remote font or stylesheet requests.
