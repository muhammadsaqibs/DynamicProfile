import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

// Local images (replace with your real assets)
import singhImg from "@/asset/logo67.jpg";
import crImg from "@/asset/logo67.jpg";
import arfatImg from "@/asset/logo67.jpg";
import usmanImg from "@/asset/logo67.jpg";
import niazImg from "@/asset/logo67.jpg";

type Testimonial = {
  name: string;
  position: string;
  image: string;
  content: string;
  rating: number;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Tanveer Habib",
      position: "Senior Developer at TechCorp",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content:
        "Working with Sheraz and his brother Saqib this Summer was a brilliant experience. Both of them are dedicated towards their work.",
      rating: 5,
    },
    {
      name: "Arfat Muzammil",
      position: "Colleague at COMSATS",
      image: arfatImg,
      content:
        "Very cooperative but a little bit scared of being low graded for doing all this help 🙂",
      rating: 5,
    },
    {
      name: "Gulpreet Singh",
      position: "Project Manager at InnovateLab",
      image: singhImg,
      content:
        "Working with Sheraz on the AI Assistant project was incredible. His attention to detail and innovative approach exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Rao Hasnain Kamaal (CR)",
      position: "Colleague at COMSATS",
      image: crImg,
      content:
        "As a student nowadays, he has brilliant character and when he comes to building projects, it always matters!",
      rating: 5,
    },
    {
      name: "Ahmed Khan",
      position: "Lecturer at BZU Multan",
      image: niazImg,
      content:
        "Sheraz is an amazing collaborator. His passion for AI and web development inspires everyone around him. He's definitely going places!",
      rating: 5,
    },
    {
      name: "Usman Dogar",
      position: "Colleague at COMSATS",
      image: usmanImg,
      content:
        "Studying with you always felt like you genuinely wanted the other person to understand everything. Whatever you knew, you explained completely without expecting any benefit in return.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-sm text-accent uppercase tracking-widest mb-4">
            What others say
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-8">Testimonials.</h3>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          freeMode={{ enabled: true, momentum: false }}
          slidesPerView={1} // ✅ default 1 for mobile
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Laptop
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full flex">
                <div className="testimonial-card rounded-xl p-6 sm:p-8 bg-white/10 backdrop-blur-md shadow-md flex flex-col w-full min-h-[300px] sm:min-h-[350px]">
                  {/* Header */}
                  <div className="flex items-center mb-4 sm:mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-4 flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
