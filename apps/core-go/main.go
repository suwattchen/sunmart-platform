package main

import (
    "log"
    "os"
    "time"
    "github.com/nats-io/nats.go"
    "github.com/joho/godotenv"
)

func main() {
    // Load env from secret
    godotenv.Load("/run/secrets/env_file")

    // Connect NATS with retry
    nc, err := nats.Connect(
        os.Getenv("NATS_URL"),
        nats.ReconnectWait(2 * time.Second),
        nats.MaxReconnects(10),
    )
    if err != nil {
        log.Fatal("NATS connection failed:", err)
    }
    defer nc.Close()

    log.Println("✅ Core service connected to NATS")

    // Subscribe to order.paid
    nc.Subscribe("order.paid", func(msg *nats.Msg) {
        log.Printf("➡️ Received order: %s", string(msg.Data))
        // TODO: Call provisioner logic
        msg.Ack()
    })

    // Keep alive
    select {}
}
