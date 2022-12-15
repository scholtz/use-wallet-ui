
# @algoscan/use-wallet-ui

A UI Component Wrapper for [@TxnLab/use-wallet](https://github.com/TxnLab/use-wallet)  

### NPM

```bash

npm install @algoscan/use-wallet-ui

```

Install peer dependencies (if needed)

```bash

npm install @blockshake/defly-connect @perawallet/connect @randlabs/myalgo-connect @walletconnect/client algorand-walletconnect-qrcode-modal @json-rpc-tools/utils

```

### Set up the Wallet UI Provider

Import and wrap the Wallet UI Provider around any child components you plan to use with the wallet. In most cases, individuals will opt to wrap their entire app so that the address and wallet info is available everywhere.

The `WalletUIProvider` component takes in a list of `providers` so the developer can specify which wallets they want to support. Possible options include: `kmd`, `pera`, `myalgo`, `algosigner`, `defly`, `exodus`, and `walletconnect`.

```jsx
import { WalletUIProvider } from "@algoscan/use-wallet-ui"

export default function MyApp(){

  return(
    <WalletUIProvider providers={['pera', 'myalgo', 'defly']}>
      ...
    </WalletUIProvider>
  )
}

```

### Add the Wallet UI

Import the Wallet UI in any of our UI Components. The component provides some defaults for colors, but they can be changed by passing the *optional* `primary`, `textColor`, and `backgroundColor` props.

```jsx
import { WalletUI } from '@algoscan/use-wallet-ui'

<WalletUI primary='green' textColor='#FF0000' />
```  

### Sign Transactions

The package also comes with a wrapper to retrieve the current address and sign transactions. This can be done with the `useWalletUI` component. You can retrieve `signTransactions` and `activeAddress` from `useWalletUI`.

```jsx
import { useWalletUI } from '@algoscan/use-wallet-ui'
import { encodeUnsignedTransaction }  from 'algosdk'

export default function MyComponent() {

  const { activeAddress, signTransactions } =  useWalletUI();

  const createTransaction = () => {
    // Create A Validation Transaction
  }
  const signedTransactions =  await signTransactions([encodedTransaction]);

  return (
    <div>
      <h1>{activeAddress || 'No Address Found'}</h1>
      <button onClick={async () => {
          
        const encodedTransaction = encodeUnsignedTransaction(createTransaction());
        await signTransactions([encodedTransaction])

      }}>Sign Transaction</button>
    </div>
  );
}

```
  
## Static Imports

For more information on static imports, consult the [@TxnLab/use-wallet](https://github.com/TxnLab/use-wallet) repository.

## Webpack 5 / Create React App

For more information on how to ensure compatibility with Create React App or Webpack 5, consult the [@TxnLab/use-wallet](https://github.com/TxnLab/use-wallet) repository.
