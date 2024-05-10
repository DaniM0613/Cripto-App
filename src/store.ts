import { create } from 'zustand'


export const useCryptoStore = create(() => ({
    fethCryptos: () =>{
        console.log('desde FetchCryptos')
    }
}))