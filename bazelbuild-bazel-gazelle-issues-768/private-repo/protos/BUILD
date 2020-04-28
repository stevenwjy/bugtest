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
    importpath = "github.com/stevenwjy/private-repo/protos",
    proto = ":protos_proto",
    protos = [
        ":foo_proto",
        ":bar_proto",
        ":service_proto",
    ],
    visibility = ["//visibility:public"],
    deps = ["//protos:go_default_library"],
)

proto_library(
    name = "protos_proto",
    srcs = [
        "bar.proto",
        "foo.proto",
        "service.proto",
    ],
    visibility = ["//visibility:public"],
    deps = ["//protos:protos_proto"],
)

go_proto_library(
    name = "protos_go_proto",
    compilers = ["@io_bazel_rules_go//proto:go_grpc"],
    importpath = "github.com/stevenwjy/private-repo-test/protos",
    proto = ":protos_proto",
    visibility = ["//visibility:public"],
    deps = ["//protos:go_default_library"],
)
