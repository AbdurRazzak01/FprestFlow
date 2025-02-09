/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IReferencedPaymentNonexistenceVerificationContract
  extends Truffle.Contract<IReferencedPaymentNonexistenceVerificationInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IReferencedPaymentNonexistenceVerificationInstance>;
}

type AllEvents = never;

export interface IReferencedPaymentNonexistenceVerificationInstance
  extends Truffle.ContractInstance {
  verifyReferencedPaymentNonexistence(
    _proof: {
      merkleProof: string[];
      data: {
        attestationType: string;
        sourceId: string;
        votingRound: number | BN | string;
        lowestUsedTimestamp: number | BN | string;
        requestBody: {
          minimalBlockNumber: number | BN | string;
          deadlineBlockNumber: number | BN | string;
          deadlineTimestamp: number | BN | string;
          destinationAddressHash: string;
          amount: number | BN | string;
          standardPaymentReference: string;
          checkSourceAddresses: boolean;
          sourceAddressesRoot: string;
        };
        responseBody: {
          minimalBlockTimestamp: number | BN | string;
          firstOverflowBlockNumber: number | BN | string;
          firstOverflowBlockTimestamp: number | BN | string;
        };
      };
    },
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  methods: {
    verifyReferencedPaymentNonexistence(
      _proof: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: number | BN | string;
          lowestUsedTimestamp: number | BN | string;
          requestBody: {
            minimalBlockNumber: number | BN | string;
            deadlineBlockNumber: number | BN | string;
            deadlineTimestamp: number | BN | string;
            destinationAddressHash: string;
            amount: number | BN | string;
            standardPaymentReference: string;
            checkSourceAddresses: boolean;
            sourceAddressesRoot: string;
          };
          responseBody: {
            minimalBlockTimestamp: number | BN | string;
            firstOverflowBlockNumber: number | BN | string;
            firstOverflowBlockTimestamp: number | BN | string;
          };
        };
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
