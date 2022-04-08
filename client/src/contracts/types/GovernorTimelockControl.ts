/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ProposalCanceled = ContractEventLog<{
  proposalId: string;
  0: string;
}>;
export type ProposalCreated = ContractEventLog<{
  proposalId: string;
  proposer: string;
  targets: string[];
  values: string[];
  signatures: string[];
  calldatas: string[];
  startBlock: string;
  endBlock: string;
  description: string;
  0: string;
  1: string;
  2: string[];
  3: string[];
  4: string[];
  5: string[];
  6: string;
  7: string;
  8: string;
}>;
export type ProposalExecuted = ContractEventLog<{
  proposalId: string;
  0: string;
}>;
export type ProposalQueued = ContractEventLog<{
  proposalId: string;
  eta: string;
  0: string;
  1: string;
}>;
export type TimelockChange = ContractEventLog<{
  oldTimelock: string;
  newTimelock: string;
  0: string;
  1: string;
}>;
export type VoteCast = ContractEventLog<{
  voter: string;
  proposalId: string;
  support: string;
  weight: string;
  reason: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;

export interface GovernorTimelockControl extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): GovernorTimelockControl;
  clone(): GovernorTimelockControl;
  methods: {
    BALLOT_TYPEHASH(): NonPayableTransactionObject<string>;

    COUNTING_MODE(): NonPayableTransactionObject<string>;

    castVote(
      proposalId: number | string | BN,
      support: number | string | BN
    ): NonPayableTransactionObject<string>;

    castVoteBySig(
      proposalId: number | string | BN,
      support: number | string | BN,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<string>;

    castVoteWithReason(
      proposalId: number | string | BN,
      support: number | string | BN,
      reason: string
    ): NonPayableTransactionObject<string>;

    execute(
      targets: string[],
      values: (number | string | BN)[],
      calldatas: (string | number[])[],
      descriptionHash: string | number[]
    ): PayableTransactionObject<string>;

    getVotes(
      account: string,
      blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    hasVoted(
      proposalId: number | string | BN,
      account: string
    ): NonPayableTransactionObject<boolean>;

    hashProposal(
      targets: string[],
      values: (number | string | BN)[],
      calldatas: (string | number[])[],
      descriptionHash: string | number[]
    ): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    proposalDeadline(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<string>;

    proposalEta(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<string>;

    proposalSnapshot(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<string>;

    proposalThreshold(): NonPayableTransactionObject<string>;

    propose(
      targets: string[],
      values: (number | string | BN)[],
      calldatas: (string | number[])[],
      description: string
    ): NonPayableTransactionObject<string>;

    queue(
      targets: string[],
      values: (number | string | BN)[],
      calldatas: (string | number[])[],
      descriptionHash: string | number[]
    ): NonPayableTransactionObject<string>;

    quorum(
      blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    relay(
      target: string,
      value: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    state(
      proposalId: number | string | BN
    ): NonPayableTransactionObject<string>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    timelock(): NonPayableTransactionObject<string>;

    updateTimelock(newTimelock: string): NonPayableTransactionObject<void>;

    version(): NonPayableTransactionObject<string>;

    votingDelay(): NonPayableTransactionObject<string>;

    votingPeriod(): NonPayableTransactionObject<string>;
  };
  events: {
    ProposalCanceled(cb?: Callback<ProposalCanceled>): EventEmitter;
    ProposalCanceled(
      options?: EventOptions,
      cb?: Callback<ProposalCanceled>
    ): EventEmitter;

    ProposalCreated(cb?: Callback<ProposalCreated>): EventEmitter;
    ProposalCreated(
      options?: EventOptions,
      cb?: Callback<ProposalCreated>
    ): EventEmitter;

    ProposalExecuted(cb?: Callback<ProposalExecuted>): EventEmitter;
    ProposalExecuted(
      options?: EventOptions,
      cb?: Callback<ProposalExecuted>
    ): EventEmitter;

    ProposalQueued(cb?: Callback<ProposalQueued>): EventEmitter;
    ProposalQueued(
      options?: EventOptions,
      cb?: Callback<ProposalQueued>
    ): EventEmitter;

    TimelockChange(cb?: Callback<TimelockChange>): EventEmitter;
    TimelockChange(
      options?: EventOptions,
      cb?: Callback<TimelockChange>
    ): EventEmitter;

    VoteCast(cb?: Callback<VoteCast>): EventEmitter;
    VoteCast(options?: EventOptions, cb?: Callback<VoteCast>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ProposalCanceled", cb: Callback<ProposalCanceled>): void;
  once(
    event: "ProposalCanceled",
    options: EventOptions,
    cb: Callback<ProposalCanceled>
  ): void;

  once(event: "ProposalCreated", cb: Callback<ProposalCreated>): void;
  once(
    event: "ProposalCreated",
    options: EventOptions,
    cb: Callback<ProposalCreated>
  ): void;

  once(event: "ProposalExecuted", cb: Callback<ProposalExecuted>): void;
  once(
    event: "ProposalExecuted",
    options: EventOptions,
    cb: Callback<ProposalExecuted>
  ): void;

  once(event: "ProposalQueued", cb: Callback<ProposalQueued>): void;
  once(
    event: "ProposalQueued",
    options: EventOptions,
    cb: Callback<ProposalQueued>
  ): void;

  once(event: "TimelockChange", cb: Callback<TimelockChange>): void;
  once(
    event: "TimelockChange",
    options: EventOptions,
    cb: Callback<TimelockChange>
  ): void;

  once(event: "VoteCast", cb: Callback<VoteCast>): void;
  once(event: "VoteCast", options: EventOptions, cb: Callback<VoteCast>): void;
}
