---
id: getting_started
title: Getting started
sidebar_label: Getting started
---

This guide explains how you can participate in the Radicle Friends & Family Net
(FFnet) by running a node, interacting with our ledger, and mining blocks.

## Installation

For this guide you need the `radicle-registry-node` and the `radicle-registry-cli` binaries.

You can get the binaries for the `x86_64-unknown-linux-gnu` target
[here](TODO link). For other targets you will need to build the binaries [from
source](TODO link).


## Running a node

TODO explain what a node does?

To start a node, run:

``` bash
radicle-registry-node
```

The node will automatically connect to the FFnet via a boot node and
start syncing the chain. You’ll see a log line similar to this one:

```
12:39:12.713 INFO  substrate  Idle (3 peers), best: #936 (0x2fbe…6374) ...
```

This tells you that your node is connected to three other nodes and that the
best block it has imported so far has height 936 and hash `0x2fbe…6374`.

You node is fully synced with the network if the height of the best block does
not change rapidly anymore.

Now that your node is fully synced you can use it to list all organizations that
are registered in the Radicle network.

```bash
radicle-registry --node-host localhost orgs list
```

## Interacting with the ledger

Pre-requisits

1. Generate an account
2. Request RADs
3. Check balance

Plaground
4. Make a transaction

To interact with the ledger, you first need to get some RAD into your account.

An account is a random key pair generated locally that is locally uniquely identified
by a name you specify.

```bash
radicle-registry account generate <account_name>
```

This command will give you the SS58 address for your new account.
You can see the addresses of all your accounts by running:

``` bash
radicle-registry account list
```


You can ask for some RAD [irc://irc.freenode.net/#radicle](https://webchat.freenode.net/#radicle)

You can also mine to get some RAD. See below.

After you’ve received some funds you can check your balance with:

```bash
radicle-registry account balance <account_address>
```

You can now register a user:

```bash
radicle-registry user register <handle>
```

List all the registered users:

```bash
radicle-registry user list
```

## Mining

You can support the network by mining blocks. Miners receive rewards from
successfully mined blocks. To collect your rewards, you need an account.

Generate an account for mining:

```bash
radicle-registry account generate minining
```

This will print the SS58 address for your mining account.
You can now run a mining node:

```bash
radicle-registry-node --miner <address>
```

TODO: You can see mining in the logs

If you see a block being mined (TODO how?) you will have received some block
rewards. Check your balance with

```bash
radicle-registry account balance <address>
```

At the moment only single threaded mining is supported. Follow [this
issue](https://github.com/radicle-dev/radicle-registry/issues/298) for updates.
