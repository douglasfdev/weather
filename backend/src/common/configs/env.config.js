import { config } from 'dotenv'

async function loadEnvironments(environment) {
  return config({ path: `backend/src/common/environments/${environment}.env` });
}

const environment = Deno.env.get("APP_ENV");
export const env = await loadEnvironments(environment);