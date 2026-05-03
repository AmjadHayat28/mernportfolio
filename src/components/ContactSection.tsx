import { Mail, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:amjad@example.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact">
      <h2 className="text-2xl font-heading font-medium text-foreground mb-8">Get In Touch</h2>
      <div className="bg-card border border-border rounded-lg p-6">
        <p className="text-sm text-muted-foreground mb-6">
          Interested in working together? Send me a message and I'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2.5 text-sm bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-heading font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
