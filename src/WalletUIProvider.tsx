import React, { useEffect, type ReactNode } from "react"
import { reconnectProviders, initializeProviders, WalletProvider, PROVIDER_ID } from "@txnlab/use-wallet"

const walletProviders = initializeProviders(Object.values(PROVIDER_ID))

const filterProviders = (defaultProviders: { [key:string]: any}, providers: string[]) => 
	Object.keys(defaultProviders).filter(prov => providers.includes(prov)).reduce((acc: { [key: string]: any}, cv) => {
		acc[cv] = defaultProviders[cv]
		return acc
	} ,{})

export default function WalletUIProvider({children, providers} : {children: ReactNode, providers: string[]}){
	useEffect(() => {
		reconnectProviders(filterProviders(walletProviders, providers))
	}, [providers])

	return(
		<WalletProvider value={filterProviders(walletProviders, providers)}>
			{children}
		</WalletProvider>
	)
}