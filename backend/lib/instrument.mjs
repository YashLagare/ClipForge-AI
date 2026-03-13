import * as Sentry from "@sentry/node";


Sentry.init({
  dsn: "https://cdc89940e4012430edf1771369b8d245@o4510505987145728.ingest.us.sentry.io/4511028916060160",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});