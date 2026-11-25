import { createFileRoute, redirect } from "@tanstack/react-router";

// O site agora é uma página só: este endereço leva direto à seção na página inicial.
export const Route = createFileRoute("/equipe")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "equipe" });
  },
});
