import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can you start a project?",
    answer:
      "We typically can begin new projects within 1-2 weeks of contract signing, depending on the scope and our current capacity. For urgent matters, we can often accommodate faster start times.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Strategic planning projects typically take 6-12 weeks, while larger transformation initiatives can span 6-18 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with companies of all sizes?",
    answer:
      "Yes, we work with organizations ranging from startups to Fortune 500 companies. Our approach is tailored to each client's size, industry, and specific needs.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience across multiple industries including technology, financial services, healthcare, manufacturing, and retail. Our consultants bring both cross-industry insights and sector-specific expertise.",
  },
  {
    question: "How do you ensure project success?",
    answer:
      "We use a proven methodology with clear milestones, regular check-ins, and measurable KPIs. Our collaborative approach ensures alignment with your team throughout the project lifecycle.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically work on a milestone-based payment structure with an initial deposit. Payment terms are flexible and can be customized based on project scope and client preferences.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer various post-project support options including implementation assistance, training programs, and ongoing advisory services to ensure sustainable results.",
  },
  {
    question: "Can you work remotely or do you require on-site presence?",
    answer:
      "We're flexible and can work both remotely and on-site based on your preferences and project requirements. Many of our projects use a hybrid approach for optimal effectiveness.",
  },
]

export function ContactFAQ() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our consulting services and process.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="font-heading font-semibold text-left text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Contact Our Team</Button>
        </div>
      </div>
    </section>
  )
}
