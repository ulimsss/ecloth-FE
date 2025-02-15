import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();

export const GridXState = atom({
    key : "GridXState",
    default : null,
});
export const GridYState = atom({
    key : "GridYState",
    default : null,
});
export const CurrentYState = atom({
    key : "CurrentYState",
    default : null,
});
export const CurrentXState = atom({
    key : "CurrentXState",
    default : null,
});
export const hourTempaState = atom({
    key : "hourTempaState",
    default : "",
})

export const precipitationState = atom({
    key : "precipitationState",
    default : "",
})

export const isLoginState = atom({
    key : "isLoginState",
    default: false
})