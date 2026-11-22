import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  position: string;
  image: string;
  content: string;
  rating: number;
};

export default function Testimonials() {
  const coreTestimonials: Testimonial[] = [
    {
      name: "Faiz Ahmed",
      position: "Owner, Goodway AMC",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content:
        "The corporate website delivered for our appliance maintenance service was exceptional. It's fast, responsive, and perfectly tailored to attract new clients. Highly recommended!",
      rating: 5,
    },
    {
      name: "Faiz Ahmed",
      position: "Client, Hafiz Clinic",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content:
        "Hafiz Clinic was delivered just as we needed. Patients can book appointments, use the portal, and order herbal products from one live website. It looks professional and is simple for our staff to manage.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark-950 overflow-hidden border-t border-primary-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Client Feedback
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our clients have to say about the projects we've delivered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coreTestimonials.map((testimonial, index) => (
            <div key={index} className="py-4">
              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-dark-800 to-dark-700 border border-primary-500/20 shadow-lg flex flex-col w-full min-h-[300px] sm:min-h-[320px]">
                <div className="flex items-center mb-4 sm:mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-500/50"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-primary-400">{testimonial.name}</h4>
                    <p className="text-sm font-medium text-cyan-500/80">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 flex-grow italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex gap-1 mt-auto">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
