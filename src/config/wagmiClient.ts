import { createConfig, http } from 'wagmi'
import { openCampusCodex} from './chains/educampus'
import { createClient } from 'viem'
import { metaMask } from 'wagmi/connectors'

const config = createConfig({
  chains: [openCampusCodex],
  connectors: [metaMask()],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
})

export default config;