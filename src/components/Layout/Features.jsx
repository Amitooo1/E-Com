import { Award, Headset, PackageOpen, TruckElectric } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <PackageOpen className="w-10 h-10" />,
      title: "Easy Return & Exchange",
      description: "7 Days Easy Return and Exchange",
    },
    {
      icon: <TruckElectric className="w-10 h-10" />,
      title: "Fast Delivery",
      description: "48-hour delivery in major cities",
    },
    {
      icon: <Headset className="w-10 h-10" />,
      title: "Customer Support",
      description: "support@reybon.com",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Trusted Quality",
      description: "Rated 5★ by 95% of customers",
    },
  ];

  return (
    <section className="bg-gray-50 py-2 sm:py-2">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <div className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-4 
                        gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center 
                         bg-white 
                         rounded-xl 
                         p-6 
                         shadow-sm 
                         hover:shadow-md 
                         transition duration-300"
            >
              {/* Icon */}
              <div className="bg-red-50 text-red-500 p-4 rounded-full">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="mt-5">
                <h4 className="font-semibold text-lg mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;