use wasmer_runtime::{imports, instantiate, DynFunc, Value};

static WASM: &'static [u8] = &[
    0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x06, 0x01, 0x60, 0x01, 0x7f, 0x01, 0x7f,
    0x03, 0x02, 0x01, 0x00, 0x07, 0x0b, 0x01, 0x07, 0x61, 0x64, 0x64, 0x5f, 0x6f, 0x6e, 0x65, 0x00,
    0x00, 0x0a, 0x09, 0x01, 0x07, 0x00, 0x20, 0x00, 0x41, 0x01, 0x6a, 0x0b, 0x00, 0x1a, 0x04, 0x6e,
    0x61, 0x6d, 0x65, 0x01, 0x0a, 0x01, 0x00, 0x07, 0x61, 0x64, 0x64, 0x5f, 0x6f, 0x6e, 0x65, 0x02,
    0x07, 0x01, 0x00, 0x01, 0x00, 0x02, 0x70, 0x30,
];

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let import_object = imports! {};

    let instance = instantiate(WASM, &import_object)?;

    let values = instance
        .exports
        .get::<DynFunc>("add_one")?
        .call(&[Value::I32(42)])?;

    assert_eq!(values[0], Value::I32(43));

    Ok(())
}

#[test]
fn test_readme() -> Result<(), Box<dyn std::error::Error>> {
    main()
}
