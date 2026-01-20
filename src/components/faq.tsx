import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const faqData = [
  {
    id: "item-1",
    question: "What is Salesforce?",
    answer: (
      <p>
        Salesforce is the <span className="text-blue-600 font-medium underline">#1 AI CRM</span> (customer relationship management) platform. We bring companies and customers together by providing a unified set of applications – powered by agentic AI and data – that help every department, including sales, service, marketing, commerce, and IT, work as one.
      </p>
    ),
  },
  {
    id: "item-2",
    question: "What is CRM and why do I need one?",
    answer: "CRM helps you manage all your company's relationships and interactions with customers and potential customers. It improves business relationships to grow your business.",
  },
  {
    id: "item-3",
    question: "What is agentic AI and how is it used in Salesforce?",
    answer: "Agentic AI refers to AI systems that can take independent action to achieve goals. In Salesforce, this means autonomous agents that can help solve customer issues or qualify leads without constant human intervention.",
  },
  {
    id: "item-4",
    question: "How does Salesforce CRM help my small business grow?",
    answer: "Salesforce helps small businesses by automating tasks, providing a single view of the customer, and offering scalable tools that grow as your business does.",
  },
];

const FAQ = () => {
  return (
    <section className="px-8 py-10">
      <h2 className=" text-[32px] md:text-[32px] lg:text-[32px] mb-6 font-bold text-center text-[#032d60] font-playfair">
        Frequently Asked Questions
      </h2>

     <Accordion type="single" collapsible className="max-w-5xl mx-auto font-poppins">
  {faqData.map((item) => (
    <AccordionItem
      key={item.id}
      value={item.id}
      className="border-b border-gray-200"
    >
      <AccordionTrigger
        className="
          group relative flex w-full items-center justify-between
          pr-14 py-6
          text-left text-lg md:text-xl
          font-bold text-[#032d60]
          hover:text-[#0176d3]
          hover:no-underline

          [&>svg]:hidden
        "
      >
       
        <span>{item.question}</span>

        <span
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            flex h-6 w-6 items-center justify-center
            rounded-full
            bg-sky-100 text-[#032d60]
            transition-colors
            group-hover:bg-[#0176d3]
            group-hover:text-white
          "
        >
          <IconPlus className="h-5 w-5 group-data-[state=open]:hidden" />
          <IconMinus className="h-5 w-5 hidden group-data-[state=open]:block" />
        </span>
      </AccordionTrigger>

      <AccordionContent className="pb-6 text-base leading-relaxed text-gray-700">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>


    </section>
  );
};

export default FAQ;