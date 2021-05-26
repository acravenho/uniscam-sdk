import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare type InitCodeHashes = {
    [chainId in ChainId]: string;
};
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    BSC_MAINNET = 56,
    BSC_TESTNET = 97,
    HECO_MAINNET = 128,
    HECO_TESTNET = 256,
    MATIC_MAINNET = 137,
    OKCHAIN_TEST = 65
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x32CE36F6eA8d97f9fC19Aab83b9c6D2F52D74470";
export declare const INIT_CODE_HASH_BSC = "0x9b025805045f6da539a4926f67307a9b0ab5aaccc42d3f14aaea0776a5b727ac";
export declare const INIT_CODE_HASH_ETH = "0xa852da7194a3edaba2a5a4545af11dda00ca97d89e0f9934bb841dffaa964220";
export declare const INIT_CODE_HASH_HECO = "0x7b9686f044376bf1a04de2e9f1dbb6c9a4fe516f7cbd89b68be801982b62f913";
export declare const INIT_CODE_HASH_MATIC = "0xf523ab2e058386ecc391c92c3cda3906b9c8a50c2cca82c4f12ea030fee83af1";
export declare const INIT_CODE_HASH_OKCHAIN_TESTNET = "0x85c3c9a75ba81d6e35a53711a7eb5cb910409d3396d00129d9b7006d76dbc310";
export declare const INIT_CODE_HASHES: InitCodeHashes;
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
