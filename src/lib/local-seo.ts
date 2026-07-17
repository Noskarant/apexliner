export const siteUrl = "https://apexliner.ch";

export const businessInfo = {
  name: "APEX LINER Sàrl",
  displayName: "APEX LINER",
  email: "Contact@apexliner.ch",
  streetAddress: "Rue de l'Industrie 28, c/o AMAFINANCE SA",
  postalCode: "1030",
  locality: "Bussigny",
  region: "Vaud",
  country: "CH",
};

export const nearbyServiceAreas = ["Bussigny", "Crissier", "Renens", "Ecublens", "Lausanne"];

export const localAreaLabel = "Bussigny, Crissier, Renens, Ecublens et Lausanne";

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}
