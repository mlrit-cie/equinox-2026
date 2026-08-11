/** Server-only helpers for EQUINOX registration + payment configuration. */

export type PaymentConfig = {
  /** Fee in INR. null means the fee has not been configured/published yet. */
  amountInr: number | null;
  currency: "INR";
  /** Configured gateway; "unconfigured" until a real gateway is wired up. */
  gateway: "razorpay" | "upi" | "unconfigured";
  configured: boolean;
};

export function readPaymentConfig(): PaymentConfig {
  const raw = process.env["EQUINOX_REGISTRATION_FEE_INR"];
  const parsed = raw ? Number(raw) : Number.NaN;
  const amountInr = Number.isFinite(parsed) ? parsed : null;
  const gateway = (process.env["EQUINOX_PAYMENT_GATEWAY"] ?? "unconfigured") as
    | "razorpay"
    | "upi"
    | "unconfigured";

  return {
    amountInr,
    currency: "INR",
    gateway,
    configured: amountInr !== null && gateway !== "unconfigured",
  };
}

export function buildRegistrationId(eventId: string) {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 6);
  const code = eventId.replace(/[^a-z]/gi, "").slice(0, 3).toUpperCase();
  return `EQX-${code}-${stamp}${rand}`;
}
