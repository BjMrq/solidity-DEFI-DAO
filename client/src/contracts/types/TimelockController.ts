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

export type CallExecuted = ContractEventLog<{
  id: string;
  index: string;
  target: string;
  value: string;
  data: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type CallScheduled = ContractEventLog<{
  id: string;
  index: string;
  target: string;
  value: string;
  data: string;
  predecessor: string;
  delay: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type Cancelled = ContractEventLog<{
  id: string;
  0: string;
}>;
export type MinDelayChange = ContractEventLog<{
  oldDuration: string;
  newDuration: string;
  0: string;
  1: string;
}>;
export type RoleAdminChanged = ContractEventLog<{
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleGranted = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleRevoked = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;

export interface TimelockController extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): TimelockController;
  clone(): TimelockController;
  methods: {
    DEFAULT_ADMIN_ROLE(): NonPayableTransactionObject<string>;

    EXECUTOR_ROLE(): NonPayableTransactionObject<string>;

    PROPOSER_ROLE(): NonPayableTransactionObject<string>;

    TIMELOCK_ADMIN_ROLE(): NonPayableTransactionObject<string>;

    cancel(id: string | number[]): NonPayableTransactionObject<void>;

    execute(
      target: string,
      value: number | string | BN,
      data: string | number[],
      predecessor: string | number[],
      salt: string | number[]
    ): PayableTransactionObject<void>;

    executeBatch(
      targets: string[],
      values: (number | string | BN)[],
      datas: (string | number[])[],
      predecessor: string | number[],
      salt: string | number[]
    ): PayableTransactionObject<void>;

    getMinDelay(): NonPayableTransactionObject<string>;

    getRoleAdmin(role: string | number[]): NonPayableTransactionObject<string>;

    getTimestamp(id: string | number[]): NonPayableTransactionObject<string>;

    grantRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    hasRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<boolean>;

    hashOperation(
      target: string,
      value: number | string | BN,
      data: string | number[],
      predecessor: string | number[],
      salt: string | number[]
    ): NonPayableTransactionObject<string>;

    hashOperationBatch(
      targets: string[],
      values: (number | string | BN)[],
      datas: (string | number[])[],
      predecessor: string | number[],
      salt: string | number[]
    ): NonPayableTransactionObject<string>;

    isOperation(id: string | number[]): NonPayableTransactionObject<boolean>;

    isOperationDone(
      id: string | number[]
    ): NonPayableTransactionObject<boolean>;

    isOperationPending(
      id: string | number[]
    ): NonPayableTransactionObject<boolean>;

    isOperationReady(
      id: string | number[]
    ): NonPayableTransactionObject<boolean>;

    renounceRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    revokeRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    schedule(
      target: string,
      value: number | string | BN,
      data: string | number[],
      predecessor: string | number[],
      salt: string | number[],
      delay: number | string | BN
    ): NonPayableTransactionObject<void>;

    scheduleBatch(
      targets: string[],
      values: (number | string | BN)[],
      datas: (string | number[])[],
      predecessor: string | number[],
      salt: string | number[],
      delay: number | string | BN
    ): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    updateDelay(
      newDelay: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    CallExecuted(cb?: Callback<CallExecuted>): EventEmitter;
    CallExecuted(
      options?: EventOptions,
      cb?: Callback<CallExecuted>
    ): EventEmitter;

    CallScheduled(cb?: Callback<CallScheduled>): EventEmitter;
    CallScheduled(
      options?: EventOptions,
      cb?: Callback<CallScheduled>
    ): EventEmitter;

    Cancelled(cb?: Callback<Cancelled>): EventEmitter;
    Cancelled(options?: EventOptions, cb?: Callback<Cancelled>): EventEmitter;

    MinDelayChange(cb?: Callback<MinDelayChange>): EventEmitter;
    MinDelayChange(
      options?: EventOptions,
      cb?: Callback<MinDelayChange>
    ): EventEmitter;

    RoleAdminChanged(cb?: Callback<RoleAdminChanged>): EventEmitter;
    RoleAdminChanged(
      options?: EventOptions,
      cb?: Callback<RoleAdminChanged>
    ): EventEmitter;

    RoleGranted(cb?: Callback<RoleGranted>): EventEmitter;
    RoleGranted(
      options?: EventOptions,
      cb?: Callback<RoleGranted>
    ): EventEmitter;

    RoleRevoked(cb?: Callback<RoleRevoked>): EventEmitter;
    RoleRevoked(
      options?: EventOptions,
      cb?: Callback<RoleRevoked>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "CallExecuted", cb: Callback<CallExecuted>): void;
  once(
    event: "CallExecuted",
    options: EventOptions,
    cb: Callback<CallExecuted>
  ): void;

  once(event: "CallScheduled", cb: Callback<CallScheduled>): void;
  once(
    event: "CallScheduled",
    options: EventOptions,
    cb: Callback<CallScheduled>
  ): void;

  once(event: "Cancelled", cb: Callback<Cancelled>): void;
  once(
    event: "Cancelled",
    options: EventOptions,
    cb: Callback<Cancelled>
  ): void;

  once(event: "MinDelayChange", cb: Callback<MinDelayChange>): void;
  once(
    event: "MinDelayChange",
    options: EventOptions,
    cb: Callback<MinDelayChange>
  ): void;

  once(event: "RoleAdminChanged", cb: Callback<RoleAdminChanged>): void;
  once(
    event: "RoleAdminChanged",
    options: EventOptions,
    cb: Callback<RoleAdminChanged>
  ): void;

  once(event: "RoleGranted", cb: Callback<RoleGranted>): void;
  once(
    event: "RoleGranted",
    options: EventOptions,
    cb: Callback<RoleGranted>
  ): void;

  once(event: "RoleRevoked", cb: Callback<RoleRevoked>): void;
  once(
    event: "RoleRevoked",
    options: EventOptions,
    cb: Callback<RoleRevoked>
  ): void;
}
