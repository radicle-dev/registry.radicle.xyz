---
id: submit-transactions
title: Submit transactions
sidebar_label: Submit transactions
---

⚠ Before proceeding, make sure you have [installed the required binaries](getting-started#installation)
and have followed the getting started steps regarding [submitting a transaction](getting-started#submitting-a-transaction).


## Available transactions

Discover all the available transactions that you can submit via the CLI.
Run the provided help commands to learn more about the arguments
and behaviour of each one of them.

ⓘ All the transactions provide the same [Command-Line Options](#command-line-options).

- Transfer funds from an account to another

    ``` bash
    radicle-registry-cli account transfer --help
    ```

- Transfer funds from an org's account to another account

    ``` bash
    radicle-registry-cli org transfer --help
    ```

- Register entities

    You can register users, orgs, and projects in the Radicle Registry.

    - Register a user
        ``` bash
        radicle-registry-cli user register --help
        ```

    - Register an org
        ``` bash
        radicle-registry-cli org register --help
        ```

    - Register a project
        ``` bash
        radicle-registry-cli project register --help
        ```

- Unregister entities

    You can unregister orgs and users from the Radicle Registry.

    - Unregister a user
        ``` bash
        radicle-registry-cli user unregister --help
        ```

    - Unregister an org
        ``` bash
        radicle-registry-cli org unregister --help
        ```

### Examples

1. Register a user

    This example registers a user named "neo" in the registry using a
    locally generated account (that happens to also be) named "neo"
    to sign the transactions, specifying `100` as the fee.

    ``` bash
    radicle-registry-cli user register neo --author neo --fee 100
    ```

2. Transfer funds from an account to another

    This example transfers `500` tokens to the account with the address
    `5HWP48i9TuP2VrRZrNeb6QzYpdUSE9BvyaptEqqHrLfH8ZPd`, specifying `20` as fee. A total of
    `520` will be withdrawn from the author's account, neo.

    ``` bash
    radicle-registry-cli account transfer \
        500 \
        5HWP48i9TuP2VrRZrNeb6QzYpdUSE9BvyaptEqqHrLfH8ZPd \
        --author neo \
        --fee 20
    ```

3. Unregister an org

    This example unregisters an org named "Hooli". For it to succeed, such an org must be registered in
    the Radicle Registry and it must have been registered by the author. The author will be charged
    10 tokens in any case.

    ```
    radicle-registry-cli org unregister Hooli --author neo --fee 10
    ```

## Command-Line Options

All the CLI commands that submit transactions provide the following options that
can either be specified as options at the end of a command or as environment variables.

- `Author`

    ⚠ Requires having [getting started submitting a transaction](getting-started#submitting-a-transaction).

    Mandatory for all transactions. The author option lets you specify the account that is
    used to sign the transaction. You can use the `account` command group to manage your
    accounts.
    that you want to use to sign a transaction.

    ```
    --author <account_name>
        The name of the local account to be used to sign transactions
        [env: RAD_AUTHOR=]
    ```

- `Fee`

    ⓘ See [Transaction fees](#transaction-fees) to learn more about how fees work in the Radicle Registry.

    Optional, default to the minimum acceptable fee amount.

    ```
    --fee <fee>
        Fee that will be charged to submit transactions. The higher the fee,
        the higher the priority of a transaction
        [env: RAD_FEE=]
        [default: 1]
    ```

- `Node Host`

    ⓘ See [Running a node](getting-started#running-a-node) to be able to connect directly to
    the node you eventually have running locally.

    Optional, default to the ffnet network. TODO(nuno) phrase this better.

    ```
    --node-host <node-host>
        IP address or domain name that hosts the RPC API
        [env: RAD_NODE_HOST=]
        [default: 127.0.0.1]
    ```

## Transaction fees

Transactions fees in the Radicle Registry let you specify the amount that you want to
pay to have your transactions included and prioritized. A higher fee leverages the
likelihood of your transactions being included quickly. Lower fees might lead to longer
waiting times for inclusion.

The Radicle Registry defines a minimum acceptable fee, which is the same for all transactions.
You define how much we should charge you. It's surprise-free.

**Note:** Transactions that involve an organization (except when registering one) will
be charged from the org's account if the author is a member of the organization.
Otherwise, the transaction will fail and the author is charged the fee. Except when
registering an org, since there is no org account at the moment of the registration,
being the author the one paying for that transaction.
