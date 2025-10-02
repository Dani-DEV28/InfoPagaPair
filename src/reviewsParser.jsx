export function parseReviews(rawJson) {
  return rawJson.map((item, index) => ({
    id: item.id ?? index + 1, // fallback in case id is missing
    img: item.img ?? "",
    name: item.name ?? "Untitled",
    OneLiner: item.OneLiner ?? "",
    body: item.body ?? ""
  }));
}