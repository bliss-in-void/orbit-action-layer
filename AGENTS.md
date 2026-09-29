<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Orbit prototype decisions
- Keep the prototype client-side with centralized local structured demo data; this keeps judge flows deterministic without implying institutional API access.
- Keep contextual search and Helpdesk boundary in a pure service module; a future agent can consume the same student context without replacing the UI.
- Use one app route with in-app workspace views; this prototype is a cohesive operating workspace rather than a content website.
