/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers';
import { Listener, Provider } from 'ethers/providers';
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils';
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from '.';

interface ArbChannelInterface extends Interface {
    functions: {
        completeChallenge: TypedFunctionDescription<{
            encode([_players, _rewards]: [(string)[], (BigNumberish)[]]): string;
        }>;

        initiateChallenge: TypedFunctionDescription<{
            encode([_assertPreHash]: [Arrayish]): string;
        }>;

        initialize: TypedFunctionDescription<{
            encode([
                _vmState,
                _gracePeriod,
                _maxExecutionSteps,
                _escrowRequired,
                _owner,
                _challengeFactoryAddress,
                _globalInboxAddress,
            ]: [Arrayish, BigNumberish, BigNumberish, BigNumberish, string, string, string]): string;
        }>;

        activateVM: TypedFunctionDescription<{ encode([]: []): string }>;

        ownerShutdown: TypedFunctionDescription<{ encode([]: []): string }>;

        confirmDisputableAsserted: TypedFunctionDescription<{
            encode([_preconditionHash, _afterHash, _numSteps, _messages, _logsAccHash]: [
                Arrayish,
                Arrayish,
                BigNumberish,
                Arrayish,
                Arrayish,
            ]): string;
        }>;

        pendingDisputableAssert: TypedFunctionDescription<{
            encode([_beforeHash, _beforeInbox, _afterHash, _messagesAccHash, _logsAccHash, _numSteps, _timeBounds]: [
                Arrayish,
                Arrayish,
                Arrayish,
                Arrayish,
                Arrayish,
                BigNumberish,
                (BigNumberish)[],
            ]): string;
        }>;

        init: TypedFunctionDescription<{
            encode([
                _vmState,
                _gracePeriod,
                _maxExecutionSteps,
                _escrowRequired,
                _owner,
                _challengeLauncherAddress,
                _globalInboxAddress,
                _validatorKeys,
            ]: [Arrayish, BigNumberish, BigNumberish, BigNumberish, string, string, string, (string)[]]): string;
        }>;

        increaseDeposit: TypedFunctionDescription<{ encode([]: []): string }>;

        finalizedUnanimousAssert: TypedFunctionDescription<{
            encode([_afterHash, _newInbox, _messages, _logsAccHash, _signatures]: [
                Arrayish,
                Arrayish,
                Arrayish,
                Arrayish,
                Arrayish,
            ]): string;
        }>;

        pendingUnanimousAssert: TypedFunctionDescription<{
            encode([_unanRest, _sequenceNum, _messagesAccHash, _logsAccHash, _signatures]: [
                Arrayish,
                BigNumberish,
                Arrayish,
                Arrayish,
                Arrayish,
            ]): string;
        }>;

        confirmUnanimousAsserted: TypedFunctionDescription<{
            encode([_afterHash, _newInbox, _messages]: [Arrayish, Arrayish, Arrayish]): string;
        }>;
    };

    events: {
        PendingUnanimousAssertion: TypedEventDescription<{
            encodeTopics([unanHash, sequenceNum, deadline]: [null, null, null]): string[];
        }>;

        ConfirmedUnanimousAssertion: TypedEventDescription<{
            encodeTopics([sequenceNum]: [null]): string[];
        }>;

        FinalizedUnanimousAssertion: TypedEventDescription<{
            encodeTopics([unanHash]: [null]): string[];
        }>;

        PendingDisputableAssertion: TypedEventDescription<{
            encodeTopics([fields, asserter, timeBounds, numSteps, deadline]: [null, null, null, null, null]): string[];
        }>;

        ConfirmedDisputableAssertion: TypedEventDescription<{
            encodeTopics([newState, logsAccHash]: [null, null]): string[];
        }>;

        ChallengeLaunched: TypedEventDescription<{
            encodeTopics([challengeContract, challenger]: [null, null]): string[];
        }>;
    };
}

export class ArbChannel extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ArbChannel;
    attach(addressOrName: string): ArbChannel;
    deployed(): Promise<ArbChannel>;

    on(event: EventFilter | string, listener: Listener): ArbChannel;
    once(event: EventFilter | string, listener: Listener): ArbChannel;
    addListener(eventName: EventFilter | string, listener: Listener): ArbChannel;
    removeAllListeners(eventName: EventFilter | string): ArbChannel;
    removeListener(eventName: any, listener: Listener): ArbChannel;

    interface: ArbChannelInterface;

    functions: {
        currentDeposit(validator: string): Promise<BigNumber>;

        vm(): Promise<{
            machineHash: string;
            pendingHash: string;
            inbox: string;
            asserter: string;
            escrowRequired: BigNumber;
            deadline: BigNumber;
            sequenceNum: BigNumber;
            gracePeriod: number;
            maxExecutionSteps: number;
            state: number;
            activeChallengeManager: string;
            0: string;
            1: string;
            2: string;
            3: string;
            4: BigNumber;
            5: BigNumber;
            6: BigNumber;
            7: number;
            8: number;
            9: number;
            10: string;
        }>;

        isListedValidator(validator: string): Promise<boolean>;

        isValidatorList(_validators: (string)[]): Promise<boolean>;

        completeChallenge(
            _players: (string)[],
            _rewards: (BigNumberish)[],
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        initiateChallenge(_assertPreHash: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;

        initialize(
            _vmState: Arrayish,
            _gracePeriod: BigNumberish,
            _maxExecutionSteps: BigNumberish,
            _escrowRequired: BigNumberish,
            _owner: string,
            _challengeFactoryAddress: string,
            _globalInboxAddress: string,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        activateVM(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        ownerShutdown(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        confirmDisputableAsserted(
            _preconditionHash: Arrayish,
            _afterHash: Arrayish,
            _numSteps: BigNumberish,
            _messages: Arrayish,
            _logsAccHash: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        pendingDisputableAssert(
            _beforeHash: Arrayish,
            _beforeInbox: Arrayish,
            _afterHash: Arrayish,
            _messagesAccHash: Arrayish,
            _logsAccHash: Arrayish,
            _numSteps: BigNumberish,
            _timeBounds: (BigNumberish)[],
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        init(
            _vmState: Arrayish,
            _gracePeriod: BigNumberish,
            _maxExecutionSteps: BigNumberish,
            _escrowRequired: BigNumberish,
            _owner: string,
            _challengeLauncherAddress: string,
            _globalInboxAddress: string,
            _validatorKeys: (string)[],
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        increaseDeposit(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        finalizedUnanimousAssert(
            _afterHash: Arrayish,
            _newInbox: Arrayish,
            _messages: Arrayish,
            _logsAccHash: Arrayish,
            _signatures: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        pendingUnanimousAssert(
            _unanRest: Arrayish,
            _sequenceNum: BigNumberish,
            _messagesAccHash: Arrayish,
            _logsAccHash: Arrayish,
            _signatures: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        confirmUnanimousAsserted(
            _afterHash: Arrayish,
            _newInbox: Arrayish,
            _messages: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        validatorCount(): Promise<number>;
        getState(): Promise<number>;
        challengeFactory(): Promise<string>;
        terminateAddress(): Promise<string>;
        exitAddress(): Promise<string>;
        activatedValidators(): Promise<number>;
        owner(): Promise<string>;
        escrowRequired(): Promise<BigNumber>;
        globalInbox(): Promise<string>;
    };

    filters: {
        PendingUnanimousAssertion(unanHash: null, sequenceNum: null, deadline: null): EventFilter;

        ConfirmedUnanimousAssertion(sequenceNum: null): EventFilter;

        FinalizedUnanimousAssertion(unanHash: null): EventFilter;

        PendingDisputableAssertion(
            fields: null,
            asserter: null,
            timeBounds: null,
            numSteps: null,
            deadline: null,
        ): EventFilter;

        ConfirmedDisputableAssertion(newState: null, logsAccHash: null): EventFilter;

        ChallengeLaunched(challengeContract: null, challenger: null): EventFilter;
    };

    estimate: {
        completeChallenge(_players: (string)[], _rewards: (BigNumberish)[]): Promise<BigNumber>;

        initiateChallenge(_assertPreHash: Arrayish): Promise<BigNumber>;

        initialize(
            _vmState: Arrayish,
            _gracePeriod: BigNumberish,
            _maxExecutionSteps: BigNumberish,
            _escrowRequired: BigNumberish,
            _owner: string,
            _challengeFactoryAddress: string,
            _globalInboxAddress: string,
        ): Promise<BigNumber>;

        activateVM(): Promise<BigNumber>;

        ownerShutdown(): Promise<BigNumber>;

        confirmDisputableAsserted(
            _preconditionHash: Arrayish,
            _afterHash: Arrayish,
            _numSteps: BigNumberish,
            _messages: Arrayish,
            _logsAccHash: Arrayish,
        ): Promise<BigNumber>;

        pendingDisputableAssert(
            _beforeHash: Arrayish,
            _beforeInbox: Arrayish,
            _afterHash: Arrayish,
            _messagesAccHash: Arrayish,
            _logsAccHash: Arrayish,
            _numSteps: BigNumberish,
            _timeBounds: (BigNumberish)[],
        ): Promise<BigNumber>;

        init(
            _vmState: Arrayish,
            _gracePeriod: BigNumberish,
            _maxExecutionSteps: BigNumberish,
            _escrowRequired: BigNumberish,
            _owner: string,
            _challengeLauncherAddress: string,
            _globalInboxAddress: string,
            _validatorKeys: (string)[],
        ): Promise<BigNumber>;

        increaseDeposit(): Promise<BigNumber>;

        finalizedUnanimousAssert(
            _afterHash: Arrayish,
            _newInbox: Arrayish,
            _messages: Arrayish,
            _logsAccHash: Arrayish,
            _signatures: Arrayish,
        ): Promise<BigNumber>;

        pendingUnanimousAssert(
            _unanRest: Arrayish,
            _sequenceNum: BigNumberish,
            _messagesAccHash: Arrayish,
            _logsAccHash: Arrayish,
            _signatures: Arrayish,
        ): Promise<BigNumber>;

        confirmUnanimousAsserted(_afterHash: Arrayish, _newInbox: Arrayish, _messages: Arrayish): Promise<BigNumber>;
    };
}
