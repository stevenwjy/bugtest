load("@rules_proto//proto:defs.bzl", "proto_library")

# Proto files
proto_library(
  name = "foo_proto",
  srcs = ["foo.proto"],
)

proto_library(
  name = "bar_proto",
  srcs = ["bar.proto"],
)

proto_library(
  name = "service_proto",
  srcs = ["service.proto"],
  deps = [
    "foo_proto",
    "bar_proto"
  ],
)

# Support for Python
load("@com_github_grpc_grpc//bazel:python_rules.bzl", "py_proto_library", "py_grpc_library")

# Python compiled version of the proto files
py_proto_library(
  name = "service_py_proto",
  deps = ["service_proto"],
)

# Python gRPC files
py_grpc_library(
  name = "service_py_grpc",
  srcs = ["service_proto"],
  deps = ["service_py_proto"],
  visibility = ["//visibility:public"],
)
