// components/ServiceItems.ts
type ServiceItem = {
    name: string;
    href: string;
}
export const serviceItems: ServiceItem[] = [
    { name: "Kotisiivoukset", href: "/#kotisiivoukset" },
    { name: "Ikkunat", href: "/#ikkunat" },
    { name: "Erikoissiivoukset", href: "/#erikoissiivoukset" },
    { name: "Desinfioinnit ja pikasiivoukset", href: "/#desinfiointi" },
    { name: "Muuttosiivoukset", href: "/#muuttosiivoukset" },
    { name: "Remontin loppusiivoukset", href: "/#remonttisiivoukset" },
    { name: "Liiketila- ja toimistosiivoukset", href: "/#toimistosiivoukset" },
    { name: "Taloyhtiöiden porraskäytäväsiivoukset", href: "/#porraskäytäväsiivoukset" },
]