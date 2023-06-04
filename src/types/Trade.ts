import { Coin } from './Coin';
import { Peer } from './Peer';

export enum TradeStatus {
    PendingAccept = 'PENDING_ACCEPT',
    PendingConfirm = 'PENDING_CONFIRM',
    PendingCancel = 'PENDING_CANCEL',
    Cancelled = 'CANCELLED',
    Confirmed = 'CONFIRMED',
    Failed = 'FAILED',
}

export interface Trade {
    acceptedAtTime: number | null;
    coinsOfInterest: Coin[];
    confirmedAtIndex: number;
    createdAtTime: number;
    isMyOffer: boolean;
    pending: Record<string, number>;
    sent: number;
    sentTo: Peer[];
    status: string;
    summary: Summary;
    takenOffer: string | null;
    tradeId: string;
    _offerData: string;
}

export interface Summary {
    fees: number;
    infos: Record<
        string,
        {
            also: {
                also: {
                    owner: string;
                    transferProgram: {
                        launcherId: string;
                        royaltyAddress: string;
                        royaltyPercentage: string;
                        type: 'royalty transfer program';
                    };
                    type: 'ownership';
                };
                metadata: string;
                type: 'metadata';
                updaterHash: string;
            };
            launcherId: string;
            launcherPh: string;
            type: 'singleton';
        }
    >;
    offered: Record<string, number>;
    requested: Record<string, number>;
}
