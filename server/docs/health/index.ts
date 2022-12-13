import { healthCheck } from "./health-check";

export const health = {
  '/health': {
    ...healthCheck,
  }
}