---
id: faq
title: FAQ
sidebar_label: FAQ
---

### What is the "Radicle Registry"?

The Radicle Registry is a decentralized identity and governance service for free and open source software communities. It provides a trustless layer for reading, writing and coordinating around software project metadata.

### What problem does the Registry solve?

In essence, the Registry provides users with the trusted, auditable and shared view of the network that is typically lacking in peer-to-peer solutions, delivering the same connected "social" layer that attracted developers to centralized code collaboration platforms like GitHub or Gitlab.

### How does the Registry work?

We designed the Registry as a domain-specific, permissionless blockchain using Nakamoto consensus and licensed under GPL. We chose a domain-specific chain over a generalized one to optimize for a user experience that is on par with hosted platforms: fast, low-fee transactions, scalable, and customizable.

In addition, keeping in mind the principle of trust minimization, we chose Nakamoto consensus for its operational simplicity and best-in-class support for light clients.

### What does it look like for the user?

From a user point of view, the Registry allows any developer to issue a persistent self-sovereign identity. Unlike centralized platforms, identities on Radicle are owned and managed by their creators. Paired with the public key infrastructure present in [Radicle Link, the peer-to-peer replication layer](https://radicle.xyz/radicle-link.html), Radicle identities are human readable, always available, and far more secure than their hosted equivalents.

In addition to identities, the Registry gives maintainers the ability to anchor important project information (i.e. states and histories) in an immutable and auditable way. This yields a persistent & probable history of contributions and alleviates any weakness at the replication layer by providing users with the latest available information.

Finally, the Registry allows developers to collectively manage projects without an intermediary with Radicle ‘Orgs’. A Radicle Org is a sovereign collective of developers that govern a set of projects. They are similar to GitHub or Gitlab orgs but are platform independent and can be managed among multiple users — not just admins. In practice, a Radicle `Org` shares a set of members and projects, a unique name, and a set of contracts or rulesets determining what permissions the members have over the projects.

With Radicle `Orgs`, organizational functionality like access control, permissions, roles, and community governance, is built upon trustless foundations and public keys. This approach provides a more flexible and secure way to transfer ownership, add or remove members, manage contributions, change licenses or more generally decide upon the meta-governance of the project.

### What is RAD?

RAD is the native asset of the Radicle Registry. RAD can be transferred between participants in the network and is used verify the records and transactions performed on the Registry.

### Why not use a federated architecture instead?

The decision to use a consensus protocol instead of a federated architecture lies in the fact that federated services cannot be offline-first and don’t offer sovereign identity, as users are tied to specific instances and thus subject to some of the same drawbacks as centralized services.
