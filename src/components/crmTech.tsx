import React from "react"

type CrmTechProps = {
  title?: string
  description?: string
  bgClass?: string
  titleColor?: string
  borderColor?: string
  orbit1?: string[]
  orbit2?: string[]
}

const CrmTech = ({
  title = "Powered by the Best in AI",
  description =
    "From cloud-native AI platforms to specialized frameworks, we use the best tools to build solutions that integrate seamlessly with your systems.",
  bgClass = "bg-[#eef6ff]",
  titleColor = "text-[#032d60]",
  borderColor = "border-blue-300",
  orbit1 = ["OpenAI", "Azure AI", "Google", "Boomi"],
  orbit2 = ["Llama", "LangChain", "LangGraph", "Claude"],
}: CrmTechProps) => {
  return (
    <section className={`${bgClass} py-10 px-8  overflow-hidden mx-auto max-w-7xl`}>
      <div className=" grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
       <div className="text-center lg:text-left flex flex-col items-center lg:items-start">

          <h2 className={`text-4xl font-bold font-playfair ${titleColor}`}>
            {title.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          <p className="mt-6 text-lg text-gray-700 max-w-md font-poppins">
            {description}
          </p>
        </div>

        {/* Right Orbit */}
        <div className="relative mx-auto h-75 w-75">
          <div className={`absolute inset-0 rounded-full border border-dashed ${borderColor}`} />
          <div className={`absolute inset-15 rounded-full border border-dashed ${borderColor}`} />
          <div className={`absolute inset-32.5 rounded-full border border-dashed ${borderColor}`} />

          <div className="absolute inset-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow flex items-center justify-center text-3xl font-bold text-blue-500">
            AI
          </div>

          {/* Orbit 1 */}
          {orbit1.map((item, i) => (
            <OrbitItem
              key={item}
              inset="0"
              index={i}
              total={orbit1.length}
              text={item}
            />
          ))}

          {/* Orbit 2 */}
          {orbit2.map((item, i) => (
            <OrbitItem
              key={item}
              inset="60px"
              index={i}
              total={orbit2.length}
              text={item}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

const OrbitItem = ({
  inset,
  index,
  total,
  text,
}: {
  inset: string
  index: number
  total: number
  text: string
}) => (
  <div
    className="absolute"
    style={{
      inset,
      transform: `rotate(${index * (360 / total)}deg)`,
    }}
  >
    <div className="absolute left-1/2 -translate-x-1/2 -top-5">
      <CircleLabel text={text} />
    </div>
  </div>
)

const CircleLabel = ({ text }: { text: string }) => (
  <div className="h-12 w-12 rounded-full bg-white shadow flex items-center justify-center text-[10px] font-semibold text-gray-700 text-center px-1">
    {text}
  </div>
)

export default CrmTech
