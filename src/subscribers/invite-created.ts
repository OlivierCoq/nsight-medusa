import {
  type SubscriberConfig,
  type SubscriberArgs,
} from "@medusajs/medusa"

export default async function handleInviteCreated({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  // TODO: handle event
}

export const config: SubscriberConfig = {
  event: "invite.created",
  context: {
    subscriberId: "invite-created-handler",
  },
}