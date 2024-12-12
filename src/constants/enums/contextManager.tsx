/* eslint-disable @typescript-eslint/no-explicit-any */
export type ContextManager = {
    update:(data:any)=>void,
    refresh:()=>void,
    data:any
}