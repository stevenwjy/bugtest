# bazelbuild/bazel-gazelle/issues/768

## How to reproduce

- Create a private repository and put all the files under [`private-repo`](private-repo/) in the root directory of your repo.
- You may also want to change the name of the workspace and importpath of the go_default_library used in the private repo.
- Don't forget to update [`go.mod`](go.mod) and [`main.go`](cmd/testpkg/main.go) to depend on your private repository
- Run `bazel run //:gazelle -- update-repos -from_file=go.mod`
