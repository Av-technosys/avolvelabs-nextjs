import React from "react"

const orbit1 = ["OpenAI", "Azure AI", "Google", "Boomi"]
const orbit2 = ["Llama", "LangChain", "LangGraph", "Claude"]

const CrmTech = () => {
  return (
    <section className="bg-[#eef6ff] py-10 px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#032d60] font-playfair">
            Powered by the Best in <br /> AI
          </h2>

          <p className="mt-6 text-lg text-gray-700 max-w-md font-poppins">
            From cloud-native AI platforms to specialized frameworks, we use the
            best tools to build solutions that integrate seamlessly with your
            systems.
          </p>
        </div>

        <div className="relative mx-auto h-[300] w-[300]">
          <div className="absolute inset-0 rounded-full border border-dashed border-blue-300" />
          <div className="absolute inset-[60] rounded-full border border-dashed border-blue-300" />
          <div className="absolute inset-[130] rounded-full border border-dashed border-blue-300" />
          <div className="absolute inset-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow flex items-center justify-center text-3xl font-bold text-blue-500">
            AI
          </div>

          {/* Orbit 1 */}
          {orbit1.map((item, i) => (
            <div
              key={item}
              className="absolute inset-0"
              style={{
                transform: `rotate(${i * (360 / orbit1.length)}deg)`,
              }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-5">
                <CircleLabel text={item} />
              </div>
            </div>
          ))}

          {/* Orbit 2 */}
          {orbit2.map((item, i) => (
            <div
              key={item}
              className="absolute inset-[60]"
              style={{
                transform: `rotate(${i * (360 / orbit2.length)}deg)`,
              }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-5">
                <CircleLabel text={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
const CircleLabel = ({ text }: { text: string }) => (
  <div className="h-12 w-12 rounded-full bg-white shadow flex items-center justify-center text-[10px] font-semibold text-gray-700 text-center px-1">
    {text}
  </div>
)

export default CrmTech
