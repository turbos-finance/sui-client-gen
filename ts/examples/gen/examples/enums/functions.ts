import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function createMyEnumVariant1( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::enums::create_my_enum_variant1`, arguments: [ ], }) }

export function createMyEnumVariant2( tx: Transaction, x: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::enums::create_my_enum_variant2`, arguments: [ pure(tx, x, `u64`) ], }) }

export function createMyEnumVariant3( tx: Transaction, x: number | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::enums::create_my_enum_variant3`, arguments: [ pure(tx, x, `u8`) ], }) }

export function createGenericEnumVariant1( tx: Transaction, typeArg: string, x: GenericArg ) { return tx.moveCall({ target: `${PUBLISHED_AT}::enums::create_generic_enum_variant1`, typeArguments: [typeArg], arguments: [ generic(tx, `${typeArg}`, x) ], }) }

export interface CreateGenericEnumVariant2Args { x: GenericArg; y: bigint | TransactionArgument }

export function createGenericEnumVariant2( tx: Transaction, typeArg: string, args: CreateGenericEnumVariant2Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::enums::create_generic_enum_variant2`, typeArguments: [typeArg], arguments: [ generic(tx, `${typeArg}`, args.x), pure(tx, args.y, `u64`) ], }) }

export function takeMyEnum( tx: Transaction, x: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::enums::take_my_enum`, arguments: [ obj(tx, x) ], }) }
