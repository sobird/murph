---
name: verify-all
description: Run the full project verification suite (typecheck, lint, format check, build, and tests) from the repository root. Use before reporting a change as complete.
---

Run every check from the repository root, stopping at the first failure:

1. `bun run typecheck`
2. `bun run lint`
3. `bun run fmt:check`
4. `bun run build`
5. `bun run test`

Rules:

- Report the failing command with its relevant output; do not hide or simplify failures.
- If `fmt:check` fails, run `bun run fmt` and re-run `fmt:check`.
- Never bypass hooks with `--no-verify` or relax the 80% coverage thresholds.
- Finish with a short pass/fail summary per step.
