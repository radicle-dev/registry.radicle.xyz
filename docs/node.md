---
id: node
title: Setup a full node
sidebar_label: Setup a full node
---

## Startup

To start the node, run its executable:

```bash
radicle-registry-node
```

The node must store data on your hard drive.
You can override the default location with a parameter:

```bash
radicle-registry-node --data-path <PATH>
```

### Connecting to the network

The node connects by default to the testnet network.
It has a list of known nodes, which can be called to join the network for the first time.
You can use your own list of bootstrap nodes with a startup parameter:

```bash
radicle-registry-node --bootnodes <ADDR>
```

The addresses must be expressed as libp2p multiaddresses with a peer ID, e.g.
`/ip4/35.233.120.254/tcp/30333/p2p/QmRpheLN4JWdAnY7HGJfWFNbfkQCb6tFf4vvA6hgjMZKrR`.
For more information visit <a href="https://docs.libp2p.io/concepts/addressing/" target="_blank" rel="noopener noreferrer">libp2p documentation</a>.

## Mining Blocks

You can support the network by mining blocks. Miners receive rewards from
successfully mined blocks. To collect your rewards, you need an account.

Generate an account for mining:

```bash
radicle-registry-cli account generate mining
```

This will print the SS58 address for your mining account.
You can now run a mining node:

```bash
radicle-registry-node --mine <address>
```

If your node successfully mined a block and imported it will log `Imported own
block`:
```
15:50:13.041 INFO radicle_registry_node::service  Imported own block #1322 (0xefd1…4445)
```
Depending on how lucky you are mining a block might take minutes or hours.

When your node has mined a block, your mining account receives some block
rewards. Check your balance with:

```bash
radicle-registry-cli account show <address_or_name>
```

At the moment, only single-threaded mining is supported. Follow <a href="https://github.com/radicle-dev/radicle-registry/issues/298" target="_blank" rel="noopener noreferrer">this issue</a> for updates.

## Node key

Every node has a key pair, which is used to identify it on the P2P network.
It's useful for building ties with other nodes.
By default the key pair is generated on every startup, but you can set it manually to store and
reuse later.
To do that, you must pass the private key file on the node startup:

```bash
radicle-registry-node --node-key-file <KEY_FILE>
```

The file must contain exactly 32 bytes of raw data.
It will be used without any transformations as an Ed25519 private key.
If the file doesn't exist, it will be created and filled with a new random key.

## Monitoring

The node has multiple means of monitoring its state.

### Logging

The most basic monitoring is done with logging to the output.
It's enabled by default, but you can change the verbosity on the node startup with an environment
variable `RUST_LOG`.
It can be set to one of these values, from least to most verbose:

```
OFF
ERROR
WARN
INFO
DEBUG
TRACE
```

Alternatively it can be set to a number from 0 to 5.
The default is `INFO` or 3 with some exceptions for logs useful only for developers.

An example of limiting logging to `ERROR`:

```bash
RUST_LOG=ERROR radicle-registry-node
```

### Prometheus metrics

The node collects multiple metrics measuring its health, performance and network activity.
They can be collected with Prometheus and then analyzed with any compatible tool.
The node can expose the Prometheus interface to the external network on port 9615.
This may be a security concern, because anybody will be able to connect and start gathering data.
In order to expose the Prometheus interface you need to pass this flag on the node startup:

```bash
radicle-registry-node --prometheus-external
```

### Polkadot telemetry

The node by default sends some basic statistics to the polkadot telemetry server.
All the data collected from the network can be viewed live
[here](https://telemetry.polkadot.io/#list/Radicle%20Registry%20ffnet).

In order to make the node easier to identify it can be given a name:

```bash
radicle-registry-node --name "My beloved node"
```

The telemetry can be disabled:

```bash
radicle-registry-node --no-telemetry
```

## The RPC interface

The node always exposes the RPC interface for communication.
By default it only accepts requests from the tools running on your local machine like
`radicle-registry-cli`.
You can expose this interface to the external network.
This is potentially risky, because your node can start getting an arbitrary amount of requests
from unknown sources.
You can enable that by passing a flag on the node startup:

```bash
radicle-registry-node --unsafe-rpc-external
```
