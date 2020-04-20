---
id: faq
title: FAQ
sidebar_label: FAQ
---

### What is the "radicle registry"?

The radicle registry is a decentralized identity and governance service for free and open source software communities. It provides a trustless layer for reading, writing and coordinating around software project metadata.

### What problem does the registry solve?

In essence, the Registry provides users with the trusted, auditable and shared view of the network that is otherwise lacking in peer to peer networks, delivering the same connected "social" layer that attracted developers to centralized code collaboration platforms like GitHub or Gitlab.

### How does the registry work?

We designed the registry as a domain-specific, permissionless blockchain using Nakamoto consensus and licensed under the GPL license. We chose a domain-specific chain over a generalized one, as we wanted to optimize for a user experience on par with hosted platforms: fast, low-fee transactions, scalable, and customizable.

In addition, keeping in mind the principle of trust minimization, we chose Nakamoto consensus for its operational simplicity and best-in-class support for light clients.

### What does it look like for the user?

From a user point of view, the Registry allows any developer to issue a persistent self-sovereign identity. Unlike centralized platforms, identities on Radicle are owned and managed by their developers. Paired with the public key infrastructure present in the replication layer, Radicle identities are human readable, always available, and far more secure than their hosted equivalents.

In addition to identities, the Registry gives maintainers the ability to anchor important project information (i.e. states and histories) in an immutable and auditable way. This yields a persistent & probable history of contributions and alleviates any weakness at the replication layer by providing users with the latest available information.

Finally, the Registry allows developers to collectively manage projects without an intermediary, by setting up a Radicle ‘Org’. A Radicle Org is a sovereign collective governing a set of projects, similar to Github or Gitlab orgs but collectively managed and platform independent. In practice, a Radicle `Org` shares a set of members and projects, a unique name, and a set of contracts or rulesets determining what permissions the members have over the projects.

With Radicle `Orgs`, organizational functionality like access control, permissions, roles, and community governance is built upon trustless foundations and public keys. This approach provides a more flexible and secure way to transfer ownership, add or remove members, manage contributions, change licenses or more generally decide upon the meta-governance of the project.

### What is RAD?

RAD is the native asset of the radicle registry.

### Why not use a federated architecture instead?

The decision to use a consensus protocol instead of a federated architecture lies in the fact that federated services cannot be offline-first and don’t offer sovereign identity, as users are tied to specific instances and thus subject to some of the same drawbacks as centralized services.

### Doesn't proof-of-work promote carbon emissions?

Proof-of-work is computionally intesive, which unfortunately requires a lot of electricity. This decision didn't come light and we've done thorough research with all existing alternatives.

While each alternative comes with different trade-offs, proof-of-work is currently the best-in-class solution when designing for trust minimization.
