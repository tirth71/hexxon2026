import { motion } from "framer-motion";
import demo from "@/assets/certificates/demo.jpg";
import topImage from "@/assets/certificates/topImage.webp";
import demo2 from "@/assets/certificates/demo2.jpeg";

const certificates = [
  {
    name: "GST Certificate",
    image: demo,
    fileId: "",
  },
  {
    name: "IEC Certificate",
    image: demo2,
    fileId: "",
  },
  {
    name: "Udyam Registration",
    image: demo,
    fileId: "",
  },
  {
    name: "FSSAI Certificate",
    image: demo2,
    fileId: "",
  },
  {
    name: "FIEO Certificate",
    image: demo,
    fileId: "",
  },
  {
    name: "Spice Board Certificate",
    image: demo2,
    fileId: "",
  },
];

export default function Certificates() {
  return (
    <section className="bg-background py-16 sm:py-20">

      {/* HERO BANNER */}
      <div className="mb-12">
        <section className="relative h-[220px] flex items-center overflow-hidden">

          <img
            src={topImage}
            alt="Certificates"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-4xl font-extrabold">
              Certificates
            </h1>

            <p className="text-white mt-1 text-lg">
              Home / Certificates
            </p>
          </div>

        </section>
      </div>


      {/* HEADING */}
      <div className="text-center mb-14 px-4">

        <p className="text-primary uppercase tracking-widest font-bold text-sm">
          Our Certification
        </p>

        <h1 className="text-3xl sm:text-4xl font-semibold mt-3 text-foreground">
          Government Certified
        </h1>

        <p className="text-muted-foreground mt-4 max-w-4xl mx-auto text-lg sm:text-base">
          When it comes to food handling, packaging, or processing, we make sure
          that everything is done in accordance with stringent protocols. This
          has allowed us to be accredited to a number of quality and food safety
          certifications.
        </p>

      </div>


      {/* CERTIFICATE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">

        {certificates.map((cert, index) => {

          const pdf = `https://drive.google.com/file/d/${cert.fileId}/preview`;

          return (
            <motion.a
              key={index}
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group block"
            >

              {/* CARD */}
              <div className="
                        bg-white
                        rounded-xl
                        border-2 border-transparent
                        shadow-md
                        p-6
                        transition-all duration-300
                        group-hover:border-green-600
                        group-hover:shadow-lg
                        group-hover:-translate-y-1
                      ">

                {/* CERTIFICATE FRAME */}
                <div className="
                        bg-gray-50
                        rounded-lg
                        p-4
                        flex
                        justify-center
                        items-center
                        h-[360px]
                      ">

                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                </div>

              </div>

              {/* CERTIFICATE TITLE */}
              <h3 className="
                      text-center
                      mt-4
                      font-semibold
                      text-gray-800
                      text-lg
                      transition-colors
                      group-hover:text-green-700
                    ">
                {cert.name}
              </h3>

            </motion.a>
          );
        })}

      </div>

    </section>
  );
}