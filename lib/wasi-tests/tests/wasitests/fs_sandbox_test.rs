// !!! THIS IS A GENERATED FILE !!!
// ANY MANUAL EDITS MAY BE OVERWRITTEN AT ANY TIME
// Files autogenerated with cargo build (build/wasitests.rs).

#[test]
fn test_fs_sandbox_test() {
    assert_wasi_output!(
        "../../wasitests/fs_sandbox_test.wasm",
        "fs_sandbox_test",
        vec![],
        vec![],
        vec![],
        "../../wasitests/fs_sandbox_test.out"
    );
}
