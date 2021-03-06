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
} from "../common";

export interface SwapContractFactoryInterface extends utils.Interface {
  functions: {
    "deployNewSwapContract(address,address,address)": FunctionFragment;
    "deployedSwapContractsRegistry(string)": FunctionFragment;
    "getAllSwapPairs()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "swapPairs(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deployNewSwapContract"
      | "deployedSwapContractsRegistry"
      | "getAllSwapPairs"
      | "owner"
      | "renounceOwnership"
      | "swapPairs"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployNewSwapContract",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployedSwapContractsRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllSwapPairs",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapPairs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployNewSwapContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployedSwapContractsRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllSwapPairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "DeployedSwapContract(address,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployedSwapContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface DeployedSwapContractEventObject {
  swapContractAddress: string;
  baseTokenAddress: string;
  quoteTokenAddress: string;
}
export type DeployedSwapContractEvent = TypedEvent<
  [string, string, string],
  DeployedSwapContractEventObject
>;

export type DeployedSwapContractEventFilter =
  TypedEventFilter<DeployedSwapContractEvent>;

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

export interface SwapContractFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapContractFactoryInterface;

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
    deployNewSwapContract(
      _baseToken: string,
      _quoteToken: string,
      _exchangeRate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployedSwapContractsRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        swapContractAddress: string;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        deployed: boolean;
      }
    >;

    getAllSwapPairs(overrides?: CallOverrides): Promise<[string[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployNewSwapContract(
    _baseToken: string,
    _quoteToken: string,
    _exchangeRate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployedSwapContractsRegistry(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, boolean] & {
      swapContractAddress: string;
      quoteTokenAddress: string;
      baseTokenAddress: string;
      deployed: boolean;
    }
  >;

  getAllSwapPairs(overrides?: CallOverrides): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployNewSwapContract(
      _baseToken: string,
      _quoteToken: string,
      _exchangeRate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deployedSwapContractsRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        swapContractAddress: string;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        deployed: boolean;
      }
    >;

    getAllSwapPairs(overrides?: CallOverrides): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    swapPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DeployedSwapContract(address,address,address)"(
      swapContractAddress?: string | null,
      baseTokenAddress?: string | null,
      quoteTokenAddress?: string | null
    ): DeployedSwapContractEventFilter;
    DeployedSwapContract(
      swapContractAddress?: string | null,
      baseTokenAddress?: string | null,
      quoteTokenAddress?: string | null
    ): DeployedSwapContractEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    deployNewSwapContract(
      _baseToken: string,
      _quoteToken: string,
      _exchangeRate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployedSwapContractsRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllSwapPairs(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapPairs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployNewSwapContract(
      _baseToken: string,
      _quoteToken: string,
      _exchangeRate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployedSwapContractsRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllSwapPairs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapPairs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
