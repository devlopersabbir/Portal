import { ZodOptional, ZodString, z } from 'zod';

import { LENGTH_CONSTANTS } from '@/config/length-constants';

function getEmailSchema<T extends boolean = true>({
  required = true as T,
  requiredErrorMessage,
  name = 'Email',
}: {
  required?: T;
  requiredErrorMessage?: string;
  name?: string;
} = {}): T extends true ? ZodString : ZodOptional<ZodString> {
  const REQUIRED_ERROR_MESSAGE = requiredErrorMessage || `${name} is required`;

  const schema = z
    .string({
      required_error: REQUIRED_ERROR_MESSAGE,
      invalid_type_error: `${name} is invalid`,
    })
    .email({ message: `${name} must be a valid email address` })
    .min(LENGTH_CONSTANTS.EMAIL.MIN, {
      message: `${name} must be at least 8 characters`,
    })
    .max(LENGTH_CONSTANTS.EMAIL.MAX, {
      message: `${name} must be maximum 50 characters`,
    })
    .trim()
    .toLowerCase();

  if (!required) {
    schema.optional();
  }

  return schema as T extends true ? ZodString : ZodOptional<ZodString>;
}

function getStringSchema<T extends boolean = true>({
  required = true as T,
  requiredErrorMessage,
  name,
  max = 255,
  min = 3,
  maxErrorMessage,
  minErrorMessage,
  invalidTypeErrorMessage,
  trimmed = false,
}: {
  required?: T;
  requiredErrorMessage?: string;
  name: string;
  max?: number;
  min?: number;
  maxErrorMessage?: string;
  minErrorMessage?: string;
  invalidTypeErrorMessage?: string;
  trimmed?: boolean;
}): T extends true ? ZodString : ZodOptional<ZodString> {
  const REQUIRED_ERROR_MESSAGE = requiredErrorMessage || `${name} is required`;

  const MAX_ERROR_MESSAGE =
    maxErrorMessage || `${name} must be maximum ${max} characters`;

  const MIN_ERROR_MESSAGE =
    minErrorMessage || `${name} must be at least ${min} characters`;
  const INVALID_TYPE_ERROR_MESSAGE =
    invalidTypeErrorMessage || `${name} is invalid`;

  if (max < min) {
    throw new Error('Max length should be greater than or equal to min length');
  }

  const schema = z
    .string({
      required_error: REQUIRED_ERROR_MESSAGE,
      invalid_type_error: INVALID_TYPE_ERROR_MESSAGE,
    })
    .min(min, { message: MIN_ERROR_MESSAGE })
    .max(max, { message: MAX_ERROR_MESSAGE });

  if (!required) {
    schema.optional();
  }

  if (trimmed) {
    schema.trim();
  }

  return schema as T extends true ? ZodString : ZodOptional<ZodString>;
}

function getPhoneNumberSchema<T extends boolean = true>({
  required = true as T,
  requiredErrorMessage,
  name = 'Phone',
  max = LENGTH_CONSTANTS.PHONE_NUMBER.MAX,
  min = LENGTH_CONSTANTS.PHONE_NUMBER.MIN,
  maxErrorMessage,
  minErrorMessage,
  invalidTypeErrorMessage,
}: {
  required?: T;
  requiredErrorMessage?: string;
  name?: string;
  max?: number;
  min?: number;
  maxErrorMessage?: string;
  minErrorMessage?: string;
  invalidTypeErrorMessage?: string;
} = {}): T extends true ? ZodString : ZodOptional<ZodString> {
  const REQUIRED_ERROR_MESSAGE = requiredErrorMessage || `${name} is required`;

  const MAX_ERROR_MESSAGE =
    maxErrorMessage || `${name} must be maximum ${max} characters`;

  const MIN_ERROR_MESSAGE =
    minErrorMessage || `${name} must be at least ${min} characters`;
  const INVALID_TYPE_ERROR_MESSAGE =
    invalidTypeErrorMessage || `${name} is invalid`;

  if (max < min) {
    throw new Error('Max length should be greater than or equal to min length');
  }

  const schema = z
    .string({
      required_error: REQUIRED_ERROR_MESSAGE,
      invalid_type_error: INVALID_TYPE_ERROR_MESSAGE,
    })
    .min(min, { message: MIN_ERROR_MESSAGE })
    .max(max, { message: MAX_ERROR_MESSAGE })
    .trim();

  if (!required) {
    schema.optional();
  }

  return schema as T extends true ? ZodString : ZodOptional<ZodString>;
}

type TGetStrLiteralToBooleanSchemaParams = {
  required?: boolean;
  fieldName: string;
  default?: boolean;
} & ({ required?: false; default: boolean } | { required: true });

function getStrLiteralToBooleanSchema({
  required,
  default: defaultValue,
  fieldName,
}: TGetStrLiteralToBooleanSchemaParams) {
  const schema = z
    .boolean({
      errorMap: () => ({
        message: `${fieldName} must be a boolean or 'true'/'false' string`,
      }),
    })
    .or(z.enum(['true', 'false']).transform((value) => value === 'true'))
    .pipe(z.boolean());

  // Conditionally make the schema optional or set a default value
  if (!required) {
    schema.optional();
    if (defaultValue !== undefined) {
      schema.default(defaultValue);
    }
  }

  return schema;
}

export const zodUtils = {
  getEmailSchema,
  getPhoneNumberSchema,
  getStringSchema,
  getStrLiteralToBooleanSchema,
};
