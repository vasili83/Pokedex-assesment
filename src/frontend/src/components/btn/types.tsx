export type BtnTypes = "catchPokemon" | "deletePokemon";
export interface BtnIntrfc {
    type: BtnTypes,
    callback: ()=>void
}