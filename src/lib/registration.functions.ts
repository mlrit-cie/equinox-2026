import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { buildRegistrationId, readPaymentConfig } from "./registration.server";

export const getPaymentConfig = createServerFn({ method: "GET" }).handler(async () =>
  readPaymentConfig(),
);

export const createRegistration = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        eventId: z.string().trim().min(1).max(64),
        name: z.string().trim().min(1).max(100),
        email: z.string().trim().email().max(255),
        phone: z.string().trim().min(6).max(20),
        college: z.string().trim().min(1).max(140),
        participation: z.enum(["individual", "team"]),
        teamName: z.string().trim().max(100).optional(),
        teamSize: z.number().int().min(1).max(10).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const config = readPaymentConfig();
    return {
      registrationId: buildRegistrationId(data.eventId),
      status: config.configured ? ("pending_payment" as const) : ("awaiting_config" as const),
      amountInr: config.amountInr,
      createdAt: new Date().toISOString(),
    };
  });
