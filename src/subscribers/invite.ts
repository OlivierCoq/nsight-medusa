import {
  type SubscriberConfig,
  type SubscriberArgs,
} from "@medusajs/medusa"

export default async function handleInviteCreated({
  data, eventName, container, pluginOptions,
}: SubscriberArgs<Record<string, string>>) {
  const sendGridService = container.resolve("sendgridService")

  sendGridService.sendEmail({
    templateId: "d-15db650f93564f53ac6af06d64f67944",
    from: process.env.SENDGRID_SENDER,
    to: data.user_email,
    dynamic_template_data: {
      // any data necessary for your template...
      token: data.token,
    },
  })
}

export const config: SubscriberConfig = {
  event: "invite.created",
  context: {
    subscriberId: "invite-created-handler",
  },
}