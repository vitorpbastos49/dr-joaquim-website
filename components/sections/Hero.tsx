"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >

          <p className="text-sm font-medium text-blue-700">
            Tratamento da obesidade e saúde metabólica
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Transforme sua saúde com acompanhamento médico personalizado
          </h1>

          <p className="text-lg text-gray-600 md:text-xl">
            Uma abordagem baseada em ciência, mudança de hábitos e cuidado
            individualizado para ajudar você a alcançar mais saúde,
            disposição e qualidade de vida.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">

            <Button size="lg">
              Agendar consulta
              <ArrowRight />
            </Button>

            <Button size="lg" variant="outline">
              Calcule seu IMC
            </Button>

          </div>

          <div className="pt-4 text-sm text-gray-500">
            Dr. Joaquim Carlos Brandão Bastos
            <br />
            CRM-MG 30406
          </div>

        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex aspect-square items-center justify-center rounded-3xl bg-gray-100"
        >
          <div className="text-center text-gray-400">
            <p className="text-lg">
              Foto do Dr. Joaquim
            </p>
            <p className="text-sm">
              Espaço reservado
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}