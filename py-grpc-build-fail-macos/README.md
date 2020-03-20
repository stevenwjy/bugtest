# Bug testing for py_grpc_library in MacOS

## Version

### Bazel

Bazel 2.2.0

### MacOS

```
APPLE_SDK_PLATFORM=MacOSX 
APPLE_SDK_VERSION_OVERRIDE=10.15
XCODE_VERSION_OVERRIDE=11.3.1.11C504
```

## How to reproduce?

```
$ cd protos
$ bazel build :service_py_grpc
```

## Error message

```
ERROR: /path/to/bazel/external/com_github_grpc_grpc/BUILD:334:1: Linking of rule '@com_github_grpc_grpc//:grpc' failed (Exit 1) cc_wrapper.sh failed: error executing command external/local_config_cc/cc_wrapper.sh -lc++ -fobjc-link-runtime -Wl,-S -shared -o bazel-out/darwin-fastbuild/bin/external/com_github_grpc_grpc/libgrpc.so ... (remaining 8 argument(s) skipped)

Use --sandbox_debug to see verbose messages from the sandbox
ld: illegal thread local variable reference to regular symbol __ZN9grpc_core7ExecCtx9exec_ctx_E for architecture x86_64
clang: error: linker command failed with exit code 1 (use -v to see invocation)
Target //protos:service_py_grpc failed to build
Use --verbose_failures to see the command lines of failed build steps.
```
