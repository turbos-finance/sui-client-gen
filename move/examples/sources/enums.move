module examples::enums {
    public enum MyEnum has drop, store {
        Variant1,
        Variant2 { x: u64 },
        Variant3(u8),
    }

    public enum GenericEnum<T> has drop, store {
        Variant1(T),
        Variant2 { x: T, y: u64 },
    }

    public fun create_my_enum_variant1(): MyEnum {
        MyEnum::Variant1
    }

    public fun create_my_enum_variant2(x: u64): MyEnum {
        MyEnum::Variant2 { x }
    }

    public fun create_my_enum_variant3(x: u8): MyEnum {
        MyEnum::Variant3(x)
    }

    public fun create_generic_enum_variant1<T>(x: T): GenericEnum<T> {
        GenericEnum::Variant1(x)
    }

    public fun create_generic_enum_variant2<T>(x: T, y: u64): GenericEnum<T> {
        GenericEnum::Variant2 { x, y }
    }

    public fun take_my_enum(_x: MyEnum) {
    }
}
