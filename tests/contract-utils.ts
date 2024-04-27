import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  FungibleTokenCreated,
  NftCreated
} from "../generated/Contract/Contract"

export function createFungibleTokenCreatedEvent(
  tokenAddress: Address,
  creator: Address
): FungibleTokenCreated {
  let fungibleTokenCreatedEvent = changetype<FungibleTokenCreated>(
    newMockEvent()
  )

  fungibleTokenCreatedEvent.parameters = new Array()

  fungibleTokenCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  fungibleTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return fungibleTokenCreatedEvent
}

export function createNftCreatedEvent(
  NftAddress: Address,
  creator: Address
): NftCreated {
  let nftCreatedEvent = changetype<NftCreated>(newMockEvent())

  nftCreatedEvent.parameters = new Array()

  nftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "NftAddress",
      ethereum.Value.fromAddress(NftAddress)
    )
  )
  nftCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return nftCreatedEvent
}
