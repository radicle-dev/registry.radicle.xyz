---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

This guide explains how you can participate in the current alpha testnet.

## Installation

This guide requires you to install the following binaries:

* `radicle-registry-node`
* `radicle-registry-cli`

Download the latest versions for the x86-64 GNU/Linux platform <a href="https://github.com/radicle-dev/radicle-registry/releases/latest" target="_blank" rel="noopener noreferrer">here</a>.

For other platforms, you will need to build the binaries <a href="https://github.com/radicle-dev/radicle-registry#build-from-source" target="_blank" rel="noopener noreferrer">from source</a>.

The binaries should be placed in the local `bin` directory or added to `$PATH`.

## Running a node

Nodes hold a copy of the entire ledger and have the vital role of being a source of
validity of the history of the chain. They validate transactions all the way to the
genesis block.

To start a node, run:

``` bash
radicle-registry-node
```

The node will automatically connect to the network via a boot node and
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
radicle-registry-cli org list --node-host 127.0.0.1
```

Find other queries you can run at [Querying the ledger](#querying-the-ledger).


## Mining Blocks

You can support the network and receive rewards by mining blocks.
You can find out how to do that on the [full node setup page](/docs/node).

## Interacting with the ledger

Let's go through how you can query the ledger and submit transactions.

ⓘ To connect directly to the node you might have running locally, add
   `--node-host 127.0.0.1` to the following commands or set it via the
   environment with `export RAD_NODE_HOST=127.0.0.1`.

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
    radicle-registry-cli user list
    ```

Explore our CLI to find more queries you can run.

### Submitting a transaction

To submit a transaction, you need an account on the block chain,
required to pay for [transaction fees](/docs/submit-transactions#transaction-fees).
An account is controlled by a cryptographic key pair, from which
the SS58 address that identifies it is derived.
Key pairs are managed by the `radicle-registry-cli` and stored on disk.

1. Generate a key pair

    You need a key pair to author transactions.
    The key pairs are randomly generated and identified by a name of your choice.
    To generate a new key pair, run:

    ```bash
    radicle-registry-cli key-pair generate <name>
    ```

    This command will give you the SS58 address for your new key pair.
    E.g. generating a key pair named 'neo':

    ```bash
    radicle-registry-cli key-pair generate neo
    ✓ Key pair generated successfully
    ⓘ SS58 address: 5HWP48i9TuP2VrRZrNeb6QzYpdUSE9BvyaptEqqHrLfH8ZPd
    ```

    You can always obtain the account addresses for all your key pairs by running:

    ``` bash
    radicle-registry-cli key-pair list
    ```

2. Request RADs

    To submit transactions, you first need to get some RAD into your account
    to pay for transactions fees.

    Get in touch with us at <a href="https://webchat.freenode.net/#radicle" target="_blank" rel="noopener noreferrer">irc://irc.freenode.net/#radicle</a>
    to request some RAD for your account. Please, bring your SS58
    account address along.

3. Check your balance

    Verify that you have received funds by running:

    ``` bash
    radicle-registry-cli account show <address_or_name>
    ```

4. Submit your first transaction

    Now you have everything you need to submit your first transaction.
    For instance, you can register yourself as a user in our ledger by running:

    ``` bash
    radicle-registry-cli user register <handle> --author <key_pair_name>
    ```

    ⚠ Running this command will submit the transaction with a default fee value.
    You can specify a custom fee with `--fee <amount>` to gain priority.

    Find other transactions you can submit and learn more details at
    [Submit Transactions](/docs/submit-transactions).
