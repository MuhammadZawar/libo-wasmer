#[test]
fn test_fs_sandbox_test() {
    assert_wasi_output!(
        "../../wasitests/fs_sandbox_test.wasm",
        "fs_sandbox_test",
        vec![],
        vec![],
        "../../wasitests/fs_sandbox_test.out"
    );
}