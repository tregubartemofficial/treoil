// Feature flags, resolved at build time.
// Turn the lead form on by building with PUBLIC_FEATURE_LEAD_FORM=true
// (e.g. in .env or as a GitHub Actions variable).
export const features = {
  leadForm: import.meta.env.PUBLIC_FEATURE_LEAD_FORM === "true",
} as const;

// Label for the main call-to-action that points at the #lead section.
export const ctaLabel = features.leadForm ? "Залишити заявку" : "Зв'язатися з нами";
