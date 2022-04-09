/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace SimpleStake {
  export type StakeStruct = { amount: BigNumberish; timestamp: BigNumberish };

  export type StakeStructOutput = [BigNumber, BigNumber] & {
    amount: BigNumber;
    timestamp: BigNumber;
  };
}

export interface SimpleStakeInterface extends utils.Interface {
  functions: {
    "Erc20Token()": FunctionFragment;
    "getInterestRate()": FunctionFragment;
    "getSenderCurrentStakeDays()": FunctionFragment;
    "getSenderStake()": FunctionFragment;
    "getStakeLockTimeDay()": FunctionFragment;
    "hasEverStakedTracker(address)": FunctionFragment;
    "isCurrentlyStakingTracker(address)": FunctionFragment;
    "lastStakesRegistry(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "stakeTokens(uint256)": FunctionFragment;
    "stakersAddress(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unStakeTokens()": FunctionFragment;
    "updateInterestRate(uint256)": FunctionFragment;
    "updateStakeLockTime(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "Erc20Token"
      | "getInterestRate"
      | "getSenderCurrentStakeDays"
      | "getSenderStake"
      | "getStakeLockTimeDay"
      | "hasEverStakedTracker"
      | "isCurrentlyStakingTracker"
      | "lastStakesRegistry"
      | "owner"
      | "renounceOwnership"
      | "stakeTokens"
      | "stakersAddress"
      | "transferOwnership"
      | "unStakeTokens"
      | "updateInterestRate"
      | "updateStakeLockTime"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "Erc20Token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInterestRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSenderCurrentStakeDays",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSenderStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeLockTimeDay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasEverStakedTracker",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isCurrentlyStakingTracker",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastStakesRegistry",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakeTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakersAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unStakeTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateInterestRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStakeLockTime",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "Erc20Token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSenderCurrentStakeDays",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSenderStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeLockTimeDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasEverStakedTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCurrentlyStakingTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastStakesRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakersAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unStakeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStakeLockTime",
    data: BytesLike
  ): Result;

  events: {
    "NewStake(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UnStake(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewStake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnStake"): EventFragment;
}

export interface NewStakeEventObject {
  stakerAddress: string;
  stakedAmount: BigNumber;
}
export type NewStakeEvent = TypedEvent<
  [string, BigNumber],
  NewStakeEventObject
>;

export type NewStakeEventFilter = TypedEventFilter<NewStakeEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface UnStakeEventObject {
  stakerAddress: string;
  stakedAmount: BigNumber;
  rewardAmount: BigNumber;
}
export type UnStakeEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  UnStakeEventObject
>;

export type UnStakeEventFilter = TypedEventFilter<UnStakeEvent>;

export interface SimpleStake extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SimpleStakeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    Erc20Token(overrides?: CallOverrides): Promise<[string]>;

    getInterestRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSenderCurrentStakeDays(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSenderStake(
      overrides?: CallOverrides
    ): Promise<[SimpleStake.StakeStructOutput]>;

    getStakeLockTimeDay(overrides?: CallOverrides): Promise<[BigNumber]>;

    hasEverStakedTracker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isCurrentlyStakingTracker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lastStakesRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; timestamp: BigNumber }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeTokens(
      _amountToStakeInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakersAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unStakeTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateInterestRate(
      _newInterestRateWithFourDecimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateStakeLockTime(
      _newLockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  Erc20Token(overrides?: CallOverrides): Promise<string>;

  getInterestRate(overrides?: CallOverrides): Promise<BigNumber>;

  getSenderCurrentStakeDays(overrides?: CallOverrides): Promise<BigNumber>;

  getSenderStake(
    overrides?: CallOverrides
  ): Promise<SimpleStake.StakeStructOutput>;

  getStakeLockTimeDay(overrides?: CallOverrides): Promise<BigNumber>;

  hasEverStakedTracker(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isCurrentlyStakingTracker(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lastStakesRegistry(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; timestamp: BigNumber }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeTokens(
    _amountToStakeInWei: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakersAddress(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unStakeTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateInterestRate(
    _newInterestRateWithFourDecimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateStakeLockTime(
    _newLockTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    Erc20Token(overrides?: CallOverrides): Promise<string>;

    getInterestRate(overrides?: CallOverrides): Promise<BigNumber>;

    getSenderCurrentStakeDays(overrides?: CallOverrides): Promise<BigNumber>;

    getSenderStake(
      overrides?: CallOverrides
    ): Promise<SimpleStake.StakeStructOutput>;

    getStakeLockTimeDay(overrides?: CallOverrides): Promise<BigNumber>;

    hasEverStakedTracker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isCurrentlyStakingTracker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastStakesRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; timestamp: BigNumber }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stakeTokens(
      _amountToStakeInWei: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakersAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unStakeTokens(overrides?: CallOverrides): Promise<void>;

    updateInterestRate(
      _newInterestRateWithFourDecimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateStakeLockTime(
      _newLockTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewStake(address,uint256)"(
      stakerAddress?: string | null,
      stakedAmount?: BigNumberish | null
    ): NewStakeEventFilter;
    NewStake(
      stakerAddress?: string | null,
      stakedAmount?: BigNumberish | null
    ): NewStakeEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "UnStake(address,uint256,uint256)"(
      stakerAddress?: string | null,
      stakedAmount?: BigNumberish | null,
      rewardAmount?: BigNumberish | null
    ): UnStakeEventFilter;
    UnStake(
      stakerAddress?: string | null,
      stakedAmount?: BigNumberish | null,
      rewardAmount?: BigNumberish | null
    ): UnStakeEventFilter;
  };

  estimateGas: {
    Erc20Token(overrides?: CallOverrides): Promise<BigNumber>;

    getInterestRate(overrides?: CallOverrides): Promise<BigNumber>;

    getSenderCurrentStakeDays(overrides?: CallOverrides): Promise<BigNumber>;

    getSenderStake(overrides?: CallOverrides): Promise<BigNumber>;

    getStakeLockTimeDay(overrides?: CallOverrides): Promise<BigNumber>;

    hasEverStakedTracker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCurrentlyStakingTracker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastStakesRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeTokens(
      _amountToStakeInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakersAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unStakeTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateInterestRate(
      _newInterestRateWithFourDecimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateStakeLockTime(
      _newLockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Erc20Token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInterestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSenderCurrentStakeDays(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSenderStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakeLockTimeDay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasEverStakedTracker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCurrentlyStakingTracker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastStakesRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeTokens(
      _amountToStakeInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakersAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unStakeTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateInterestRate(
      _newInterestRateWithFourDecimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateStakeLockTime(
      _newLockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}