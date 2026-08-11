export type RegistrationDraft = {
  eventId: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  participation: "individual" | "team";
  teamName: string;
  teamSize: number;
  registrationId?: string;
};

export type ConfirmedRegistration = RegistrationDraft & {
  registrationId: string;
  amountInr: number | null;
  paymentStatus: "paid" | "pending" | "awaiting_configuration";
  createdAt: string;
};

const DRAFT_KEY = "equinox.registration.draft";
const CONFIRM_KEY = "equinox.registration.confirmed";

const read = <T,>(key: string): T | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
};

const write = (key: string, value: unknown) => {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const loadDraft = () => read<RegistrationDraft>(DRAFT_KEY);
export const saveDraft = (draft: RegistrationDraft) => write(DRAFT_KEY, draft);
export const loadConfirmation = () => read<ConfirmedRegistration>(CONFIRM_KEY);
export const saveConfirmation = (c: ConfirmedRegistration) => write(CONFIRM_KEY, c);
