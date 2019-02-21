/**
 * Library Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { DataRequirement, DataRequirementOutputType } from "./DataRequirement";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import {
  ParameterDefinition,
  ParameterDefinitionOutputType
} from "./ParameterDefinition";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Represents a library of quality improvement components
 */
export interface Library {
  /** Logical id of this artifact */
  id?: t.TypeOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: t.TypeOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** Text summary of the resource, for human interpretation */
  text?: Narrative;
  /** Contained, inline Resources */
  contained?: Resource[];
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored */
  modifierExtension?: Extension[];
  /** Canonical identifier for this library, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the library */
  identifier?: Identifier[];
  /** Business version of the library */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this library (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this library (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate title of the library */
  subtitle?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** logic-library | model-definition | asset-collection | module-definition */
  type: CodeableConcept;
  /** Type of individual the library content is focused on */
  subject?: CodeableConcept | Reference;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the library */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for library (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this library is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the library */
  usage?: t.TypeOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the library was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the library was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the library is expected to be used */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment, etc. */
  topic?: CodeableConcept[];
  /** Who authored the content */
  author?: ContactDetail[];
  /** Who edited the content */
  editor?: ContactDetail[];
  /** Who reviewed the content */
  reviewer?: ContactDetail[];
  /** Who endorsed the content */
  endorser?: ContactDetail[];
  /** Additional documentation, citations, etc. */
  relatedArtifact?: RelatedArtifact[];
  /** Parameters defined by the library */
  parameter?: ParameterDefinition[];
  /** What data is referenced by this library */
  dataRequirement?: DataRequirement[];
  /** Contents of the library, either embedded or referenced */
  content?: Attachment[];
}

export interface LibraryOutputType {
  /** Logical id of this artifact */
  id?: t.OutputOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: MetaOutputType;
  /** A set of rules under which this content was created */
  implicitRules?: t.OutputOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Text summary of the resource, for human interpretation */
  text?: NarrativeOutputType;
  /** Contained, inline Resources */
  contained?: ResourceOutputType[];
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored */
  modifierExtension?: ExtensionOutputType[];
  /** Canonical identifier for this library, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the library */
  identifier?: IdentifierOutputType[];
  /** Business version of the library */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this library (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this library (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate title of the library */
  subtitle?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** logic-library | model-definition | asset-collection | module-definition */
  type: CodeableConceptOutputType;
  /** Type of individual the library content is focused on */
  subject?: CodeableConceptOutputType | ReferenceOutputType;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the library */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for library (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this library is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the library */
  usage?: t.OutputOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the library was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the library was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the library is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** E.g. Education, Treatment, Assessment, etc. */
  topic?: CodeableConceptOutputType[];
  /** Who authored the content */
  author?: ContactDetailOutputType[];
  /** Who edited the content */
  editor?: ContactDetailOutputType[];
  /** Who reviewed the content */
  reviewer?: ContactDetailOutputType[];
  /** Who endorsed the content */
  endorser?: ContactDetailOutputType[];
  /** Additional documentation, citations, etc. */
  relatedArtifact?: RelatedArtifactOutputType[];
  /** Parameters defined by the library */
  parameter?: ParameterDefinitionOutputType[];
  /** What data is referenced by this library */
  dataRequirement?: DataRequirementOutputType[];
  /** Contents of the library, either embedded or referenced */
  content?: AttachmentOutputType[];
}

export const Library: t.RecursiveType<
  t.Type<Library, LibraryOutputType>,
  Library,
  LibraryOutputType
> = t.recursion<Library, LibraryOutputType>("Library", () =>
  t.intersection(
    [
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** logic-library | model-definition | asset-collection | module-definition */
        type: CodeableConcept
      }),
      t.partial({
        /** When the library was approved by publisher */
        approvalDate: primitives.R4.date,
        /** Who authored the content */
        author: t.array(ContactDetail),
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Contents of the library, either embedded or referenced */
        content: t.array(Attachment),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** What data is referenced by this library */
        dataRequirement: t.array(DataRequirement),
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Natural language description of the library */
        description: primitives.R4.markdown,
        /** Who edited the content */
        editor: t.array(ContactDetail),
        /** When the library is expected to be used */
        effectivePeriod: Period,
        /** Who endorsed the content */
        endorser: t.array(ContactDetail),
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the library */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Intended jurisdiction for library (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** When the library was last reviewed */
        lastReviewDate: primitives.R4.date,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name for this library (computer friendly) */
        name: primitives.R4.string,
        /** Parameters defined by the library */
        parameter: t.array(ParameterDefinition),
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Why this library is defined */
        purpose: primitives.R4.markdown,
        /** Additional documentation, citations, etc. */
        relatedArtifact: t.array(RelatedArtifact),
        /** Who reviewed the content */
        reviewer: t.array(ContactDetail),
        /** Type of individual the library content is focused on */
        subject: t.union([CodeableConcept, Reference]),
        /** Subordinate title of the library */
        subtitle: primitives.R4.string,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this library (human friendly) */
        title: primitives.R4.string,
        /** E.g. Education, Treatment, Assessment, etc. */
        topic: t.array(CodeableConcept),
        /** Canonical identifier for this library, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** Describes the clinical usage of the library */
        usage: primitives.R4.string,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Business version of the library */
        version: primitives.R4.string
      })
    ],
    "Library"
  )
);
