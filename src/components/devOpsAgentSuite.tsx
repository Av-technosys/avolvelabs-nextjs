import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconTerminal2, IconInfinity, IconShieldLock } from "@tabler/icons-react";

const agents = [
  {
    title: "Autonomous Ops Agent",
    icon: IconTerminal2,
    desc: "A self-healing agent that monitors cluster health and automatically executes remediation scripts when anomalies are detected, reducing mean-time-to-recovery (MTTR) by 80%.",
  },
  {
    title: "Deployment Bot",
    icon: IconInfinity,
    desc: "Orchestrates complex canary releases and blue-green deployments based on real-time performance metrics, ensuring every release is statistically proven to be stable.",
  },
  {
    title: "Security Sentinel",
    icon: IconShieldLock,
    desc: "An AI-powered security agent that continuously audits cloud configurations and container images for vulnerabilities, automatically raising PRs to patch security holes.",
  },
];

const DevOpsAgentSuite = () => {
  return (
    <section className="relative py-20 px-8 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold mb-4">AvolveLabs DevOps AI Suite</h2>
        <p className="mt-4 max-w-3xl mx-auto font-poppins text-md md:text-[18px] text-gray-700 mb-16">
          Intelligent agents that manage your cloud overhead so your developers can focus on shipping features.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {agents.map((item, i) => (
            <Card key={i} className="rounded-2xl border bg-white/50 backdrop-blur-sm transition-all hover:border-blue-400 hover:shadow-lg">
              <CardContent className="p-8">
                <item.icon size={40} className="text-blue-600 mb-6 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold font-playfair text-slate-900 mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed font-poppins text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsAgentSuite;