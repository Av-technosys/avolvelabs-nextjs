import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    step: "1",
    title: "Infrastrucure as Code (IaC)",
    desc: "We treat infrastructure like software. Using Terraform and CloudFormation, we provision environments that are version-controlled, repeatable, and immune to human error. No more snowflake servers.",
  },
  {
    step: "2",
    title: "CI/CD Pipeline Mastery",
    desc: "We automate the path from commit to cloud. Our pipelines integrate automated testing, security scanning, and blue-green deployments to ensure your production is always healthy and ready.",
  },
  {
    step: "3",
    title: "Cloud-Native Security",
    desc: "DevSecOps is our default. We bake security into every layer, from container vulnerability scanning to IAM least-privilege protocols, ensuring your scale never compromises your safety.",
  },
  {
    step: "4",
    title: "AIOps & Observability",
    desc: "Moving beyond basic monitoring. We deploy AI-driven logging and tracing that predicts failures before they happen, giving you 99.99% uptime and deep visibility into every microservice.",
  },
];

const DevOpsApproach = () => {
  return (
    <section className="bg-slate-950 py-10 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-white">DevOps Capabilities</h2>
          <p className="mt-4 font-poppins text-md md:text-[18px] text-slate-400 max-w-3xl mx-auto">
            We architect robust delivery foundations by aligning development, security, and operations into a single automated lifecycle.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map((item) => (
            <Card key={item.step} className="group relative overflow-hidden bg-slate-900 border border-white/10 rounded-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-blue-500/20 via-transparent to-cyan-500/20" />
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500" />
              <CardContent className="relative z-10 p-4 pt-8">
                <span className="text-blue-500 font-bold text-xl mb-4 block">0{item.step}</span>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-sm font-poppins text-slate-400 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsApproach;