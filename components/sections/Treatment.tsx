import { Card, CardContent } from "@/components/ui/card";
import { Activity, Apple, Syringe, TrendingUp } from "lucide-react";

const treatments = [
  {
    icon: Activity,
    title: "Avaliação médica individualizada",
    description:
      "Cada paciente possui uma história e necessidades únicas. O tratamento começa com uma avaliação completa.",
  },
  {
    icon: Apple,
    title: "Reeducação alimentar",
    description:
      "Estratégias sustentáveis para melhorar hábitos, alimentação e qualidade de vida.",
  },
  {
    icon: Syringe,
    title: "Medicamentos quando indicados",
    description:
      "Quando necessário, medicamentos podem fazer parte do tratamento com acompanhamento médico e avaliação individual.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento da evolução",
    description:
      "O tratamento é ajustado ao longo do tempo para acompanhar resultados e promover uma evolução consistente.",
  },
];

export default function Treatment() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Um tratamento completo para a obesidade
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Uma abordagem médica personalizada, combinando ciência,
            acompanhamento e estratégias adequadas para cada paciente.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-2">

          {treatments.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <CardContent className="flex gap-4 p-6">

                  <div className="rounded-xl bg-blue-100 p-3 h-fit">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {item.description}
                    </p>
                  </div>

                </CardContent>
              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}