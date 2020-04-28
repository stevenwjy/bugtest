package main

import (
  "context"
  "log"
  "time"

  "github.com/stevenwjy/new-private-test/protos"
  "google.golang.org/grpc"
)

const (
  address     = "localhost:8081"
)

func main() {
  // Set up a connection to the server.
  conn, err := grpc.Dial(address, grpc.WithInsecure())
  if err != nil {
    log.Fatalf("did not connect: %v", err)
  }
  defer conn.Close()
  c := protos.NewTestServiceClient(conn)

  // Contact the server and print out its response.
  ctx, cancel := context.WithTimeout(context.Background(), time.Second)
  defer cancel()
  r, err := c.FooQuery(ctx, &protos.FooRequest{A: "a", B: "b"})
  if err != nil {
    log.Fatalf("could not query: %v", err)
  }
  log.Printf("Response: %s", r.Msg)
}
