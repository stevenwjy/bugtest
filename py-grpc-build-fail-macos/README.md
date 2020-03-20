# Bug testing for py_grpc_library in MacOS

## Version

### Bazel

Bazel 2.2.0

### Python

Python 2.7.15  
Python 3.7.4

### MacOS

APPLE_SDK_PLATFORM=MacOSX  
APPLE_SDK_VERSION_OVERRIDE=10.15  
XCODE_VERSION_OVERRIDE=11.3.1.11C504  

## How to reproduce?

```
$ cd protos
$ bazel build :service_py_grpc
```

## Error message

Here is the error message that I received when running `bazel build :service_py_grpc --verbose_failures --sandbox_debug`:

```
ERROR: /private/var/tmp/_bazel_stevenwjy/5723f9f97e82446f2ca0b52d55350705/external/com_github_grpc_grpc/BUILD:334:1: Linking of rule '@com_github_grpc_grpc//:grpc' failed (Exit 1): sandbox-exec failed: error executing command
  (cd /private/var/tmp/_bazel_stevenwjy/5723f9f97e82446f2ca0b52d55350705/sandbox/darwin-sandbox/414/execroot/bugtest && \
  exec env - \
    APPLE_SDK_PLATFORM=MacOSX \
    APPLE_SDK_VERSION_OVERRIDE=10.15 \
    DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer \
    PATH=<...> \
    SDKROOT=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.15.sdk \
    TMPDIR=<...> \
    XCODE_VERSION_OVERRIDE=11.3.1.11C504 \
  /usr/bin/sandbox-exec -f /private/var/tmp/_bazel_stevenwjy/5723f9f97e82446f2ca0b52d55350705/sandbox/darwin-sandbox/414/sandbox.sb /var/tmp/_bazel_stevenwjy/install/8ee987d32e94b9a7b51ef6034faefef4/process-wrapper '--timeout=0' '--kill_delay=15' external/local_config_cc/cc_wrapper.sh -lc++ -fobjc-link-runtime -Wl,-S -shared -o bazel-out/darwin-fastbuild/bin/external/com_github_grpc_grpc/libgrpc.so bazel-out/darwin-fastbuild/bin/external/com_github_grpc_grpc/_objs/grpc/init.o bazel-out/darwin-fastbuild/bin/external/com_github_grpc_grpc/_objs/grpc/grpc_plugin_registry.o -headerpad_max_install_names -pthread -no-canonical-prefixes -undefined dynamic_lookup '-mmacosx-version-min=10.15') sandbox-exec failed: error executing command
  (cd /private/var/tmp/_bazel_stevenwjy/5723f9f97e82446f2ca0b52d55350705/sandbox/darwin-sandbox/414/execroot/bugtest && \
  exec env - \
    APPLE_SDK_PLATFORM=MacOSX \
    APPLE_SDK_VERSION_OVERRIDE=10.15 \
    DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer \
    PATH=<...> \
    SDKROOT=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.15.sdk \
    TMPDIR=<...> \
    XCODE_VERSION_OVERRIDE=11.3.1.11C504 \
  /usr/bin/sandbox-exec -f /private/var/tmp/_bazel_stevenwjy/5723f9f97e82446f2ca0b52d55350705/sandbox/darwin-sandbox/414/sandbox.sb /var/tmp/_bazel_stevenwjy/install/8ee987d32e94b9a7b51ef6034faefef4/process-wrapper '--timeout=0' '--kill_delay=15' external/local_config_cc/cc_wrapper.sh -lc++ -fobjc-link-runtime -Wl,-S -shared -o bazel-out/darwin-fastbuild/bin/external/com_github_grpc_grpc/libgrpc.so bazel-out/darwin-fastbuild/bin/external/com_github_grpc_grpc/_objs/grpc/init.o bazel-out/darwin-fastbuild/bin/external/com_github_grpc_grpc/_objs/grpc/grpc_plugin_registry.o -headerpad_max_install_names -pthread -no-canonical-prefixes -undefined dynamic_lookup '-mmacosx-version-min=10.15')
ld: illegal thread local variable reference to regular symbol __ZN9grpc_core7ExecCtx9exec_ctx_E for architecture x86_64
clang: error: linker command failed with exit code 1 (use -v to see invocation)
Target //protos:service_py_grpc failed to build
```

## Running on Ubuntu 18.04 LTS

On a separate note, this seems to be working on Ubuntu 18.04 LTS, even though it produces a lot of warnings (perhaps due to the installed python version).

### Python Version

Python 2.7.17  
Python 3.8.0

### Debug Output

Some parts of the debug output:

```                                                            ^                                                                 ^~~~~~~~
In file included from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/object.h:746:0,
                 from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/pytime.h:6,
                 from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/Python.h:85,
                 from bazel-out/k8-fastbuild/bin/external/com_github_grpc_grpc/src/python/grpcio/grpc/_cython/cygrpc.cpp:4:
bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/cpython/object.h:260:63: note: declared here
     Py_DEPRECATED(3.8) int (*tp_print)(PyObject *, FILE *, int);
                                                               ^
bazel-out/k8-fastbuild/bin/external/com_github_grpc_grpc/src/python/grpcio/grpc/_cython/cygrpc.cpp:109621:65: warning: '_typeobject::tp_print' is deprecated [-Wdeprecated-declarations]
   __pyx_type_6cygrpc___pyx_scope_struct_48_wait_for_termination.tp_print = 0;
                                                                 ^~~~~~~~
In file included from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/object.h:746:0,
                 from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/pytime.h:6,
                 from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/Python.h:85,
                 from bazel-out/k8-fastbuild/bin/external/com_github_grpc_grpc/src/python/grpcio/grpc/_cython/cygrpc.cpp:4:
bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/cpython/object.h:260:63: note: declared here
     Py_DEPRECATED(3.8) int (*tp_print)(PyObject *, FILE *, int);
                                                               ^
bazel-out/k8-fastbuild/bin/external/com_github_grpc_grpc/src/python/grpcio/grpc/_cython/cygrpc.cpp:109621:65: warning: '_typeobject::tp_print' is deprecated [-Wdeprecated-declarations]
   __pyx_type_6cygrpc___pyx_scope_struct_48_wait_for_termination.tp_print = 0;
                                                                 ^~~~~~~~
In file included from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/object.h:746:0,
                 from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/pytime.h:6,
                 from bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/Python.h:85,
                 from bazel-out/k8-fastbuild/bin/external/com_github_grpc_grpc/src/python/grpcio/grpc/_cython/cygrpc.cpp:4:
bazel-out/k8-fastbuild/bin/external/local_config_python/_python3/_python3_include/cpython/object.h:260:63: note: declared here
     Py_DEPRECATED(3.8) int (*tp_print)(PyObject *, FILE *, int);
                                                               ^
bazel-out/k8-fastbuild/bin/external/com_github_grpc_grpc/src/python/grpcio/grpc/_cython/cygrpc.cpp: At global scope:
bazel-out/k8-fastbuild/bin/external/com_github_grpc_grpc/src/python/grpcio/grpc/_cython/cygrpc.cpp:121361:1: warning: 'void __Pyx_PyAsyncGen_Fini()' defined but not used [-Wunused-function]
 33   sha256 = "c2ab8a42a0d673c1acb596d276055adcc074c1116e427f118415da3e79e52969",
 __Pyx_PyAsyncGen_Fini(void)
 ^~~~~~~~~~~~~~~~~~~~~
 ```
