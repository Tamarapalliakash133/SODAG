# Contributing to SODAG

Adding yourself takes one file and one pull request.

## Steps

1. Fork this repository and clone your fork.
2. Create a branch: `git checkout -b add-your-name`
3. Copy `src/contributors/_template.json` to `src/contributors/your-name.json`.
4. Fill in your details (see the fields below).
5. Run `npm install`, then `npm run dev` and open `http://localhost:5173/your-name` to check your page.
6. Run `npm run build` and `npm run lint` to make sure nothing breaks.
7. Commit, push, and open a pull request against `main`.

Once it is merged, your page is live at `/your-name`.

## File rules

- The file name becomes your URL. Use lowercase letters, numbers and hyphens only, for example `priya-k.json`.
- Add only your own file. Please don't edit other people's profiles or files outside `src/contributors/` in the same pull request.
- Links must start with `https://` or `http://`. Anything else is ignored.
- Keep it friendly and work-appropriate.

## Fields

| Field | Required | Notes |
| --- | --- | --- |
| `name` | yes | How you want to be shown. |
| `role` | no | For example "Backend developer". |
| `location` | no | City, country. |
| `github` | no | Your username. Your GitHub photo is used as your avatar; an initial is shown if it is missing. |
| `bio` | no | A few sentences. |
| `skills` | no | A list of strings. The first three show on your card. |
| `projects` | no | A list of `{ "name", "description", "url" }`. |
| `links` | no | A list of `{ "label", "url" }`. |

## Changing the site itself

For changes to components, styling or routing, open an issue first so we can agree on the approach. Keep pull requests small and focused.
