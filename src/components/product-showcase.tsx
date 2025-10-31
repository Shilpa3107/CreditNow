import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bike, Car, Tractor, Smartphone, User, ArrowRight } from "lucide-react";

const loanProducts = [
  {
    id: "two-wheeler-loan",
    title: "Two Wheeler Loan",
    description: "Get on the road with our easy and affordable two wheeler loans.",
    icon: <Bike className="h-8 w-8 text-primary" />,
  },
  {
    id: "used-car-loan",
    title: "Used Car Loan",
    description: "Drive your dream car with our flexible used car loan options.",
    icon: <Car className="h-8 w-8 text-primary" />,
  },
  {
    id: "tractor-loan",
    title: "Tractor Loan",
    description: "Empower your farming with our specialized tractor loans.",
    icon: <Tractor className="h-8 w-8 text-primary" />,
  },
  {
    id: "personal-loan",
    title: "Personal Loan",
    description: "Fulfill your personal needs with our instant personal loans.",
    icon: <User className="h-8 w-8 text-primary" />,
  },
  {
    id: "consumer-durable-loan",
    title: "Consumer Durable Loan",
    description: "Upgrade your lifestyle with loans for electronics and appliances.",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
  },
];


export function ProductShowcase() {
  return (
    <section id="products" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Our Loan Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a diverse range of financing solutions tailored to meet your specific needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {loanProducts.map((product) => {
            const image = PlaceHolderImages.find((img) => img.id === product.id);
            return (
              <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                {image && (
                   <div className="relative h-48 w-full">
                     <Image
                       src={image.imageUrl}
                       alt={image.description}
                       data-ai-hint={image.imageHint}
                       fill
                       className="object-cover"
                     />
                   </div>
                )}
                <CardHeader className="flex-row items-start gap-4 space-y-0">
                  {product.icon}
                  <div className="flex-grow">
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription className="mt-1">{product.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="link" className="h-auto p-0 text-primary hover:text-primary/80">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
