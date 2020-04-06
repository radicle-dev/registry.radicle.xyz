---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

## Install

We build binaries of the node and docker images for every pushed commit. Node
binaries are available for the `x86_64-unknown-linux-gnu` target triple.

You can get the latest master build [here][package-latest-master]

You can directly download node binaries for every build from
```
https://dl.bintray.com/oscoin/radicle-registry-files/by-commit/$COMMIT_SHA/x86_64-linux-gnu/radicle-registry-node
```

You can pull a docker image of the node with
```bash
docker pull gcr.io/opensourcecoin/radicle-registry/node:<commit-sha>
```
In the image the node binary is located at `/usr/local/bin/radicle-registry-node`

[package-latest-master]: https://bintray.com/oscoin/radicle-registry-files/radicle-registry/_latestVersion

## Run Node

The node can be run in development mode or with a specified chain. Currently,
only the `devnet` chain is available.

For more information use the `--help` flag.

### Logging

The node prints logs to stdout in the following format

~~~
<local time> <level> <target> <msg>
~~~

You can adjust the global log level and the log level for specific targets with
the [`RUST_LOG` environment variable][rust-log-docs].

[rust-log-docs]: https://docs.rs/env_logger/0.7.1/env_logger/#enabling-logging