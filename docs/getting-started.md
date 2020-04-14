---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

This guide explains how you can participate in the `Radicle Friends & Family Net
(FFnet)` blockchain network.


## Installation

This guide requires you to install the following binaries:

* `radicle-registry-node`
* `radicle-registry-cli`

Download the latest versions for the `x86_64-unknown-linux-gnu` target [here](https://github.com/radicle-dev/radicle-registry/releases/latest).

For other targets, you will need to build the binaries [from source](`TODO link`).

## Running a node

Nodes hold a copy of the entire ledger and have the vital role of being a source of
validity of the history of the chain. They validate transactions all the way to the
genesis block.

To start a node, run:

``` bash
radicle-registry-node
```

The node will automatically connect to the FFnet via a boot node and
start syncing the chain. You’ll see a log line similar to this one:

```
12:39:12.713 INFO  substrate  Idle (3 peers), best: #936 (0x2fbe…6374) ...
```

ⓘ This log informs you that the node is connected to three other nodes
and that the best block it has imported so far has height 936 and hash `0x2fbe…6374`.

Your node is fully synced with the network if the height of the best block does
not change rapidly anymore.

Now that your node is fully synced, you can use it to list all organizations that
are registered in the Radicle network.

```bash
radicle-registry-cli org list
```

Find other queries you can run at [Querying the ledger](#querying-the-ledger).


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

If your node successfully mined a block and imported it will log “Imported own
block”:
```
15:50:13.041 INFO radicle_registry_node::service  Imported own block #1322 (0xefd1…4445)
```
Depending on how lucky you are mining a block might take minutes or hours.

When your node has mined a block, your mining account receives some block
rewards. Check your balance with

```bash
radicle-registry-cli account balance <address>
```

At the moment, only single-threaded mining is supported. Follow [this
issue](https://github.com/radicle-dev/radicle-registry/issues/298) for updates.


## Interacting with the ledger

Let's go through how you can query the ledger and submit transactions.

### Querying the ledger

Run some of the commands to have a view over the current state of our ledger.

- List all the registered orgs:
    ```bash
    radicle-registry-cli org list
    ```

- List all the registered projects:
    ```bash
    radicle-registry-cli project list
    ```

- List all the registered users:
    ```bash
    radicle-registry-cli users list
    ```

Explore our CLI to find more queries you can run.

### Submitting a transaction


1. Generate an account

    You need an account to author transactions.
    An account is a randomly generated key pair identified by a name of your choice.
    To generate an account, run:

    ```bash
    radicle-registry-cli account generate <account_name>
    ```

    This command will give you the SS58 address for your new account.
    E.g. generating an account named 'neo':

    ```bash
    radicle-registry-cli account generate neo
    ✓ Account generated successfully
    ℹ SS58 address: 5HWP48i9TuP2VrRZrNeb6QzYpdUSE9BvyaptEqqHrLfH8ZPd
    ```

    You can always obtain the addresses of all your accounts by running:

    ``` bash
    radicle-registry-cli account list
    ```

2. Request RADs

    To interact with the ledger, you first need to get some RAD into your account to have enough
    funds to pay for transactions fees.

    Get in touch with us at <a href="https://webchat.freenode.net/#radicle" target="_blank">irc://irc.freenode.net/#radicle</a>
    to request some RAD for your account. Please, bring your SS58 account address along.

3. Check your balance

    Verify that you have received funds by running:

    ``` bash
    radicle-registry-cli account balance <address>
    ```

4. Submit your first transaction

    Now you have everything you need to submit your first transaction.
    For instance, you can register yourself as a user in our ledger by running:

    ``` bash
    radicle-registry-cli user register <handle> --author <account_name>
    ```

    ⚠ Running this command will submit the transaction with a default fee value.
    You can specify a custom fee with `--fee <amount>` to gain priority.

    Find other transactions you can submit and learn more details at [Submit Transactions](submit-transactions).
