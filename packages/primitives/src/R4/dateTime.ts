/**
 * DateTime FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const DATE_TIME_REGEX = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;

const isDateTime = (m: unknown): m is string =>
  typeof m === "string" && DATE_TIME_REGEX.test(m);

/**
 * A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
 */
export const dateTime = new Type<string>(
  "dateTime",
  isDateTime,
  (m, c) => (isDateTime(m) ? success(m) : failure(m, c)),
  identity
);

export type dateTime = TypeOf<typeof dateTime>;
