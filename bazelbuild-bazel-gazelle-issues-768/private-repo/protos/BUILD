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
        "bar_proto",
    ],
)

# Support for Go
load("@io_bazel_rules_go//proto:def.bzl", "go_proto_library")

# Go compiled version of the proto files

go_proto_library(
    name = "go_default_library",
    compilers = ["@io_bazel_rules_go//proto:go_grpc"],  # gRPC compiler
    importpath = "github.com/stevenwjy/private-repo-test/protos",
    protos = [
        ":foo_proto",
        ":bar_proto",
        ":service_proto",
    ],
    visibility = ["//visibility:public"],
)
