import {EnumClass, EnumClassReified, PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, toBcs} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {ID} from "../object/structs";
import {BcsType, bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Claimed =============================== */

export function isClaimed(type: string): boolean { type = compressSuiType(type); return type === `0x2::derived_object::Claimed`; }

export interface ClaimedFields { pos0: ToField<ID> }

export type ClaimedReified = Reified< Claimed, ClaimedFields >;

export class Claimed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `0x2::derived_object::Claimed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Claimed.$typeName; readonly $fullTypeName: `0x2::derived_object::Claimed`; readonly $typeArgs: []; readonly $isPhantom = Claimed.$isPhantom;

 readonly pos0: ToField<ID>

 private constructor(typeArgs: [], fields: ClaimedFields, ) { this.$fullTypeName = composeSuiType( Claimed.$typeName, ...typeArgs ) as `0x2::derived_object::Claimed`; this.$typeArgs = typeArgs;

 this.pos0 = fields.pos0; }

 static reified( ): ClaimedReified { const reifiedBcs = Claimed.bcs; return { typeName: Claimed.$typeName, fullTypeName: composeSuiType( Claimed.$typeName, ...[] ) as `0x2::derived_object::Claimed`, typeArgs: [ ] as [], isPhantom: Claimed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Claimed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Claimed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Claimed.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => Claimed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Claimed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Claimed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Claimed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Claimed.fetch( client, id, ), new: ( fields: ClaimedFields, ) => { return new Claimed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Claimed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Claimed>> { return phantom(Claimed.reified( )); } static get p() { return Claimed.phantom() }

 private static instantiateBcs() { return bcs.struct("Claimed", {

 pos0: ID.bcs

}) };

 private static cachedBcs: ReturnType<typeof Claimed.instantiateBcs> | null = null;

 static get bcs(): ReturnType<typeof Claimed.instantiateBcs> { if (!Claimed.cachedBcs) { Claimed.cachedBcs = Claimed.instantiateBcs() } return Claimed.cachedBcs };

 static fromFields( fields: Record<string, any> ): Claimed { return Claimed.reified( ).new( { pos0: decodeFromFields(ID.reified(), fields.pos0) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Claimed { if (!isClaimed(item.type)) { throw new Error("not a Claimed type");

 }

 return Claimed.reified( ).new( { pos0: decodeFromFieldsWithTypes(ID.reified(), item.fields.pos0) } ) }

 static fromBcs( data: Uint8Array ): Claimed { return Claimed.fromFields( Claimed.bcs.parse(data) ) }

 toJSONField() { return {

 pos0: this.pos0,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Claimed { return Claimed.reified( ).new( { pos0: decodeFromJSONField(ID.reified(), field.pos0) } ) }

 static fromJSON( json: Record<string, any> ): Claimed { if (json.$typeName !== Claimed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Claimed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Claimed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaimed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Claimed object`); } return Claimed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Claimed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isClaimed(data.bcs.type)) { throw new Error(`object at is not a Claimed object`); }

 return Claimed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Claimed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Claimed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Claimed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaimed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Claimed object`); }

 return Claimed.fromSuiObjectData( res.data ); }

 }

/* ============================== DerivedObjectKey =============================== */

export function isDerivedObjectKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::derived_object::DerivedObjectKey` + '<'); }

export interface DerivedObjectKeyFields<K extends TypeArgument> { pos0: ToField<K> }

export type DerivedObjectKeyReified<K extends TypeArgument> = Reified< DerivedObjectKey<K>, DerivedObjectKeyFields<K> >;

export class DerivedObjectKey<K extends TypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `0x2::derived_object::DerivedObjectKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [false,] as const;

 readonly $typeName = DerivedObjectKey.$typeName; readonly $fullTypeName: `0x2::derived_object::DerivedObjectKey<${ToTypeStr<K>}>`; readonly $typeArgs: [ToTypeStr<K>]; readonly $isPhantom = DerivedObjectKey.$isPhantom;

 readonly pos0: ToField<K>

 private constructor(typeArgs: [ToTypeStr<K>], fields: DerivedObjectKeyFields<K>, ) { this.$fullTypeName = composeSuiType( DerivedObjectKey.$typeName, ...typeArgs ) as `0x2::derived_object::DerivedObjectKey<${ToTypeStr<K>}>`; this.$typeArgs = typeArgs;

 this.pos0 = fields.pos0; }

 static reified<K extends Reified<TypeArgument, any>>( K: K ): DerivedObjectKeyReified<ToTypeArgument<K>> { const reifiedBcs = DerivedObjectKey.bcs(toBcs(K)); return { typeName: DerivedObjectKey.$typeName, fullTypeName: composeSuiType( DerivedObjectKey.$typeName, ...[extractType(K)] ) as `0x2::derived_object::DerivedObjectKey<${ToTypeStr<ToTypeArgument<K>>}>`, typeArgs: [ extractType(K) ] as [ToTypeStr<ToTypeArgument<K>>], isPhantom: DerivedObjectKey.$isPhantom, reifiedTypeArgs: [K], fromFields: (fields: Record<string, any>) => DerivedObjectKey.fromFields( K, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DerivedObjectKey.fromFieldsWithTypes( K, item, ), fromBcs: (data: Uint8Array) => DerivedObjectKey.fromFields( K, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => DerivedObjectKey.fromJSONField( K, field, ), fromJSON: (json: Record<string, any>) => DerivedObjectKey.fromJSON( K, json, ), fromSuiParsedData: (content: SuiParsedData) => DerivedObjectKey.fromSuiParsedData( K, content, ), fromSuiObjectData: (content: SuiObjectData) => DerivedObjectKey.fromSuiObjectData( K, content, ), fetch: async (client: SuiClient, id: string) => DerivedObjectKey.fetch( client, K, id, ), new: ( fields: DerivedObjectKeyFields<ToTypeArgument<K>>, ) => { return new DerivedObjectKey( [extractType(K)], fields ) }, kind: "StructClassReified", } }

 static get r() { return DerivedObjectKey.reified }

 static phantom<K extends Reified<TypeArgument, any>>( K: K ): PhantomReified<ToTypeStr<DerivedObjectKey<ToTypeArgument<K>>>> { return phantom(DerivedObjectKey.reified( K )); } static get p() { return DerivedObjectKey.phantom }

 private static instantiateBcs() { return <K extends BcsType<any>>(K: K) => bcs.struct(`DerivedObjectKey<${K.name}>`, {

 pos0: K

}) };

 private static cachedBcs: ReturnType<typeof DerivedObjectKey.instantiateBcs> | null = null;

 static get bcs(): ReturnType<typeof DerivedObjectKey.instantiateBcs> { if (!DerivedObjectKey.cachedBcs) { DerivedObjectKey.cachedBcs = DerivedObjectKey.instantiateBcs() } return DerivedObjectKey.cachedBcs };

 static fromFields<K extends Reified<TypeArgument, any>>( typeArg: K, fields: Record<string, any> ): DerivedObjectKey<ToTypeArgument<K>> { return DerivedObjectKey.reified( typeArg, ).new( { pos0: decodeFromFields(typeArg, fields.pos0) } ) }

 static fromFieldsWithTypes<K extends Reified<TypeArgument, any>>( typeArg: K, item: FieldsWithTypes ): DerivedObjectKey<ToTypeArgument<K>> { if (!isDerivedObjectKey(item.type)) { throw new Error("not a DerivedObjectKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return DerivedObjectKey.reified( typeArg, ).new( { pos0: decodeFromFieldsWithTypes(typeArg, item.fields.pos0) } ) }

 static fromBcs<K extends Reified<TypeArgument, any>>( typeArg: K, data: Uint8Array ): DerivedObjectKey<ToTypeArgument<K>> { const typeArgs = [typeArg];

 return DerivedObjectKey.fromFields( typeArg, DerivedObjectKey.bcs( toBcs(typeArgs[0]) ).parse(data) ) }

 toJSONField() { return {

 pos0: fieldToJSON<K>(this.$typeArgs[0], this.pos0),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<K extends Reified<TypeArgument, any>>( typeArg: K, field: any ): DerivedObjectKey<ToTypeArgument<K>> { return DerivedObjectKey.reified( typeArg, ).new( { pos0: decodeFromJSONField(typeArg, field.pos0) } ) }

 static fromJSON<K extends Reified<TypeArgument, any>>( typeArg: K, json: Record<string, any> ): DerivedObjectKey<ToTypeArgument<K>> { if (json.$typeName !== DerivedObjectKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(DerivedObjectKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return DerivedObjectKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<K extends Reified<TypeArgument, any>>( typeArg: K, content: SuiParsedData ): DerivedObjectKey<ToTypeArgument<K>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDerivedObjectKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DerivedObjectKey object`); } return DerivedObjectKey.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<K extends Reified<TypeArgument, any>>( typeArg: K, data: SuiObjectData ): DerivedObjectKey<ToTypeArgument<K>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDerivedObjectKey(data.bcs.type)) { throw new Error(`object at is not a DerivedObjectKey object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return DerivedObjectKey.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DerivedObjectKey.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<K extends Reified<TypeArgument, any>>( client: SuiClient, typeArg: K, id: string ): Promise<DerivedObjectKey<ToTypeArgument<K>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DerivedObjectKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDerivedObjectKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DerivedObjectKey object`); }

 return DerivedObjectKey.fromSuiObjectData( typeArg, res.data ); }

 }

export function isClaimedStatus(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::derived_object::ClaimedStatus`); }export type ClaimedStatusReified = EnumClassReified< ClaimedStatus >;

 export type ClaimedStatusVariants = { $kind: "Reserved" };

export class ClaimedStatus implements EnumClass { __EnumClass = true as const;

 static readonly $typeName = `0x2::derived_object::ClaimedStatus`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ClaimedStatus.$typeName; readonly $fullTypeName: `0x2::derived_object::ClaimedStatus`; readonly $typeArgs: []; readonly $isPhantom = ClaimedStatus.$isPhantom;

 readonly variant: "Reserved"; readonly fields: any;

 private constructor(typeArgs: [], variant: string, fields?: any) { this.$fullTypeName = composeSuiType( ClaimedStatus.$typeName, ...typeArgs ) as `0x2::derived_object::ClaimedStatus`; this.$typeArgs = typeArgs; this.variant = variant as any; this.fields = fields; }

 static reified( ): ClaimedStatusReified { const reifiedBcs = ClaimedStatus.bcs( ); return { typeName: ClaimedStatus.$typeName, fullTypeName: composeSuiType( ClaimedStatus.$typeName, ...[] ) as `0x2::derived_object::ClaimedStatus`, typeArgs: [ ] as [], isPhantom: ClaimedStatus.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ClaimedStatus.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimedStatus.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ClaimedStatus.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => ClaimedStatus.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ClaimedStatus.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ClaimedStatus.fromSuiParsedData( content, ), fromSuiObjectData: (data: SuiObjectData) => ClaimedStatus.fromSuiObjectData( data, ), fetch: (client: SuiClient, id: string) => ClaimedStatus.fetch( client, id, ), new: (variant: string, fields?: any) => ClaimedStatus.new( variant, fields ), kind: "EnumClassReified", } } static get r() { return ClaimedStatus.reified } static phantom( ): PhantomReified<ToTypeStr<ClaimedStatus>> { return phantom(ClaimedStatus.reified( )); } static get p() { return ClaimedStatus.phantom } static bcs( ) { return bcs.enum("ClaimedStatus", { Reserved: null }) };

 static fromBcs( data: Uint8Array ): ClaimedStatus { return ClaimedStatus.fromFields( ClaimedStatus.bcs( ).parse(data) ) } static fromFields( fields: Record<string, any> ): ClaimedStatus { return new ClaimedStatus([], fields.variant, fields.fields) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ClaimedStatus { if (!isClaimedStatus(item.type)) { throw new Error("not a ClaimedStatus type");

 }

 return ClaimedStatus.fromFields( item.fields ) }

 static fromJSONField( field: any ): ClaimedStatus { return ClaimedStatus.reified( ).new(field.variant, field.fields) }

 static fromJSON( json: Record<string, any> ): ClaimedStatus { if (json.$typeName !== ClaimedStatus.$typeName) { throw new Error("not a ClaimedStatus json object") };

 return ClaimedStatus.fromJSONField( json ) }

 static fromSuiParsedData( content: SuiParsedData ): ClaimedStatus { if (content.dataType !== "moveObject") { throw new Error("not a moveObject") } return ClaimedStatus.fromFieldsWithTypes( content ) }

 static fromSuiObjectData( data: SuiObjectData ): ClaimedStatus { if (data.bcs?.dataType !== "moveObject") { throw new Error("not a moveObject") } if (!isClaimedStatus(data.bcs.type)) { throw new Error("not a ClaimedStatus type") } return ClaimedStatus.fromBcs( fromB64(data.bcs.bcsBytes) ) }

 static fetch( client: SuiClient, id: string, ): Promise<ClaimedStatus> { return client.getObject({ id, options: { showBcs: true, } }).then((res) => { if (res.data) { return ClaimedStatus.fromSuiObjectData( res.data ) } throw new Error(`cannot find ClaimedStatus object at ${id}`); }) }

 static new( variant: string, fields?: any ): ClaimedStatus { return new ClaimedStatus( [], variant, fields ) }

 toJSONField() { return { variant: this.variant, fields: this.fields } } toJSON() { return { $typeName: this.$typeName, $fullTypeName: this.$fullTypeName, $typeArgs: this.$typeArgs, ...this.toJSONField(), } } }
