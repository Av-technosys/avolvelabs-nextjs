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
        Salesforce is the{" "}
        <span className="text-blue-600 font-medium underline">
          #1 AI CRM
        </span>{" "}
        (customer relationship management) platform.
      </p>
    ),
  },
  {
    id: "item-2",
    question: "What is CRM and why do I need one?",
    answer:
      "CRM helps you manage all your company's relationships and interactions.",
  },
  {
    id: "item-3",
    question: "What is agentic AI and how is it used in Salesforce?",
    answer:
      "Agentic AI refers to AI systems that can take independent action.",
  },
  {
    id: "item-4",
    question: "How does Salesforce CRM help my small business grow?",
    answer:
      "Salesforce helps small businesses by automating tasks and scaling tools.",
  },
];

type FAQProps = {
  textColor?: string;
  hoverColor?: string;
  iconBg?: string;
  iconHoverBg?: string;
};

const FAQ = ({
  textColor = "#032d60",
  hoverColor = "#0176d3",
  iconBg = "#e0f2fe",
  iconHoverBg = "#0176d3",
}: FAQProps) => {
  return (
    <section
      className="px-8 py-10"
      style={
        {
          "--faq-text": textColor,
          "--faq-hover": hoverColor,
          "--faq-icon-bg": iconBg,
          "--faq-icon-hover": iconHoverBg,
        } as React.CSSProperties
      }
    >
      <h2 className="text-[32px] mb-6 font-bold text-center font-playfair text-(--faq-text)]">
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
                pr-14 py-6 text-left text-lg md:text-xl
                text-(--faq-text)
                hover:text-(--faq-hover)
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
                  bg-(--faq-icon-bg)
                  text-(--faq-text)
                  transition-colors
                  group-hover:bg-(--faq-icon-hover)
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
