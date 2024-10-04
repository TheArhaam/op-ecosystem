import { inferRouterOutputs } from '@trpc/server'
import { ApiV0 } from '@eth-optimism/dapp-console-api'
import { TRPCClientError } from '@trpc/client'

export type ApiV0RouterOutputs = inferRouterOutputs<ApiV0['handler']>
export type ApiError = TRPCClientError<ApiV0['handler']>

export type DeployedApp = ApiV0RouterOutputs['apps']['listApps']['records'][0]
export type Contract =
  ApiV0RouterOutputs['apps']['listApps']['records'][0]['contracts'][0]
export type Challenge = ApiV0RouterOutputs['Contracts']['startVerification']
export type TotalRebatesClaimedRebate =
  ApiV0RouterOutputs['Rebates']['totalRebatesClaimed']
export type XChainMessage = NonNullable<
  ApiV0RouterOutputs['messages']['messages']
>[0]
