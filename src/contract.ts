import {
  FungibleTokenCreated as FungibleTokenCreatedEvent,
  NftCreated as NftCreatedEvent
} from "../generated/Contract/Contract"
import { FungibleTokenCreated, NftCreated } from "../generated/schema"

export function handleFungibleTokenCreated(
  event: FungibleTokenCreatedEvent
): void {
  let entity = new FungibleTokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftCreated(event: NftCreatedEvent): void {
  let entity = new NftCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.NftAddress = event.params.NftAddress
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
