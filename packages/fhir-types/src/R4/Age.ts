/**
 * Age Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * A duration of time during which an organism (or a process) has existed
 */
export interface Age {
  /** The type of resource */
  resourceType?: "Age";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Numerical value (with implicit precision) */
  value?: primitives.R4.decimal;
  /** Extension of value element */
  _value?: Element;
  /** < | <= | >= | > - how to understand the value */
  comparator?: primitives.R4.code;
  /** Extension of comparator element */
  _comparator?: Element;
  /** Unit representation */
  unit?: string;
  /** Extension of unit element */
  _unit?: Element;
  /** System that defines coded unit form */
  system?: primitives.R4.uri;
  /** Extension of system element */
  _system?: Element;
  /** Coded form of the unit */
  code?: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
}
/**
 * A duration of time during which an organism (or a process) has existed
 */
export const Age: t.Type<Age> = t.recursion<Age>("Age", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Age"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Numerical value (with implicit precision) */
      value: primitives.R4.decimal,
      /** Extension of value element */
      _value: Element,
      /** < | <= | >= | > - how to understand the value */
      comparator: primitives.R4.code,
      /** Extension of comparator element */
      _comparator: Element,
      /** Unit representation */
      unit: primitives.R4.string,
      /** Extension of unit element */
      _unit: Element,
      /** System that defines coded unit form */
      system: primitives.R4.uri,
      /** Extension of system element */
      _system: Element,
      /** Coded form of the unit */
      code: primitives.R4.code,
      /** Extension of code element */
      _code: Element
    })
  ])
);
