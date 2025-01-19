// this max length constants will be used in zod validation and database schema

export const LENGTH_CONSTANTS = {
  OTP: {
    MIN: 6,
    MAX: 6,
  },
  FIRST_NAME: {
    MIN: 3,
    MAX: 50,
  },
  LAST_NAME: {
    MIN: 3,
    MAX: 50,
  },
  EMAIL: {
    MIN: 5,
    MAX: 50,
  },
  PASSWORD: {
    MIN: 8,
    MAX: 50,
  },
  PHONE_NUMBER: {
    MIN: 9,
    MAX: 15,
  },
  ADDRESS: {
    MIN: 3,
    MAX: 255,
  },
  BILLING_ADDRESS: {
    MIN: 3,
    MAX: 255,
  },
  DELIVERY_ADDRESS: {
    MIN: 3,
    MAX: 255,
  },
} as const;
