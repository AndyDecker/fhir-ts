/**
 * SubstanceProtein Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
 */
export interface SubstanceProteinSubunit {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
  subunit?: t.TypeOf<primitives.R4.IntegerType>;
  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence */
  sequence?: t.TypeOf<primitives.R4.StringType>;
  /** Length of linear sequences of amino acids contained in the subunit */
  length?: t.TypeOf<primitives.R4.IntegerType>;
  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence */
  sequenceAttachment?: Attachment;
  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID */
  nTerminalModificationId?: Identifier;
  /** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified */
  nTerminalModification?: t.TypeOf<primitives.R4.StringType>;
  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID */
  cTerminalModificationId?: Identifier;
  /** The modification at the C-terminal shall be specified */
  cTerminalModification?: t.TypeOf<primitives.R4.StringType>;
}

export interface SubstanceProteinSubunitOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
  subunit?: t.OutputOf<primitives.R4.IntegerType>;
  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence */
  sequence?: t.OutputOf<primitives.R4.StringType>;
  /** Length of linear sequences of amino acids contained in the subunit */
  length?: t.OutputOf<primitives.R4.IntegerType>;
  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence */
  sequenceAttachment?: AttachmentOutputType;
  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID */
  nTerminalModificationId?: IdentifierOutputType;
  /** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified */
  nTerminalModification?: t.OutputOf<primitives.R4.StringType>;
  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID */
  cTerminalModificationId?: IdentifierOutputType;
  /** The modification at the C-terminal shall be specified */
  cTerminalModification?: t.OutputOf<primitives.R4.StringType>;
}

export const SubstanceProteinSubunit: t.RecursiveType<
  t.Type<SubstanceProteinSubunit, SubstanceProteinSubunitOutputType>,
  SubstanceProteinSubunit,
  SubstanceProteinSubunitOutputType
> = t.recursion<SubstanceProteinSubunit, SubstanceProteinSubunitOutputType>(
  "SubstanceProteinSubunit",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The modification at the C-terminal shall be specified */
          cTerminalModification: primitives.R4.string,
          /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID */
          cTerminalModificationId: Identifier,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Length of linear sequences of amino acids contained in the subunit */
          length: primitives.R4.integer,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified */
          nTerminalModification: primitives.R4.string,
          /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID */
          nTerminalModificationId: Identifier,
          /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence */
          sequence: primitives.R4.string,
          /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence */
          sequenceAttachment: Attachment,
          /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
          subunit: primitives.R4.integer
        })
      ],
      "SubstanceProteinSubunit"
    )
);

/**
 * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators
 */
export interface SubstanceProtein {
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
  /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence */
  sequenceType?: CodeableConcept;
  /** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable */
  numberOfSubunits?: t.TypeOf<primitives.R4.IntegerType>;
  /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions */
  disulfideLinkage?: t.TypeOf<primitives.R4.StringType>[];
  /** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times */
  subunit?: SubstanceProteinSubunit[];
}

export interface SubstanceProteinOutputType {
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
  /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence */
  sequenceType?: CodeableConceptOutputType;
  /** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable */
  numberOfSubunits?: t.OutputOf<primitives.R4.IntegerType>;
  /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions */
  disulfideLinkage?: t.OutputOf<primitives.R4.StringType>[];
  /** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times */
  subunit?: SubstanceProteinSubunitOutputType[];
}

export const SubstanceProtein: t.RecursiveType<
  t.Type<SubstanceProtein, SubstanceProteinOutputType>,
  SubstanceProtein,
  SubstanceProteinOutputType
> = t.recursion<SubstanceProtein, SubstanceProteinOutputType>(
  "SubstanceProtein",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions */
          disulfideLinkage: t.array(primitives.R4.string),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable */
          numberOfSubunits: primitives.R4.integer,
          /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence */
          sequenceType: CodeableConcept,
          /** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times */
          subunit: t.array(SubstanceProteinSubunit),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "SubstanceProtein"
    )
);
