import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

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
      name: "Muhammad Umair Khan",
      position: "Owner, Chiropractic Billing Platform",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content:
        "Outstanding work on our medical billing platform. The glassmorphism UI and custom animations gave our business a premium feel that our US-based clients truly appreciate.",
      rating: 5,
    },
    {
      name: "Muhammad Amman",
      position: "Owner, Retail Management & POS System",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content:
        "The complete full-stack POS and inventory system completely transformed our store operations. Real-time stock tracking and automated billing have saved us countless hours.",
      rating: 5,
    },
  ];

  // Duplicate the array to ensure infinite scrolling works perfectly on desktop (since slidesPerView is 3)
  const testimonials = [...coreTestimonials, ...coreTestimonials];

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

        {/* Swiper Carousel */}
        <div className="[&_.swiper-wrapper]:!ease-linear">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            freeMode={{ enabled: true, momentum: false }}
            slidesPerView={1}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="h-full w-full flex py-4">
                  <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-dark-800 to-dark-700 border border-primary-500/20 shadow-lg flex flex-col w-full min-h-[300px] sm:min-h-[320px] transition-transform hover:scale-105 duration-300">
                    {/* Header */}
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

                    {/* Content */}
                    <p className="text-gray-300 mb-6 flex-grow italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
