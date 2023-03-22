import * as Sentry from '@sentry/node'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Tracing from '@sentry/tracing'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.5,
  environment: process.env.ENVIRONMENT,
})

export default Sentry
