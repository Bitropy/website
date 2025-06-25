import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function FlexibleEngagementModels() {
  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Flexible
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Engagement Models
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
            Choose the engagement model that fits your needs and budget
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto w-full">
          <Card className="bg-gray-900 border-gray-700 p-6 hover:border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Strategic Advisory</CardTitle>
              <CardDescription className="text-gray-300">
                Team-based consultation for early-stage guidance
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$2,500</span>
                <span className="text-gray-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
              >
                Get Started
              </Button>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Monthly strategy sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Technology roadmap</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Architecture reviews</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-purple-500 p-6 relative shadow-lg shadow-purple-500/20">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle className="text-2xl text-white">Technology Leadership</CardTitle>
              <CardDescription className="text-gray-300">
                Hands-on technology leadership from expert teams
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$8,500</span>
                <span className="text-gray-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open("https://calendly.com/darekd/30min", "_blank")}
              >
                Get Started
              </Button>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">20 hours per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Team leadership</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Technical implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Board meeting participation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 p-6 hover:border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Full Engagement</CardTitle>
              <CardDescription className="text-gray-300">Complete technology transformation</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">Custom</span>
                <span className="text-gray-400"> pricing</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => window.open("/contact", "_self")}
              >
                Contact Us
              </Button>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Full-time availability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Custom solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Dedicated team</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">24/7 support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Enterprise SLA</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 