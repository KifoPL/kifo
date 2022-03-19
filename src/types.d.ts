import {Channel, GuildMember, Message, Role } from "discord.js"

export interface IWhatAmICallback {
    (param: WhatAmICallbackParam): void
}

export type WhatAmI = "member" | "channel" | "role" | "message" | "not found"

export interface WhatAmICallbackParam {
    entity: GuildMember | Channel | Message | Role | undefined,
    whatAmI?: WhatAmI
}

export interface ChannelPerm {
    Id: number,
    name: string,
    type: "text" | "voice",
    aliases: string[]
}