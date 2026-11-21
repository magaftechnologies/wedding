## Invitation architecture
- Keep the invitation as a continuous public index experience, and isolate interaction-heavy presentation units in focused components under `src/components/wedding`; this preserves the ceremonial flow while keeping stateful interactions maintainable.
- Keep client ceremony and family configuration, countdown calculation and RSVP validation in `src/lib/wedding.ts`; shared values ensure factual and attendance rules are testable.
- Store guest attendance in an insert-only public RSVP table with no visitor read access; guests do not need accounts and other guests’ responses remain private.
- Reference uploaded and generated media through CDN asset pointers; this keeps the invitation lightweight and the repository free of media binaries.
- Centralize client photo roles and carousel order in a browser-safe media module; every section uses the same authoritative photo set.
- Use Embla for the center-focused memory carousel; its touch and mouse drag handling preserves normal vertical page scrolling.
