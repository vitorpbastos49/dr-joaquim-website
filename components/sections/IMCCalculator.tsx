"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IMCCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function calculateBMI() {
    const weightNumber = Number(weight);
    const heightNumber = Number(height);

    if (!weightNumber || !heightNumber) return;

    const bmi = weightNumber / (heightNumber * heightNumber);

    setResult(Number(bmi.toFixed(1)));
  }

  function getClassification(bmi: number) {
    if (bmi < 18.5) return "Abaixo do peso";
    if (bmi < 25) return "Peso adequado";
    if (bmi < 30) return "Sobrepeso";
    if (bmi < 35) return "Obesidade grau I";
    if (bmi < 40) return "Obesidade grau II";

    return "Obesidade grau III";
  }

  return (
<section id="calculadora-imc" className="bg-white py-24">      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Descubra seu IMC
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Faça uma avaliação inicial. O IMC é um indicador importante,
            mas a avaliação médica considera diversos fatores individuais.
          </p>
        </div>


        <Card className="mx-auto mt-10 max-w-xl">
          <CardContent className="space-y-6 p-8">

            <div>
              <label className="text-sm font-medium">
                Peso (kg)
              </label>

              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-2 w-full rounded-lg border p-3"
                placeholder="Ex: 85"
              />
            </div>


            <div>
              <label className="text-sm font-medium">
                Altura (metros)
              </label>

              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-2 w-full rounded-lg border p-3"
                placeholder="Ex: 1.75"
              />
            </div>


            <Button
              className="w-full"
              onClick={calculateBMI}
            >
              Calcular IMC
            </Button>


            {result && (
              <div className="rounded-xl bg-gray-50 p-6 text-center">

                <p className="text-3xl font-bold">
                  {result}
                </p>

                <p className="mt-2 text-lg">
                  {getClassification(result)}
                </p>

              </div>
            )}

          </CardContent>
        </Card>

      </div>
    </section>
  );
}