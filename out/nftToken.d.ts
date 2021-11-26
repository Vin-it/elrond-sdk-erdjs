export declare class NFTToken {
    token: string;
    name: string;
    type: string;
    owner: string;
    minted: string;
    burnt: string;
    decimals: number;
    isPaused: boolean;
    canUpgrade: boolean;
    canMint: boolean;
    canBurn: boolean;
    canChangeOwner: boolean;
    canPause: boolean;
    canFreeze: boolean;
    canWipe: boolean;
    canAddSpecialRoles: boolean;
    canTransferNFTCreateRole: boolean;
    NFTCreateStopped: boolean;
    wiped: string;
    constructor(init?: Partial<NFTToken>);
    static fromHttpResponse(response: {
        token: string;
        name: string;
        type: string;
        owner: string;
        minted: string;
        burnt: string;
        decimals: number;
        isPaused: boolean;
        canUpgrade: boolean;
        canMint: boolean;
        canBurn: boolean;
        canChangeOwner: boolean;
        canPause: boolean;
        canFreeze: boolean;
        canWipe: boolean;
        canAddSpecialRoles: boolean;
        canTransferNFTCreateRole: boolean;
        NFTCreateStopped: boolean;
        wiped: string;
    }): NFTToken;
    getTokenName(): string;
    getTokenIdentifier(): string;
    getTokenType(): string;
}