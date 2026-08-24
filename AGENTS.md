# Agent operating guide

## Agent skills

### Issue tracker

Work, specifications, and decision maps are tracked as GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the repository's canonical five-role triage label vocabulary. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository. See `docs/agents/domain.md`.

## Working agreement

- For work larger than a single session, use `/wayfinder` or `/grill-with-docs`, then turn the settled destination into a spec and tracer-bullet GitHub Issues.
- Claim an issue before work begins. Use `ready-for-agent` only for fully specified work that can be implemented and reviewed without human judgment.
- Implement through a red-green test loop and finish every change with `/code-review` before committing.
- Keep unattended work to one issue per run. Do not force-push, reset hard, clean untracked files, delete branches, or push changes without explicit user approval.
- Start fresh sessions for implementation tickets; preserve decisions, research, and domain terms in the tracked docs rather than relying on conversation memory.
