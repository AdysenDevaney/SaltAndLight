# Domain docs

This is a single-context repository.

## Before exploring

- Read root `CONTEXT.md` when it exists.
- Read ADRs in `docs/adr/` that touch the area of work.
- If these files do not yet exist, proceed without treating their absence as an error. `/domain-modeling`, reached through `/grill-with-docs` and `/improve-codebase-architecture`, creates them when a real term or decision is resolved.

## Expected layout

```text
/
├── CONTEXT.md
├── docs/adr/
└── src/
```

## Vocabulary and decisions

Use terms from `CONTEXT.md` for issue titles, tests, refactor proposals, and implementation output. Flag any conflict with an existing ADR rather than silently overriding it.
