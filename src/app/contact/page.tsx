"use client";
import React, { useState } from "react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconSend,
  IconLoader2,
} from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  company: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  note: string;
}

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({
    type: null,
    msg: "",
  });

  const handleSubmit = async (e: React.FormEvent<ContactFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    const form = e.currentTarget;

    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      mobile: form.elements.phone.value,
      company: form.elements.company.value,
      enquiryFor: form.elements.subject.value,
      message: form.elements.message.value,
    };

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Message sent successfully!" });
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send email");
      }
    } catch (err: unknown) {
      console.error("Submit Error:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setStatus({ type: "error", msg: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard
              icon={<IconMapPin className="h-6 w-6" />}
              title="Corporate Office"
              value="Rajasthan, India"
              note="Visit us at our headquarters"
            />
            <InfoCard
              icon={<IconPhone className="h-6 w-6" />}
              title="Call Us"
              value="+91-XXXXXXXXXX"
              note="Mon-Sat 9am to 6pm"
            />
            <InfoCard
              icon={<IconMail className="h-6 w-6" />}
              title="Email Us"
              value="info@goyalsalt.com"
              note="Online support 24/7"
            />
          </div>
        </div>

        <div className="bg-[#F8FAFC] min-h-screen py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="rounded-3xl border-none shadow-xl bg-white">
                <CardContent className="p-10 md:p-16">
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider font-playfair">
                    Get in Touch
                  </p>
                  <h2 className="mt-4 text-4xl font-bold text-[#111827] font-playfair">
                    Request a Call Back
                  </h2>
                  <p className="mt-4 text-gray-500 text-lg font-poppins">
                    Fill out the form below and our team will reach out to you
                    shortly.
                  </p>

                  {status.msg && (
                    <div
                      className={`mt-6 p-4 rounded-xl text-sm font-medium font-poppins ${
                        status.type === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {status.msg}
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-10 grid gap-6 md:grid-cols-2"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-semibold font-playfair">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="bg-gray-50 border-gray-100 h-12 font-poppins"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold font-playfair">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="bg-gray-50 border-gray-100 h-12 font-poppins"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold font-playfair">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        placeholder="Enter your phone number"
                        className="bg-gray-50 border-gray-100 h-12 font-poppins"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold font-playfair">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        placeholder="Enter your company name"
                        className="bg-gray-50 border-gray-100 h-12 font-poppins"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-semibold font-playfair">
                        Subject (Enquiry For) *
                      </label>
                      <Input
                        name="subject"
                        required
                        placeholder="How can we help?"
                        className="bg-gray-50 border-gray-100 h-12 font-poppins"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-semibold font-playfair">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        required
                        placeholder="Tell us more about your requirements..."
                        className="bg-gray-50 border-gray-100 min-h-120px font-poppins"
                      />
                    </div>
                    <Button
                      disabled={loading}
                      type="submit"
                      className="md:col-span-2 font-playfair bg-[#0176d3] hover:bg-white text-white hover:text-[#1D546D] border-2 border-[#1D546D] h-14 text-lg rounded-xl flex gap-2 transition-all"
                    >
                      {loading ? (
                        <IconLoader2 className="animate-spin" />
                      ) : (
                        <IconSend size={20} />
                      )}
                      {loading ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 font-playfair">
                  VISIT US
                </p>
                <h2 className="text-5xl font-bold text-[#111827] mb-6 font-playfair">
                  Our Location
                </h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-poppins">
                  {" "}
                  We&apos;re located in Jaipur, India - the heart of
                  India&apos;s salt industry.
                </p>

                <div className="bg-[linear-gradient(to_right,#061C5B,#0B2FA0)] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                  <h3 className="text-xl font-playfair font-bold mb-8">
                    Corporate Headquarters
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <IconMapPin
                        className="text-white mt-1 shrink-0"
                        size={24}
                      />
                      <div>
                        <p className="font-semibold font-playfair text-lg leading-tight">
                          Limited Company
                        </p>
                        <p className="text-gray-400 font-poppins ">
                          Corporate Office
                          <br />
                          Rajasthan, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <IconPhone className="text-white shrink-0" size={22} />
                      <p className="font-medium font-playfair">
                        +91-XXXXXXXXXX
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IconMail className="text-white shrink-0" size={22} />
                      <p className="font-medium font-playfair">
                        info@avolvelabs.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-2 border-dashed border-gray-200 rounded-3xl h-64 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                  <IconMapPin size={48} className="mb-2 opacity-30" />
                  <p className="font-bold">Interactive Map</p>
                  <p className="text-sm">Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoCard = ({ icon, title, value, note }: InfoCardProps) => (
  <Card className="rounded-2xl text-center border-none shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-8">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0176d3] text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 font-playfair">
        {title}
      </h3>
      <p className="mt-2 font-medium text-blue-600 font-playfair">{value}</p>
      <p className="mt-1 text-sm text-gray-500 font-poppins">{note}</p>
    </CardContent>
  </Card>
);

export default Page;
