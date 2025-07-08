export function maskPayment(payment: any): any {
  if (!payment || typeof payment !== "object") {
    return payment;
  }

  const masked = { ...payment };

  // Mask sensitive fields
  const sensitiveFields = [
    "customer.phoneNumber",
    "customer.email",
    "customer.name",
    "billingKey",
    "method.card.number",
  ];

  for (const field of sensitiveFields) {
    const parts = field.split(".");
    let current = masked;

    for (let i = 0; i < parts.length - 1; i++) {
      if (current[parts[i]]) {
        current = current[parts[i]];
      } else {
        break;
      }
    }

    const lastPart = parts[parts.length - 1];
    if (current && current[lastPart]) {
      current[lastPart] = maskString(current[lastPart]);
    }
  }

  return masked;
}

export function maskIdentityVerification(verification: any): any {
  if (!verification || typeof verification !== "object") {
    return verification;
  }

  const masked = { ...verification };

  // Mask sensitive fields
  if (masked.personalData) {
    const data = masked.personalData;
    if (data.name) data.name = maskString(data.name);
    if (data.phoneNumber) data.phoneNumber = maskString(data.phoneNumber);
    if (data.birthDate) data.birthDate = maskString(data.birthDate);
    if (data.ci) data.ci = maskString(data.ci);
    if (data.di) data.di = maskString(data.di);
  }

  return masked;
}

function maskString(str: string): string {
  if (!str || str.length <= 4) {
    return "****";
  }

  const visibleLength = Math.min(2, Math.floor(str.length / 4));
  const maskedLength = str.length - visibleLength * 2;

  return (
    str.substring(0, visibleLength) +
    "*".repeat(maskedLength) +
    str.substring(str.length - visibleLength)
  );
}

export function filterOutNone(obj: Record<string, any>): Record<string, any> {
  const filtered: Record<string, any> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      filtered[key] = value;
    }
  }

  return filtered;
}
