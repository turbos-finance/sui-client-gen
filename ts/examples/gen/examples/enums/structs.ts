import {EnumClass, EnumClassReified, PhantomReified, Reified, ToField, ToTypeArgument, ToTypeStr, TypeArgument, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, extractType, phantom, toBcs} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {BcsType, bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

export function isMyEnum(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${typeof PKG_V1}::enums::MyEnum`); }export type MyEnumReified = EnumClassReified< MyEnum >;

 export type MyEnumVariants = { $kind: "Variant1" }| { $kind: "Variant2", fields: {x: ToField<"u64">} }| { $kind: "Variant3", fields: {pos0: ToField<"u8">} };

export class MyEnum implements EnumClass { __EnumClass = true as const;

 static readonly $typeName = `${PKG_V1}::enums::MyEnum`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MyEnum.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::enums::MyEnum`; readonly $typeArgs: []; readonly $isPhantom = MyEnum.$isPhantom;

 readonly variant: "Variant1"| "Variant2"| "Variant3"; readonly fields: any;

 private constructor(typeArgs: [], variant: string, fields?: any) { this.$fullTypeName = composeSuiType( MyEnum.$typeName, ...typeArgs ) as `${typeof PKG_V1}::enums::MyEnum`; this.$typeArgs = typeArgs; this.variant = variant as any; this.fields = fields; }

 static reified( ): MyEnumReified { const reifiedBcs = MyEnum.bcs( ); return { typeName: MyEnum.$typeName, fullTypeName: composeSuiType( MyEnum.$typeName, ...[] ) as `${typeof PKG_V1}::enums::MyEnum`, typeArgs: [ ] as [], isPhantom: MyEnum.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MyEnum.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MyEnum.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MyEnum.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => MyEnum.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MyEnum.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MyEnum.fromSuiParsedData( content, ), fromSuiObjectData: (data: SuiObjectData) => MyEnum.fromSuiObjectData( data, ), fetch: (client: SuiClient, id: string) => MyEnum.fetch( client, id, ), new: (variant: string, fields?: any) => MyEnum.new( variant, fields ), kind: "EnumClassReified", } } static get r() { return MyEnum.reified } static phantom( ): PhantomReified<ToTypeStr<MyEnum>> { return phantom(MyEnum.reified( )); } static get p() { return MyEnum.phantom } static bcs( ) { return bcs.enum("MyEnum", { Variant1: null, Variant2: bcs.struct("Variant2", { x: bcs.u64() }), Variant3: bcs.struct("Variant3", { pos0: bcs.u8() }) }) };

 static fromBcs( data: Uint8Array ): MyEnum { return MyEnum.fromFields( MyEnum.bcs( ).parse(data) ) } static fromFields( fields: Record<string, any> ): MyEnum { return new MyEnum([], fields.variant, fields.fields) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MyEnum { if (!isMyEnum(item.type)) { throw new Error("not a MyEnum type");

 }

 return MyEnum.fromFields( item.fields ) }

 static fromJSONField( field: any ): MyEnum { return MyEnum.reified( ).new(field.variant, field.fields) }

 static fromJSON( json: Record<string, any> ): MyEnum { if (json.$typeName !== MyEnum.$typeName) { throw new Error("not a MyEnum json object") };

 return MyEnum.fromJSONField( json ) }

 static fromSuiParsedData( content: SuiParsedData ): MyEnum { if (content.dataType !== "moveObject") { throw new Error("not a moveObject") } return MyEnum.fromFieldsWithTypes( content ) }

 static fromSuiObjectData( data: SuiObjectData ): MyEnum { if (data.bcs?.dataType !== "moveObject") { throw new Error("not a moveObject") } if (!isMyEnum(data.bcs.type)) { throw new Error("not a MyEnum type") } return MyEnum.fromBcs( fromB64(data.bcs.bcsBytes) ) }

 static fetch( client: SuiClient, id: string, ): Promise<MyEnum> { return client.getObject({ id, options: { showBcs: true, } }).then((res) => { if (res.data) { return MyEnum.fromSuiObjectData( res.data ) } throw new Error(`cannot find MyEnum object at ${id}`); }) }

 static new( variant: string, fields?: any ): MyEnum { return new MyEnum( [], variant, fields ) }

 toJSONField() { return { variant: this.variant, fields: this.fields } } toJSON() { return { $typeName: this.$typeName, $fullTypeName: this.$fullTypeName, $typeArgs: this.$typeArgs, ...this.toJSONField(), } } }export function isGenericEnum(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${typeof PKG_V1}::enums::GenericEnum`); }export type GenericEnumReified<T0 extends TypeArgument> = EnumClassReified< GenericEnum<T0> >;

 export type GenericEnumVariants<T0 extends TypeArgument> = { $kind: "Variant1", fields: {pos0: ToField<T0>} }| { $kind: "Variant2", fields: {x: ToField<T0>, y: ToField<"u64">} };

export class GenericEnum<T0 extends TypeArgument> implements EnumClass { __EnumClass = true as const;

 static readonly $typeName = `${PKG_V1}::enums::GenericEnum`; static readonly $numTypeParams = 1; static readonly $isPhantom = [false,] as const;

 readonly $typeName = GenericEnum.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::enums::GenericEnum<${ToTypeStr<T0>}>`; readonly $typeArgs: [ToTypeStr<T0>]; readonly $isPhantom = GenericEnum.$isPhantom;

 readonly variant: "Variant1"| "Variant2"; readonly fields: any;

 private constructor(typeArgs: [ToTypeStr<T0>], variant: string, fields?: any) { this.$fullTypeName = composeSuiType( GenericEnum.$typeName, ...typeArgs ) as `${typeof PKG_V1}::enums::GenericEnum<${ToTypeStr<T0>}>`; this.$typeArgs = typeArgs; this.variant = variant as any; this.fields = fields; }

 static reified<T0 extends Reified<TypeArgument, any>>( pT0: T0 ): GenericEnumReified<ToTypeArgument<T0>> { const reifiedBcs = GenericEnum.bcs( toBcs(pT0) ); return { typeName: GenericEnum.$typeName, fullTypeName: composeSuiType( GenericEnum.$typeName, ...[extractType(pT0)] ) as `${typeof PKG_V1}::enums::GenericEnum<${ToTypeStr<ToTypeArgument<T0>>}>`, typeArgs: [ extractType(pT0) ] as [ToTypeStr<ToTypeArgument<T0>>], isPhantom: GenericEnum.$isPhantom, reifiedTypeArgs: [pT0], fromFields: (fields: Record<string, any>) => GenericEnum.fromFields( pT0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GenericEnum.fromFieldsWithTypes( pT0, item, ), fromBcs: (data: Uint8Array) => GenericEnum.fromFields( pT0, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => GenericEnum.fromJSONField( pT0, field, ), fromJSON: (json: Record<string, any>) => GenericEnum.fromJSON( pT0, json, ), fromSuiParsedData: (content: SuiParsedData) => GenericEnum.fromSuiParsedData( pT0, content, ), fromSuiObjectData: (data: SuiObjectData) => GenericEnum.fromSuiObjectData( pT0, data, ), fetch: (client: SuiClient, id: string) => GenericEnum.fetch( client, id, pT0, ), new: (variant: string, fields?: any) => GenericEnum.new( pT0, variant, fields ), kind: "EnumClassReified", } } static get r() { return GenericEnum.reified } static phantom<T0 extends Reified<TypeArgument, any>>( pT0: T0 ): PhantomReified<ToTypeStr<GenericEnum<ToTypeArgument<T0>>>> { return phantom(GenericEnum.reified( pT0 )); } static get p() { return GenericEnum.phantom } static bcs<T0 extends BcsType<any>>( pT0: T0 ) { return bcs.enum(`GenericEnum<${pT0.name}>`, { Variant1: bcs.struct("Variant1", { pos0: pT0 }), Variant2: bcs.struct("Variant2", { x: pT0, y: bcs.u64() }) }) };

 static fromBcs<T0 extends Reified<TypeArgument, any>>( typeArg: T0, data: Uint8Array ): GenericEnum<ToTypeArgument<T0>> { return GenericEnum.fromFields( typeArg, GenericEnum.bcs( toBcs(typeArg) ).parse(data) ) } static fromFields<T0 extends Reified<TypeArgument, any>>( typeArg: T0, fields: Record<string, any> ): GenericEnum<ToTypeArgument<T0>> { const reified = typeArg; return new GenericEnum([extractType(typeArg)], fields.variant, fields.fields) }

 static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>( typeArg: T0, item: FieldsWithTypes ): GenericEnum<ToTypeArgument<T0>> { if (!isGenericEnum(item.type)) { throw new Error("not a GenericEnum type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return GenericEnum.fromFields( typeArg, item.fields ) }

 static fromJSONField<T0 extends Reified<TypeArgument, any>>( typeArg: T0, field: any ): GenericEnum<ToTypeArgument<T0>> { return GenericEnum.reified( typeArg, ).new(field.variant, field.fields) }

 static fromJSON<T0 extends Reified<TypeArgument, any>>( typeArg: T0, json: Record<string, any> ): GenericEnum<ToTypeArgument<T0>> { if (json.$typeName !== GenericEnum.$typeName) { throw new Error("not a GenericEnum json object") }; assertReifiedTypeArgsMatch( json.$fullTypeName, json.$typeArgs, [typeArg] );

 return GenericEnum.fromJSONField( typeArg, json ) }

 static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>( typeArg: T0, content: SuiParsedData ): GenericEnum<ToTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not a moveObject") } return GenericEnum.fromFieldsWithTypes( typeArg, content ) }

 static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>( typeArg: T0, data: SuiObjectData ): GenericEnum<ToTypeArgument<T0>> { if (data.bcs?.dataType !== "moveObject") { throw new Error("not a moveObject") } if (!isGenericEnum(data.bcs.type)) { throw new Error("not a GenericEnum type") } return GenericEnum.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ) }

 static fetch<T0 extends Reified<TypeArgument, any>>( client: SuiClient, id: string, typeArg: T0, ): Promise<GenericEnum<ToTypeArgument<T0>>> { return client.getObject({ id, options: { showBcs: true, } }).then((res) => { if (res.data) { return GenericEnum.fromSuiObjectData( typeArg, res.data ) } throw new Error(`cannot find GenericEnum object at ${id}`); }) }

 static new<T0 extends Reified<TypeArgument, any>>( typeArg: T0, variant: string, fields?: any ): GenericEnum<ToTypeArgument<T0>> { return new GenericEnum( [extractType(typeArg)], variant, fields ) }

 toJSONField() { return { variant: this.variant, fields: this.fields } } toJSON() { return { $typeName: this.$typeName, $fullTypeName: this.$fullTypeName, $typeArgs: this.$typeArgs, ...this.toJSONField(), } } }
