---
id: getting_started
title: Getting started
sidebar_label: Getting started
---

This guide explains who you can participate in the Radicle Friends & Family Net
by funning a node, interacting with our ledger, and mining blocks.

## Running a node

You need the `radicle-registry-node` and the `radicle-registry` CLI.

You can get the binaries for the `x86_64-unknown-linux-gnu` target
[here](TODO link). For other targets you will need to build the binaries [from
source](TODO link).

* Start the node with `radicle-registry-node`
* Explain log line: Should have a couple of peers connected and download blocks
* See that blocks are syncing.
* Wait for sync to be done

Now that your node is fully synced you can use it to list all organizations that
are registered in the Radicle network.

```bash
radicle-registry --node-host localhost orgs list
```

## Interacting with the ledger

To interact with the ledger you first need to get some RAD to pay for your
transactions.

```bash
radicle-registry account create NAME
```

You can ask for some RAD [irc://irc.freenode.net/#radicle](https://webchat.freenode.net/#radicle)

You can also mine to get some RAD. See below.

After you’ve received some money you can check your balance with
```bash
radicle-registry account --name NAME balance
```

Now you can register a user
```bash
radicle-registry user register my-name
```

```bash
radicle-registry user list
```

## Mining

You can support the network by mining blocks. Miners receive rewards from
successfully mined nodes. To collect your rewards you need an account. Create a
keypair for an account with

```bash
# TODO check actual CLI
radicle-registry account create minining
```

This will print the SS58 address for your mining account. You can now run a
mining node with

```bash
# TODO depends on https://github.com/radicle-dev/radicle-registry/issues/288
radicle-registry-node --miner ADDRESS
```

TODO: You can see mining in the logs

If you see a block being mined (TODO how?) you will have received some block
rewards. Check your balance with

```bash
# TODO check actual CLI
radicle-registry account --name minining balance
```

At the moment only single threaded mining is supported. Follow [this
issue](https://github.com/radicle-dev/radicle-registry/issues/298) for updates.
