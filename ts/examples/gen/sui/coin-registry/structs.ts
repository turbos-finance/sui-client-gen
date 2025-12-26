import * as reified from "../../_framework/reified";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {EnumClass, EnumClassReified, PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {Bag} from "../bag/structs";
import {Supply} from "../balance/structs";
import {ID, UID} from "../object/structs";
import {VecMap} from "../vec-map/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== CoinRegistry =============================== */

export function isCoinRegistry(type: string): boolean { type = compressSuiType(type); return type === `0x2::coin_registry::CoinRegistry`; }

export interface CoinRegistryFields { id: ToField<UID> }

export type CoinRegistryReified = Reified< CoinRegistry, CoinRegistryFields >;

export class CoinRegistry implements StructClass { __StructClass = true as const;

 static readonly $typeName = `0x2::coin_registry::CoinRegistry`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CoinRegistry.$typeName; readonly $fullTypeName: `0x2::coin_registry::CoinRegistry`; readonly $typeArgs: []; readonly $isPhantom = CoinRegistry.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: CoinRegistryFields, ) { this.$fullTypeName = composeSuiType( CoinRegistry.$typeName, ...typeArgs ) as `0x2::coin_registry::CoinRegistry`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): CoinRegistryReified { const reifiedBcs = CoinRegistry.bcs; return { typeName: CoinRegistry.$typeName, fullTypeName: composeSuiType( CoinRegistry.$typeName, ...[] ) as `0x2::coin_registry::CoinRegistry`, typeArgs: [ ] as [], isPhantom: CoinRegistry.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CoinRegistry.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CoinRegistry.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CoinRegistry.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => CoinRegistry.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CoinRegistry.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CoinRegistry.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CoinRegistry.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CoinRegistry.fetch( client, id, ), new: ( fields: CoinRegistryFields, ) => { return new CoinRegistry( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CoinRegistry.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CoinRegistry>> { return phantom(CoinRegistry.reified( )); } static get p() { return CoinRegistry.phantom() }

 private static instantiateBcs() { return bcs.struct("CoinRegistry", {

 id: UID.bcs

}) };

 private static cachedBcs: ReturnType<typeof CoinRegistry.instantiateBcs> | null = null;

 static get bcs(): ReturnType<typeof CoinRegistry.instantiateBcs> { if (!CoinRegistry.cachedBcs) { CoinRegistry.cachedBcs = CoinRegistry.instantiateBcs() } return CoinRegistry.cachedBcs };

 static fromFields( fields: Record<string, any> ): CoinRegistry { return CoinRegistry.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CoinRegistry { if (!isCoinRegistry(item.type)) { throw new Error("not a CoinRegistry type");

 }

 return CoinRegistry.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): CoinRegistry { return CoinRegistry.fromFields( CoinRegistry.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CoinRegistry { return CoinRegistry.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): CoinRegistry { if (json.$typeName !== CoinRegistry.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CoinRegistry.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CoinRegistry { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCoinRegistry(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CoinRegistry object`); } return CoinRegistry.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CoinRegistry { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCoinRegistry(data.bcs.type)) { throw new Error(`object at is not a CoinRegistry object`); }

 return CoinRegistry.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CoinRegistry.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CoinRegistry> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CoinRegistry object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCoinRegistry(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CoinRegistry object`); }

 return CoinRegistry.fromSuiObjectData( res.data ); }

 }

/* ============================== ExtraField =============================== */

export function isExtraField(type: string): boolean { type = compressSuiType(type); return type === `0x2::coin_registry::ExtraField`; }

export interface ExtraFieldFields { pos0: ToField<TypeName>; pos1: ToField<Vector<"u8">> }

export type ExtraFieldReified = Reified< ExtraField, ExtraFieldFields >;

export class ExtraField implements StructClass { __StructClass = true as const;

 static readonly $typeName = `0x2::coin_registry::ExtraField`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ExtraField.$typeName; readonly $fullTypeName: `0x2::coin_registry::ExtraField`; readonly $typeArgs: []; readonly $isPhantom = ExtraField.$isPhantom;

 readonly pos0: ToField<TypeName>; readonly pos1: ToField<Vector<"u8">>

 private constructor(typeArgs: [], fields: ExtraFieldFields, ) { this.$fullTypeName = composeSuiType( ExtraField.$typeName, ...typeArgs ) as `0x2::coin_registry::ExtraField`; this.$typeArgs = typeArgs;

 this.pos0 = fields.pos0;; this.pos1 = fields.pos1; }

 static reified( ): ExtraFieldReified { const reifiedBcs = ExtraField.bcs; return { typeName: ExtraField.$typeName, fullTypeName: composeSuiType( ExtraField.$typeName, ...[] ) as `0x2::coin_registry::ExtraField`, typeArgs: [ ] as [], isPhantom: ExtraField.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ExtraField.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ExtraField.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ExtraField.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => ExtraField.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ExtraField.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ExtraField.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ExtraField.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ExtraField.fetch( client, id, ), new: ( fields: ExtraFieldFields, ) => { return new ExtraField( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ExtraField.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ExtraField>> { return phantom(ExtraField.reified( )); } static get p() { return ExtraField.phantom() }

 private static instantiateBcs() { return bcs.struct("ExtraField", {

 pos0: TypeName.bcs, pos1: bcs.vector(bcs.u8())

}) };

 private static cachedBcs: ReturnType<typeof ExtraField.instantiateBcs> | null = null;

 static get bcs(): ReturnType<typeof ExtraField.instantiateBcs> { if (!ExtraField.cachedBcs) { ExtraField.cachedBcs = ExtraField.instantiateBcs() } return ExtraField.cachedBcs };

 static fromFields( fields: Record<string, any> ): ExtraField { return ExtraField.reified( ).new( { pos0: decodeFromFields(TypeName.reified(), fields.pos0), pos1: decodeFromFields(reified.vector("u8"), fields.pos1) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ExtraField { if (!isExtraField(item.type)) { throw new Error("not a ExtraField type");

 }

 return ExtraField.reified( ).new( { pos0: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.pos0), pos1: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.pos1) } ) }

 static fromBcs( data: Uint8Array ): ExtraField { return ExtraField.fromFields( ExtraField.bcs.parse(data) ) }

 toJSONField() { return {

 pos0: this.pos0.toJSONField(),pos1: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.pos1),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ExtraField { return ExtraField.reified( ).new( { pos0: decodeFromJSONField(TypeName.reified(), field.pos0), pos1: decodeFromJSONField(reified.vector("u8"), field.pos1) } ) }

 static fromJSON( json: Record<string, any> ): ExtraField { if (json.$typeName !== ExtraField.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ExtraField.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ExtraField { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExtraField(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ExtraField object`); } return ExtraField.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ExtraField { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExtraField(data.bcs.type)) { throw new Error(`object at is not a ExtraField object`); }

 return ExtraField.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ExtraField.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ExtraField> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ExtraField object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExtraField(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ExtraField object`); }

 return ExtraField.fromSuiObjectData( res.data ); }

 }

/* ============================== CurrencyKey =============================== */

export function isCurrencyKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::coin_registry::CurrencyKey` + '<'); }

export interface CurrencyKeyFields<T extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type CurrencyKeyReified<T extends PhantomTypeArgument> = Reified< CurrencyKey<T>, CurrencyKeyFields<T> >;

export class CurrencyKey<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `0x2::coin_registry::CurrencyKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = CurrencyKey.$typeName; readonly $fullTypeName: `0x2::coin_registry::CurrencyKey<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = CurrencyKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: CurrencyKeyFields<T>, ) { this.$fullTypeName = composeSuiType( CurrencyKey.$typeName, ...typeArgs ) as `0x2::coin_registry::CurrencyKey<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): CurrencyKeyReified<ToPhantomTypeArgument<T>> { const reifiedBcs = CurrencyKey.bcs; return { typeName: CurrencyKey.$typeName, fullTypeName: composeSuiType( CurrencyKey.$typeName, ...[extractType(T)] ) as `0x2::coin_registry::CurrencyKey<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: CurrencyKey.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => CurrencyKey.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CurrencyKey.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => CurrencyKey.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => CurrencyKey.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => CurrencyKey.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => CurrencyKey.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => CurrencyKey.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => CurrencyKey.fetch( client, T, id, ), new: ( fields: CurrencyKeyFields<ToPhantomTypeArgument<T>>, ) => { return new CurrencyKey( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return CurrencyKey.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<CurrencyKey<ToPhantomTypeArgument<T>>>> { return phantom(CurrencyKey.reified( T )); } static get p() { return CurrencyKey.phantom }

 private static instantiateBcs() { return bcs.struct("CurrencyKey", {

 dummy_field: bcs.bool()

}) };

 private static cachedBcs: ReturnType<typeof CurrencyKey.instantiateBcs> | null = null;

 static get bcs(): ReturnType<typeof CurrencyKey.instantiateBcs> { if (!CurrencyKey.cachedBcs) { CurrencyKey.cachedBcs = CurrencyKey.instantiateBcs() } return CurrencyKey.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): CurrencyKey<ToPhantomTypeArgument<T>> { return CurrencyKey.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): CurrencyKey<ToPhantomTypeArgument<T>> { if (!isCurrencyKey(item.type)) { throw new Error("not a CurrencyKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return CurrencyKey.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): CurrencyKey<ToPhantomTypeArgument<T>> { return CurrencyKey.fromFields( typeArg, CurrencyKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): CurrencyKey<ToPhantomTypeArgument<T>> { return CurrencyKey.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): CurrencyKey<ToPhantomTypeArgument<T>> { if (json.$typeName !== CurrencyKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(CurrencyKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return CurrencyKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): CurrencyKey<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurrencyKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurrencyKey object`); } return CurrencyKey.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): CurrencyKey<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCurrencyKey(data.bcs.type)) { throw new Error(`object at is not a CurrencyKey object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return CurrencyKey.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CurrencyKey.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<CurrencyKey<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurrencyKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurrencyKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurrencyKey object`); }

 return CurrencyKey.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== MetadataCap =============================== */

export function isMetadataCap(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::coin_registry::MetadataCap` + '<'); }

export interface MetadataCapFields<T extends PhantomTypeArgument> { id: ToField<UID> }

export type MetadataCapReified<T extends PhantomTypeArgument> = Reified< MetadataCap<T>, MetadataCapFields<T> >;

export class MetadataCap<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `0x2::coin_registry::MetadataCap`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = MetadataCap.$typeName; readonly $fullTypeName: `0x2::coin_registry::MetadataCap<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = MetadataCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: MetadataCapFields<T>, ) { this.$fullTypeName = composeSuiType( MetadataCap.$typeName, ...typeArgs ) as `0x2::coin_registry::MetadataCap<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): MetadataCapReified<ToPhantomTypeArgument<T>> { const reifiedBcs = MetadataCap.bcs; return { typeName: MetadataCap.$typeName, fullTypeName: composeSuiType( MetadataCap.$typeName, ...[extractType(T)] ) as `0x2::coin_registry::MetadataCap<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: MetadataCap.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => MetadataCap.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MetadataCap.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => MetadataCap.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => MetadataCap.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => MetadataCap.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => MetadataCap.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => MetadataCap.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => MetadataCap.fetch( client, T, id, ), new: ( fields: MetadataCapFields<ToPhantomTypeArgument<T>>, ) => { return new MetadataCap( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return MetadataCap.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<MetadataCap<ToPhantomTypeArgument<T>>>> { return phantom(MetadataCap.reified( T )); } static get p() { return MetadataCap.phantom }

 private static instantiateBcs() { return bcs.struct("MetadataCap", {

 id: UID.bcs

}) };

 private static cachedBcs: ReturnType<typeof MetadataCap.instantiateBcs> | null = null;

 static get bcs(): ReturnType<typeof MetadataCap.instantiateBcs> { if (!MetadataCap.cachedBcs) { MetadataCap.cachedBcs = MetadataCap.instantiateBcs() } return MetadataCap.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): MetadataCap<ToPhantomTypeArgument<T>> { return MetadataCap.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): MetadataCap<ToPhantomTypeArgument<T>> { if (!isMetadataCap(item.type)) { throw new Error("not a MetadataCap type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return MetadataCap.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): MetadataCap<ToPhantomTypeArgument<T>> { return MetadataCap.fromFields( typeArg, MetadataCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): MetadataCap<ToPhantomTypeArgument<T>> { return MetadataCap.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): MetadataCap<ToPhantomTypeArgument<T>> { if (json.$typeName !== MetadataCap.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(MetadataCap.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return MetadataCap.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): MetadataCap<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMetadataCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MetadataCap object`); } return MetadataCap.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): MetadataCap<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMetadataCap(data.bcs.type)) { throw new Error(`object at is not a MetadataCap object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return MetadataCap.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MetadataCap.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<MetadataCap<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MetadataCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMetadataCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MetadataCap object`); }

 return MetadataCap.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== Currency =============================== */

export function isCurrency(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::coin_registry::Currency` + '<'); }

export interface CurrencyFields<T extends PhantomTypeArgument> { id: ToField<UID>; decimals: ToField<"u8">; name: ToField<String>; symbol: ToField<String>; description: ToField<String>; iconUrl: ToField<String>; supply: ToField<Option<SupplyState<T>>>; regulated: ToField<RegulatedState>; treasuryCapId: ToField<Option<ID>>; metadataCapId: ToField<MetadataCapState>; extraFields: ToField<VecMap<String, ExtraField>> }

export type CurrencyReified<T extends PhantomTypeArgument> = Reified< Currency<T>, CurrencyFields<T> >;

export class Currency<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `0x2::coin_registry::Currency`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Currency.$typeName; readonly $fullTypeName: `0x2::coin_registry::Currency<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = Currency.$isPhantom;

 readonly id: ToField<UID>; readonly decimals: ToField<"u8">; readonly name: ToField<String>; readonly symbol: ToField<String>; readonly description: ToField<String>; readonly iconUrl: ToField<String>; readonly supply: ToField<Option<SupplyState<T>>>; readonly regulated: ToField<RegulatedState>; readonly treasuryCapId: ToField<Option<ID>>; readonly metadataCapId: ToField<MetadataCapState>; readonly extraFields: ToField<VecMap<String, ExtraField>>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: CurrencyFields<T>, ) { this.$fullTypeName = composeSuiType( Currency.$typeName, ...typeArgs ) as `0x2::coin_registry::Currency<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.decimals = fields.decimals;; this.name = fields.name;; this.symbol = fields.symbol;; this.description = fields.description;; this.iconUrl = fields.iconUrl;; this.supply = fields.supply;; this.regulated = fields.regulated;; this.treasuryCapId = fields.treasuryCapId;; this.metadataCapId = fields.metadataCapId;; this.extraFields = fields.extraFields; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): CurrencyReified<ToPhantomTypeArgument<T>> { const reifiedBcs = Currency.bcs; return { typeName: Currency.$typeName, fullTypeName: composeSuiType( Currency.$typeName, ...[extractType(T)] ) as `0x2::coin_registry::Currency<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: Currency.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => Currency.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Currency.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => Currency.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => Currency.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => Currency.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => Currency.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => Currency.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => Currency.fetch( client, T, id, ), new: ( fields: CurrencyFields<ToPhantomTypeArgument<T>>, ) => { return new Currency( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Currency.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<Currency<ToPhantomTypeArgument<T>>>> { return phantom(Currency.reified( T )); } static get p() { return Currency.phantom }

 private static instantiateBcs() { return bcs.struct("Currency", {

 id: UID.bcs, decimals: bcs.u8(), name: String.bcs, symbol: String.bcs, description: String.bcs, icon_url: String.bcs, supply: Option.bcs(SupplyState.bcs( )), regulated: RegulatedState.bcs( ), treasury_cap_id: Option.bcs(ID.bcs), metadata_cap_id: MetadataCapState.bcs( ), extra_fields: VecMap.bcs(String.bcs, ExtraField.bcs)

}) };

 private static cachedBcs: ReturnType<typeof Currency.instantiateBcs> | null = null;

 static get bcs(): ReturnType<typeof Currency.instantiateBcs> { if (!Currency.cachedBcs) { Currency.cachedBcs = Currency.instantiateBcs() } return Currency.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): Currency<ToPhantomTypeArgument<T>> { return Currency.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), decimals: decodeFromFields("u8", fields.decimals), name: decodeFromFields(String.reified(), fields.name), symbol: decodeFromFields(String.reified(), fields.symbol), description: decodeFromFields(String.reified(), fields.description), iconUrl: decodeFromFields(String.reified(), fields.icon_url), supply: decodeFromFields(Option.reified(SupplyState.reified(typeArg)), fields.supply), regulated: decodeFromFields(RegulatedState.reified(), fields.regulated), treasuryCapId: decodeFromFields(Option.reified(ID.reified()), fields.treasury_cap_id), metadataCapId: decodeFromFields(MetadataCapState.reified(), fields.metadata_cap_id), extraFields: decodeFromFields(VecMap.reified(String.reified(), ExtraField.reified()), fields.extra_fields) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): Currency<ToPhantomTypeArgument<T>> { if (!isCurrency(item.type)) { throw new Error("not a Currency type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Currency.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), decimals: decodeFromFieldsWithTypes("u8", item.fields.decimals), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), symbol: decodeFromFieldsWithTypes(String.reified(), item.fields.symbol), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), iconUrl: decodeFromFieldsWithTypes(String.reified(), item.fields.icon_url), supply: decodeFromFieldsWithTypes(Option.reified(SupplyState.reified(typeArg)), item.fields.supply), regulated: decodeFromFieldsWithTypes(RegulatedState.reified(), item.fields.regulated), treasuryCapId: decodeFromFieldsWithTypes(Option.reified(ID.reified()), item.fields.treasury_cap_id), metadataCapId: decodeFromFieldsWithTypes(MetadataCapState.reified(), item.fields.metadata_cap_id), extraFields: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), ExtraField.reified()), item.fields.extra_fields) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): Currency<ToPhantomTypeArgument<T>> { return Currency.fromFields( typeArg, Currency.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,decimals: this.decimals,name: this.name,symbol: this.symbol,description: this.description,iconUrl: this.iconUrl,supply: fieldToJSON<Option<SupplyState<T>>>(`${Option.$typeName}<${SupplyState.$typeName}<${this.$typeArgs[0]}>>`, this.supply),regulated: this.regulated.toJSONField(),treasuryCapId: fieldToJSON<Option<ID>>(`${Option.$typeName}<${ID.$typeName}>`, this.treasuryCapId),metadataCapId: this.metadataCapId.toJSONField(),extraFields: this.extraFields.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): Currency<ToPhantomTypeArgument<T>> { return Currency.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), decimals: decodeFromJSONField("u8", field.decimals), name: decodeFromJSONField(String.reified(), field.name), symbol: decodeFromJSONField(String.reified(), field.symbol), description: decodeFromJSONField(String.reified(), field.description), iconUrl: decodeFromJSONField(String.reified(), field.iconUrl), supply: decodeFromJSONField(Option.reified(SupplyState.reified(typeArg)), field.supply), regulated: decodeFromJSONField(RegulatedState.reified(), field.regulated), treasuryCapId: decodeFromJSONField(Option.reified(ID.reified()), field.treasuryCapId), metadataCapId: decodeFromJSONField(MetadataCapState.reified(), field.metadataCapId), extraFields: decodeFromJSONField(VecMap.reified(String.reified(), ExtraField.reified()), field.extraFields) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): Currency<ToPhantomTypeArgument<T>> { if (json.$typeName !== Currency.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Currency.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Currency.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): Currency<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurrency(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Currency object`); } return Currency.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): Currency<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCurrency(data.bcs.type)) { throw new Error(`object at is not a Currency object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Currency.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Currency.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<Currency<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Currency object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurrency(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Currency object`); }

 return Currency.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== CurrencyInitializer =============================== */

export function isCurrencyInitializer(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::coin_registry::CurrencyInitializer` + '<'); }

export interface CurrencyInitializerFields<T extends PhantomTypeArgument> { currency: ToField<Currency<T>>; extraFields: ToField<Bag>; isOtw: ToField<"bool"> }

export type CurrencyInitializerReified<T extends PhantomTypeArgument> = Reified< CurrencyInitializer<T>, CurrencyInitializerFields<T> >;

export class CurrencyInitializer<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `0x2::coin_registry::CurrencyInitializer`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = CurrencyInitializer.$typeName; readonly $fullTypeName: `0x2::coin_registry::CurrencyInitializer<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = CurrencyInitializer.$isPhantom;

 readonly currency: ToField<Currency<T>>; readonly extraFields: ToField<Bag>; readonly isOtw: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: CurrencyInitializerFields<T>, ) { this.$fullTypeName = composeSuiType( CurrencyInitializer.$typeName, ...typeArgs ) as `0x2::coin_registry::CurrencyInitializer<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.currency = fields.currency;; this.extraFields = fields.extraFields;; this.isOtw = fields.isOtw; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): CurrencyInitializerReified<ToPhantomTypeArgument<T>> { const reifiedBcs = CurrencyInitializer.bcs; return { typeName: CurrencyInitializer.$typeName, fullTypeName: composeSuiType( CurrencyInitializer.$typeName, ...[extractType(T)] ) as `0x2::coin_registry::CurrencyInitializer<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: CurrencyInitializer.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => CurrencyInitializer.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CurrencyInitializer.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => CurrencyInitializer.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => CurrencyInitializer.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => CurrencyInitializer.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => CurrencyInitializer.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => CurrencyInitializer.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => CurrencyInitializer.fetch( client, T, id, ), new: ( fields: CurrencyInitializerFields<ToPhantomTypeArgument<T>>, ) => { return new CurrencyInitializer( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return CurrencyInitializer.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<CurrencyInitializer<ToPhantomTypeArgument<T>>>> { return phantom(CurrencyInitializer.reified( T )); } static get p() { return CurrencyInitializer.phantom }

 private static instantiateBcs() { return bcs.struct("CurrencyInitializer", {

 currency: Currency.bcs, extra_fields: Bag.bcs, is_otw: bcs.bool()

}) };

 private static cachedBcs: ReturnType<typeof CurrencyInitializer.instantiateBcs> | null = null;

 static get bcs(): ReturnType<typeof CurrencyInitializer.instantiateBcs> { if (!CurrencyInitializer.cachedBcs) { CurrencyInitializer.cachedBcs = CurrencyInitializer.instantiateBcs() } return CurrencyInitializer.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): CurrencyInitializer<ToPhantomTypeArgument<T>> { return CurrencyInitializer.reified( typeArg, ).new( { currency: decodeFromFields(Currency.reified(typeArg), fields.currency), extraFields: decodeFromFields(Bag.reified(), fields.extra_fields), isOtw: decodeFromFields("bool", fields.is_otw) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): CurrencyInitializer<ToPhantomTypeArgument<T>> { if (!isCurrencyInitializer(item.type)) { throw new Error("not a CurrencyInitializer type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return CurrencyInitializer.reified( typeArg, ).new( { currency: decodeFromFieldsWithTypes(Currency.reified(typeArg), item.fields.currency), extraFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.extra_fields), isOtw: decodeFromFieldsWithTypes("bool", item.fields.is_otw) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): CurrencyInitializer<ToPhantomTypeArgument<T>> { return CurrencyInitializer.fromFields( typeArg, CurrencyInitializer.bcs.parse(data) ) }

 toJSONField() { return {

 currency: this.currency.toJSONField(),extraFields: this.extraFields.toJSONField(),isOtw: this.isOtw,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): CurrencyInitializer<ToPhantomTypeArgument<T>> { return CurrencyInitializer.reified( typeArg, ).new( { currency: decodeFromJSONField(Currency.reified(typeArg), field.currency), extraFields: decodeFromJSONField(Bag.reified(), field.extraFields), isOtw: decodeFromJSONField("bool", field.isOtw) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): CurrencyInitializer<ToPhantomTypeArgument<T>> { if (json.$typeName !== CurrencyInitializer.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(CurrencyInitializer.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return CurrencyInitializer.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): CurrencyInitializer<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurrencyInitializer(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurrencyInitializer object`); } return CurrencyInitializer.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): CurrencyInitializer<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCurrencyInitializer(data.bcs.type)) { throw new Error(`object at is not a CurrencyInitializer object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return CurrencyInitializer.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CurrencyInitializer.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<CurrencyInitializer<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurrencyInitializer object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurrencyInitializer(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurrencyInitializer object`); }

 return CurrencyInitializer.fromSuiObjectData( typeArg, res.data ); }

 }

export function isSupplyState(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::coin_registry::SupplyState`); }export type SupplyStateReified<T0 extends PhantomTypeArgument> = EnumClassReified< SupplyState<T0> >;

 export type SupplyStateVariants<T0 extends PhantomTypeArgument> = { $kind: "Fixed", fields: {pos0: ToField<Supply<T0>>} }| { $kind: "BurnOnly", fields: {pos0: ToField<Supply<T0>>} }| { $kind: "Unknown" };

export class SupplyState<T0 extends PhantomTypeArgument> implements EnumClass { __EnumClass = true as const;

 static readonly $typeName = `0x2::coin_registry::SupplyState`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = SupplyState.$typeName; readonly $fullTypeName: `0x2::coin_registry::SupplyState<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = SupplyState.$isPhantom;

 readonly variant: "Fixed"| "BurnOnly"| "Unknown"; readonly fields: any;

 private constructor(typeArgs: [PhantomToTypeStr<T0>], variant: string, fields?: any) { this.$fullTypeName = composeSuiType( SupplyState.$typeName, ...typeArgs ) as `0x2::coin_registry::SupplyState<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs; this.variant = variant as any; this.fields = fields; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( pT0: T0 ): SupplyStateReified<ToPhantomTypeArgument<T0>> { const reifiedBcs = SupplyState.bcs( ); return { typeName: SupplyState.$typeName, fullTypeName: composeSuiType( SupplyState.$typeName, ...[extractType(pT0)] ) as `0x2::coin_registry::SupplyState<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(pT0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: SupplyState.$isPhantom, reifiedTypeArgs: [pT0], fromFields: (fields: Record<string, any>) => SupplyState.fromFields( pT0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SupplyState.fromFieldsWithTypes( pT0, item, ), fromBcs: (data: Uint8Array) => SupplyState.fromFields( pT0, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => SupplyState.fromJSONField( pT0, field, ), fromJSON: (json: Record<string, any>) => SupplyState.fromJSON( pT0, json, ), fromSuiParsedData: (content: SuiParsedData) => SupplyState.fromSuiParsedData( pT0, content, ), fromSuiObjectData: (data: SuiObjectData) => SupplyState.fromSuiObjectData( pT0, data, ), fetch: (client: SuiClient, id: string) => SupplyState.fetch( client, id, pT0, ), new: (variant: string, fields?: any) => SupplyState.new( pT0, variant, fields ), kind: "EnumClassReified", } } static get r() { return SupplyState.reified } static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( pT0: T0 ): PhantomReified<ToTypeStr<SupplyState<ToPhantomTypeArgument<T0>>>> { return phantom(SupplyState.reified( pT0 )); } static get p() { return SupplyState.phantom } static bcs( ) { return bcs.enum("SupplyState", { Fixed: bcs.struct("Fixed", { pos0: Supply.bcs }), BurnOnly: bcs.struct("BurnOnly", { pos0: Supply.bcs }), Unknown: null }) };

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): SupplyState<ToPhantomTypeArgument<T0>> { return SupplyState.fromFields( typeArg, SupplyState.bcs( ).parse(data) ) } static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): SupplyState<ToPhantomTypeArgument<T0>> { const reified = typeArg; return new SupplyState([extractType(typeArg)], fields.variant, fields.fields) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): SupplyState<ToPhantomTypeArgument<T0>> { if (!isSupplyState(item.type)) { throw new Error("not a SupplyState type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return SupplyState.fromFields( typeArg, item.fields ) }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): SupplyState<ToPhantomTypeArgument<T0>> { return SupplyState.reified( typeArg, ).new(field.variant, field.fields) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): SupplyState<ToPhantomTypeArgument<T0>> { if (json.$typeName !== SupplyState.$typeName) { throw new Error("not a SupplyState json object") }; assertReifiedTypeArgsMatch( json.$fullTypeName, json.$typeArgs, [typeArg] );

 return SupplyState.fromJSONField( typeArg, json ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): SupplyState<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not a moveObject") } return SupplyState.fromFieldsWithTypes( typeArg, content ) }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): SupplyState<ToPhantomTypeArgument<T0>> { if (data.bcs?.dataType !== "moveObject") { throw new Error("not a moveObject") } if (!isSupplyState(data.bcs.type)) { throw new Error("not a SupplyState type") } return SupplyState.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ) }

 static fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, id: string, typeArg: T0, ): Promise<SupplyState<ToPhantomTypeArgument<T0>>> { return client.getObject({ id, options: { showBcs: true, } }).then((res) => { if (res.data) { return SupplyState.fromSuiObjectData( typeArg, res.data ) } throw new Error(`cannot find SupplyState object at ${id}`); }) }

 static new<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, variant: string, fields?: any ): SupplyState<ToPhantomTypeArgument<T0>> { return new SupplyState( [extractType(typeArg)], variant, fields ) }

 toJSONField() { return { variant: this.variant, fields: this.fields } } toJSON() { return { $typeName: this.$typeName, $fullTypeName: this.$fullTypeName, $typeArgs: this.$typeArgs, ...this.toJSONField(), } } }export function isRegulatedState(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::coin_registry::RegulatedState`); }export type RegulatedStateReified = EnumClassReified< RegulatedState >;

 export type RegulatedStateVariants = { $kind: "Regulated", fields: {cap: ToField<ID>, allowGlobalPause: ToField<Option<"bool">>, variant: ToField<"u8">} }| { $kind: "Unregulated" }| { $kind: "Unknown" };

export class RegulatedState implements EnumClass { __EnumClass = true as const;

 static readonly $typeName = `0x2::coin_registry::RegulatedState`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RegulatedState.$typeName; readonly $fullTypeName: `0x2::coin_registry::RegulatedState`; readonly $typeArgs: []; readonly $isPhantom = RegulatedState.$isPhantom;

 readonly variant: "Regulated"| "Unregulated"| "Unknown"; readonly fields: any;

 private constructor(typeArgs: [], variant: string, fields?: any) { this.$fullTypeName = composeSuiType( RegulatedState.$typeName, ...typeArgs ) as `0x2::coin_registry::RegulatedState`; this.$typeArgs = typeArgs; this.variant = variant as any; this.fields = fields; }

 static reified( ): RegulatedStateReified { const reifiedBcs = RegulatedState.bcs( ); return { typeName: RegulatedState.$typeName, fullTypeName: composeSuiType( RegulatedState.$typeName, ...[] ) as `0x2::coin_registry::RegulatedState`, typeArgs: [ ] as [], isPhantom: RegulatedState.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RegulatedState.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RegulatedState.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RegulatedState.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => RegulatedState.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RegulatedState.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RegulatedState.fromSuiParsedData( content, ), fromSuiObjectData: (data: SuiObjectData) => RegulatedState.fromSuiObjectData( data, ), fetch: (client: SuiClient, id: string) => RegulatedState.fetch( client, id, ), new: (variant: string, fields?: any) => RegulatedState.new( variant, fields ), kind: "EnumClassReified", } } static get r() { return RegulatedState.reified } static phantom( ): PhantomReified<ToTypeStr<RegulatedState>> { return phantom(RegulatedState.reified( )); } static get p() { return RegulatedState.phantom } static bcs( ) { return bcs.enum("RegulatedState", { Regulated: bcs.struct("Regulated", { cap: ID.bcs, allowGlobalPause: Option.bcs( bcs.bool() ), variant: bcs.u8() }), Unregulated: null, Unknown: null }) };

 static fromBcs( data: Uint8Array ): RegulatedState { return RegulatedState.fromFields( RegulatedState.bcs( ).parse(data) ) } static fromFields( fields: Record<string, any> ): RegulatedState { return new RegulatedState([], fields.variant, fields.fields) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RegulatedState { if (!isRegulatedState(item.type)) { throw new Error("not a RegulatedState type");

 }

 return RegulatedState.fromFields( item.fields ) }

 static fromJSONField( field: any ): RegulatedState { return RegulatedState.reified( ).new(field.variant, field.fields) }

 static fromJSON( json: Record<string, any> ): RegulatedState { if (json.$typeName !== RegulatedState.$typeName) { throw new Error("not a RegulatedState json object") };

 return RegulatedState.fromJSONField( json ) }

 static fromSuiParsedData( content: SuiParsedData ): RegulatedState { if (content.dataType !== "moveObject") { throw new Error("not a moveObject") } return RegulatedState.fromFieldsWithTypes( content ) }

 static fromSuiObjectData( data: SuiObjectData ): RegulatedState { if (data.bcs?.dataType !== "moveObject") { throw new Error("not a moveObject") } if (!isRegulatedState(data.bcs.type)) { throw new Error("not a RegulatedState type") } return RegulatedState.fromBcs( fromB64(data.bcs.bcsBytes) ) }

 static fetch( client: SuiClient, id: string, ): Promise<RegulatedState> { return client.getObject({ id, options: { showBcs: true, } }).then((res) => { if (res.data) { return RegulatedState.fromSuiObjectData( res.data ) } throw new Error(`cannot find RegulatedState object at ${id}`); }) }

 static new( variant: string, fields?: any ): RegulatedState { return new RegulatedState( [], variant, fields ) }

 toJSONField() { return { variant: this.variant, fields: this.fields } } toJSON() { return { $typeName: this.$typeName, $fullTypeName: this.$fullTypeName, $typeArgs: this.$typeArgs, ...this.toJSONField(), } } }export function isMetadataCapState(type: string): boolean { type = compressSuiType(type); return type.startsWith(`0x2::coin_registry::MetadataCapState`); }export type MetadataCapStateReified = EnumClassReified< MetadataCapState >;

 export type MetadataCapStateVariants = { $kind: "Claimed", fields: {pos0: ToField<ID>} }| { $kind: "Unclaimed" }| { $kind: "Deleted" };

export class MetadataCapState implements EnumClass { __EnumClass = true as const;

 static readonly $typeName = `0x2::coin_registry::MetadataCapState`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MetadataCapState.$typeName; readonly $fullTypeName: `0x2::coin_registry::MetadataCapState`; readonly $typeArgs: []; readonly $isPhantom = MetadataCapState.$isPhantom;

 readonly variant: "Claimed"| "Unclaimed"| "Deleted"; readonly fields: any;

 private constructor(typeArgs: [], variant: string, fields?: any) { this.$fullTypeName = composeSuiType( MetadataCapState.$typeName, ...typeArgs ) as `0x2::coin_registry::MetadataCapState`; this.$typeArgs = typeArgs; this.variant = variant as any; this.fields = fields; }

 static reified( ): MetadataCapStateReified { const reifiedBcs = MetadataCapState.bcs( ); return { typeName: MetadataCapState.$typeName, fullTypeName: composeSuiType( MetadataCapState.$typeName, ...[] ) as `0x2::coin_registry::MetadataCapState`, typeArgs: [ ] as [], isPhantom: MetadataCapState.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MetadataCapState.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MetadataCapState.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MetadataCapState.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => MetadataCapState.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MetadataCapState.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MetadataCapState.fromSuiParsedData( content, ), fromSuiObjectData: (data: SuiObjectData) => MetadataCapState.fromSuiObjectData( data, ), fetch: (client: SuiClient, id: string) => MetadataCapState.fetch( client, id, ), new: (variant: string, fields?: any) => MetadataCapState.new( variant, fields ), kind: "EnumClassReified", } } static get r() { return MetadataCapState.reified } static phantom( ): PhantomReified<ToTypeStr<MetadataCapState>> { return phantom(MetadataCapState.reified( )); } static get p() { return MetadataCapState.phantom } static bcs( ) { return bcs.enum("MetadataCapState", { Claimed: bcs.struct("Claimed", { pos0: ID.bcs }), Unclaimed: null, Deleted: null }) };

 static fromBcs( data: Uint8Array ): MetadataCapState { return MetadataCapState.fromFields( MetadataCapState.bcs( ).parse(data) ) } static fromFields( fields: Record<string, any> ): MetadataCapState { return new MetadataCapState([], fields.variant, fields.fields) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MetadataCapState { if (!isMetadataCapState(item.type)) { throw new Error("not a MetadataCapState type");

 }

 return MetadataCapState.fromFields( item.fields ) }

 static fromJSONField( field: any ): MetadataCapState { return MetadataCapState.reified( ).new(field.variant, field.fields) }

 static fromJSON( json: Record<string, any> ): MetadataCapState { if (json.$typeName !== MetadataCapState.$typeName) { throw new Error("not a MetadataCapState json object") };

 return MetadataCapState.fromJSONField( json ) }

 static fromSuiParsedData( content: SuiParsedData ): MetadataCapState { if (content.dataType !== "moveObject") { throw new Error("not a moveObject") } return MetadataCapState.fromFieldsWithTypes( content ) }

 static fromSuiObjectData( data: SuiObjectData ): MetadataCapState { if (data.bcs?.dataType !== "moveObject") { throw new Error("not a moveObject") } if (!isMetadataCapState(data.bcs.type)) { throw new Error("not a MetadataCapState type") } return MetadataCapState.fromBcs( fromB64(data.bcs.bcsBytes) ) }

 static fetch( client: SuiClient, id: string, ): Promise<MetadataCapState> { return client.getObject({ id, options: { showBcs: true, } }).then((res) => { if (res.data) { return MetadataCapState.fromSuiObjectData( res.data ) } throw new Error(`cannot find MetadataCapState object at ${id}`); }) }

 static new( variant: string, fields?: any ): MetadataCapState { return new MetadataCapState( [], variant, fields ) }

 toJSONField() { return { variant: this.variant, fields: this.fields } } toJSON() { return { $typeName: this.$typeName, $fullTypeName: this.$fullTypeName, $typeArgs: this.$typeArgs, ...this.toJSONField(), } } }
