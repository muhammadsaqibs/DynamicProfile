import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            Ready to collaborate on something amazing? Let's build the future together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.2, duration: 0.8 }
              }
            }}
          >
            {/* Email */}
            <motion.div className="flex items-center space-x-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                <Mail className="text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-400">Email</h3>
                <p className="text-gray-300">saqib.s09651100@gmail.com</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div className="flex items-center space-x-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                <Phone className="text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-400">Phone</h3>
                <p className="text-gray-300">+92 344 633 7107</p>
                <p className="text-gray-300">+92 336 558 9334</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div className="flex items-center space-x-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                <MapPin className="text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-400">Location</h3>
                <p className="text-gray-300">Multan, Punjab, Pakistan</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="pt-8" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h3 className="text-lg font-semibold text-primary-400 mb-4">Connect with me:</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/muhammad-saqib-ab4315291" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500/30 transition-colors border border-primary-500/30">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/saqib105official" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500/30 transition-colors border border-primary-500/30">
                  <Instagram size={24} />
                </a>
                <a href="https://github.com/muhammadsaqibs" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center hover:bg-primary-500/30 transition-colors border border-primary-500/30">
                  <Github size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-primary-500/10 to-cyan-400/10 p-1 rounded-2xl border border-primary-500/20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-dark-800 p-8 rounded-xl space-y-6">
              <div>
                <Label htmlFor="name" className="text-primary-400">Name</Label>
                <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required
                  className="mt-2 bg-dark-900 border-primary-500/30 focus:border-primary-400" />
              </div>

              <div>
                <Label htmlFor="email" className="text-primary-400">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required
                  className="mt-2 bg-dark-900 border-primary-500/30 focus:border-primary-400" />
              </div>

              <div>
                <Label htmlFor="subject" className="text-primary-400">Subject</Label>
                <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} required
                  className="mt-2 bg-dark-900 border-primary-500/30 focus:border-primary-400" />
              </div>

              <div>
                <Label htmlFor="message" className="text-primary-400">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5}
                  className="mt-2 bg-dark-900 border-primary-500/30 focus:border-primary-400 resize-none" />
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 py-3 font-semibold transition-all duration-300">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2" size={16} />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
